"use client";
import React from 'react';
import { useBooking } from '../context/BookingContext';

export default function ProductionReady() {
  const { openModal } = useBooking();
  const points = ["Verified hardware performance", "Live phase resolved data streams", "Integration ready for SCADA and IIoT"];

  return (
    <section id="ready" className="py-24 px-6 bg-spinecho-dark overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto text-left">
        <div className="glass-panel p-8 md:p-12 lg:p-20 relative border-spinecho-accent/20 bg-gradient-to-br from-spinecho-accent/5 to-transparent">
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-spinecho-accent/10 rounded-full blur-[100px]" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="z-10">
              <div className="inline-block px-3 py-1 mb-8 border border-spinecho-accent/30 bg-spinecho-accent/5 rounded-full">
                <span className="text-xs font-mono text-spinecho-accent uppercase tracking-widest">Deployment Status: Pilot Ready</span>
              </div>
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight tracking-tight">Proof of concept closed. <br />Ready for the field.</h3>
              <p className="text-spinecho-slate text-lg mb-12 max-w-lg leading-relaxed">We are currently identifying partners for pilot deployments in high GVF environments. Move from inferred estimates to physics based truth.</p>
              <div className="space-y-6">
                {points.map((text, i) => (
                  <div key={i} className="flex items-start gap-4 text-white font-medium text-sm">
                    <div className="flex-shrink-0 w-5 h-5 mt-0.5 text-spinecho-accent">
                      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative group z-10">
              <div className="relative glass-panel overflow-hidden border-white/10 shadow-2xl rounded-2xl bg-white">
                <img src="https://i.postimg.cc/wv6J3Gt8/realmeter.png" alt="Spin Echo Field Unit" className="w-full h-auto transition-all duration-700 transform group-hover:scale-105" />
                <div className="absolute bottom-0 left-0 w-full p-4 bg-black/80 backdrop-blur-md border-t border-white/10">
                  <p className="text-[10px] font-mono text-spinecho-accent uppercase tracking-widest">Production Unit // 2026 Configuration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24 text-center">
          <h4 className="text-2xl font-bold text-white mb-8 tracking-tight uppercase tracking-[0.1em]">Ready to modernize your measurement stack?</h4>
          <button onClick={openModal} className="px-12 py-5 bg-spinecho-accent text-[#050608] font-black uppercase text-xs tracking-[0.3em] rounded-xl hover:bg-white transition-all shadow-xl shadow-spinecho-accent/20">Book a Call</button>
        </div>
      </div>
    </section>
  );
}