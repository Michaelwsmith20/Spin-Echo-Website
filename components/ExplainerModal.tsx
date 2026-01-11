"use client";
import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  { title: "Molecular Alignment", desc: "Fluids enter a static field that aligns nuclei, creating a stable reference.", image: "https://i.postimg.cc/KzwgKKPk/step01-magnetic-alignment.jpg" },
  { title: "RF Excitation", desc: "A radio frequency pulse momentarily tips the nuclei to prepare them for sensing.", image: "https://i.postimg.cc/8CyvSXsK/step02-rf-excitation.jpg" },
  { title: "Resonance Decay", desc: "As nuclei return to stability, they emit a unique molecular resonance signal.", image: "https://i.postimg.cc/63yv5VGC/step03-resonance-decay.jpg" },
  { title: "Phase Identification", desc: "Algorithms analyze decay signatures to identify oil, gas, and water volumes.", image: "https://i.postimg.cc/d0WCYND5/step04-phase-identification.jpg" },
  { title: "Operational Data", desc: "Phase resolved insights stream directly to your existing control systems.", image: "https://i.postimg.cc/zfdhr23d/step05-operational-data.jpg" }
];

export default function ExplainerModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [current, setCurrent] = useState(0);
  if (!isOpen) return null;
  const next = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prev = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-10">
      <button onClick={onClose} className="absolute top-6 right-6 lg:top-10 lg:right-10 text-spinecho-slate hover:text-white font-mono text-[10px] tracking-widest uppercase z-50 bg-white/5 p-2 rounded-lg border border-white/10"><X size={20}/></button>
      <div className="max-w-6xl w-full relative">
        <button onClick={prev} className="absolute -left-4 lg:-left-20 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white z-50 bg-black/40"><ChevronLeft size={24}/></button>
        <button onClick={next} className="absolute -right-4 lg:-right-20 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white z-50 bg-black/40"><ChevronRight size={24}/></button>
        <div className="glass-panel overflow-hidden bg-[#0A0C10] border-white/10 shadow-2xl min-h-[500px] flex flex-col lg:flex-row">
          <div className="w-full lg:w-3/5 bg-black relative flex items-center justify-center p-4 lg:p-8 border-b lg:border-b-0 lg:border-r border-white/5">
            <img key={slides[current].image} src={slides[current].image} alt={slides[current].title} className="max-w-full max-h-full object-contain select-none" />
          </div>
          <div className="w-full lg:w-2/5 p-10 lg:p-16 flex flex-col justify-center text-left bg-[#050608]">
            <span className="text-spinecho-accent font-mono text-[10px] uppercase tracking-[0.3em] mb-4">Stage 0{current + 1}</span>
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 tracking-tight">{slides[current].title}</h3>
            <p className="text-spinecho-slate text-lg leading-relaxed mb-12 italic">{slides[current].desc}</p>
            <div className="flex gap-3">{slides.map((_, i) => (<div key={i} className={`h-1.5 transition-all duration-500 rounded-full ${i === current ? 'w-12 bg-spinecho-accent' : 'w-4 bg-white/10'}`} />))}</div>
          </div>
        </div>
      </div>
    </div>
  );
}