"use client";
import React from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FlowmeterDashboard from "../../components/Dashboard";
import { useBooking } from '../../context/BookingContext';

export default function DataPage() {
  const { openModal } = useBooking();
  const capabilities = [
    { title: "Stable Optimization Inputs", description: "Consistent phase resolved data reduces noise and drift in optimization models." },
    { title: "Improved Event Detection", description: "High signal availability during transient and slugging flow enables earlier identification." },
    { title: "Better Model Calibration", description: "Direct measurement of phase behavior provides high quality inputs for reservoir models." },
    { title: "Increased Automation Confidence", description: "Stable measurement data supports closed loop control strategies." }
  ];

  return (
    <main className="bg-spinecho-dark min-h-screen text-white">
      <Navbar />
      <section className="pt-48 pb-20 px-6 bg-gradient-to-b from-spinecho-accent/5 to-transparent text-left">
        <div className="max-w-7xl mx-auto">
          <div className="inline-block px-3 py-1 mb-8 border border-spinecho-accent/30 bg-spinecho-accent/5 rounded-full">
            <span className="text-xs font-mono text-spinecho-accent uppercase tracking-[0.2em]">Metrology Backbone</span>
          </div>
          <h1 className="text-5xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-[1.05]">The Measurement Layer for <br /><span className="text-spinecho-accent">Modern Wellhead Optimization.</span></h1>
          <p className="text-spinecho-accent font-mono text-sm uppercase tracking-[0.3em] mb-8 italic">Better decisions start with better measurement.</p>
          <p className="text-xl lg:text-2xl text-spinecho-slate max-w-4xl leading-relaxed text-left">The Spin Echo flow meter produces high frequency, phase resolved measurement data directly at the wellhead.</p>
        </div>
      </section>
      <section className="pb-24 px-6 text-left">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-white font-bold text-3xl tracking-tight mb-16">What High Fidelity Measurement Enables</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((item, index) => (
              <div key={index} className="glass-panel p-8 border-white/5 bg-[#0F1115]">
                <div className="text-spinecho-accent font-mono text-xs mb-6">0{index + 1} {"//"}</div>
                <h3 className="text-lg font-bold text-white mb-4 leading-tight">{item.title}</h3>
                <p className="text-spinecho-slate text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 px-6 bg-[#050608] border-t border-white/5 text-left">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-white font-bold text-2xl mb-4">Live Interface Preview</h3>
          <p className="text-spinecho-slate text-sm max-w-2xl mb-12 italic">The dashboard below illustrates how Spin Echo data is exposed in real time for monitoring and diagnostics.</p>
          <div className="rounded-3xl border border-white/10 overflow-hidden shadow-2xl bg-black/20"><FlowmeterDashboard /></div>
        </div>
      </section>
      <section className="py-32 px-6 bg-spinecho-dark border-t border-white/5 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8 tracking-tight uppercase">Building Wellhead Optimization Software?</h2>
          <p className="text-lg text-spinecho-slate mb-12 italic">If you develop production optimization platforms, Spin Echo provides a differentiated measurement layer.</p>
          <button onClick={openModal} className="px-12 py-5 bg-spinecho-accent text-black font-black uppercase text-xs tracking-[0.3em] rounded-xl hover:bg-white transition-all shadow-xl shadow-spinecho-accent/20">Discuss a Technical Partnership</button>
        </div>
      </section>
      <Footer />
    </main>
  );
}