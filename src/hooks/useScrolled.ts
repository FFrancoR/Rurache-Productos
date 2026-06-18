'use client';

import { useState, useEffect } from 'react';

export function useScrolled(threshold = 50): boolean {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handler = () => setScrolled(window.scrollY > threshold);
    
    // Check initial scroll position
    handler();

    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [threshold]);

  return mounted ? scrolled : false;
}
