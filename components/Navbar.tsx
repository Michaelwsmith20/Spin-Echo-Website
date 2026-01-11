"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MasterLogo } from './Brand';
import { useBooking } from '../context/BookingContext';

export default function Navbar() {
  const pathname = usePathname();
  const { openModal } = useBooking();

  const navLinks = [
    { name: 'Product', href: '/product' },
    { name: 'Use Case', href: '/usecase' },
    { name: 'Results', href: '/results' },
    { name: 'Data', href: '/data' },
    { name: 'Opportunities', href: '/opportunities' }, // NEW TAB
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-spinecho-dark/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        
        <Link href="/" className="flex items-center scale-75 lg:scale-90 origin-left">
          <MasterLogo />
        </Link>

        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`text-xs font-mono uppercase tracking-[0.25em] transition-all duration-300 relative py-2 ${
                  isActive ? 'text-spinecho-accent font-bold' : 'text-spinecho-slate hover:text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <div className="absolute bottom-0 left-0 w-full h-px bg-spinecho-accent animate-in fade-in zoom-in-50" />
                )}
              </Link>
            );
          })}
        </div>

        <button 
          onClick={openModal}
          className="px-6 py-2.5 border border-spinecho-accent/40 text-spinecho-accent text-[10px] font-mono uppercase tracking-widest rounded-lg hover:bg-spinecho-accent hover:text-white transition-all duration-300"
        >
          Book a Call
        </button>
      </div>
    </nav>
  );
}