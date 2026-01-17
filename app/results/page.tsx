"use client";

import React from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useBooking } from '../../context/BookingContext';

export default function ResultsPage() {
  const { openModal } = useBooking();

  const facilityData = [
    { 
      name: "DNV Groningen", 
      tag: "Hydrogen & Blended Gas",
      logo: "https://i.postimg.cc/85jwLSM9/DNV.png",
      role: "Validation of hydrogen and methane gas mixtures was conducted at DNV Groningen utilizing a specialized Joint Industry Project flow loop. Testing verified composition measurement integrity for emerging energy value chains." 
    },
    { 
      name: "Cranfield University", 
      tag: "Multi Phase Oil, Gas & Water",
      logo: "https://i.postimg.cc/zfDxXWB1/CRANFIELD.png",
      role: "Validation of multi phase flow behavior was performed at Cranfield University utilizing the industrial scale multi phase flow loop. Studies focused on phase resolved measurement accuracy across three phase riser configurations." 
    },
    { 
      name: "TÜV SÜD Glasgow", 
      tag: "NGL & Condensate Rich Flow",
      logo: "https://i.postimg.cc/L4gNXmHF/TUV.png",
      role: "Validation of NGL and condensate rich flow was conducted at the TÜV SÜD National Engineering Laboratory in Glasgow. Testing focused on identifying molecular signatures within complex, high value liquid streams." 
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

      {/* 2. VALIDATION SCOPE */}
      <section className="relative w-full border-y border-white/5 bg-black min-h-[850px] flex flex-col items-center">
        <div className="absolute inset-0 z-0 w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
          <img 
            src="https://i.postimg.cc/yNbtYrX1/resultsmeter.jpg" 
            alt="NMR Internal Assembly" 
            className="w-full h-full object-cover opacity-100 brightness-125"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#050608_85%)]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
          <div className="absolute inset-0 bg-gradient-to-b from-spinecho-dark via-transparent to-spinecho-dark" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto pt-20 px-6 text-center">
          <h2 className="text-spinecho-accent font-mono text-sm uppercase tracking-[0.4em] mb-4">Validation Scope</h2>
          <p className="text-white font-medium text-lg max-w-2xl mx-auto [text-shadow:_0_2px_10px_rgb(0_0_0_/_100%)]">
            Validation activities were conducted on full scale hardware under controlled laboratory and pilot conditions.
          </p>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto mt-auto pb-24 px-6 w-full text-left">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {validationCards.map((card, i) => (
              <div key={i} className="glass-panel p-8 lg:p-10 border-white/20 bg-black/30 backdrop-blur-3xl hover:border-spinecho-accent/50 transition-all duration-700 group h-full">
                <div className="mb-8 p-3 w-fit rounded-xl bg-spinecho-accent/10 border border-spinecho-accent/30 group-hover:bg-spinecho-accent/20 transition-colors">
                  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-spinecho-accent" stroke="currentColor" strokeWidth="1.5">
                    {card.icon}
                    {card.extra}
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 tracking-tight uppercase [text-shadow:_0_1px_8px_rgb(0_0_0_/_100%)]">
                  {card.title}
                </h3>
                <p className="text-white font-medium text-sm leading-relaxed [text-shadow:_0_1px_8px_rgb(0_0_0_/_100%)]">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FACILITY TESTING */}
      <section className="py-24 px-6 bg-spinecho-dark text-left">
        <div className="max-w-7xl mx-auto text-left">
          <div className="mb-16">
            <h2 className="text-spinecho-accent font-mono text-sm uppercase tracking-[0.2em] mb-4">Facility Testing</h2>
            <h3 className="text-3xl lg:text-5xl font-bold text-white leading-tight tracking-tight uppercase">Use Case Aligned Validation</h3>
          </div>

          <div className="space-y-8">
            {facilityData.map((item, i) => (
              <div key={i} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 lg:p-10 glass-panel border-white/5 bg-white/[0.01] hover:border-white/10 transition-colors">
                <div className="lg:col-span-5 flex flex-col gap-6">
                  <div className="text-left">
                    <span className="text-spinecho-accent font-mono text-[10px] uppercase tracking-widest block mb-2 italic">{item.tag}</span>
                    <h4 className="text-2xl font-bold text-white tracking-tight uppercase leading-tight">{item.name}</h4>
                  </div>
                  <div className="bg-white p-4 rounded-xl w-full max-w-[220px] h-28 flex items-center justify-center shadow-xl shadow-black/40">
                    <img 
                      src={item.logo} 
                      alt={`${item.name} logo`} 
                      className="w-full h-full object-contain p-2" 
                    />
                  </div>
                </div>
                <div className="lg:col-span-7">
                  <p className="text-spinecho-slate text-lg leading-relaxed border-l border-white/10 pl-8 text-left">
                    {item.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* FINAL TIDY CALL TO ACTION */}
          <div className="mt-32 text-center">
            <div className="inline-block px-10 py-16 border border-white/10 bg-gradient-to-br from-white/5 to-transparent rounded-[2.5rem] max-w-4xl shadow-2xl">
              <div className="text-spinecho-accent font-mono text-[10px] uppercase tracking-[0.4em] mb-6 font-bold">Confidential Access</div>
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 tracking-tight uppercase">Technical Audit Portfolio</h3>
              <p className="text-spinecho-slate text-lg mb-10 mx-auto leading-relaxed max-w-2xl">
                Detailed validation methodologies, facility test reports, and specific performance datasets are available to qualified partners under NDA following technical consultation.
              </p>
              <button 
                onClick={openModal}
                className="px-12 py-5 bg-spinecho-accent text-[#050608] font-black uppercase text-xs tracking-[0.3em] rounded-xl hover:bg-white transition-all shadow-xl shadow-spinecho-accent/20 active:scale-95"
              >
                Request Technical Dossier {"[NDA Required]"}
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}