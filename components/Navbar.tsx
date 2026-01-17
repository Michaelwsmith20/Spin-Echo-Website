"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MasterLogo } from './Brand';
import { useBooking } from '../context/BookingContext';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openModal } = useBooking();

  const navLinks = [
    { name: 'Product', href: '/product' },
    { name: 'Use Case', href: '/usecase' },
    { name: 'Results', href: '/results' },
    { name: 'Data', href: '/data' },
    { name: 'Opportunities', href: '/opportunities' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-[#050608]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 lg:h-28 flex items-center justify-between">
        
        {/* BRAND IDENTITY */}
        <Link href="/" className="flex items-center scale-75 md:scale-90 origin-left">
          <MasterLogo />
        </Link>

        {/* DESKTOP LINKS - Hidden on Mobile */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className={`text-[10px] xl:text-xs font-mono uppercase tracking-[0.25em] transition-all duration-300 relative py-2 ${
                pathname === link.href ? 'text-spinecho-accent font-bold' : 'text-spinecho-slate hover:text-white'
              }`}
            >
              {link.name}
              {pathname === link.href && (
                <div className="absolute bottom-0 left-0 w-full h-px bg-spinecho-accent animate-in fade-in" />
              )}
            </Link>
          ))}
        </div>

        {/* ACTION AREA */}
        <div className="flex items-center gap-4">
          <button 
            onClick={openModal}
            className="hidden sm:block px-6 py-2.5 border border-spinecho-accent/40 text-spinecho-accent text-[10px] font-mono uppercase tracking-widest rounded-lg hover:bg-spinecho-accent hover:text-[#050608] transition-all"
          >
            Book a Call
          </button>
          
          {/* MOBILE TOGGLE */}
          <button 
            className="lg:hidden text-spinecho-accent p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE OVERLAY */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0C10] border-b border-white/10 p-8 flex flex-col gap-8 animate-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-sm font-mono uppercase tracking-[0.3em] ${
                pathname === link.href ? 'text-spinecho-accent' : 'text-white/60'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button 
            onClick={() => { setIsMobileMenuOpen(false); openModal(); }} 
            className="w-full py-5 bg-spinecho-accent text-[#050608] font-black uppercase text-xs tracking-widest rounded-xl"
          >
            Book a Call
          </button>
        </div>
      )}
    </nav>
  );
}