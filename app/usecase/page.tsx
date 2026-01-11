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
    { title: "Multiphase Measurement", tag: "Asset Optimization", challenge: "Operators require precise visibility into oil, gas, water, and condensate behavior.", whyHard: "Traditional measurement often relies on test separators that lose accuracy when fluid regimes shift.", approach: "Spin Echo utilizes physics based NMR sensing to identify molecular signatures. This enables real time phase identification.", value: "Reduces reliance on bulky test separators and manual sampling while providing continuous data for allocation.", icon: <Activity size={20} /> },
    { title: "Wet Gas Monitoring", tag: "Infrastructure Protection", challenge: "Maintaining measurement certainty in high GVF environments.", whyHard: "Standard wet gas meters often struggle with changing liquid fractions and slow response times.", approach: "The short axial reference volume allow for stable measurement during slugging and startup.", value: "Provides early detection of regime changes and protects downstream equipment by monitoring liquid carryover.", icon: <Wind size={20} /> },
    { title: "NGL & Condensate Flows", tag: "Revenue Protection", challenge: "Capturing the commercial value of NGL requires live insight into fluid composition.", whyHard: "Compositional changes are traditionally tracked via periodic sampling, which misses high frequency fluctuations.", approach: "Spin Echo provides in pipe measurement of valuable liquids by identifying resonance signatures.", value: "Enables production optimization based on actual liquid value and supports accurate allocation decisions.", icon: <Target size={20} /> },
    { title: "Carbon Capture (CCS)", tag: "Integrity Management", challenge: "CO2 transport pipelines require rigorous monitoring to prevent moisture ingress.", whyHard: "Existing sensors may lack the sensitivity to detect trace water in dense phase CO2.", approach: "Spin Echo senses the unique signature of water molecules without disturbing the flow.", value: "Enables an immediate operational response to protect downstream infrastructure and maintain safety.", icon: <ShieldAlert size={20} /> },
    { title: "Hydrogen Blending", tag: "Energy Transition", challenge: "Hydrogen blending introduces variability in gas composition.", whyHard: "Turbines are highly sensitive to composition fluctuations. Slow chromatography creates operational risk.", approach: "Spin Echo provides real time composition measurement for mixed gas streams.", value: "Protects critical downstream assets from damage and provides data for blending control.", icon: <Microscope size={20} /> }
  ];

  return (
    <main className="bg-spinecho-dark min-h-screen text-white font-sans overflow-x-hidden">
      <Navbar />
      <section className="pt-48 pb-20 px-6 bg-gradient-to-b from-spinecho-accent/5 to-transparent text-left">
        <div className="max-w-7xl mx-auto">
          <div className="inline-block px-3 py-1 mb-8 border border-spinecho-accent/30 bg-spinecho-accent/5 rounded-full">
            <span className="text-xs font-mono text-spinecho-accent uppercase tracking-[0.2em]">Application Hub</span>
          </div>
          <h1 className="text-5xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-[1.05]">Measurement Solutions <br /><span className="text-spinecho-accent">Across the Energy Stack.</span></h1>
          <p className="text-xl lg:text-2xl text-spinecho-slate max-w-2xl leading-relaxed text-left">From mature oil production to emerging hydrogen networks, Spin Echo provides the molecular truth required to manage complex flow environments.</p>
        </div>
      </section>
      <section className="py-24 px-6 border-t border-white/5 bg-[#050608]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            <div className="lg:col-span-5 space-y-4 text-left">
              {useCases.map((uc, index) => (
                <button key={index} onClick={() => setActiveIndex(index)} className={`w-full text-left p-6 lg:p-8 rounded-xl border transition-all duration-500 flex flex-col ${activeIndex === index ? 'bg-spinecho-accent/10 border-spinecho-accent/40 shadow-[0_0_20px_rgba(6,182,212,0.1)]' : 'bg-white/[0.02] border-white/5 hover:border-white/20'}`}>
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
                          <p className="text-white text-sm leading-relaxed italic pr-4">&ldquo;{uc.value}&quot;</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              ))}
            </div>
            <div className="lg:col-span-7 h-full text-left">
              <AnimatePresence mode="wait">
                <motion.div key={activeIndex} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="glass-panel p-8 lg:p-16 border-white/10 bg-[#0F1115] shadow-2xl relative overflow-hidden text-left h-full flex flex-col">
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