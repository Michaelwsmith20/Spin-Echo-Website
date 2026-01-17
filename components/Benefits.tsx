"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function Benefits() {
  const [activeIndex, setActiveIndex] = useState(0);

  const capabilities = [
    {
      title: "Physics Based Sensing",
      description: "Direct molecular measurement replaces empirical models and inferred correlations. Integrity is derived from NMR resonance signatures rather than pressure or temperature estimates.",
      impact: "Eliminate costly financial errors from over or under estimation.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="9" strokeOpacity="0.2" />
          <circle cx="12" cy="12" r="3" fill="currentColor" />
          <path d="M12 21v-2M12 5V3M21 12h-2M5 12H3" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: "Transient Resilience",
      description: "Stable performance during rapid flow regime shifts and slugging. Resonance signatures adapt to changing conditions without the need for manual tuning or calibration updates.",
      impact: "Maintain production uptime during unstable well conditions.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.5">
          <path d="M2 17s4-10 8-10 4 10 8 10 4-10 8-10" strokeOpacity="0.3" />
          <path d="M2 12h20" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: "Phase Characterisation",
      description: "In flow identification of NGL condensates and phase behavior. This enables precise fluid property analysis directly within the pipe, eliminating the need for bypass lines or sampling.",
      impact: "Capture high value NGL revenue at the source.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          <circle cx="11" cy="10" r="2" fill="currentColor" />
        </svg>
      )
    },
    {
      title: "Configurable Architecture",
      description: "Modular probe designs and sensor architectures allow for integration across diverse geometries. The system scales from standalone wellhead monitoring to complex facility manifolds.",
      impact: "Minimize brownfield installation costs and complexity.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" strokeOpacity="0.4" />
          <rect x="3" y="14" width="7" height="7" rx="1" strokeOpacity="0.4" />
          <path d="M14 14l7 7m0-7l-7 7" />
        </svg>
      )
    },
    {
      title: "Non Radioactive Operation",
      description: "Eliminates the logistical and regulatory burden of gamma ray sources. This improves HSE profiles and simplifies long term asset management and decommissioning.",
      impact: "Drastically reduce regulatory OPEX and security costs.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="9" strokeOpacity="0.2" />
          <path d="M12 12l-3-5.2m3 5.2l3-5.2m-3 5.2V18" strokeOpacity="0.5" />
          <circle cx="12" cy="12" r="2" />
          <path d="M18 6L6 18" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: "Phase Resolved Control",
      description: "High frequency data streams provide live insights into phase behavior and flow rates. Operators gain the precision required to protect downstream equipment and optimize production.",
      impact: "Maximize separator efficiency and protect compressors.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="4" width="18" height="16" rx="2" strokeOpacity="0.2" />
          <path d="M7 12h10M7 8h6M7 16h4" strokeLinecap="round" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 px-6 bg-spinecho-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-left">
          <h2 className="text-spinecho-accent font-mono text-sm uppercase tracking-[0.2em] mb-4 font-bold">Operational Capability</h2>
          <h3 className="text-3xl lg:text-6xl font-bold text-white max-w-4xl leading-tight tracking-tight uppercase">Engineered for measurement integrity.</h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-3">
            {capabilities.map((item, index) => (
              <button key={index} onClick={() => setActiveIndex(index)} className={`w-full text-left p-6 rounded-xl border transition-all duration-500 flex items-center justify-between ${activeIndex === index ? 'bg-spinecho-accent/10 border-spinecho-accent/40' : 'bg-white/[0.02] border-white/5 hover:border-white/10'}`}>
                <div className="flex items-center gap-4">
                  <div className={activeIndex === index ? 'text-spinecho-accent' : 'text-spinecho-slate'}>{item.icon}</div>
                  <span className={`font-bold text-lg ${activeIndex === index ? 'text-white' : 'text-spinecho-slate'}`}>{item.title}</span>
                </div>
                <ChevronRight className={activeIndex === index ? 'text-spinecho-accent' : 'text-white/5'} size={18} />
              </button>
            ))}
          </div>
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div key={activeIndex} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="glass-panel p-10 lg:p-16 border-white/5 bg-[#0F1115] text-left h-full flex flex-col">
                <div className="mb-10 p-5 rounded-2xl bg-spinecho-accent/10 border border-spinecho-accent/20 w-fit text-spinecho-accent">{capabilities[activeIndex].icon}</div>
                <h4 className="text-3xl font-bold text-white mb-6 uppercase tracking-tight">{capabilities[activeIndex].title}</h4>
                <p className="text-spinecho-slate text-lg leading-relaxed mb-12 flex-grow">{capabilities[activeIndex].description}</p>
                <div className="pt-8 border-t border-white/10"><span className="text-[10px] font-mono text-spinecho-accent uppercase tracking-widest block mb-2 font-bold font-mono">Commercial Impact</span><p className="text-white text-base font-semibold italic">{capabilities[activeIndex].impact}</p></div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}