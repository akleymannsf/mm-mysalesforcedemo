import { motion } from 'framer-motion';
import Reveal from './Reveal';

interface Pillar {
  step: string;
  icon: string;
  title: string;
  tagline: string;
  punch: string;
  detail: string;
  outcome: string;
}

const PILLARS: Pillar[] = [
  {
    step: '01',
    icon: '🧭',
    title: 'Diagnose',
    tagline: 'See where you stand. Know what to do first.',
    punch: 'Priorities, not guesswork.',
    detail:
      'Map every object, flow, and integration. Read health, signals, and identify risk. MeshMesh prioritizes from your actual state — not opinion — and sequences the work.',
    outcome: 'Clarity on what you own and what to fix first to drive the most value.',
  },
  {
    step: '02',
    icon: '🛠️',
    title: 'Fix',
    tagline: 'Resolve what’s in the way. Unblock what’s next.',
    punch: 'Safely fix what’s broken.',
    detail:
      'Uncover the causes of failures. Repair automations and integrations, and remediate technical debt. UAT in a sandbox and deploy into live environments — with a rollback backstop for every change.',
    outcome: 'Blockers resolved in hours, not weeks.',
  },
  {
    step: '03',
    icon: '🚀',
    title: 'Innovate',
    tagline: 'Imagine what’s possible. Ship it.',
    punch: 'From idea to impact.',
    detail:
      'Reinvent any business process across every cloud. Build from the plan, test in a sandbox, and deploy. Quickly ship new innovations.',
    outcome: 'Innovation that ships, not a roadmap that waits.',
  },
];

export default function Pillars() {
  return (
    <section id="approach" className="relative overflow-hidden bg-white py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-fade bg-[size:44px_44px] opacity-30" />

      <div className="container-xl">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">How it works</span>
          <h2 className="mt-5 text-3xl font-black tracking-tight text-brand-navy sm:text-5xl">
            Diagnose. Fix. <span className="text-gradient-ai">Innovate.</span>
          </h2>
          <p className="mt-4 text-lg text-brand-ink/60">
            Apply your business judgment and tell MeshMesh the outcome you want.{' '}
            <span className="font-semibold text-brand-navy">Conversation, not configuration.</span>
          </p>

          {/* Positioning band */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-brand-blue/5 px-4 py-1.5 text-sm font-semibold text-brand-blue">
              ☁️ Salesforce first, but not Salesforce-only
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-teal/30 bg-brand-teal/5 px-4 py-1.5 text-sm font-semibold text-brand-navy">
              🔗 Open mesh network, powered by MCP
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-navy/10 bg-brand-mist px-4 py-1.5 text-sm font-semibold text-brand-navy/80">
              ✅ No Salesforce expertise required
            </span>
          </div>
        </Reveal>

        {/* Pillar cards */}
        <div className="relative mt-16 grid gap-6 lg:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-brand-navy/10 bg-white p-8 shadow-card"
              >
                <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br from-brand-blue/10 to-brand-cyan/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="flex items-center justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-navy text-2xl shadow-glow-blue transition-transform duration-300 group-hover:scale-110">
                    {p.icon}
                  </span>
                  <span className="text-4xl font-black text-brand-navy/10">{p.step}</span>
                </div>

                <h3 className="mt-6 text-2xl font-black text-brand-navy">{p.title}</h3>
                <p className="mt-2 font-semibold text-brand-navy/90">{p.tagline}</p>
                <p className="mt-1 text-sm font-bold uppercase tracking-wider text-brand-blue">
                  {p.punch}
                </p>
                <p className="mt-4 flex-1 text-brand-ink/60">{p.detail}</p>

                <div className="mt-6 flex items-start gap-2 rounded-2xl bg-brand-mist p-4">
                  <span className="mt-0.5 text-brand-teal">✦</span>
                  <p className="text-sm font-semibold text-brand-navy">{p.outcome}</p>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>

        {/* Closing line */}
        <Reveal delay={0.2}>
          <p className="mx-auto mt-14 max-w-3xl text-center text-xl font-bold text-brand-navy sm:text-2xl">
            MeshMesh enables quick execution across{' '}
            <span className="text-gradient-ai">your entire tech stack</span> — reducing time to value
            and optimizing every experience.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
