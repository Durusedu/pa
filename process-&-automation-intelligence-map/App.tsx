import React, { useState } from 'react';
import { PROCESS_POINTS } from './constants';
import InfographicWheel from './components/InfographicWheel';
import DetailPanel from './components/DetailPanel';

const App: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedItem = selectedId ? PROCESS_POINTS.find(p => p.id === selectedId) || null : null;

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">
      {/* Header */}
      <header className="p-6 md:px-12 border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
                <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
                Process Automation Intelligence
                </h1>
                <p className="text-slate-400 text-sm mt-1">
                Strategic roadmap for ERP modernization, compliance, and AI adoption.
                </p>
            </div>
            <div className="hidden md:block text-right">
                <div className="text-xs text-slate-500 uppercase tracking-widest">Powered by</div>
                <div className="flex items-center gap-2 justify-end text-slate-300 font-medium">
                    <span>Google Gemini 2.5</span>
                </div>
            </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full p-4 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Visual Infographic (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center min-h-[500px]">
           <div className="w-full max-w-lg lg:max-w-xl relative">
              <div className="absolute inset-0 bg-blue-500/5 rounded-full blur-3xl pointer-events-none transform scale-150" />
              <InfographicWheel 
                items={PROCESS_POINTS} 
                selectedId={selectedId} 
                onSelect={setSelectedId} 
              />
           </div>
           
           <div className="mt-8 text-center max-w-md mx-auto">
               <p className="text-slate-500 text-sm">
                   Interact with the nodes above to explore the implementation pillars.
               </p>
           </div>
        </div>

        {/* Right Column: Details Panel (5 cols) */}
        <div className="lg:col-span-5 w-full h-full min-h-[500px] lg:h-[calc(100vh-140px)] lg:sticky lg:top-24">
            <DetailPanel item={selectedItem} />
        </div>

      </main>
    </div>
  );
};

export default App;