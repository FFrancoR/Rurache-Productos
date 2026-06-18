import React from 'react';
import Image from 'next/image';
import { Testimonial } from '@/types/testimonial';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  if (!testimonial.image) {
    return (
      <div className="relative w-full rounded-[var(--radius-image)] overflow-hidden bg-[var(--color-cream)] flex items-center justify-center shadow-[var(--shadow-card)] border border-[rgba(104,66,47,0.10)] py-12">
        <span className="text-4xl">⭐</span>
        {testimonial.customerName && (
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-[rgba(47,26,18,0.82)] to-transparent">
            <span className="text-white text-sm font-medium">{testimonial.customerName}</span>
          </div>
        )}
      </div>
    );
  }

  return (
    <article className="group relative aspect-[3/4] w-full rounded-[var(--radius-image)] overflow-hidden shadow-[var(--shadow-card)] border border-[rgba(104,66,47,0.10)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_56px_rgba(47,26,18,0.16)] bg-[#ece5dd]">

      <Image
        src={testimonial.image}
        alt={testimonial.alt}
        fill
        sizes="(max-width: 640px) 50vw, 25vw"
        className="object-contain transition-transform duration-700 group-hover:scale-[1.03]"
      />
    </article>
  );
}