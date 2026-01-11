"use client";
import React, { useState } from 'react';
import { useBooking } from '../context/BookingContext';
import { X, CheckCircle2 } from 'lucide-react';

export default function BookingModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [step, setStep] = useState(1);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={onClose} />
      
      <div className="relative glass-panel w-full max-w-lg p-8 md:p-12 bg-[#0F1115] border-white/10 shadow-2xl">
        <button onClick={onClose} className="absolute top-6 right-6 text-spinecho-slate hover:text-white transition-colors">
          <X size={20} />
        </button>

        {step === 1 ? (
          <div className="text-left">
            <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Technical Consultation</h2>
            <p className="text-spinecho-slate text-sm mb-8 leading-relaxed">Provide your details to access our engineering calendar.</p>
            
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input required type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white text-sm focus:border-spinecho-accent outline-none" />
                <input required type="email" placeholder="Work Email" className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white text-sm focus:border-spinecho-accent outline-none" />
              </div>
              <input required type="text" placeholder="Company" className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white text-sm focus:border-spinecho-accent outline-none" />
              
              <div className="relative">
                <select required className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-spinecho-slate text-sm focus:border-spinecho-accent outline-none appearance-none cursor-pointer">
                  <option value="">Primary Area of Interest</option>
                  <option>Wet Gas Monitoring</option>
                  <option>Multiphase Measurement</option>
                  <option>NGL Condensates</option>
                  <option>CCS Integration</option>
                  <option>Hydrogen Blending</option>
                  <option>Technical Partnership</option>
                  <option>Strategic Investment</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">▼</div>
              </div>

              <button type="submit" className="w-full py-4 bg-spinecho-accent text-[#050608] font-black uppercase text-xs tracking-[0.2em] rounded-xl hover:bg-white transition-all mt-4">
                Continue to Calendar
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-10">
            <CheckCircle2 className="w-16 h-16 text-spinecho-accent mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Details Captured</h2>
            <p className="text-spinecho-slate mb-10 leading-relaxed">Select a slot for your technical consultation.</p>
            <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 bg-spinecho-accent text-[#050608] font-black uppercase text-xs tracking-[0.2em] rounded-xl hover:bg-white transition-all">
              Open Scheduling Calendar
            </a>
          </div>
        )}
      </div>
    </div>
  );
}