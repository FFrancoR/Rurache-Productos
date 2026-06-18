'use client';

import React from 'react';
import SectionTag from '@/components/atoms/SectionTag';
import TestimonialCard from '@/components/molecules/TestimonialCard';
import { testimonials } from '@/lib/testimonials';
import { WHATSAPP_FULL_URL } from '@/lib/constants';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { FaWhatsapp } from 'react-icons/fa';

export default function TestimonialsSection() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="testimonios"
      aria-labelledby="testimonials-heading"
      className="bg-[var(--color-cream)] py-[var(--spacing-section-y)] px-6"
    >
      <div ref={revealRef} className="reveal max-w-7xl mx-auto">

        {/* ── Header ── */}
        <div className="flex flex-col items-center text-center mb-16 max-w-2xl mx-auto">
          <SectionTag text="Lo que dicen" />

          <h2
            id="testimonials-heading"
            className="font-display font-bold text-[var(--color-dark-brown)] leading-tight mt-4 mb-6"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}
          >
            El sabor que<br />
            <span className="text-[var(--color-terracotta)] italic">enamora.</span>
          </h2>

          <p className="font-body text-[var(--color-warm-brown)] opacity-80 leading-relaxed text-lg">
            Mensajes que nos motivan a seguir creciendo.
          </p>

          <div className="flex items-center gap-3 mt-8 opacity-40">
            <span className="block w-12 h-px bg-[var(--color-terracotta)]" />
            <span className="text-[var(--color-terracotta)] text-xs">✦</span>
            <span className="block w-12 h-px bg-[var(--color-terracotta)]" />
          </div>
        </div>

        {/* ── Grid de capturas ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 items-start mb-16">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* ── CTA ── */}
        <div className="flex flex-col items-center text-center gap-6">
          <p className="font-body text-lg text-warm-brown opacity-80">
            ¿Ya probaste Rurache? ¡Compartí tu experiencia!
          </p>

          <a
            href={WHATSAPP_FULL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-body font-semibold text-base text-[var(--color-terracotta)] border-2 border-[var(--color-terracotta)] overflow-hidden transition-all duration-300 hover:text-white hover:-translate-y-0.5 hover:shadow-[var(--shadow-cta)]"
          >
            {/* Fill en hover */}
            <div className="absolute inset-0 bg-terracotta scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            <FaWhatsapp className="w-5 h-5 relative z-10 shrink-0" />
            <span className="relative z-10">Escribir a Rubén</span>
          </a>
        </div>

      </div>
    </section>
  );
}