"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBooking } from '../context/BookingContext';

interface PartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PartnerModal({ isOpen, onClose }: PartnerModalProps) {
  const { openModal: openBooking } = useBooking();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[120] flex justify-end">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 25, stiffness: 200 }} className="relative w-full max-w-2xl bg-[#0A0C10] border-l border-white/10 h-full shadow-2xl overflow-y-auto p-8 lg:p-12">
            <div className="flex justify-between items-start mb-12 text-left">
              <div>
                <span className="text-spinecho-accent font-mono text-[10px] uppercase tracking-[0.3em] block mb-4">Partner Briefing {"//"} Service Evolution</span>
                <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">Upgrade the Measurement <br /> Service Model.</h2>
                <p className="text-spinecho-slate mt-4 italic">From physical separation to physics based flow intelligence.</p>
              </div>
              <button onClick={onClose} className="text-spinecho-slate hover:text-white font-mono text-[10px] uppercase tracking-widest bg-white/5 px-3 py-1 rounded">Close [x]</button>
            </div>
            <div className="space-y-16 text-left">
              <section>
                <h3 className="text-white font-bold uppercase text-[10px] tracking-widest mb-6 flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-red-500/50" /> The Operational Burden</h3>
                <p className="text-spinecho-slate leading-relaxed mb-6">Tank based separation units have served the industry well, but they carry growing operational and commercial burdens that impact service margins:</p>
                <ul className="space-y-4 text-white/90 text-sm">
                  <li className="flex gap-4 items-start"><span className="text-spinecho-accent font-mono mt-1">01</span>Large, heavy assets that are costly to transport, maintain, and certify.</li>
                  <li className="flex gap-4 items-start"><span className="text-spinecho-accent font-mono mt-1">02</span>Safety exposure from pressurized vessels and frequent manual intervention.</li>
                  <li className="flex gap-4 items-start"><span className="text-spinecho-accent font-mono mt-1">03</span>Limited temporal resolution, especially in transient or wet gas conditions.</li>
                </ul>
              </section>
              <section className="glass-panel p-8 bg-white/[0.02] border-white/5">
                <h3 className="text-white font-bold uppercase text-[10px] tracking-widest mb-8">Evolution of Philosophy</h3>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-spinecho-slate font-mono text-[9px] uppercase tracking-widest mb-4">Legacy Separation</h4>
                    <ul className="space-y-3 text-[11px] text-white/50 font-medium">
                      <li>{"//"} Bulky, heavy equipment</li>
                      <li>{"//"} Regular vessel inspection</li>
                      <li>{"//"} Batch style snapshots</li>
                      <li>{"//"} High logistics overhead</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-spinecho-accent font-mono text-[9px] uppercase tracking-widest mb-4">Spin Echo NMR</h4>
                    <ul className="space-y-3 text-[11px] text-white font-medium">
                      <li>{"//"} Compact, mobile systems</li>
                      <li>{"//"} Zero radioactive sources</li>
                      <li>{"//"} Continuous data streams</li>
                      <li>{"//"} Rapid, unattended operation</li>
                    </ul>
                  </div>
                </div>
              </section>
              <section className="border-l-2 border-spinecho-accent/30 pl-8">
                <h3 className="text-white font-bold text-xl mb-4">A partnership model, not just hardware.</h3>
                <p className="text-spinecho-slate leading-relaxed text-sm mb-6">The goal is not to replace your service. It is to future proof it. Spin Echo works with service providers as technology partners, offering training, co deployment models, and configurable system architectures.</p>
                <div className="bg-spinecho-accent/5 border border-spinecho-accent/20 p-6 rounded-xl">
                  <p className="text-white font-bold text-sm mb-2">Ready to evolve beyond the tank?</p>
                  <p className="text-spinecho-slate text-xs mb-6">Discuss how to integrate Spin Echo NMR into your existing service workflows.</p>
                  <button onClick={() => { onClose(); openBooking(); }} className="w-full py-4 bg-spinecho-accent text-white font-bold uppercase text-[10px] tracking-[0.3em] rounded hover:bg-blue-600 transition-all">Discuss a Service Partnership</button>
                </div>
              </section>
            </div>
            <div className="mt-20 pt-10 border-t border-white/5 text-[9px] font-mono text-spinecho-slate uppercase tracking-widest">Spin Echo Metrology {"//"} Internal Partner Protocol</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}