"use client";

import React, { useState } from 'react';
import { X, CheckCircle2, Loader2, Mail } from 'lucide-react';

export default function BookingModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [isSending, setIsSending] = useState(false);

  if (!isOpen) return null;

  // HANDLE FORM SUBMISSION TO FORMSPREE
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formspree.io/f/mgooorgz", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStep(2);
      } else {
        alert("Communication error. Please try again or contact us directly.");
      }
    } catch (error) {
      alert("System error. Please check your network connection.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6 text-left font-sans">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={onClose} />
      
      {/* Modal Container */}
      <div className="relative glass-panel w-full max-w-lg p-8 md:p-12 bg-[#0F1115] border-white/10 shadow-2xl">
        <button 
          onClick={onClose} 
          className="absolute top-6 right-6 text-spinecho-slate hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        {step === 1 ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Technical Consultation</h2>
            <p className="text-spinecho-slate text-sm mb-8 leading-relaxed">
              Submit your details to request a technical consultation or strategic briefing.
            </p>
            
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-spinecho-slate uppercase tracking-widest ml-1">Full Name</label>
                  <input required name="full_name" type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white text-sm focus:border-spinecho-accent outline-none transition-all" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-mono text-spinecho-slate uppercase tracking-widest ml-1">Work Email</label>
                  <input required name="email" type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white text-sm focus:border-spinecho-accent outline-none transition-all" />
                </div>
              </div>
              
              <div className="space-y-1">
                <label className="text-[10px] font-mono text-spinecho-slate uppercase tracking-widest ml-1">Company</label>
                <input required name="company" type="text" placeholder="Organization" className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white text-sm focus:border-spinecho-accent outline-none transition-all" />
              </div>
              
              <div className="space-y-1 relative">
                <label className="text-[10px] font-mono text-spinecho-slate uppercase tracking-widest ml-1">Primary Area of Interest</label>
                <select required name="interest" className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-spinecho-slate text-sm focus:border-spinecho-accent outline-none appearance-none cursor-pointer transition-all">
                  <option value="">Select Priority Track</option>
                  <option>Wet Gas Monitoring</option>
                  <option>Multiphase Measurement</option>
                  <option>NGL Condensates</option>
                  <option>CCS Integration</option>
                  <option>Hydrogen Blending</option>
                  <option>Technical Partnership</option>
                  <option>Strategic Investment</option>
                  <option>Service Provider Partnership</option>
                  <option>Offshore Co development</option>
                </select>
                <div className="absolute right-4 top-[3.2rem] -translate-y-1/2 pointer-events-none opacity-40 text-white">▼</div>
              </div>

              <button 
                type="submit" 
                disabled={isSending}
                className="w-full py-4 bg-spinecho-accent text-[#050608] font-black uppercase text-xs tracking-[0.2em] rounded-xl hover:bg-white transition-all mt-6 shadow-xl shadow-spinecho-accent/20 flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {isSending ? (
                  <>Initialising <Loader2 className="animate-spin" size={16} /></>
                ) : (
                  "Submit Request"
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-12 animate-in zoom-in-95 duration-500">
            <div className="w-20 h-20 bg-spinecho-accent/10 border border-spinecho-accent/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="w-10 h-10 text-spinecho-accent" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4 tracking-tight uppercase">Request Received</h2>
            <p className="text-spinecho-slate text-lg leading-relaxed px-4 mb-8">
              Thank you for your interest in Spin Echo. Our team will review your details and contact you via email to coordinate a briefing.
            </p>
            <button 
              onClick={onClose}
              className="px-12 py-4 border border-white/10 text-white font-bold uppercase text-[10px] tracking-[0.3em] rounded-xl hover:bg-white hover:text-black transition-all"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
}