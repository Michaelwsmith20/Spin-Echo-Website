"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PartnerModal from "../../components/PartnerModal";
import { useBooking } from '../../context/BookingContext';
import { ChevronRight, Target, ShieldAlert, Microscope, Activity, Wind } from 'lucide-react';

export default function UseCasePage() {
  const { openModal } = useBooking();
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const useCases = [
    {
      title: "Multiphase Measurement",
      tag: "Asset Optimization",
      challenge: "Operators require precise visibility into oil, gas, water, and condensate behavior under flowing conditions to optimize well performance.",
      whyHard: "Traditional measurement often relies on test separators or inferred correlations that lose accuracy when fluid regimes shift.",
      approach: "Spin Echo utilizes physics based NMR sensing to identify molecular signatures in the flow stream. This enables real time phase identification without physical separation.",
      value: "Reduces reliance on bulky test separators and manual sampling while providing continuous data for allocation.",
      icon: <Activity size={20} />
    },
    {
      title: "Wet Gas Monitoring",
      tag: "Infrastructure Protection",
      challenge: "Maintaining measurement certainty in high GVF environments where liquid loading and condensate dropout are constantly shifting.",
      whyHard: "Standard wet gas meters often struggle with changing liquid fractions and can be slow to respond to rapid regime changes.",
      approach: "The short axial reference volume and high temporal response allow for stable measurement during slugging and startup. It detects liquid loading shifts immediately.",
      value: "Provides early detection of regime changes and protects downstream equipment by monitoring liquid carryover.",
      icon: <Wind size={20} />
    },
    {
      title: "NGL & Condensate Flows",
      tag: "Revenue Protection",
      challenge: "Capturing the commercial value of Natural Gas Liquids (NGL) requires live insight into fluid composition within the gas stream.",
      whyHard: "Compositional changes are traditionally tracked via periodic sampling, which misses high frequency fluctuations in fluid quality.",
      approach: "Spin Echo provides in pipe measurement of valuable liquids. By identifying the resonance signature of condensates, the system tracks changing composition as it happens.",
      value: "Enables production optimization based on actual liquid value and supports more accurate allocation decisions.",
      icon: <Target size={20} />
    },
    {
      title: "Carbon Capture (CCS)",
      tag: "Integrity Management",
      challenge: "CO2 transport pipelines require rigorous monitoring to prevent moisture ingress, which can lead to catastrophic corrosion.",
      whyHard: "Detection must be immediate and non intrusive. Existing sensors may lack the sensitivity to detect trace water in dense phase CO2.",
      approach: "Spin Echo senses the unique signature of water molecules within the CO2 stream without disturbing the flow, supporting early detection of moisture ingress.",
      value: "Enables an immediate operational response to protect downstream infrastructure and maintain safety standards.",
      icon: <ShieldAlert size={20} />
    },
    {
      title: "Hydrogen Blending",
      tag: "Energy Transition",
      challenge: "Hydrogen blending introduces variability in gas composition that can impact the Wobbe Index and downstream asset health.",
      whyHard: "Turbines and compressors are highly sensitive to composition fluctuations. Relying on inferred blending ratios or slow chromatography creates operational risk.",
      approach: "Spin Echo provides real time composition measurement for mixed gas streams. The system monitors hydrogen content continuously to ensure safe operation.",
      value: "Protects critical downstream assets from damage due to unexpected composition shifts and provides data for blending control.",
      icon: <Microscope size={20} />
    }
  ];

  return (
    <main className="bg-spinecho-dark min-h-screen text-white">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="pt-48 pb-20 px-6 bg-gradient-to-b from-spinecho-accent/5 to-transparent">
        <div className="max-w-7xl mx-auto text-left">
          <div className="inline-block px-3 py-1 mb-8 border border-spinecho-accent/30 bg-spinecho-accent/5 rounded-full">
            <span className="text-xs font-mono text-spinecho-accent uppercase tracking-[0.2em]">Application Hub</span>
          </div>
          <h1 className="text-5xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-[1.05]">
            Measurement Solutions <br />
            <span className="text-spinecho-accent">Across the Energy Sector.</span>
          </h1>
          <p className="text-xl lg:text-2xl text-spinecho-slate max-w-3xl leading-relaxed">
            From mature oil production to emerging hydrogen networks, Spin Echo provides 
            the molecular truth required to manage complex flow environments.
          </p>
        </div>
      </section>

      {/* 2. DEPLOYMENT MODELS SECTION */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-spinecho-accent font-mono text-sm uppercase tracking-[0.2em] mb-4">Engagement Models</h2>
            <h3 className="text-3xl lg:text-5xl font-bold text-white tracking-tight">Deployment Models</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="glass-panel p-1 border-white/10 bg-white/5 hover:border-spinecho-accent/30 transition-all duration-700 overflow-hidden group">
               <div className="bg-[#0A0C10] rounded-xl flex flex-col h-full">
                 <div className="w-full aspect-video bg-white overflow-hidden relative">
                    <img src="https://i.postimg.cc/d1qdDx7M/Fixed-Install.png" alt="Fixed" className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-110 p-4" />
                 </div>
                 <div className="p-10 flex flex-col flex-grow text-left">
                    <h2 className="text-3xl font-bold mb-4">Fixed Installation</h2>
                    <p className="text-spinecho-slate mb-8 text-xs uppercase tracking-widest font-mono italic">Asset Grade Infrastructure</p>
                    <button onClick={openModal} className="w-full py-4 border border-white/10 text-white font-bold uppercase text-[10px] tracking-[0.3em] rounded hover:bg-white hover:text-black transition-all">View Specifications</button>
                 </div>
               </div>
            </div>
            <div className="glass-panel p-1 border-spinecho-accent/20 bg-spinecho-accent/5 hover:border-spinecho-accent/50 transition-all duration-700 overflow-hidden group">
               <div className="bg-[#0A0C10] rounded-xl flex flex-col h-full">
                 <div className="w-full aspect-video bg-white overflow-hidden relative">
                    <img src="https://i.postimg.cc/mDbMh5P8/mobilemeter.png" alt="Mobile" className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-110 p-4" />
                 </div>
                 <div className="p-10 flex flex-col flex-grow text-left">
                    <h2 className="text-3xl font-bold mb-4">Measurement Service</h2>
                    <p className="text-spinecho-accent mb-8 text-xs uppercase tracking-widest font-mono italic">Rapid Deployment Service</p>
                    <button onClick={() => setIsPartnerModalOpen(true)} className="w-full py-4 bg-spinecho-accent text-white font-bold uppercase text-[10px] tracking-[0.3em] rounded hover:bg-blue-600 transition-all">Explore Service Models</button>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. APPLICATIONS EXPLORER */}
      <section className="py-24 px-6 border-t border-white/5 bg-[#050608]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-spinecho-accent font-mono text-sm uppercase tracking-[0.2em] mb-4">System Use Cases</h2>
            <h3 className="text-3xl lg:text-5xl font-bold text-white tracking-tight">Applications</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-4">
              {useCases.map((uc, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-full text-left p-6 lg:p-8 rounded-xl border transition-all duration-500 flex flex-col ${
                    activeIndex === index ? 'bg-spinecho-accent/10 border-spinecho-accent/40 shadow-[0_0_20px_rgba(6,182,212,0.1)]' : 'bg-white/[0.02] border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-4">
                      <div className={activeIndex === index ? 'text-spinecho-accent' : 'text-spinecho-slate'}>{uc.icon}</div>
                      <span className={`font-bold tracking-tight text-lg lg:text-xl ${activeIndex === index ? 'text-white' : 'text-spinecho-slate'}`}>{uc.title}</span>
                    </div>
                    <ChevronRight className={`transition-transform duration-500 ${activeIndex === index ? 'rotate-90 text-spinecho-accent' : 'text-white/10'}`} size={20} />
                  </div>
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                        <div className="pt-6 mt-6 border-t border-spinecho-accent/20">
                          <p className="text-spinecho-accent font-mono text-[9px] uppercase tracking-widest mb-2 font-bold">Operational Value</p>
                          <p className="text-white text-sm leading-relaxed italic">"{uc.value}"</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              ))}
            </div>
            <div className="lg:col-span-7 sticky top-32">
              <AnimatePresence mode="wait">
                <motion.div key={activeIndex} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="glass-panel p-8 lg:p-16 border-white/10 bg-[#0F1115] shadow-2xl relative overflow-hidden text-left">
                  <div className="absolute top-0 right-0 bg-spinecho-accent/10 text-spinecho-accent px-6 py-2 text-[10px] font-mono uppercase tracking-[0.3em] rounded-bl-xl border-l border-b border-spinecho-accent/20">{useCases[activeIndex].tag}</div>
                  <div className="space-y-12">
                    <div>
                      <h4 className="text-white font-bold uppercase text-[10px] tracking-widest mb-4 flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-red-500/50" /> The Operational Challenge</h4>
                      <p className="text-white text-lg leading-relaxed">{useCases[activeIndex].challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-white font-bold uppercase text-[10px] tracking-widest mb-4 flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50" /> Why It Is Hard</h4>
                      <p className="text-spinecho-slate text-base leading-relaxed pl-6 border-l border-white/10">{useCases[activeIndex].whyHard}</p>
                    </div>
                    <div className="p-8 lg:p-10 bg-spinecho-accent/[0.04] border border-spinecho-accent/20 rounded-2xl">
                      <h4 className="text-spinecho-accent font-bold uppercase text-[10px] tracking-widest mb-4">Spin Echo Approach</h4>
                      <p className="text-white text-lg leading-relaxed">{useCases[activeIndex].approach}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <PartnerModal isOpen={isPartnerModalOpen} onClose={() => setIsPartnerModalOpen(false)} />
      <Footer />
    </main>
  );
}