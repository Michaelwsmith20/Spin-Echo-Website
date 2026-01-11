"use client";

import React, { useState } from 'react';

export default function BookingModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [step, setStep] = useState(1);
  
  if (!isOpen) return null;

  const handleCapture = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />
      
      <div className="relative glass-panel w-full max-w-xl p-8 lg:p-12 bg-[#0F1115] border-white/10 shadow-2xl">
        <button onClick={onClose} className="absolute top-6 right-6 text-spinecho-slate hover:text-white font-mono uppercase text-[10px] tracking-widest">
          Close [x]
        </button>

        {step === 1 ? (
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Technical Consultation</h2>
            <p className="text-spinecho-slate text-sm mb-8 leading-relaxed">Please provide your details to access our scheduling calendar.</p>
            
            <form className="space-y-4" onSubmit={handleCapture}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input required type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white text-sm focus:border-spinecho-accent outline-none" />
                <input required type="email" placeholder="Work Email" className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white text-sm focus:border-spinecho-accent outline-none" />
              </div>
              <input required type="text" placeholder="Company" className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white text-sm focus:border-spinecho-accent outline-none" />
              
              <div className="relative">
                <select required className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-spinecho-slate text-sm focus:border-spinecho-accent outline-none appearance-none cursor-pointer">
                  <option value="">Select Primary Flow Challenge</option>
                  <option>Wet Gas Monitoring</option>
                  <option>Multiphase Measurement</option>
                  <option>NGL Characterisation</option>
                  <option>CCS Integration</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-spinecho-slate opacity-50">▼</div>
              </div>

              <button type="submit" className="w-full py-4 bg-spinecho-accent text-white font-bold rounded-lg hover:bg-blue-600 transition-all mt-4 uppercase tracking-widest text-xs">
                Continue to Calendar
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-spinecho-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-spinecho-accent" stroke="currentColor" strokeWidth="2.5">
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Details Captured</h2>
            <p className="text-spinecho-slate mb-10 leading-relaxed px-4">Select a time for your technical consultation with our engineering team.</p>
            
            {/* FIXED: Changed from # to a dummy link to prevent page refresh */}
            <a 
              href="https://calendly.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 border border-spinecho-accent text-spinecho-accent font-bold rounded-lg hover:bg-spinecho-accent hover:text-white transition-all uppercase tracking-widest text-xs"
            >
              Open Scheduling Calendar
            </a>
          </div>
        )}
      </div>
    </div>
  );
}