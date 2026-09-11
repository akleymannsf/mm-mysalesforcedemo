import { motion } from 'framer-motion';
import Reveal from './Reveal';
import { YOUTUBE_EMBED, YOUTUBE_TITLE } from '../lib/sections';

const HIGHLIGHTS = [
  'Watch every action happen live in a real browser',
  'Approve each step — nothing runs without your consent',
  'Ships production-grade work, not just suggestions',
];

export default function Demo() {
  return (
    <section id="demo" className="relative overflow-hidden bg-brand-navy py-24 text-white">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-96 w-[46rem] -translate-x-1/2 rounded-full bg-brand-blue/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-brand-cyan/20 blur-3xl" />
      </div>

      <div className="container-xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow border-white/20 bg-white/10 text-brand-cyan">See it in action</span>
          <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-5xl">
            Watch as the work <span className="text-gradient-ai">gets done</span>
          </h2>
          <p className="mt-4 text-lg text-white/70">
            No black boxes. MeshMesh operates your org in a live browser session while you stay in
            full control — pausing, approving, and steering every step.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="relative mx-auto mt-14 max-w-5xl">
          <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-r from-brand-blue/40 via-brand-cyan/30 to-brand-teal/40 blur-2xl" />
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b1b33] shadow-float">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
              <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
              <span className="h-3 w-3 rounded-full bg-[#28C840]" />
              <div className="mx-auto flex max-w-md flex-1 items-center justify-center gap-2 rounded-md bg-white/10 px-3 py-1 text-xs font-medium text-white/60">
                <span className="text-brand-teal">🔒</span> Flow Audit Report
              </div>
              <span className="hidden rounded-full bg-brand-cyan/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-cyan sm:inline">
                Full Demo
              </span>
            </div>
            <div className="aspect-video w-full bg-black">
              <iframe
                className="h-full w-full"
                src={YOUTUBE_EMBED}
                title={YOUTUBE_TITLE}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>

          {/* Floating badges */}
          <motion.div
            className="absolute -left-3 -top-5 rounded-2xl bg-white px-4 py-2.5 text-brand-navy shadow-card sm:-left-6"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <p className="text-lg font-black text-brand-blue">80–95%</p>
            <p className="text-[11px] font-semibold text-brand-ink/60">Time Saved</p>
          </motion.div>
          <motion.div
            className="absolute -bottom-5 -right-3 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-navy px-4 py-2.5 shadow-glow sm:-right-6"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <p className="text-sm font-black text-brand-cyan">Full Human</p>
            <p className="text-[11px] font-semibold text-white/70">Consent Control</p>
          </motion.div>
        </Reveal>

        <Reveal delay={0.2} className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
          {HIGHLIGHTS.map((h) => (
            <div
              key={h}
              className="glass-dark rounded-2xl p-5 text-sm font-medium text-white/80"
            >
              <span className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-brand-cyan/20 text-brand-cyan">
                ✓
              </span>
              {h}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
