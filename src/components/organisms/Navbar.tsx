'use client';

import React, { useState, useEffect } from 'react';
import { useScrolled } from '@/hooks/useScrolled';
import NavLink from '@/components/molecules/NavLink';
import { WHATSAPP_FULL_URL } from '@/lib/constants';

export default function Navbar() {
  const isScrolled = useScrolled(50);
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'navbar-scrolled py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <a 
          href="#inicio" 
          className={`font-display text-2xl font-bold tracking-[0.2em] transition-colors ${
            isScrolled ? 'text-[var(--color-dark-brown)]' : 'text-white drop-shadow-md'
          }`}
          onClick={() => setMenuOpen(false)}
        >
          RURACHE
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <div className={`flex items-center gap-6 ${isScrolled ? '' : '[&>a]:text-white [&>a]:drop-shadow-md [&>a:hover]:text-[var(--color-cream)]'}`}>
            <NavLink href="#inicio" label="Inicio" />
            <NavLink href="#productos" label="Productos" />
            <NavLink href="#sobre-mi" label="Sobre mí" />
            <NavLink href="#contacto" label="Contacto" />
          </div>
          
          <a
            href={WHATSAPP_FULL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary !px-5 !py-2 !text-sm"
          >
            WhatsApp
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className={`md:hidden p-2 -mr-2 transition-colors ${
            isScrolled || menuOpen ? 'text-[var(--color-dark-brown)]' : 'text-white drop-shadow-md'
          } z-50`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>

      </div>

      {/* Mobile Menu Drawer */}
      <div 
        className={`fixed inset-0 bg-[rgba(47,26,18,0.55)] backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMenuOpen(false)}
      >
        <div 
          className={`absolute right-0 top-0 bottom-0 w-3/4 max-w-sm bg-[var(--color-surface)] shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex-1 overflow-y-auto py-24 px-8 flex flex-col gap-6">
            <nav className="flex flex-col gap-6 text-xl">
              <NavLink href="#inicio" label="Inicio" onClick={() => setMenuOpen(false)} />
              <NavLink href="#productos" label="Productos" onClick={() => setMenuOpen(false)} />
              <NavLink href="#sobre-mi" label="Sobre mí" onClick={() => setMenuOpen(false)} />
              <NavLink href="#contacto" label="Contacto" onClick={() => setMenuOpen(false)} />
            </nav>
            
            <div className="mt-8 pt-8 border-t border-[var(--color-cream-dark)]">
              <a
                href={WHATSAPP_FULL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp w-full !py-4"
                onClick={() => setMenuOpen(false)}
              >
                Escribir por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
