import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { ProcessPoint, AIRequestStatus } from '../types';
import { generateInsight } from '../services/geminiService';
import { Loader2, Sparkles, ChevronRight } from 'lucide-react';

interface DetailPanelProps {
  item: ProcessPoint | null;
}

const DetailPanel: React.FC<DetailPanelProps> = ({ item }) => {
  const [aiStatus, setAiStatus] = useState<AIRequestStatus>(AIRequestStatus.IDLE);
  const [aiContent, setAiContent] = useState<string>('');

  // Reset AI state when item changes
  useEffect(() => {
    setAiStatus(AIRequestStatus.IDLE);
    setAiContent('');
  }, [item]);

  const handleGenerateInsight = async () => {
    if (!item) return;

    setAiStatus(AIRequestStatus.LOADING);
    const content = await generateInsight(item.title, item.details);
    setAiContent(content);
    setAiStatus(AIRequestStatus.SUCCESS);
  };

  if (!item) {
    return (
      <div className="h-full flex flex-col items-center justify-center p-8 text-slate-500 bg-slate-800/50 rounded-2xl border border-slate-700/50">
        <Sparkles size={48} className="mb-4 opacity-50" />
        <p className="text-lg text-center">Select a numbered node from the diagram to view details and generate AI strategies.</p>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col bg-slate-800 rounded-2xl shadow-2xl border border-slate-700 overflow-hidden">
      {/* Header */}
      <div className={`p-6 ${item.color} text-white`}>
        <div className="flex items-center gap-3 mb-2">
            <div className="relative p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                {item.icon}
                <div className="absolute -top-2 -right-2 w-5 h-5 bg-white text-slate-900 rounded-full flex items-center justify-center text-xs font-bold shadow-md border border-slate-200">
                    {item.id}
                </div>
            </div>
            <h2 className="text-2xl font-bold">{item.title}</h2>
        </div>
        <p className="text-white/90 text-sm md:text-base">{item.description}</p>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-8">
        
        {/* Core Details Section */}
        <section>
          <h3 className="text-sm uppercase tracking-wider text-slate-400 font-semibold mb-4 border-b border-slate-700 pb-2">
            Key Objectives
          </h3>
          <ul className="space-y-3">
            {item.details.map((detail, idx) => (
              <li key={idx} className="flex items-start gap-3 text-slate-300">
                <ChevronRight className="mt-1 flex-shrink-0 text-slate-500" size={16} />
                <span className="leading-relaxed">{detail}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* AI Insight Section */}
        <section className="bg-slate-900/50 rounded-xl p-5 border border-slate-700/50">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm uppercase tracking-wider text-indigo-400 font-semibold flex items-center gap-2">
              <Sparkles size={16} />
              AI Strategic Insight
            </h3>
            {aiStatus === AIRequestStatus.IDLE && (
              <button 
                onClick={handleGenerateInsight}
                className="text-xs bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-1.5 rounded-full transition-colors flex items-center gap-1.5"
              >
                Generate Report
              </button>
            )}
          </div>

          <div className="min-h-[100px] text-sm text-slate-300 leading-relaxed">
            {aiStatus === AIRequestStatus.IDLE && (
                <p className="italic text-slate-500">
                    Click "Generate Report" to ask Gemini for a strategic deep-dive on this topic.
                </p>
            )}
            
            {aiStatus === AIRequestStatus.LOADING && (
                <div className="flex flex-col items-center justify-center py-6 text-slate-400">
                    <Loader2 className="animate-spin mb-2" size={24} />
                    <p>Consulting Gemini...</p>
                </div>
            )}

            {aiStatus === AIRequestStatus.SUCCESS && (
               <div className="prose prose-invert prose-sm max-w-none">
                   <ReactMarkdown>{aiContent}</ReactMarkdown>
               </div>
            )}
             {aiStatus === AIRequestStatus.ERROR && (
               <p className="text-red-400">An error occurred while fetching insights.</p>
            )}
          </div>
        </section>

      </div>
    </div>
  );
};

export default DetailPanel;