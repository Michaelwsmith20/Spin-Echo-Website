"use client";

import React from 'react';
import { useBooking } from '../context/BookingContext'; // Import context

export default function ProductionReady() {
  const { openModal } = useBooking(); // Pull the open function

  return (
    <section id="results" className="py-24 px-6 bg-spinecho-dark overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* ... (Keep your existing layout code here) ... */}

        <div className="mt-24 text-center">
          <h4 className="text-2xl font-bold text-white mb-8 tracking-tight">Ready to modernize your measurement stack?</h4>
          <button 
            onClick={openModal} // IT NOW WORKS!
            className="px-12 py-5 bg-spinecho-accent text-white font-bold rounded-xl shadow-xl shadow-spinecho-accent/20 hover:bg-blue-600 transition-all text-lg tracking-wide uppercase"
          >
            Book a Call
          </button>
        </div>
      </div>
    </section>
  );
}