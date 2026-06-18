import React from 'react';

interface NavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
}

export default function NavLink({ href, label, onClick }: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="relative text-[var(--color-warm-brown)] hover:text-[var(--color-terracotta)] font-medium transition-colors py-2 group"
    >
      {label}
      <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[var(--color-terracotta)] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
    </a>
  );
}
