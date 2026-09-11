import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import logo from '../assets/logo.png';
import { NAV_SECTIONS } from '../lib/sections';
import { useActiveSection } from '../hooks/useActiveSection';

const SECTION_IDS = NAV_SECTIONS.map((s) => s.id);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-xl pt-3 sm:pt-4">
        <motion.nav
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className={`flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 sm:px-5 ${
            scrolled
              ? 'glass shadow-card'
              : 'border border-transparent bg-white/40 backdrop-blur-md'
          }`}
        >
          {/* Brand */}
          <a href="#overview" className="group flex items-center gap-2.5" aria-label="MeshMesh home">
            <span className="flex h-10 items-center">
              <img
                src={logo}
                alt="MeshMesh from Salesforce"
                className="h-6 w-auto sm:h-7"
              />
            </span>
            <span className="hidden rounded-full border border-brand-blue/20 bg-brand-blue/5 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-brand-blue sm:inline">
              Product
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_SECTIONS.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={`relative rounded-full px-3.5 py-2 text-sm font-semibold transition-colors ${
                    active === s.id
                      ? 'text-brand-blue'
                      : 'text-brand-navy/70 hover:text-brand-navy'
                  }`}
                >
                  {s.label}
                  {active === s.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-brand-blue/10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a href="#demo" className="btn-primary hidden sm:inline-flex">
              Try Easy Mode
              <span aria-hidden>→</span>
            </a>

            {/* Hamburger */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand-navy/10 bg-white/70 text-brand-navy lg:hidden"
            >
              <div className="relative h-4 w-5">
                <span
                  className={`absolute left-0 top-0 h-0.5 w-5 rounded bg-current transition-all duration-300 ${
                    open ? 'top-1.5 rotate-45' : ''
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 h-0.5 w-5 rounded bg-current transition-all duration-300 ${
                    open ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`absolute left-0 top-3 h-0.5 w-5 rounded bg-current transition-all duration-300 ${
                    open ? 'top-1.5 -rotate-45' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-brand-navy/30 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="container-xl relative pt-24"
            >
              <div className="glass rounded-3xl p-4 shadow-float">
                <ul className="flex flex-col">
                  {NAV_SECTIONS.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        onClick={() => setOpen(false)}
                        className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-semibold transition-colors ${
                          active === s.id
                            ? 'bg-brand-blue/10 text-brand-blue'
                            : 'text-brand-navy hover:bg-brand-mist'
                        }`}
                      >
                        {s.label}
                        <span aria-hidden className="text-brand-blue/60">
                          →
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
                <a
                  href="#demo"
                  onClick={() => setOpen(false)}
                  className="btn-primary mt-2 w-full"
                >
                  Try Easy Mode →
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
