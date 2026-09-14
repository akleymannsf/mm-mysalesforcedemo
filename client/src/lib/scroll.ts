import type { MouseEvent } from 'react';

/**
 * Smooth-scroll an element to the vertical center of the viewport.
 * Used by the "See it in action" CTAs so the demo video lands centered.
 */
export function scrollToCenter(e: MouseEvent<HTMLAnchorElement>, id: string) {
  const el = document.getElementById(id);
  if (!el) return; // fall back to native anchor jump
  e.preventDefault();
  el.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
