"use client";

import React from 'react';
import { useBooking } from '../context/BookingContext';
import { Lock } from 'lucide-react';

export default function ProductSpecs() {
  const { openModal } = useBooking();

  const generalSpecs = [
    { label: "Service", value: "Sour per NACE MR0175 / ISO 15156" },
    { label: "Max Working pressure", value: "100 bar / 1500 psi" },
    { label: "Ambient Temperature", value: "-4F to 140F [-20 to 60C]" },
    { label: "Process Temperature", value: "32F to 194F [0 to 82C]" },
    { label: "Power Consumption", value: "230 VAC / 150 W" },
    { label: "Connectivity", value: "RS 485 or Ethernet TCP IP" },
    { label: "Hazardous Zone", value: "ATEX, IECEx, CSA, UL" },
    { label: "Ingress Protection", value: "IP67 / NEMA 4X" },
  ];

  return (
    <section id="specs" className="py-24 px-6 bg-[#0A0C10] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-left">
          <h2 className="text-spinecho-accent font-mono text-sm uppercase tracking-[0.2em] mb-4 font-bold">Metrology Data</h2>
          <h3 className="text-3xl lg:text-5xl font-bold text-white tracking-tight uppercase">Technical Specification</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 border-t border-white/10 mb-20 text-left">
          {generalSpecs.map((spec, index) => (
            <div key={index} className="flex justify-between py-5 border-b border-white/5 px-2">
              <span className="text-spinecho-slate text-xs md:text-sm font-medium">{spec.label}</span>
              <span className="text-white text-xs md:text-sm font-mono text-right">{spec.value}</span>
            </div>
          ))}
        </div>
        <div className="glass-panel p-8 lg:p-16 border-white/10 bg-gradient-to-br from-spinecho-accent/5 to-transparent relative overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 text-left">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 text-spinecho-accent mb-6 font-mono text-[10px] uppercase tracking-[0.3em] font-bold">
                <Lock size={14} /> Application Specific Performance
              </div>
              <h4 className="text-2xl lg:text-3xl font-bold text-white mb-6 uppercase tracking-tight">Detailed Metrology Matrices</h4>
              <p className="text-spinecho-slate text-sm md:text-base leading-relaxed">Performance data across specific flow regimes including measurement uncertainty for wet gas and multiphase environments is shared under NDA following technical consultation.</p>
            </div>
            <button onClick={openModal} className="w-full lg:w-auto px-10 py-5 bg-spinecho-accent text-[#050608] font-black uppercase text-xs tracking-[0.2em] rounded-xl hover:bg-white transition-all shadow-xl shadow-spinecho-accent/20">Request Technical Dossier {"[NDA Required]"}</button>
          </div>
        </div>
      </div>
    </section>
  );
}