"use client";

import React, { useState } from 'react';
import PhysicsModal from './PhysicsModal';

export default function Hero() {
  const [isPhysicsOpen, setIsPhysicsOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center pt-40 lg:pt-48 px-6 overflow-hidden bg-spinecho-dark">
        <div className="absolute top-[20%] right-[-5%] w-[600px] h-[600px] bg-spinecho-accent/10 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-5 z-10 text-left">
              <div className="relative inline-block mb-8 group">
                <div className="absolute -inset-1 bg-spinecho-accent/40 rounded-full blur opacity-75 animate-pulse"></div>
                <div className="relative px-4 py-1.5 border border-spinecho-accent/50 bg-spinecho-dark rounded-full">
                  <span className="text-xs font-mono text-spinecho-accent uppercase tracking-[0.2em]">Field Pilot Ready</span>
                </div>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-[1.05]">
                Evolution in <br />
                <span className="text-spinecho-accent">flow measurement.</span>
              </h1>
              
              <p className="text-lg lg:text-xl text-spinecho-slate mb-12 max-w-md leading-relaxed">
                High fidelity wet gas and multi phase fluid characterisation. 
                Physics based NMR metrology installed for continuous production monitoring.
              </p>
            </div>

            <div className="lg:col-span-7 relative group">
              {/* Repositioned Technical Action Button */}
              <div className="absolute top-0 right-0 z-20 -mt-8 lg:-mr-4">
                <button 
                  onClick={() => setIsPhysicsOpen(true)}
                  className="px-8 py-4 bg-spinecho-accent text-[#050608] font-black rounded-xl shadow-2xl shadow-spinecho-accent/30 hover:scale-105 transition-all uppercase tracking-widest text-xs flex items-center gap-3 group/btn"
                >
                  See The Physics
                  <div className="w-5 h-5 bg-black/10 rounded-full flex items-center justify-center group-hover/btn:translate-x-1 transition-transform">
                    <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3 stroke-black" strokeWidth="3"><path d="M5 12h14m-4-4l4 4-4 4"/></svg>
                  </div>
                </button>
              </div>

              <div className="relative z-10">
                <img 
                  src="https://i.postimg.cc/pXLwv0TK/meter.png" 
                  alt="Non intrusive multiphase flow meter using nuclear magnetic resonance for high GVF environments" 
                  className="w-full h-auto drop-shadow-[0_35px_60px_rgba(0,0,0,0.5)] transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute -bottom-10 left-0 w-full h-20 bg-gradient-to-t from-spinecho-dark to-transparent opacity-60" />
              </div>
            </div>

          </div>
        </div>
      </section>

      <PhysicsModal isOpen={isPhysicsOpen} onClose={() => setIsPhysicsOpen(false)} />
    </>
  );
}