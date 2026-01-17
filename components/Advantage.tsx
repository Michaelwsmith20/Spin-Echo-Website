"use client";
import React from 'react';

export default function Advantage() {
  return (
    <section className="py-24 px-6 bg-[#0F1115]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-left">
          
          <div>
            <h2 className="text-spinecho-accent font-mono text-sm uppercase tracking-[0.2em] mb-4 font-bold">Technical Differentiation</h2>
            <h3 className="text-3xl lg:text-5xl font-bold text-white mb-8 leading-tight tracking-tight uppercase">Shift from legacy correlations <br /> to molecular truth.</h3>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-spinecho-accent/10 flex items-center justify-center border border-spinecho-accent/20 text-spinecho-accent font-bold font-mono">01</div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Direct Phase Identification</h4>
                  <p className="text-spinecho-slate leading-relaxed">Instead of using pressure drops to infer flow, our NMR technology senses the hydrogen atoms in each phase. We quantify oil, gas, and water by their molecular signature.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-spinecho-accent/10 flex items-center justify-center border border-spinecho-accent/20 text-spinecho-accent font-bold font-mono">02</div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Continuous Signal Validation</h4>
                  <p className="text-spinecho-slate leading-relaxed">The NMR resonance signal provides a built in quality check. If the fluid regime changes, the signal characterizes the change immediately without needing manual calibration.</p>
                </div>
              </div>
            </div>
          </div>

          {/* RESTORED COMPARISON CHART */}
          <div className="glass-panel p-8 lg:p-12 relative overflow-hidden bg-black/40 border-white/5">
            <div className="mb-10 pb-10 border-b border-white/5">
              <div className="flex justify-between items-end mb-6 font-mono text-[10px] uppercase tracking-widest">
                <span className="text-white/40">Legacy Inference Data</span>
                <span className="text-red-400 font-bold">High Uncertainty</span>
              </div>
              <div className="h-20 flex items-end gap-1.5">
                {[...Array(24)].map((_, i) => (
                  <div key={i} className="flex-1 bg-red-400/20" style={{ height: `${Math.random() * 80 + 20}%` }} />
                ))}
              </div>
            </div>

            <div>
              <div className="flex justify-between items-end mb-6 font-mono text-[10px] uppercase tracking-widest">
                <span className="text-spinecho-accent">Spin Echo Resolution</span>
                <span className="text-spinecho-accent font-bold uppercase">Continuous Truth</span>
              </div>
              <div className="h-28 flex items-end gap-1.5 relative">
                <div className="absolute inset-0 bg-spinecho-accent/5 blur-3xl rounded-full" />
                {[...Array(36)].map((_, i) => (
                  <div 
                    key={i} 
                    className="flex-1 bg-spinecho-accent/60 transition-all duration-1000" 
                    style={{ height: `${45 + Math.sin(i * 0.5) * 20 + Math.random() * 5}%` }} 
                  />
                ))}
              </div>
            </div>
            
            <div className="mt-10 pt-6 border-t border-white/5 text-left">
              <p className="text-[10px] font-mono text-spinecho-slate uppercase tracking-widest italic">
                Live phase characterization {"//"} Frequency 10Hz
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}