'use client';

import React from 'react';
import { WHATSAPP_FULL_URL, INSTAGRAM_URL } from '@/lib/constants';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { FaWhatsapp } from 'react-icons/fa';

export default function ContactSection() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="contacto"
      aria-labelledby="contact-heading"
      className="relative bg-[var(--color-dark-brown)] py-[var(--spacing-section-y)] px-6 text-[var(--color-cream)] overflow-hidden"
    >
      {/* Textura de fondo: círculos concéntricos tenues */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.04]"
      >
        {[480, 720, 960, 1200].map((size) => (
          <span
            key={size}
            className="absolute rounded-full border border-[var(--color-nude)]"
            style={{ width: size, height: size }}
          />
        ))}
      </div>

      {/* Acento de color lateral */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[var(--color-terracotta)] to-transparent opacity-60" />

      <div
        ref={revealRef}
        className="reveal relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center"
      >

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="block w-8 h-px bg-[var(--color-terracotta-light)] opacity-60" />
          <span className="font-body text-[var(--color-nude)] text-xs uppercase tracking-[0.2em] font-semibold">
            Contacto
          </span>
          <span className="block w-8 h-px bg-[var(--color-terracotta-light)] opacity-60" />
        </div>

        {/* Headline */}
        <h2
          id="contact-heading"
          className="font-display font-bold text-white leading-tight mb-6"
          style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}
        >
          ¿Querés hacer<br />
          <span className="text-[var(--color-terracotta-light)] italic">un pedido?</span>
        </h2>

        <p className="font-body text-[var(--color-cream-dark)] opacity-75 max-w-xl leading-relaxed mb-12 text-lg">
          Escribinos directamente y con gusto te asesoramos.
          Respondemos rápido y hacemos envíos en Hurlingham y alrededores.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-14 w-full sm:w-auto">

          {/* WhatsApp */}
          <a
            href={WHATSAPP_FULL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto relative inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold rounded-full text-white bg-[var(--color-whatsapp)] overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-green)] hover:-translate-y-0.5"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <FaWhatsapp className="w-5 h-5 relative z-10 shrink-0" />
            <span className="relative z-10">Consultar por WhatsApp</span>
          </a>

          {/* Instagram */}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto relative inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold rounded-full text-[var(--color-cream)] border border-[rgba(201,167,126,0.35)] hover:border-[rgba(201,167,126,0.7)] bg-white/5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-full" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 relative z-10 shrink-0">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <span className="relative z-10">Seguir en Instagram</span>
          </a>
        </div>

        {/* Ubicación */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-[var(--color-nude)]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 text-[var(--color-terracotta-light)] shrink-0"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          <span className="font-body text-sm font-medium tracking-wide">
            Hurlingham, Buenos Aires
          </span>
        </div>

      </div>
    </section>
  );
}