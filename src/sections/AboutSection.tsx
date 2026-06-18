'use client';

import React from 'react';
import Image from 'next/image';
import SectionTag from '@/components/atoms/SectionTag';
import { WHATSAPP_FULL_URL } from '@/lib/constants';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { FaWhatsapp } from 'react-icons/fa';

export default function AboutSection() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="sobre-mi"
      aria-labelledby="about-heading"
      className="bg-[var(--color-surface-warm)] py-[var(--spacing-section-y)] px-6 overflow-hidden"
    >
      <div
        ref={revealRef}
        className="reveal max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center"
      >

        {/* ── Columna imagen ── */}
        <div className="relative order-2 md:order-1">
          {/* Marco decorativo desplazado */}
          <div className="absolute -inset-3 rounded-[var(--radius-image)] border border-[rgba(169,78,53,0.15)] -z-10 translate-x-3 translate-y-3" />

          <div className="relative aspect-[4/5] w-full max-w-sm mx-auto md:max-w-none rounded-[var(--radius-image)] overflow-hidden shadow-[var(--shadow-card)]">
            <Image
              src="/foto-ruben.webp"
              alt="Rubén Rachetti, creador de Rurache"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />

            {/* Overlay sutil en la parte inferior */}
            <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[rgba(47,26,18,0.35)] to-transparent" />

            {/* Firma flotante — fondo para mejor contraste */}
            <div className="absolute bottom-5 left-5">
              <div className="inline-block bg-[rgba(47,26,18,0.6)] backdrop-blur-sm rounded-md px-3 py-2">
                <p className="font-display italic text-[var(--color-cream)] text-xl leading-tight">
                  Rubén Rachetti
                </p>
                <p className="font-body text-[var(--color-nude)] text-xs uppercase tracking-widest mt-0.5">
                  Fundador · Rurache
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Columna contenido ── */}
        <div className="flex flex-col items-start order-1 md:order-2">
          <SectionTag text="Sobre mí" />

          <h2
            id="about-heading"
            className="font-display font-bold text-[var(--color-dark-brown)] leading-tight mt-4 mb-8"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
          >
            Hola, soy Rubén.
          </h2>

          {/* Cita destacada */}
          <blockquote className="relative pl-5 border-l-2 border-[var(--color-terracotta-light)] mb-8">
            <p className="font-display italic text-[var(--color-terracotta-dark)] text-lg leading-snug opacity-90">
              "Detrás de cada producto hay pruebas, ajustes y muchas ganas de lograr algo que realmente valga la pena."
            </p>
          </blockquote>

          <div className="space-y-4 font-body text-[var(--color-warm-brown)] leading-relaxed text-base opacity-90 mb-10">
            <p>
              Desde siempre disfruté la cocina y todo lo que implica crear algo rico para compartir.
              Me gusta experimentar, probar combinaciones y dedicar el tiempo necesario para encontrar
              exactamente el sabor que tengo en mente.
            </p>
            <p>
              La idea de empezar con estos productos artesanales nació de esa pasión: transformar lo que
              disfruto hacer en una forma de acercar sabores caseros y de calidad a otras personas.
              Cada elaboración lleva dedicación, paciencia y mucho cariño.
            </p>
          </div>

          <a
            href={WHATSAPP_FULL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-full font-body font-semibold text-base text-white overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-green)]"
            style={{ background: 'linear-gradient(135deg, var(--color-whatsapp), var(--color-whatsapp-dark))' }}
          >
            {/* Shimmer */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

            {/* Ícono WhatsApp */}
            <FaWhatsapp className="w-5 h-5 relative z-10 shrink-0" />
            <span className="relative z-10">Escribime por WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}