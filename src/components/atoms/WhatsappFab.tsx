'use client';

import React from 'react';
import { useScrolled } from '@/hooks/useScrolled';
import { WHATSAPP_FULL_URL } from '@/lib/constants';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsappFab() {
  const isVisible = useScrolled(200);

  return (
    <a
      href={WHATSAPP_FULL_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[var(--color-whatsapp)] text-white rounded-full shadow-[var(--shadow-green)] transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      } hover:bg-[var(--color-whatsapp-dark)] hover:scale-110`}
      style={{ animation: isVisible ? 'pulse-green 2s infinite' : 'none' }}
    >
      <FaWhatsapp className="w-5 h-5 relative z-10 shrink-0" />
    </a>
  );
}
