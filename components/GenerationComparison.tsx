"use client";

import React, { useState } from 'react';
import EvolutionModal from './EvolutionModal';

export default function GenerationComparison() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-32 px-6 bg-[#050608] border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-spinecho-accent font-mono text-sm uppercase tracking-[0.2em] mb-6 font-bold text-center">Technical Evolution</h2>
        <h3 className="text-3xl lg:text-5xl font-bold text-white mb-8 tracking-tight uppercase text-center leading-tight">Evolution beyond first <br /> generation NMR architectures.</h3>
        <p className="text-spinecho-slate text-lg leading-relaxed mb-12 italic text-center max-w-3xl mx-auto">Spin Echo builds on the established physics of NMR while reflecting lessons learned from first generation field deployments. Our architecture eliminates the mechanical and calibration dependencies that historically constrained long term performance.</p>
        <button onClick={() => setIsOpen(true)} className="px-10 py-5 bg-spinecho-accent text-[#050608] font-black rounded-xl shadow-xl shadow-spinecho-accent/30 hover:bg-white transition-all uppercase tracking-widest text-sm">See The Technological Evolution</button>
      </div>
      <EvolutionModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
}