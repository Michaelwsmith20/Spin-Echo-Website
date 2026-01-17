"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    title: "Nuclear Spin",
    label: "Physics 01 // Atomic State",
    desc: "At the fundamental level, hydrogen nuclei possess a quantum property known as spin. In their natural state, these spins are randomly oriented, resulting in no net magnetization.",
    image: "https://i.postimg.cc/8P5P43gL/Physics-01.png"
  },
  {
    title: "Polarisation",
    label: "Physics 02 // Alignment",
    desc: "When exposed to a strong external magnetic field, nuclear spins begin to align with that field. This alignment creates a stable, measurable magnetic reference shared across all nuclei.",
    image: "https://i.postimg.cc/c1TLQW29/Physics-02.png"
  },
  {
    title: "The Pulse",
    label: "Physics 03 // Excitation",
    desc: "A radio frequency pulse is applied at the resonant frequency of the nuclei. This pulse tips the aligned spins away from equilibrium, placing them into a coherent excited state.",
    image: "https://i.postimg.cc/dt1t6Xc8/Physics-03.png"
  },
  {
    title: "Molecular Decay",
    label: "Physics 04 // Quantification",
    desc: "As excited spins relax back toward equilibrium, they do so at rates determined by their molecular environment. Different fluids exhibit distinct relaxation behaviors, creating unique and repeatable signatures.",
    image: "https://i.postimg.cc/Mprqpktg/Physics-04.jpg" // Updated to the new high-res link
  },
  {
    title: "Signal Formation",
    label: "Physics 05 // Signal Formation",
    desc: "As nuclear spins relax, they emit a weak radio frequency signal. The combined response from all spins forms a measurable signal whose shape, timing, and decay encode information about the molecular composition of the system.",
    image: "https://i.postimg.cc/RhmG9K4K/Physics-05.png"
  }
];

export default function PhysicsModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [current, setCurrent] = useState(0);

  if (!isOpen) return null;

  const next = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prev = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/98 backdrop-blur-2xl p-4 md:p-10">
      {/* Exit Button */}
      <button 
        onClick={onClose} 
        className="absolute top-6 right-6 lg:top-10 lg:right-10 text-spinecho-slate hover:text-white font-mono text-[10px] tracking-widest uppercase z-50 bg-white/5 px-4 py-2 rounded border border-white/10 flex items-center gap-2 transition-all"
      >
        Exit Briefing <X size={16} />
      </button>

      <div className="max-w-6xl w-full relative">
        {/* Navigation Arrows */}
        <button onClick={prev} className="absolute -left-4 lg:-left-20 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white z-50 bg-black/40 hover:bg-white/10 transition-all">
          <ChevronLeft size={24} />
        </button>
        <button onClick={next} className="absolute -right-4 lg:-right-20 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white z-50 bg-black/40 hover:bg-white/10 transition-all">
          <ChevronRight size={24} />
        </button>

        {/* Content Card */}
        <div className="glass-panel overflow-hidden bg-[#0A0C10] border-white/10 shadow-2xl min-h-[550px] flex flex-col lg:flex-row">
          
          {/* Visual Side - Containing the Abstract Renders */}
          <div className="w-full lg:w-3/5 bg-black relative flex items-center justify-center border-b lg:border-b-0 lg:border-r border-white/5 p-4 lg:p-8">
            <AnimatePresence mode="wait">
              <motion.img 
                key={slides[current].image}
                src={slides[current].image} 
                alt={slides[current].title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.6 }}
                className="max-w-full max-h-full object-contain select-none"
              />
            </AnimatePresence>
          </div>

          {/* Text Side - Verbatim Technical Description */}
          <div className="w-full lg:w-2/5 p-10 lg:p-16 flex flex-col justify-center text-left bg-gradient-to-br from-white/[0.03] to-transparent">
            <span className="text-spinecho-accent font-mono text-[10px] uppercase tracking-[0.3em] mb-6 block">
              {slides[current].label}
            </span>
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-8 tracking-tight leading-none uppercase">
              {slides[current].title}
            </h3>
            <p className="text-spinecho-slate text-lg leading-relaxed mb-12 italic">
              {slides[current].desc}
            </p>

            {/* Progress Indicators */}
            <div className="flex gap-3">
              {slides.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 transition-all duration-500 rounded-full ${i === current ? 'w-12 bg-spinecho-accent' : 'w-4 bg-white/10 hover:bg-white/20'}`} 
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}