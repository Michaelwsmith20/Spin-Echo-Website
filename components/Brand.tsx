"use client";

import React from 'react';
import { motion } from 'framer-motion';

export function MasterLogo({ scale = 1 }: { scale?: number }) {
  const cyan = "#06B6D4";   // Bright Science Cyan
  const teal = "#14B8A6";   // Resonance Teal
  const white = "#FFFFFF";
  
  return (
    <div className="flex items-center gap-6" style={{ transform: `scale(${scale})`, transformOrigin: 'left' }}>
      {/* THE DYNAMIC ICON */}
      <svg width="80" height="80" viewBox="0 0 80 80" className="flex-shrink-0 overflow-visible">
        <defs>
          {/* Multi color gradient for the signal pulse */}
          <linearGradient id="signalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={cyan} />
            <stop offset="100%" stopColor={teal} />
          </linearGradient>
          
          {/* Filter for the glow effect */}
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Circle: Top Arc (Faded) */}
        <path 
          d="M72 40c0-17.673-14.327-32-32-32S8 22.327 8 40" 
          stroke={white} 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeOpacity="0.15" 
        />

        {/* Outer Circle: Bottom Arc (Cyan) */}
        <path 
          d="M8 40c0 17.673 14.327 32 32 32s32-14.327 32-32" 
          stroke={cyan} 
          strokeWidth="2.5" 
          strokeLinecap="round" 
        />

        {/* THE ACTIVE PULSE WAVE */}
        <motion.path 
          d="M20 40h6l4-10 6 20 4-10h18" 
          stroke="url(#signalGradient)" 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          filter="url(#glow)"
          animate={{
            opacity: [0.7, 1, 0.7],
            strokeWidth: ["3px", "3.5px", "3px"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Heartbeat Indicator Dot */}
        <motion.circle 
          cx="60" cy="40" r="1.5" 
          fill={teal}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>

      {/* THE TYPOGRAPHY BLOCK */}
      <div className="inline-block">
        <div className="flex items-baseline gap-4 mb-1">
          <span className="text-5xl font-black italic tracking-tighter" style={{ color: cyan }}>SPIN</span>
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