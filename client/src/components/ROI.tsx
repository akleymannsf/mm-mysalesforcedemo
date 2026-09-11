import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Counter from './Counter';
import Reveal from './Reveal';

interface Metric {
  value: ReactNode;
  label: string;
  sub: string;
  featured?: boolean;
}

const METRICS: Metric[] = [
  {
    value: (
      <>
        +<Counter to={940} suffix="%" />
      </>
    ),
    label: 'ROI Multiplier',
    sub: '9.4 hrs of value created per hour used',
    featured: true,
  },
  {
    value: <Counter to={55} suffix="%" />,
    label: 'Game-Changers',
    sub: 'Save 1+ full business day every week',
  },
  {
    value: <Counter to={80} suffix=" hrs" />,
    label: 'Unlocked / Month',
    sub: 'Given back to every employee',
  },
  {
    value: (
      <>
        <Counter to={80} />–<Counter to={95} suffix="%" />
      </>
    ),
    label: 'Satisfaction Lift',
    sub: 'Improvement in work satisfaction',
  },
];

export default function ROI() {
  return (
    <section id="roi" className="relative overflow-hidden bg-white py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-fade bg-[size:44px_44px] opacity-30" />
      <div className="container-xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Value &amp; impact</span>
          <h2 className="mt-5 text-3xl font-black tracking-tight text-brand-navy sm:text-5xl">
            Enterprise ROI, <span className="text-gradient-ai">measured</span>
          </h2>
          <p className="mt-4 text-lg text-brand-ink/60">
            Real numbers from teams running MeshMesh across their Salesforce estate.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {METRICS.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={`group relative h-full overflow-hidden rounded-3xl p-7 ${
                  m.featured
                    ? 'bg-gradient-to-br from-brand-blue to-brand-navy text-white shadow-glow-blue'
                    : 'border border-brand-navy/10 bg-white shadow-card'
                }`}
              >
                {m.featured && (
                  <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-brand-cyan/30 blur-2xl transition-all group-hover:scale-150" />
                )}
                <p
                  className={`text-4xl font-black tracking-tight sm:text-5xl ${
                    m.featured ? 'text-white' : 'text-brand-navy'
                  }`}
                >
                  {m.value}
                </p>
                <p
                  className={`mt-3 text-sm font-bold uppercase tracking-wider ${
                    m.featured ? 'text-brand-cyan' : 'text-brand-blue'
                  }`}
                >
                  {m.label}
                </p>
                <p
                  className={`mt-1 text-sm ${
                    m.featured ? 'text-white/70' : 'text-brand-ink/55'
                  }`}
                >
                  {m.sub}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
