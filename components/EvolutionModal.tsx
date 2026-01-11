"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, ChevronLeft, ChevronRight, X } from 'lucide-react';

const comparisons = [
  {
    topic: "Magnetic Architecture",
    legacy: "Nested Halbach magnetic architecture where field uniformity relied on mechanical alignment. Introduced sensitivity to vibration and thermal cycling over time.",
    se: "Fully static magnetic architecture with no mechanically adjustable components. Field uniformity is achieved by design and verified digitally.",
    impact: "Eliminates long term drift and improves robustness in harsh production environments."
  },
  {
    topic: "Calibration Philosophy",
    legacy: "Calibration was closely coupled to the physical magnetic configuration. Mechanical or magnetic changes often necessitated periodic recalibration.",
    se: "Designed around digital calibration where parameters are managed in software rather than through mechanical intervention.",
    impact: "Reduced need for field recalibration and lower operating expenditure."
  },
  {
    topic: "Measurement Volume",
    legacy: "Large axial measurement volume which averaged flow behavior over spatial and temporal scales. Reduced responsiveness during rapid flow changes.",
    se: "Significantly shorter axial reference volume enabling higher temporal resolution and faster response to changing flow conditions.",
    impact: "Superior performance in wet gas where transient behavior and condensate formation are common."
  },
  {
    topic: "Maintenance Profile",
    legacy: "Mechanical complexity within the magnetic assembly increased sensitivity to wear and environmental factors over long operating periods.",
    se: "Sensing architecture contains no moving parts and operates as a non intrusive full bore system.",
    impact: "Minimised routine maintenance and maximised mean time between intervention."
  }
];

export default function EvolutionModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [current, setCurrent] = useState(0);

  if (!isOpen) return null;

  const next = () => setCurrent((prev) => (prev === comparisons.length - 1 ? 0 : prev + 1));
  const prev = () => setCurrent((prev) => (prev === 0 ? comparisons.length - 1 : prev - 1));

  return (
    <div className="fixed inset-0 z-[130] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-6">
      {/* Close Button */}
      <button 
        onClick={onClose} 
        className="absolute top-6 right-6 lg:top-10 lg:right-10 text-spinecho-slate hover:text-white font-mono text-[10px] tracking-widest uppercase z-50 bg-white/5 px-4 py-2 rounded border border-white/10 flex items-center gap-2 transition-all"
      >
        Exit Briefing <X size={14} />
      </button>

      <div className="max-w-5xl w-full relative">
        {/* Navigation Arrows */}
        <button 
          onClick={prev} 
          className="absolute -left-4 lg:-left-20 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 text-white z-50 bg-black/40 transition-all"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={next} 
          className="absolute -right-4 lg:-right-20 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 text-white z-50 bg-black/40 transition-all"
        >
          <ChevronRight size={24} />
        </button>

        {/* Content Card */}
        <div className="glass-panel overflow-hidden bg-[#0A0C10] border-white/10 shadow-2xl min-h-[500px] flex flex-col p-8 lg:p-16">
          <div className="mb-12 text-left">
            <span className="text-spinecho-accent font-mono text-[10px] uppercase tracking-[0.4em] block mb-4">
              Technological Evolution // {comparisons[current].topic}
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white uppercase tracking-tight">
              Second Generation NMR
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 text-left">
            {/* Legacy Side */}
            <div className="p-8 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest block mb-4">First Generation Approach</span>
              <p className="text-spinecho-slate text-sm leading-relaxed italic">
                {comparisons[current].legacy}
              </p>
            </div>

            {/* Spin Echo Side */}
            <div className="p-8 rounded-xl bg-spinecho-accent/5 border border-spinecho-accent/20 relative overflow-hidden">
              {/* This was the missing icon component */}
              <div className="absolute top-4 right-4 text-spinecho-accent opacity-20">
                <Box size={40} />
              </div>
              <span className="text-[9px] font-mono text-spinecho-accent uppercase tracking-widest block mb-4">Spin Echo Architecture</span>
              <p className="text-white text-base lg:text-lg leading-relaxed font-medium">
                {comparisons[current].se}
              </p>
            </div>
          </div>

          <div className="mt-auto pt-8 border-t border-white/5 text-left">
            <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4">
              <span className="text-[10px] font-mono text-spinecho-accent uppercase tracking-widest font-bold">
                Operational Implication:
              </span>
              <p className="text-white text-sm italic">
                {comparisons[current].impact}
              </p>
            </div>
          </div>

          {/* Progress indicators */}
          <div className="flex gap-2 mt-12">
            {comparisons.map((_, i) => (
              <button 
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1 transition-all duration-500 rounded-full ${i === current ? 'w-12 bg-spinecho-accent' : 'w-4 bg-white/10'}`} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}