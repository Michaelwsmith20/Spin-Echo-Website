"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useBooking } from '../../context/BookingContext';
import { ChevronRight, TrendingUp, Anchor, Truck, Layers } from 'lucide-react';

export default function OpportunitiesPage() {
  const { openModal } = useBooking();
  const [activeIndex, setActiveIndex] = useState(0);

  const streams = [
    {
      title: "Investment & Scaling",
      tag: "Capital Growth",
      challenge: "Spin Echo is seeking strategic investment to accelerate production capacity and global supply chain integration.",
      whyHard: "The current phase involves scaling proven physics into a standardized fleet of field units to meet existing operator demand.",
      approach: "We are open to two investment pathways: a direct equity investment to scale operations, or a strategic development partnership with an established industrial OEM.",
      value: "Partnering for scale provides access to a patented measurement layer that is currently pilot ready and technically validated.",
      icon: <TrendingUp size={20} />
    },
    {
      title: "Offshore Development",
      tag: "Technical Partnership",
      challenge: "Building the next generation of topside and subsea multiphase measurement modules.",
      whyHard: "Offshore environments require specific structural and reliability engineering that builds on our core static magnetic architecture.",
      approach: "We are identifying engineering partners and asset owners interested in co developing offshore variants for topside facility monitoring or subsea wellhead integration.",
      value: "Expands the Spin Echo molecular sensing advantage to high value offshore assets where footprint and maintenance costs are critical.",
      icon: <Anchor size={20} />
    },
    {
      title: "Onshore Service Evolution",
      tag: "Service Integration",
      challenge: "Providing wellhead service companies with a lighter, safer alternative to legacy tank separation fleets.",
      whyHard: "Service providers are facing increased pressure to reduce site footprint, logistics costs, and HSE risks associated with pressurized vessels.",
      approach: "Spin Echo offers a partnership model for onshore well measurement service providers looking to replace separation units with high fidelity NMR flow meters.",
      value: "Enables a more scalable service model with rapid deployment and continuous phase resolved data streams.",
      icon: <Truck size={20} />
    }
  ];

  return (
    <main className="bg-spinecho-dark min-h-screen text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-48 pb-20 px-6 bg-gradient-to-b from-spinecho-accent/5 to-transparent">
        <div className="max-w-7xl mx-auto text-left">
          <div className="inline-block px-3 py-1 mb-8 border border-spinecho-accent/30 bg-spinecho-accent/5 rounded-full">
            <span className="text-xs font-mono text-spinecho-accent uppercase tracking-[0.2em]">Strategic Engagement</span>
          </div>
          <h1 className="text-5xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-[1.05]">
            Scale & <br />
            <span className="text-spinecho-accent">Partnership.</span>
          </h1>
          <p className="text-xl lg:text-2xl text-spinecho-slate max-w-2xl leading-relaxed">
            We are identifying strategic partners to scale production, expand into offshore 
            territories, and modernize wellhead measurement services.
          </p>
        </div>
      </section>

      {/* Strategic Selection Console */}
      <section className="py-24 px-6 border-t border-white/5 bg-[#050608]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Menu */}
            <div className="lg:col-span-5 space-y-4">
              <h3 className="text-spinecho-slate font-mono text-[10px] uppercase tracking-[0.4em] mb-8 px-4 font-bold">Engagement Tracks</h3>
              {streams.map((s, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-full text-left p-6 lg:p-8 rounded-xl border transition-all duration-500 flex flex-col ${
                    activeIndex === index 
                    ? 'bg-spinecho-accent/10 border-spinecho-accent/40 shadow-[0_0_20px_rgba(6,182,212,0.1)]' 
                    : 'bg-white/[0.02] border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-4">
                      <div className={activeIndex === index ? 'text-spinecho-accent' : 'text-spinecho-slate'}>
                        {s.icon}
                      </div>
                      <span className={`font-bold tracking-tight text-lg lg:text-xl ${activeIndex === index ? 'text-white' : 'text-spinecho-slate'}`}>
                        {s.title}
                      </span>
                    </div>
                    <ChevronRight className={`transition-transform duration-500 ${activeIndex === index ? 'rotate-90 text-spinecho-accent' : 'text-white/10'}`} size={20} />
                  </div>
                </button>
              ))}
            </div>

            {/* Right Detail Panel */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="glass-panel p-8 lg:p-16 border-white/10 bg-[#0F1115] shadow-2xl relative overflow-hidden text-left min-h-[600px] flex flex-col"
                >
                  <div className="absolute top-0 right-0 bg-spinecho-accent/10 text-spinecho-accent px-6 py-2 text-[10px] font-mono uppercase tracking-[0.3em] rounded-bl-xl border-l border-b border-spinecho-accent/20">
                    {streams[activeIndex].tag}
                  </div>

                  <div className="space-y-12 flex-grow">
                    <div>
                      <h4 className="text-spinecho-accent font-bold uppercase text-[10px] tracking-widest mb-4">Strategic Objective</h4>
                      <p className="text-white text-2xl font-bold tracking-tight leading-snug">{streams[activeIndex].challenge}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div>
                        <h4 className="text-white/40 font-bold uppercase text-[10px] tracking-widest mb-4 font-mono">// Context</h4>
                        <p className="text-spinecho-slate text-sm leading-relaxed">{streams[activeIndex].whyHard}</p>
                      </div>
                      <div>
                        <h4 className="text-white/40 font-bold uppercase text-[10px] tracking-widest mb-4 font-mono">// Pathway</h4>
                        <p className="text-spinecho-slate text-sm leading-relaxed">{streams[activeIndex].approach}</p>
                      </div>
                    </div>

                    <div className="p-8 bg-white/[0.02] border border-white/10 rounded-2xl">
                      <h4 className="text-spinecho-accent font-bold uppercase text-[10px] tracking-widest mb-4">Partnership Value</h4>
                      <p className="text-white text-lg leading-relaxed italic">"{streams[activeIndex].value}"</p>
                    </div>
                  </div>

                  <button 
                    onClick={openModal}
                    className="w-full mt-12 py-5 bg-spinecho-accent text-black font-black uppercase text-xs tracking-[0.3em] rounded-xl hover:bg-white transition-all shadow-xl shadow-spinecho-accent/10"
                  >
                    Discuss Partnership
                  </button>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}