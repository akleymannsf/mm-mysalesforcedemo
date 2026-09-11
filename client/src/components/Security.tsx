import { motion } from 'framer-motion';
import Reveal from './Reveal';

interface Badge {
  icon: string;
  title: string;
  sub: string;
}

const BADGES: Badge[] = [
  { icon: '🛡️', title: 'SOC 2 Type II', sub: 'Independently audited controls' },
  { icon: '📋', title: 'ISO 42001', sub: 'Responsible AI management' },
  { icon: '🔒', title: 'Zero Training · Zero Retention', sub: 'Your data is never used to train' },
];

export default function Security() {
  return (
    <section
      id="security"
      className="relative overflow-hidden bg-gradient-to-b from-white to-brand-mist py-24"
    >
      <div className="container-xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Trust &amp; security</span>
          <h2 className="mt-5 text-3xl font-black tracking-tight text-brand-navy sm:text-5xl">
            Enterprise-grade by <span className="text-gradient-ai">default</span>
          </h2>
          <p className="mt-4 text-lg text-brand-ink/60">
            Built for regulated, security-first organizations — with guarantees in writing.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BADGES.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="flex h-full flex-col items-center rounded-3xl border border-brand-navy/10 bg-white p-7 text-center shadow-card"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-mist text-3xl">
                  {b.icon}
                </span>
                <h3 className="mt-4 text-base font-black text-brand-navy">{b.title}</h3>
                <p className="mt-1 text-sm text-brand-ink/55">{b.sub}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* CTA banner */}
        <Reveal delay={0.2}>
          <div className="relative mt-16 overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-blue to-brand-navy p-10 text-center shadow-float sm:p-14">
            <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-brand-cyan/30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-brand-teal/20 blur-3xl" />
            <h3 className="relative text-2xl font-black text-white sm:text-4xl">
              Ready to build Salesforce by simply asking?
            </h3>
            <p className="relative mx-auto mt-3 max-w-xl text-white/75">
              Join the teams unlocking 120+ hours a month with an agentic teammate they can trust.
            </p>
            <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#demo"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-brand-navy transition-all hover:-translate-y-0.5 hover:shadow-glow sm:w-auto"
              >
                Get Started <span aria-hidden>→</span>
              </a>
              <a
                href="#overview"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10 sm:w-auto"
              >
                Book a demo
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
