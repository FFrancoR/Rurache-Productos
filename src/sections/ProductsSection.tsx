'use client';

import React from 'react';
import SectionTag from '@/components/atoms/SectionTag';
import ProductGrid from '@/components/organisms/ProductGrid';
import { products } from '@/lib/products';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function ProductsSection() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="productos"
      aria-labelledby="products-heading"
      className="bg-[var(--color-cream)] py-[var(--spacing-section-y)] px-6"
    >
      <div ref={revealRef} className="reveal max-w-7xl mx-auto">

        {/* ── Header ── */}
        <div className="flex flex-col items-center text-center mb-20 max-w-2xl mx-auto">
          <SectionTag text="Lo que hacemos" />

          <h2
            id="products-heading"
            className="font-display font-bold text-[var(--color-dark-brown)] leading-tight mt-4 mb-6"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}
          >
            Cada producto,<br />
            <span className="text-[var(--color-terracotta)] italic">una historia.</span>
          </h2>

          <p className="font-body text-[var(--color-warm-brown)] opacity-80 leading-relaxed text-lg">
            Elaborados de forma artesanal con ingredientes cuidadosamente elegidos
            y el tiempo que cada receta merece.
          </p>

          {/* Ornamento de sección */}
          <div className="flex items-center gap-3 mt-8 opacity-40">
            <span className="block w-12 h-px bg-[var(--color-terracotta)]" />
            <span className="text-[var(--color-terracotta)] text-xs">✦</span>
            <span className="block w-12 h-px bg-[var(--color-terracotta)]" />
          </div>
        </div>

        {/* ── Grid ── */}
        <ProductGrid products={products} />

      </div>
    </section>
  );
}