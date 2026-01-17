"use client";

import React from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Problem from "../components/Problem";
import Advantage from "../components/Advantage";
import ProductionReady from "../components/ProductionReady";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="bg-spinecho-dark min-h-screen text-white font-sans overflow-x-hidden">
      {/* 1. Global Navigation */}
      <Navbar />

      {/* 2. The Hook: "Evolution" Headline + "See The Physics" Trigger */}
      <Hero />

      {/* 3. The Context: Industry blind spots and uncertainty */}
      <Problem />
      
      {/* 4. The Shift: Molecular truth vs Correlation models */}
      <Advantage />

      {/* 5. The Proof: Field Pilot Ready unit on pallet */}
      <ProductionReady />

      {/* 6. Global Brand Lockup */}
      <Footer />
    </main>
  );
}