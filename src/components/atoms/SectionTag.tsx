import React from 'react';

interface SectionTagProps {
  text: string;
}

export default function SectionTag({ text }: SectionTagProps) {
  return (
    <div className="flex items-center justify-center gap-4 mb-4">
      <span className="block w-8 h-[2px] bg-[var(--color-terracotta)] opacity-50"></span>
      <span className="uppercase tracking-widest text-[var(--color-terracotta)] font-bold text-sm">
        {text}
      </span>
      <span className="block w-8 h-[2px] bg-[var(--color-terracotta)] opacity-50"></span>
    </div>
  );
}
