"use client";

import React from 'react';
import { DashboardPreview } from './Dashboard';

export default function ProductHardware() {
  const modules = [
    { 
      id: "01", 
      title: "Optimized Flow Path", 
      subtitle: "Full bore measurement volume.", 
      description: "Spin Echo utilizes a standard type approved polymer flow tube with zero internal intrusions. Designed for inline operation, bypass configurations are preferred to enable calibration and maintenance without production impact.", 
      impact: "Reduced flow assurance risk and simplified integrity management.", 
      image: "https://i.postimg.cc/XJVFXzrz/module1.png",
      alt: "Full bore polymer flow path for non intrusive multiphase sensing"
    },
    { 
      id: "02", 
      title: "Non Intrusive Sensing Probes", 
      subtitle: "Molecular sensing without process disturbance.", 
      description: "Probes are positioned externally to the flow bore. This modular architecture allows the system to be configured for wet gas or multiphase applications without the need for continuous sampling.", 
      impact: "High fidelity phase characterisation without separation infrastructure.", 
      image: "https://i.postimg.cc/W32rtHdC/module2.png",
      alt: "Modular NMR sensing probes positioned externally to the hydrocarbon flow"
    },
    { 
      id: "03", 
      title: "Static Magnet Assembly", 
      subtitle: "Field stability achieved through fixed geometry.", 
      description: "A second generation magnetic architecture providing a uniform field without mechanical alignment. The system is inherently resistant to vibration and thermal cycling.", 
      impact: "Long term measurement stability with no routine recalibration.", 
      image: "https://i.postimg.cc/bJzbdBZM/module3.png",
      alt: "Static magnetic assembly designed for long term calibration stability"
    },
    { 
      id: "04", 
      title: "Integrated Edge Processing", 
      subtitle: "High speed signal quantification at the wellhead.", 
      description: "Integrated electronics perform high frequency signal acquisition and phase resolved analysis. Data is processed locally before being transmitted to the enterprise control system.", 
      impact: "Live operational insight with high availability in the energy sector.", 
      image: "DASHBOARD",
      alt: "Integrated electronics chassis for wellhead data processing"
    }
  ];

  return (
    <section id="product" className="py-24 px-6 bg-spinecho-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 text-left">
          <h2 className="text-spinecho-accent font-mono text-sm uppercase tracking-[0.2em] mb-4">Metrology Architecture</h2>
          <h3 className="text-3xl lg:text-6xl font-bold text-white max-w-4xl leading-tight tracking-tight uppercase">
            Modular Hardware Design.
          </h3>
        </div>
        <div className="space-y-40">
          {modules.map((module, index) => (
            <div key={module.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}>
              <div className="w-full lg:w-1/2">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-spinecho-accent/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
                  <div className="relative glass-panel overflow-hidden border-white/5 bg-[#0F1115] aspect-video flex items-center justify-center shadow-2xl">
                    {module.image === "DASHBOARD" ? (
                      <div className="w-full h-full p-0"><DashboardPreview /></div>
                    ) : (
                      <img src={module.image} alt={module.alt} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    )}
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 text-left">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-spinecho-accent font-mono text-lg font-bold italic">0{module.id}</span>
                  <div className="h-px w-12 bg-spinecho-accent/30"></div>
                </div>
                <h4 className="text-3xl font-bold text-white mb-2 tracking-tight leading-none uppercase">{module.title}</h4>
                <p className="text-spinecho-accent font-mono text-[10px] uppercase tracking-widest mb-6 italic">{module.subtitle}</p>
                <p className="text-spinecho-slate leading-relaxed mb-10 text-lg">{module.description}</p>
                <div className="pt-8 border-t border-white/10">
                  <span className="text-[10px] font-mono text-spinecho-accent uppercase tracking-[0.2em] block mb-2 font-bold">Operational Implication</span>
                  <p className="text-white text-sm font-semibold italic leading-relaxed">{module.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}