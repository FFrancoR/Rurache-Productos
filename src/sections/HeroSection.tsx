'use client';

import React from 'react';
import Image from 'next/image';
import { WHATSAPP_FULL_URL, INSTAGRAM_URL } from '@/lib/constants';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import licorImage from '../../public/bailey-250cc.webp';
import { IoCartOutline } from 'react-icons/io5';

export default function HeroSection() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-heading"
      className="relative w-full min-h-svh flex items-stretch bg-[var(--color-dark-brown)] overflow-hidden"
    >
      {/* ── Imagen de fondo mobile (se oculta en lg+) ── */}
      <div className="lg:hidden absolute inset-0 z-0">
        <Image
          src={licorImage}
          alt="Licores artesanales Rurache"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Overlay denso para legibilidad del texto */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(47,26,18,0.72)] via-[rgba(47,26,18,0.65)] to-[rgba(47,26,18,0.88)]" />
      </div>

      {/* ── Columna izquierda: contenido ── */}
      <div className="relative z-10 flex flex-col justify-center px-8 sm:px-12 lg:px-20 py-32 w-full lg:w-[52%] xl:w-[48%]">

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8">
          <span className="block w-10 h-px bg-[var(--color-terracotta-light)] opacity-70" />
          <span className="font-body text-[var(--color-nude)] text-xs uppercase tracking-[0.2em] font-semibold">
            Hurlingham · Buenos Aires
          </span>
        </div>

        {/* Headline */}
        <h1
          id="hero-heading"
          className="font-display font-bold text-[var(--color-cream)] leading-[1.05] mb-6"
          style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5rem)' }}
        >
          Sabores caseros,<br />
          <span className="text-[var(--color-terracotta-light)] italic">hechos con el alma.</span>
        </h1>

        {/* Bajada */}
        <p
          className="font-body text-[var(--color-cream)] opacity-95 max-w-md mb-4 leading-relaxed"
          style={{ fontSize: 'clamp(1rem, 1.6vw, 1.2rem)' }}
        >
          Licores, dulces y conservas artesanales elaborados por Rubén Rachetti.
          Cada producto lleva tiempo, cuidado y mucha pasión.
        </p>

        {/* Marca integrada con separador */}
        <p className="font-display text-[var(--color-nude)] text-sm tracking-[0.3em] uppercase mb-12 opacity-60">
          — Rurache
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3">

          {/* Primario — Ver productos */}
          <a
            href="#productos"
            className="group relative inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 rounded-full font-body font-semibold text-base text-white overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-cta)]"
            style={{ background: 'linear-gradient(135deg, var(--color-terracotta), var(--color-terracotta-dark))' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <IoCartOutline className="w-5 h-5 relative z-10 shrink-0" />
            <span className="relative z-10">Ver productos</span>
          </a>

          {/* WhatsApp */}
          <a
            href={WHATSAPP_FULL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 rounded-full font-body font-semibold text-base text-white overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-green)]"
            style={{ background: 'linear-gradient(135deg, var(--color-whatsapp), var(--color-whatsapp-dark))' }}
          >
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <FaWhatsapp className="w-5 h-5 relative z-10 shrink-0" />
            <span className="relative z-10">WhatsApp</span>
          </a>

          {/* Instagram */}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 rounded-full font-body font-semibold text-base text-white overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(225,48,108,0.4)]"
            style={{ background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)' }}
          >
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <FaInstagram className="w-5 h-5 relative z-10 shrink-0" />
            <span className="relative z-10">Instagram</span>
          </a>

        </div>

        {/* Detalle decorativo inferior */}
        <div className="hidden lg:flex items-center gap-4 mt-16 opacity-40">
          <span className="block w-16 h-px bg-nude" />
          <span className="font-body text-nude text-xs tracking-widest uppercase">
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 text-nude"
            style={{ animation: 'bounce-y 2s ease-in-out infinite' }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </div>

      {/* ── Columna derecha: imagen ── */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[52%] xl:w-[55%]">
        {/* Imagen de fondo */}
        <Image
          src={licorImage}
          alt="Licores artesanales Rurache"
          fill
          priority
          sizes="55vw"
          className="object-cover object-center"
        />

        {/* Fade lateral hacia el contenido — la transición entre columnas */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-dark-brown)] via-[rgba(47,26,18,0.35)] to-transparent" />

        {/* Vignette sutil en bordes */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(47,26,18,0.3)] via-transparent to-[rgba(47,26,18,0.5)]" />

        {/* Badge flotante artesanal */}
        <div className="absolute bottom-12 right-10 flex flex-col items-center justify-center w-28 h-28 rounded-full border border-[rgba(201,167,126,0.35)] bg-[rgba(47,26,18,0.55)] backdrop-blur-sm text-center">
          <span className="font-display text-[var(--color-nude)] text-[0.6rem] uppercase tracking-widest leading-tight">
            Hecho<br />a mano
          </span>
          <span className="block w-8 h-px bg-[var(--color-terracotta-light)] opacity-50 my-1.5" />
          <span className="font-display text-[var(--color-cream)] text-[0.6rem] uppercase tracking-widest leading-tight">
            Hurlingham
          </span>
        </div>
      </div>

      {/* Scroll indicator mobile */}
      <div
        className="lg:hidden absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        style={{ animation: 'bounce-y 2s ease-in-out infinite' }}
      >
        <a
          href="#productos"
          aria-label="Desplazarse a los productos"
          className="text-[var(--color-cream)] opacity-60 hover:opacity-90 transition-opacity p-2 block"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </a>
      </div>
    </section>
  );
}