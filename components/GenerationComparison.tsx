"use client";

import React, { useState } from 'react';
import EvolutionModal from './EvolutionModal';

export default function GenerationComparison() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-32 px-6 bg-[#050608] border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-spinecho-accent font-mono text-sm uppercase tracking-[0.2em] mb-6">Technical Evolution</h2>
        <h3 className="text-3xl lg:text-5xl font-bold text-white mb-8 tracking-tight">
          How Spin Echo builds on <br /> proven foundations.
        </h3>
        <p className="text-spinecho-slate text-lg leading-relaxed mb-12">
          The Krohne M Phase 5000 provided a valuable reference point for NMR in production. 
          Spin Echo architecture reflects lessons learned from these first generation deployments, 
          eliminating the mechanical and calibration dependencies of the past.
        </p>
        
        <button 
          onClick={() => setIsOpen(true)}
          className="px-10 py-5 bg-spinecho-accent text-white font-bold rounded-xl shadow-xl shadow-spinecho-accent/20 hover:bg-blue-600 transition-all uppercase tracking-widest text-sm"
        >
          See The Technological Evolution
        </button>
      </div>

      <EvolutionModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
}