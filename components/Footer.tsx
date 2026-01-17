"use client";

import React from 'react';
import { MasterLogo } from './Brand';

export default function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-[#050608]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        
        <div className="scale-90 origin-left">
          <MasterLogo />
        </div>
        
        <div className="text-spinecho-slate text-[10px] font-mono opacity-40 uppercase tracking-widest text-center md:text-right">
          © 2026 Spin Echo Metrology Systems. All rights reserved.
        </div>
      </div>
    </footer>
  );
}