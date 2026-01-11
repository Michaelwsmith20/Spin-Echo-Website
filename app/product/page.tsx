"use client";

import React from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProductHardware from "../../components/ProductHardware";
import Benefits from "../../components/Benefits";
import ProductSpecs from "../../components/ProductSpecs";
import GenerationComparison from "../../components/GenerationComparison";

export default function ProductPage() {
  return (
    <main className="bg-spinecho-dark min-h-screen">
      {/* Global Navigation */}
      <Navbar />
      
      {/* 1. Product Hero */}
      <section className="pt-48 pb-12 px-6">
        <div className="max-w-7xl mx-auto text-left">
          <div className="inline-block px-3 py-1 mb-8 border border-spinecho-accent/30 bg-spinecho-accent/5 rounded-full">
            <span className="text-xs font-mono text-spinecho-accent uppercase tracking-[0.2em]">
              Technical Documentation
            </span>
          </div>
          <h1 className="text-5xl lg:text-8xl font-bold text-white mb-8 tracking-tight">
            Product <span className="text-spinecho-accent">Architecture.</span>
          </h1>
          <p className="text-xl text-spinecho-slate max-w-2xl leading-relaxed">
            The Spin Echo NMR flow meter is a modular metrology system designed for 
            long term measurement integrity in wet gas and multiphase environments.
          </p>
        </div>
      </section>

      {/* 2. Modular Breakdown of Hardware */}
      {/* This component shows the 4 physical modules in a Z pattern */}
      <ProductHardware />

      {/* 3. Operational Capability (Reinstated Benefits Section) */}
      {/* This explains the commercial and safety value of the hardware */}
      <Benefits />

      {/* 4. Technical Specification Table */}
      {/* This is the high density metrology data sheet */}
      <ProductSpecs />

      {/* 5. Technological Evolution Section */}
      {/* This is the new button based section that opens the comparison slider */}
      <GenerationComparison />

      {/* Global Brand Lockup */}
      <Footer />
    </main>
  );
}