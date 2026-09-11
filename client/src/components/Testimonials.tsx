import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Reveal from './Reveal';

const WITH = [
  {
    quote:
      'This was AWESOME! So easy and fast and much better code than I would have written.',
    author: 'Principal Engineer',
  },
  {
    quote: 'Evaluated the codebase + SF context and identified root causes 1-shot.',
    author: 'Platform Architect',
  },
  {
    quote: 'Delivered a full brand kit and multi-channel assets before my coffee was cold.',
    author: 'Marketing Ops Lead',
  },
];

const WITHOUT = [
  {
    quote: "It's not possible without it. 10 humans, a year, and millions of dollars.",
    author: 'VP of Engineering',
  },
  {
    quote: 'Days — sometimes weeks — of manual config and asset creation.',
    author: 'Salesforce Admin',
  },
  {
    quote: 'Endless tickets, tribal knowledge, and copy-paste from old orgs.',
    author: 'Delivery Manager',
  },
];

const TICKER = [
  '“1-shot root cause analysis.”',
  '“Shipped in an afternoon.”',
  '“Better code than I’d write.”',
  '“120+ hours back every month.”',
  '“Full audit trail, full consent.”',
  '“Our fastest implementation ever.”',
];

function useRotating(length: number, interval = 3800) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % length), interval);
    return () => clearInterval(t);
  }, [length, interval]);
  return i;
}

function QuoteCard({
  variant,
  quote,
  author,
}: {
  variant: 'with' | 'without';
  quote: string;
  author: string;
}) {
  const isWith = variant === 'with';
  return (
    <motion.div
      key={quote}
      initial={{ opacity: 0, rotateX: -12, y: 20 }}
      animate={{ opacity: 1, rotateX: 0, y: 0 }}
      exit={{ opacity: 0, rotateX: 12, y: -20 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute inset-0 flex flex-col justify-between rounded-3xl p-7 ${
        isWith
          ? 'bg-gradient-to-br from-brand-blue to-brand-navy text-white shadow-glow-blue'
          : 'border border-brand-navy/10 bg-white text-brand-ink shadow-card'
      }`}
    >
      <div>
        <span
          className={`text-5xl font-black leading-none ${
            isWith ? 'text-brand-cyan/70' : 'text-brand-navy/15'
          }`}
        >
          &ldquo;
        </span>
        <p
          className={`-mt-4 text-lg font-semibold leading-snug ${
            isWith ? 'text-white' : 'text-brand-navy'
          }`}
        >
          {quote}
        </p>
      </div>
      <p
        className={`mt-6 text-sm font-medium ${
          isWith ? 'text-brand-cyan' : 'text-brand-ink/50'
        }`}
      >
        — {author}
      </p>
    </motion.div>
  );
}

export default function Testimonials() {
  const wi = useRotating(WITH.length, 3600);
  const wo = useRotating(WITHOUT.length, 4200);

  return (
    <section id="testimonials" className="relative overflow-hidden bg-brand-mist py-24">
      <div className="container-xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">The MeshMesh difference</span>
          <h2 className="mt-5 text-3xl font-black tracking-tight text-brand-navy sm:text-5xl">
            Two very different Mondays
          </h2>
          <p className="mt-4 text-lg text-brand-ink/60">
            The same work, with and without an agentic teammate operating your org.
          </p>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
          {/* With */}
          <Reveal>
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-teal/20 text-xs text-brand-teal">
                ✦
              </span>
              <span className="text-sm font-bold uppercase tracking-widest text-brand-blue">
                With MeshMesh
              </span>
            </div>
            <div className="relative h-56 [perspective:1200px]">
              <AnimatePresence mode="wait">
                <QuoteCard variant="with" {...WITH[wi]} />
              </AnimatePresence>
            </div>
          </Reveal>

          {/* Without */}
          <Reveal delay={0.1}>
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-navy/10 text-xs text-brand-navy/50">
                ✕
              </span>
              <span className="text-sm font-bold uppercase tracking-widest text-brand-ink/40">
                Without MeshMesh
              </span>
            </div>
            <div className="relative h-56 [perspective:1200px]">
              <AnimatePresence mode="wait">
                <QuoteCard variant="without" {...WITHOUT[wo]} />
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Marquee ticker */}
      <div className="mask-fade-x relative mt-16 flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee items-center gap-4 pr-4">
          {[...TICKER, ...TICKER].map((t, i) => (
            <span
              key={i}
              className="whitespace-nowrap rounded-full border border-brand-navy/10 bg-white px-5 py-2.5 text-sm font-semibold text-brand-navy shadow-sm"
            >
              {t}
            </span>
          ))}
        </div>
        <div
          className="flex shrink-0 animate-marquee items-center gap-4 pr-4"
          aria-hidden
        >
          {[...TICKER, ...TICKER].map((t, i) => (
            <span
              key={i}
              className="whitespace-nowrap rounded-full border border-brand-navy/10 bg-white px-5 py-2.5 text-sm font-semibold text-brand-navy shadow-sm"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
