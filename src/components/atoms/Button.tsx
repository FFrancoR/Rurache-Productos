import React from 'react';

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'whatsapp';
  href?: string;
  children: React.ReactNode;
  className?: string;
  target?: '_blank' | '_self';
  rel?: string;
  'aria-label'?: string;
}

export default function Button({
  variant,
  href,
  children,
  className = '',
  target,
  rel,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const baseClasses = `btn btn-${variant} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={baseClasses} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
