import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import lockup from '../assets/brand/lockup-white.svg';

const FOOT_LINKS = [
  { id: 'overview', label: 'Overview' },
  { id: 'demo', label: 'Demo' },
  { id: 'approach', label: 'Approach' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'roi', label: 'ROI' },
  { id: 'features', label: 'Features' },
  { id: 'security', label: 'Security' },
];

export default function Footer() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <footer className="border-t border-line bg-[#070707] pb-10 pt-16">
      <div className="wrap">
        <div className="flex flex-wrap items-start justify-between gap-12 border-b border-line pb-10">
          <div className="max-w-[36ch]">
            <img
              src={lockup}
              alt="MeshMesh from Salesforce"
              className="mb-[18px] h-10 w-auto max-w-none"
            />
            <p className="text-[0.98rem] text-muted">
              The agentic AI assistant for the Salesforce enterprise and beyond. Plan and build by
              simply asking.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-11 gap-y-3.5">
            {FOOT_LINKS.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-subtle transition-colors hover:text-fg"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-7">
          <span className="font-mono text-[0.68rem] tracking-[0.1em] text-subtle">
            © {new Date().getFullYear()} MeshMesh — a Salesforce product
          </span>
          <span className="font-mono text-[0.68rem] tracking-[0.1em] text-subtle">
            SOC 2 · ISO 42001 · Zero Training · Zero Retention
          </span>
        </div>
      </div>

      <AnimatePresence>
        {showTop && (
          <motion.a
            href="#overview"
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 20 }}
            aria-label="Back to top"
            className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-coral text-lg text-ink"
          >
            ↑
          </motion.a>
        )}
      </AnimatePresence>
    </footer>
  );
}
