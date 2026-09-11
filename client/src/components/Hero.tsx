import { motion } from 'framer-motion';
import logo from '../assets/logo.png';
import { VIDEO_SRC } from '../lib/sections';

const PRODUCTS = ['Sales Cloud', 'Service Cloud', 'Data 360', 'Agentforce', 'Flows'];

export default function Hero() {
  return (
    <section
      id="overview"
      className="relative overflow-hidden bg-gradient-to-b from-brand-mist via-white to-white pb-20 pt-32 sm:pt-40"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-fade bg-[size:44px_44px] opacity-40" />
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-brand-blue/20 blur-3xl" />
        <div className="absolute -right-32 top-40 h-[28rem] w-[28rem] rounded-full bg-brand-cyan/20 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="container-xl">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-7 flex justify-center"
          >
            <span className="inline-flex items-center rounded-2xl bg-white px-6 py-4 shadow-card ring-1 ring-brand-navy/5">
              <img
                src={logo}
                alt="MeshMesh from Salesforce"
                className="h-10 w-auto sm:h-12"
              />
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            <span className="eyebrow normal-case tracking-normal">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-brand-cyan" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-cyan" />
              </span>
              Ask for what you need. MeshMesh does the rest.
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 text-balance text-4xl font-black leading-[1.05] tracking-tight text-brand-navy sm:text-6xl lg:text-7xl"
          >
            Make the Complex…
            <br className="hidden sm:block" /> Salesforce <span className="text-gradient-ai">Simple</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-brand-ink/70 sm:text-xl"
          >
            MeshMesh is Salesforce’s AI-native, agent-driven teammate that operates your entire tech
            stack — Salesforce and beyond. Rapidly diagnose challenges, apply a fix, and ship
            innovation, saving{' '}
            <span className="font-bold text-brand-navy">120+ hours a month</span>. Conversation, not
            configuration.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a href="#demo" className="btn-primary w-full sm:w-auto">
              See It In Action <span aria-hidden>→</span>
            </a>
            <a href="#roi" className="btn-ghost w-full sm:w-auto">
              See the ROI
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-6 text-xs font-medium uppercase tracking-widest text-brand-ink/40"
          >
            Trusted across{' '}
            {PRODUCTS.map((p, i) => (
              <span key={p} className="text-brand-navy/60">
                {p}
                {i < PRODUCTS.length - 1 ? ' · ' : ''}
              </span>
            ))}
          </motion.p>
        </div>

        {/* Floating browser mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-16 max-w-5xl"
        >
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-r from-brand-blue/30 via-brand-cyan/20 to-brand-teal/30 blur-2xl" />
          <div className="overflow-hidden rounded-2xl border border-white/60 bg-white shadow-float">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 border-b border-brand-navy/5 bg-brand-mist/80 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
              <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
              <span className="h-3 w-3 rounded-full bg-[#28C840]" />
            </div>
            <video
              className="aspect-video w-full bg-brand-navy object-cover"
              src={VIDEO_SRC}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          </div>

          {/* Floating badges */}
          <motion.div
            className="absolute -left-4 top-16 hidden rounded-2xl bg-white px-4 py-3 shadow-card sm:block"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <p className="text-2xl font-black text-brand-blue">80–95%</p>
            <p className="text-xs font-semibold text-brand-ink/60">Time Saved</p>
          </motion.div>
          <motion.div
            className="absolute -right-4 bottom-16 hidden rounded-2xl bg-brand-navy px-4 py-3 shadow-glow sm:block"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          >
            <p className="text-sm font-black text-brand-cyan">Full Human</p>
            <p className="text-xs font-semibold text-white/70">Consent Control</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
