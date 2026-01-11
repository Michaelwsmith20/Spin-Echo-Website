"use client";

import React from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ResultsPage() {
  const partners = [
    { 
      name: "DNV", 
      logo: "https://i.postimg.cc/85jwLSM9/DNV.png",
      role: "Hydrogen and methane gas mixture validation conducted via a specialized Joint Industry Project flow loop at the DNV Groningen facility." 
    },
    { 
      name: "Cranfield University", 
      logo: "https://i.postimg.cc/zfDxXWB1/CRANFIELD.png",
      role: "Multi phase oil, gas, and water validation utilizing the dedicated industrial scale multi phase flow loop." 
    },
    { 
      name: "TÜV SÜD", 
      logo: "https://i.postimg.cc/L4gNXmHF/TUV.png",
      role: "NGL and condensate rich flow validation performed at the National Engineering Laboratory facility in Glasgow." 
    }
  ];

  const validationCards = [
    {
      title: "Signal Stability",
      icon: <path d="M3 12h3l1-4 2 8 1-4h11" />,
      extra: <rect x="2" y="5" width="20" height="14" rx="2" strokeOpacity="0.2" strokeDasharray="2 2" />,
      desc: "Verification of NMR resonance signal stability across varied temperature and pressure envelopes. Validation focuses on the maintenance of a stable physical reference under industrial conditions."
    },
    {
      title: "Signal Separation",
      icon: <path d="M5 18l2-6 2 6M11 18l2-12 2 12M17 18l2-8 2 8" />,
      extra: <path d="M3 18h18" strokeOpacity="0.3" />,
      desc: "Assessment of phase resolved signal separation. Tests confirm the ability of the system to differentiate molecular signatures of oil, gas, and water within a single measurement volume."
    },
    {
      title: "Transient Response",
      icon: <path d="M3 12h4l2-8 4 16 2-8h6" />,
      extra: <path d="M3 16h4l2-8 4 16 2-8h6" />,
      desc: "Observation of measurement behavior under transient and compositionally variable flow conditions, including response times during rapid regime changes and slugging events."
    }
  ];

  return (
    <main className="bg-spinecho-dark min-h-screen text-white font-sans overflow-x-hidden">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="pt-48 pb-20 px-6 bg-gradient-to-b from-spinecho-accent/5 to-transparent text-left">
        <div className="max-w-7xl mx-auto">
          <div className="inline-block px-3 py-1 mb-8 border border-spinecho-accent/30 bg-spinecho-accent/5 rounded-full">
            <span className="text-xs font-mono text-spinecho-accent uppercase tracking-[0.2em]">Technical Audit</span>
          </div>
          <h1 className="text-5xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-[1.05]">
            Results & <br />
            <span className="text-spinecho-accent">Independent Validation.</span>
          </h1>
          <p className="text-xl lg:text-2xl text-spinecho-slate max-w-3xl leading-relaxed">
            Spin Echo has undergone independent validation under laboratory and pilot conditions aligned to real operating environments. 
            We prioritize physics level evidence to ensure measurement integrity in the field.
          </p>
        </div>
      </section>

      {/* 2. VALIDATION SCOPE (CINEMATIC BACKGROUND WITH TILES AT THE BOTTOM) */}
      <section className="relative w-full border-y border-white/5 bg-black min-h-[1100px] flex flex-col justify-between">
        
        {/* Full Width Hardware Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.postimg.cc/yNbtYrX1/resultsmeter.jpg" 
            alt="Spin Echo Internal Magnet Assembly" 
            className="w-full h-full object-cover opacity-80 brightness-75"
          />
          {/* Subtle vignette and edge fades to handle the crop */}
          <div className="absolute inset-0 bg-gradient-to-b from-spinecho-dark via-transparent to-spinecho-dark" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
        </div>

        {/* TOP: Section Header (Now clear of the hardware focal point) */}
        <div className="relative z-10 max-w-7xl mx-auto pt-32 px-6 text-center">
          <h2 className="text-spinecho-accent font-mono text-sm uppercase tracking-[0.4em] mb-4">Validation Scope</h2>
          <p className="text-white font-medium text-lg max-w-2xl mx-auto [text-shadow:_0_2px_10px_rgb(0_0_0_/_100%)]">
            Validation activities were conducted on full scale hardware under controlled laboratory and pilot conditions.
          </p>
        </div>

        {/* BOTTOM: Validation Tiles (Moved down to avoid obstructing the hardware) */}
        <div className="relative z-10 max-w-7xl mx-auto pb-32 px-6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {validationCards.map((card, i) => (
              <div key={i} className="glass-panel p-8 lg:p-10 border-white/10 bg-black/40 backdrop-blur-2xl hover:border-spinecho-accent/50 transition-all duration-500 group">
                <div className="mb-8 p-3 w-fit rounded-xl bg-spinecho-accent/10 border border-spinecho-accent/30 group-hover:bg-spinecho-accent/20 transition-colors">
                  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-spinecho-accent" stroke="currentColor" strokeWidth="1.5">
                    {card.icon}
                    {card.extra}
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 tracking-tight uppercase [text-shadow:_0_1px_8px_rgb(0_0_0_/_100%)]">
                  {card.title}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed [text-shadow:_0_1px_8px_rgb(0_0_0_/_100%)]">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FACILITY TESTING */}
      <section className="py-24 px-6 bg-spinecho-dark text-left">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-spinecho-accent font-mono text-sm uppercase tracking-[0.2em] mb-4">Facility Testing</h2>
            <h3 className="text-3xl lg:text-5xl font-bold text-white leading-tight tracking-tight uppercase">Use Case Aligned Validation</h3>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start p-8 glass-panel border-white/5 bg-white/[0.01]">
              <div className="lg:col-span-4">
                <span className="text-spinecho-accent font-mono text-xs uppercase tracking-widest block mb-2 italic">Hydrogen & Blended Gas</span>
                <h4 className="text-xl font-bold text-white tracking-tight uppercase">DNV Groningen</h4>
              </div>
              <div className="lg:col-span-8 text-spinecho-slate text-base leading-relaxed">
                Validation of hydrogen and methane gas mixtures was conducted at DNV Groningen utilizing a specialized Joint Industry Project flow loop. Testing verified composition measurement integrity for emerging energy value chains.
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start p-8 glass-panel border-white/5 bg-white/[0.01]">
              <div className="lg:col-span-4">
                <span className="text-spinecho-accent font-mono text-xs uppercase tracking-widest block mb-2 italic">Multi Phase Oil, Gas & Water</span>
                <h4 className="text-xl font-bold text-white tracking-tight uppercase">Cranfield University</h4>
              </div>
              <div className="lg:col-span-8 text-spinecho-slate text-base leading-relaxed">
                Validation of multi phase flow behavior was performed at Cranfield University utilizing the industrial scale multi phase flow loop. Studies focused on phase resolved measurement accuracy across three phase riser configurations.
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start p-8 glass-panel border-white/5 bg-white/[0.01]">
              <div className="lg:col-span-4">
                <span className="text-spinecho-accent font-mono text-xs uppercase tracking-widest block mb-2 italic">NGL & Condensate Rich Flow</span>
                <h4 className="text-xl font-bold text-white tracking-tight uppercase">TÜV SÜD Glasgow</h4>
              </div>
              <div className="lg:col-span-8 text-spinecho-slate text-base leading-relaxed">
                Validation of NGL and condensate rich flow was conducted at the TÜV SÜD National Engineering Laboratory in Glasgow. Testing focused on identifying molecular signatures within complex, high value liquid streams.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. VERIFICATION PARTNERS (Fixed Logos & PostImages Links) */}
      <section className="py-24 px-6 bg-[#050608] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-spinecho-accent font-mono text-sm uppercase tracking-[0.2em] mb-4">Verification Partners</h2>
            <p className="text-spinecho-slate max-w-2xl mx-auto text-sm leading-relaxed italic">
              Testing was conducted with independent organizations to verify physics level outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partners.map((partner) => (
              <div key={partner.name} className="flex flex-col h-full glass-panel border-white/5 bg-[#0F1115] overflow-hidden group hover:border-spinecho-accent/20 transition-all duration-500 text-left">
                <div className="h-32 bg-white flex items-center justify-center p-10 relative">
                  <img src={partner.logo} alt={partner.name} className="max-h-full max-w-full object-contain" />
                </div>
                <div className="p-8 flex-grow flex flex-col justify-center border-t border-white/5">
                  <h5 className="text-white font-bold mb-3 tracking-tight uppercase text-[10px] font-mono">{partner.name}</h5>
                  <p className="text-spinecho-slate text-[11px] leading-relaxed italic">{partner.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}