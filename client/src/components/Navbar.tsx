import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import lockup from '../assets/brand/lockup-white.svg';
import { NAV_SECTIONS } from '../lib/sections';
import { useActiveSection } from '../hooks/useActiveSection';
import { scrollToCenter } from '../lib/scroll';

const SECTION_IDS = NAV_SECTIONS.map((s) => s.id);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-ink/80 backdrop-blur-md">
      <div className="wrap flex h-[68px] items-center justify-between gap-6">
        <a href="#overview" className="flex shrink-0 items-center" aria-label="MeshMesh from Salesforce">
          <img
            src={lockup}
            alt="MeshMesh from Salesforce"
            className="h-9 w-auto max-w-none shrink-0 sm:h-11"
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`font-mono text-[0.7rem] uppercase tracking-[0.12em] transition-colors ${
                active === s.id ? 'text-fg' : 'text-muted hover:text-fg'
              }`}
            >
              {s.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#demo-video"
            onClick={(e) => scrollToCenter(e, 'demo-video')}
            className="btn btn-primary hidden sm:inline-flex"
          >
            See it in action <span aria-hidden>→</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-fg lg:hidden"
          >
            {open ? '[ close ]' : '[ menu ]'}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-[68px] z-40 bg-ink lg:hidden"
          >
            <div className="flex flex-col divide-y divide-line border-t border-line">
              {NAV_SECTIONS.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between px-6 py-5 font-mono text-sm uppercase tracking-[0.12em] text-muted"
                >
                  {s.label}
                  <span aria-hidden className="text-coral">
                    →
                  </span>
                </a>
              ))}
            </div>
            <a
              href="#demo-video"
              onClick={(e) => {
                e.preventDefault();
                setOpen(false);
                // defer until the body scroll-lock is released
                setTimeout(() => {
                  document
                    .getElementById('demo-video')
                    ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 60);
              }}
              className="btn btn-primary mx-6 mt-6 w-[calc(100%-3rem)]"
            >
              See it in action →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
