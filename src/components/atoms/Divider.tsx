import React from 'react';

export default function Divider() {
  return (
    <div className="flex items-center justify-center py-8 opacity-60">
      <div className="flex-1 max-w-[100px] h-px bg-[var(--color-nude)]"></div>
      <div className="mx-4 text-[var(--color-nude)] text-xl leading-none">◆</div>
      <div className="flex-1 max-w-[100px] h-px bg-[var(--color-nude)]"></div>
    </div>
  );
}
