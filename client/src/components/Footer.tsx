import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import logo from '../assets/logo.jpg';
import { NAV_SECTIONS } from '../lib/sections';

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <footer className="relative bg-brand-navy py-14 text-white">
      <div className="container-xl">
        <div className="flex flex-col items-center justify-between gap-8 border-b border-white/10 pb-10 md:flex-row md:items-start">
          <div className="text-center md:text-left">
            <span className="inline-flex h-14 items-center rounded-xl bg-white/5 px-4">
              <img
                src={logo}
                alt="MeshMesh from Salesforce"
                className="h-8 w-auto mix-blend-screen"
              />
            </span>
            <p className="mt-4 max-w-xs text-sm text-white/60">
              The agentic AI assistant for the Salesforce enterprise. Plan and build by simply
              asking.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-brand-cyan">
              ✅ Available on AppExchange
            </span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {NAV_SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-sm font-medium text-white/70 transition-colors hover:text-brand-cyan"
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} MeshMesh — a Salesforce Product. All rights reserved.
          </p>
          <p className="text-xs text-white/50">
            SOC 2 · ISO 42001 · Zero Training · Zero Retention
          </p>
        </div>
      </div>

      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.a
            href="#overview"
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 20 }}
            whileHover={{ y: -3 }}
            aria-label="Back to top"
            className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue text-white shadow-glow-blue"
          >
            <span aria-hidden className="text-lg">
              ↑
            </span>
          </motion.a>
        )}
      </AnimatePresence>
    </footer>
  );
}
