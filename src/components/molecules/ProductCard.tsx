import React from 'react';
import Image from 'next/image';
import { Product } from '@/types/product';
import Badge from '@/components/atoms/Badge';
import { FaWhatsapp } from 'react-icons/fa';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const whatsappMsg = `Hola Rubén! Me interesa el ${encodeURIComponent(
    `${product.name}${product.name === 'Baileys Artesanal'
      ? product.volume === '1000 ml'
        ? ' de 1 litro'
        : ' de 250 ml'
      : ` ${product.volume}`
    }`
  )}`;
  const whatsappUrl = `https://wa.me/5491131362436?text=${whatsappMsg}`;

  return (
    <article className="group relative flex flex-col bg-[var(--color-surface)] rounded-[var(--radius-card)] overflow-hidden border border-[rgba(104,66,47,0.1)] shadow-[var(--shadow-card)] transition-all duration-500 hover:shadow-[0_24px_56px_rgba(47,26,18,0.16)] hover:-translate-y-1">

      <div className="relative w-full aspect-[4/5] overflow-hidden bg-gradient-to-b from-[#f7f2eb] to-[#ede5d8]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain p-6 transition-transform duration-700 group-hover:scale-[1.06]"
        />

        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[var(--color-surface)] via-transparent to-transparent" />

        <div className="absolute top-4 left-4">
          <Badge label={product.category} />
        </div>
      </div>

      <div className="flex flex-col flex-1 px-6 pt-4 pb-6 gap-3">

        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display font-bold text-[var(--color-dark-brown)] text-xl leading-tight">
            {product.name}
          </h3>
          <span className="font-body text-xs text-[var(--color-warm-brown)] opacity-60 uppercase tracking-wider mt-1 shrink-0">
            {product.volume}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="block h-px flex-1 bg-gradient-to-r from-[var(--color-terracotta-light)] via-[rgba(169,78,53,0.2)] to-transparent opacity-50" />
          <span className="text-[var(--color-terracotta-light)] text-xs opacity-40">✦</span>
        </div>

        <p className="font-body text-sm leading-relaxed text-[var(--color-warm-brown)] opacity-80 flex-1">
          {product.description}
        </p>

        {/* Precio + CTA */}
        <div className="flex items-center justify-between mt-2">
          <span className="font-display font-bold text-[var(--color-terracotta)] text-2xl">
            {product.price || 'Consultá'}
          </span>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Consultar por ${product.name} via WhatsApp`}
            className="group/btn relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--color-whatsapp)] text-white text-sm font-semibold overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-green)] hover:-translate-y-0.5"
          >
            {/* Shimmer */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
            <FaWhatsapp className="w-5 h-5 relative z-10 shrink-0" />
            <span className="relative z-10">Consultar</span>
          </a>
        </div>
      </div>
    </article>
  );
}