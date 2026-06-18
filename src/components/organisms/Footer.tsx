'use client';

import React from 'react';
import NavLink from '@/components/molecules/NavLink';
import SocialButton from '@/components/molecules/SocialButton';
import { INSTAGRAM_URL, WHATSAPP_FULL_URL } from '@/lib/constants';
import { FaInstagram } from 'react-icons/fa6';
import { FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-dark-brown)] text-[var(--color-cream)]">

      {/* ── Cuerpo ── */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-[rgba(201,167,126,0.12)]">

          {/* Marca */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="mb-5">
              <p className="font-body text-[var(--color-nude)] text-[0.65rem] uppercase tracking-[0.22em] mb-1 opacity-70">
                Productos artesanales
              </p>
              <h2 className="font-display text-4xl font-bold tracking-widest text-white leading-none">
                RURACHE
              </h2>
            </div>
            <p className="font-body text-[var(--color-nude)] text-sm leading-relaxed max-w-[220px] opacity-75">
              Licores, dulces y conservas hechos con amor, tradición y mucha pasión en Hurlingham.
            </p>

            {/* Ornamento */}
            <div className="flex items-center gap-2 mt-6 opacity-30">
              <span className="block w-8 h-px bg-nude" />
              <span className="text-nude text-[0.5rem]">✦</span>
              <span className="block w-8 h-px bg-nude" />
            </div>
          </div>

          {/* Navegación */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-[var(--color-nude)] font-semibold mb-5 opacity-70">
              Navegación
            </h3>
            <nav className="flex flex-col gap-3 items-center md:items-start">
              {[
                { href: '#inicio', label: 'Inicio' },
                { href: '#productos', label: 'Productos' },
                { href: '#sobre-mi', label: 'Sobre mí' },
                { href: '#contacto', label: 'Contacto' },
              ].map(({ href, label }) => (
                <NavLink key={href} href={href} label={label} />
              ))}
            </nav>
          </div>

          {/* Redes */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-body text-[0.65rem] uppercase tracking-[0.2em] text-nude font-semibold mb-5 opacity-70">
              Encontranos en
            </h3>
            <div className="flex gap-3 mb-6">
              <a
                href={WHATSAPP_FULL_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-[var(--color-nude)] hover:text-white hover:bg-[var(--color-whatsapp)] hover:border-[var(--color-whatsapp)] transition-all duration-300"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-[var(--color-nude)] hover:text-white hover:border-transparent transition-all duration-300"
                onMouseEnter={e => (e.currentTarget.style.background = 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)')}
                onMouseLeave={e => (e.currentTarget.style.background = '')}
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
            <p className="font-body text-nude text-sm leading-relaxed text-center md:text-left opacity-70 max-w-50">
              Escribinos por consultas o pedidos. ¡Te respondemos rápido!
            </p>
          </div>

        </div>

        {/* ── Copyright ── */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-nude opacity-50">
          <p className="font-body text-xs tracking-wide">
            © {currentYear} Rurache · Hecho con amor en Hurlingham, Buenos Aires
          </p>
          <p className="font-display italic text-xs">
            Artesanal, siempre.
          </p>
        </div>
      </div>
    </footer>
  );
}