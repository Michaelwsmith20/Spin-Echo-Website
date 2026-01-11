"use client";

import React, { useState } from 'react';

const slides = [
  {
    title: "Molecular Alignment",
    desc: "The process begins as production fluids enter the magnetic bore. A static field aligns hydrogen nuclei, creating a stable physical reference across gas, oil, and water before any measurement occurs.",
    image: "https://i.postimg.cc/KzwgKKPk/step01-magnetic-alignment.jpg"
  },
  {
    title: "RF Excitation",
    desc: "A precisely timed radio frequency pulse is emitted. This momentarily tips the aligned nuclei out of their stable state to prepare them for resonance sensing across the flow stream.",
    image: "https://i.postimg.cc/8CyvSXsK/step02-rf-excitation.jpg"
  },
  {
    title: "Resonance Decay",
    desc: "As nuclei return to their stable state, they emit a weak radio signal. The rate of this decay is unique to the molecular structure and phase behavior of the fluid.",
    image: "https://i.postimg.cc/63yv5VGC/step03-resonance-decay.jpg"
  },
  {
    title: "Phase Identification",
    desc: "Proprietary algorithms analyze the resulting decay signatures. This identifies the specific volume of oil, gas, and water based on fundamental physics, not inferred correlations.",
    image: "https://i.postimg.cc/d0WCYND5/step04-phase-identification.jpg"
  },
  {
    title: "Operational Data",
    desc: "High frequency measurement data is streamed directly to your control system. Operators receive live, phase resolved insights to optimize production and protect downstream assets.",
    image: "https://i.postimg.cc/zfdhr23d/step05-operational-data.jpg"
  }
];

export default function ExplainerModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [current, setCurrent] = useState(0);

  if (!isOpen) return null;

  const next = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prev = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-10">
      {/* Close Button */}
      <button 
        onClick={onClose} 
        className="absolute top-6 right-6 lg:top-10 lg:right-10 text-spinecho-slate hover:text-white font-mono text-[10px] tracking-widest uppercase z-50 bg-white/5 px-4 py-2 rounded border border-white/10 transition-all"
      >
        Exit Briefing [x]
      </button>

      <div className="max-w-6xl w-full relative">
        {/* Navigation Arrows */}
        <button 
          onClick={prev} 
          className="absolute -left-4 lg:-left-20 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 text-white transition-all z-50 bg-black/40"
        >
          ←
        </button>
        <button 
          onClick={next} 
          className="absolute -right-4 lg:-right-20 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 text-white transition-all z-50 bg-black/40"
        >
          →
        </button>

        {/* Content Container */}
        <div className="glass-panel overflow-hidden bg-[#0A0C10] border-white/10 shadow-2xl min-h-[500px] flex flex-col lg:flex-row">
          
          {/* Visual Side - Now optimized for contain scaling */}
          <div className="w-full lg:w-3/5 bg-black relative flex items-center justify-center p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-white/5">
            <img 
              key={slides[current].image}
              src={slides[current].image} 
              alt={slides[current].title}
              className="max-w-full max-h-full object-contain animate-in fade-in zoom-in-95 duration-700 select-none"
            />
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-2/5 p-10 lg:p-16 flex flex-col justify-center text-left bg-gradient-to-br from-white/[0.03] to-transparent">
            <div className="mb-6">
              <span className="text-spinecho-accent font-mono text-[10px] uppercase tracking-[0.3em] block mb-2">
                Process Stage 0{current + 1}
              </span>
              <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight">
                {slides[current].title}
              </h3>
            </div>
            
            <p className="text-spinecho-slate text-lg leading-relaxed mb-12">
              {slides[current].desc}
            </p>

            {/* Progress Bar Indicators */}
            <div className="flex gap-3">
              {slides.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 transition-all duration-500 rounded-full ${i === current ? 'w-12 bg-spinecho-accent' : 'w-4 bg-white/10 hover:bg-white/20'}`} 
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}