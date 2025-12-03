import React from 'react';
import { ProcessPoint } from '../types';

interface InfographicWheelProps {
  items: ProcessPoint[];
  selectedId: number | null;
  onSelect: (id: number) => void;
}

const InfographicWheel: React.FC<InfographicWheelProps> = ({ items, selectedId, onSelect }) => {
  const radius = 160; // Radius of the circle in pixels
  const centerSize = 80; // Size of center element
  
  return (
    <div className="relative w-full h-[400px] md:h-[600px] flex items-center justify-center overflow-hidden">
      
      {/* Connecting Lines (Decorative) */}
      <svg className="absolute w-full h-full pointer-events-none opacity-20 animate-spin-slow" style={{ animationDuration: '60s' }}>
        <circle cx="50%" cy="50%" r={radius} stroke="currentColor" strokeWidth="1" fill="none" className="text-slate-400" strokeDasharray="10 10" />
        <circle cx="50%" cy="50%" r={radius * 0.7} stroke="currentColor" strokeWidth="1" fill="none" className="text-slate-600" />
      </svg>

      {/* Center Hub */}
      <div className="absolute z-10 flex flex-col items-center justify-center text-center p-4 bg-slate-800 rounded-full border-4 border-slate-700 shadow-[0_0_30px_rgba(0,0,0,0.5)] w-40 h-40 md:w-56 md:h-56">
        <h2 className="text-xs md:text-sm font-bold uppercase tracking-widest text-slate-400 mb-1">Framework</h2>
        <h1 className="text-sm md:text-xl font-bold text-white leading-tight">Automation <br/>&<br/> Compliance</h1>
      </div>

      {/* Nodes */}
      {items.map((item, index) => {
        const totalItems = items.length;
        // Calculate position on the circle
        // -90 degrees to start at the top
        const angle = (index / totalItems) * 2 * Math.PI - (Math.PI / 2); 
        
        // Responsive radius adjustment could be handled via CSS transforms or JS media query checks
        // For simplicity, we assume a base radius and scale with CSS
        
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        const isSelected = selectedId === item.id;

        return (
          <button
            key={item.id}
            onClick={() => onSelect(item.id)}
            className={`
              absolute flex items-center justify-center rounded-full shadow-lg transition-all duration-300 z-20
              ${isSelected ? 'scale-125 ring-4 ring-white ring-opacity-50 z-30' : 'hover:scale-110 hover:brightness-110'}
              ${item.color}
            `}
            style={{
              width: '64px',
              height: '64px',
              // Use CSS transform to position relative to center
              transform: `translate(${x}px, ${y}px)`,
            }}
            aria-label={item.title}
          >
            {/* Number Badge */}
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-white text-slate-900 rounded-full flex items-center justify-center text-sm font-bold shadow-md ring-2 ring-slate-900 z-10">
              {item.id}
            </div>

            <div className="text-white">
              {item.icon}
            </div>
            
            {/* Label (Visible on hover or selection) */}
            <div 
              className={`
                absolute top-full mt-2 w-32 text-center text-xs font-semibold bg-slate-900/90 text-white p-1.5 rounded pointer-events-none transition-opacity duration-300
                ${isSelected ? 'opacity-100' : 'opacity-0 md:group-hover:opacity-100'}
              `}
              style={{ left: '50%', transform: 'translateX(-50%)' }}
            >
              <span className="text-slate-400 mr-1">{item.id}.</span>{item.title}
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default InfographicWheel;