import React from 'react';

interface BadgeProps {
  label: string;
}

export default function Badge({ label }: BadgeProps) {
  return (
    <span className="inline-block bg-[var(--color-cream-dark)] text-[var(--color-olive)] border border-[rgba(111,116,75,0.18)] text-xs font-semibold px-3 py-1 rounded-full">
      {label}
    </span>
  );
}
