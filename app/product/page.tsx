"use client";

import React, { useState } from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProductHardware from "../../components/ProductHardware";
import Benefits from "../../components/Benefits";
import ProductSpecs from "../../components/ProductSpecs";
import GenerationComparison from "../../components/GenerationComparison";
import ExplainerModal from "../../components/ExplainerModal";

export default function ProductPage() {
  const [isProcessOpen, setIsProcessOpen] = useState(false);

  return (
    <main className="bg-spinecho-dark min-h-screen text-white font-sans overflow-x-hidden">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-48 pb-20 px-6 bg-gradient-to-b from-spinecho-accent/5 to-transparent">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 text-left">
          <div className="max-w-2xl">
            <div className="inline-block px-3 py-1 mb-8 border border-spinecho-accent/30 bg-spinecho-accent/5 rounded-full">
              <span className="text-xs font-mono text-spinecho-accent uppercase tracking-[0.2em]">Technical Architecture</span>
            </div>
            <h1 className="text-5xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-none uppercase">Product <br /><span className="text-spinecho-accent">Architecture.</span></h1>
            <p className="text-xl text-spinecho-slate leading-relaxed">The Spin Echo NMR flow meter is a modular metrology system designed for long term measurement integrity in wet gas and multiphase environments.</p>
          </div>
          <div className="md:pt-4">
             <button onClick={() => setIsProcessOpen(true)} className="px-8 py-4 bg-spinecho-accent text-[#050608] font-black rounded-xl shadow-xl shadow-spinecho-accent/30 hover:scale-105 transition-all uppercase tracking-widest text-xs flex items-center gap-3">
              See The Process
              <div className="w-5 h-5 bg-black/10 rounded-full flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3 stroke-black" strokeWidth="3"><path d="M5 12h14m-4-4l4 4-4 4" /></svg>
              </div>
            </button>
          </div>
        </div>
      </section>

      <ProductHardware />
      <Benefits />
      <ProductSpecs />
      <GenerationComparison />
      <Footer />

      <ExplainerModal isOpen={isProcessOpen} onClose={() => setIsProcessOpen(false)} />
    </main>
  );
}