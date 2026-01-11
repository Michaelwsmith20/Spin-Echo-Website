import React from 'react';

export function MasterLogo({ scale = 1 }: { scale?: number }) {
  // THE FIX: Changed from Signal Blue to Bright Science Cyan
  const accent = "#06B6D4"; 
  const white = "#FFFFFF";
  
  return (
    <div className="flex items-center gap-6" style={{ transform: `scale(${scale})`, transformOrigin: 'left' }}>
      {/* THE ICON: Variation 4 (Subtle Arc) */}
      <svg width="80" height="80" viewBox="0 0 80 80" className="flex-shrink-0">
        <path 
          d="M72 40c0-17.673-14.327-32-32-32S8 22.327 8 40" 
          stroke={white} 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeOpacity="0.15" 
        />
        <path 
          d="M8 40c0 17.673 14.327 32 32 32s32-14.327 32-32" 
          stroke={accent} // Now Cyan
          strokeWidth="2.5" 
          strokeLinecap="round" 
        />
        <path 
          d="M20 40h6l4-10 6 20 4-10h18" 
          stroke={white} 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
      </svg>

      {/* THE TYPOGRAPHY BLOCK */}
      <div className="inline-block">
        <div className="flex items-baseline gap-4 mb-1">
          {/* SPIN is now in the new Cyan brand color */}
          <span className="text-5xl font-black italic tracking-tighter" style={{ color: accent }}>SPIN</span>
          <span className="text-5xl font-light tracking-tighter text-white">ECHO</span>
        </div>
        
        {/* Justified METROLOGY SYSTEMS */}
        <div className="flex justify-between w-full px-0.5">
          {"METROLOGY SYSTEMS".split("").map((char, i) => (
            <span key={i} className="text-[11px] font-mono text-spinecho-slate font-medium uppercase leading-none">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}