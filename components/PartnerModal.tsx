"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBooking } from '../context/BookingContext';
import { X } from 'lucide-react';

export default function PartnerModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { openModal: openBooking } = useBooking();
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[120] flex justify-end">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 25, stiffness: 200 }} className="relative w-full max-w-2xl bg-[#0A0C10] border-l border-white/10 h-full shadow-2xl overflow-y-auto p-8 lg:p-12 text-left">
            <div className="flex justify-between items-start mb-12">
              <div className="text-left">
                <span className="text-spinecho-accent font-mono text-[10px] uppercase tracking-[0.3em] block mb-4">Partner Briefing {"//"} Service Evolution</span>
                <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight uppercase tracking-tighter">Upgrade the Measurement <br /> Service Model.</h2>
              </div>
              <button onClick={onClose} className="text-spinecho-slate hover:text-white font-mono text-[10px] uppercase tracking-widest bg-white/5 p-2 rounded-lg border border-white/10"><X size={16} /></button>
            </div>
            <div className="space-y-16 text-left">
              <section>
                <h3 className="text-white font-bold uppercase text-[10px] tracking-widest mb-6 flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-red-500/50" /> The Operational Burden</h3>
                <p className="text-spinecho-slate leading-relaxed mb-6">Legacy separation units carry growing burdens that impact service margins.</p>
              </section>
              <section className="border-l-2 border-spinecho-accent/30 pl-8 text-left">
                <h3 className="text-white font-bold text-xl mb-6 text-left">A partnership model, not just hardware.</h3>
                <div className="bg-spinecho-accent/5 border border-spinecho-accent/20 p-8 rounded-2xl">
                   <p className="text-white font-bold text-sm mb-6 uppercase tracking-widest">Discuss how to integrate Spin Echo NMR into your service workflows.</p>
                  <button onClick={() => { onClose(); openBooking(); }} className="w-full py-5 bg-spinecho-accent text-[#050608] font-black uppercase text-[11px] tracking-[0.3em] rounded-xl hover:bg-white transition-all shadow-xl shadow-spinecho-accent/20">Discuss a Service Partnership</button>
                </div>
              </section>
            </div>
            <div className="mt-20 pt-10 border-t border-white/5 text-[9px] font-mono text-spinecho-slate uppercase tracking-widest text-center italic opacity-40">Spin Echo Metrology {"//"} Internal Partner Protocol</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}