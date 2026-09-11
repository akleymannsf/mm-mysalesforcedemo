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
    const onScroll = () => setScrolled(window.scrollY > 8);
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
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled
          ? 'shadow-[0_1px_0_rgba(3,45,96,0.08),0_10px_30px_-18px_rgba(3,45,96,0.35)]'
          : 'border-b border-brand-navy/5'
      }`}
    >
      {/* Announcement bar — collapses away on scroll */}
      <AnimatePresence initial={false}>
        {!scrolled && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 40, opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="overflow-hidden bg-brand-navy"
          >
            <a
              href="#demo"
              className="group container-xl flex h-10 items-center justify-center gap-2 text-center text-[13px] font-semibold text-white sm:text-sm"
            >
              <span className="text-brand-cyan" aria-hidden>
                ✦
              </span>
              Customer pilot nominations open
              <span className="inline-flex items-center gap-1 text-brand-cyan underline decoration-brand-cyan/50 underline-offset-2 transition-all group-hover:decoration-brand-cyan">
                Nominate your team
                <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="container-xl flex h-16 items-center justify-between sm:h-[70px]">
        {/* Brand */}
        <a href="#overview" className="flex items-center" aria-label="MeshMesh home">
          <img
            src={logo}
            alt="MeshMesh from Salesforce"
            className="h-7 w-auto sm:h-8"
          />
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_SECTIONS.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={`relative py-2 text-[15px] font-semibold transition-colors ${
                  active === s.id
                    ? 'text-brand-blue'
                    : 'text-brand-navy/75 hover:text-brand-navy'
                }`}
              >
                {s.label}
                {active === s.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full bg-brand-blue"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#security"
            className="hidden text-[15px] font-semibold text-brand-navy/75 transition-colors hover:text-brand-navy md:inline"
          >
            Sign In
          </a>
          <a href="#demo" className="btn-primary hidden !py-2.5 sm:inline-flex">
            See It In Action
            <span aria-hidden>→</span>
          </a>

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand-navy/10 text-brand-navy lg:hidden"
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
      </nav>

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
              <div className="rounded-3xl border border-brand-navy/10 bg-white p-4 shadow-float">
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
                  See It In Action →
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
