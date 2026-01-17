"use client";
import React from 'react';

export default function Advantage() {
  return (
    <section className="py-24 px-6 bg-[#0F1115]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-left">
            <h2 className="text-spinecho-accent font-mono text-sm uppercase tracking-[0.2em] mb-4">Technical Differentiation</h2>
            <h3 className="text-3xl lg:text-5xl font-bold text-white mb-8 leading-tight">Shift from legacy correlations <br /> to molecular truth.</h3>
            <p className="text-spinecho-slate leading-relaxed mb-10">Instead of using pressure drops to infer flow, our NMR technology senses the nuclei themselves. We quantify oil, gas, and water by molecular signature.</p>
          </div>
          <div className="glass-panel p-8 relative overflow-hidden text-left">
            <div className="mb-6 pb-6 border-b border-white/5"><div className="flex justify-between items-end mb-4"><span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Legacy Inference Data</span><span className="text-[10px] text-red-400 font-mono uppercase">High Uncertainty</span></div><div className="h-16 flex items-end gap-1">{[...Array(20)].map((_, i) => (<div key={i} className="flex-1 bg-red-400/20" style={{ height: `${Math.random() * 80 + 20}%` }} />))}</div></div>
            <div className="mt-8 pt-6 border-t border-white/5 text-left"><p className="text-[10px] font-mono text-spinecho-slate uppercase tracking-widest italic">Live phase characterization {"//"} Frequency 10Hz</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}