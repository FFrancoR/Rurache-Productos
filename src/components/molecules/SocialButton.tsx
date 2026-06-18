import React from 'react';

interface SocialButtonProps {
  platform: 'whatsapp' | 'instagram';
  href: string;
  label: string;
  variant?: 'icon-only' | 'full';
}

export default function SocialButton({
  platform,
  href,
  label,
  variant = 'full',
}: SocialButtonProps) {
  const isWhatsApp = platform === 'whatsapp';
  
  const icon = isWhatsApp ? (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z" />
      <path d="M12.031 2c-5.514 0-10 4.486-10 10 0 1.954.555 3.774 1.516 5.305l-1.547 5.695 5.823-1.528c1.488.854 3.197 1.341 5.011 1.342h.005c5.513 0 10-4.486 10-10s-4.487-10-10.008-10zm0 18.062h-.003c-1.637 0-3.239-.44-4.639-1.271l-.333-.198-3.447.904.921-3.361-.217-.346c-.913-1.455-1.395-3.149-1.396-4.887.001-5.029 4.093-9.12 9.124-9.12 2.438 0 4.73 .95 6.452 2.673 1.722 1.723 2.671 4.015 2.671 6.452-.001 5.031-4.094 9.124-9.133 9.124z" />
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );

  if (variant === 'icon-only') {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="inline-flex items-center justify-center p-2 rounded-full bg-[var(--color-surface-warm)] text-[var(--color-terracotta)] hover:bg-[var(--color-terracotta)] hover:text-white transition-colors"
      >
        {icon}
      </a>
    );
  }

  const baseClasses = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-body font-semibold transition-transform duration-200 hover:scale-105 border-2 border-transparent";
  const platformClasses = isWhatsApp
    ? "bg-[var(--color-whatsapp)] text-white shadow-[var(--shadow-green)] hover:bg-[var(--color-whatsapp-dark)]"
    : "border-[var(--color-surface)] text-[var(--color-surface)] hover:bg-[var(--color-surface)] hover:text-[var(--color-terracotta)]"; // Modified for Contact section usage

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${platformClasses}`}
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}
