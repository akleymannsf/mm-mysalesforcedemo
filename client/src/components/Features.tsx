import { motion } from 'framer-motion';
import Reveal from './Reveal';

const PRODUCTS = [
  'Sales Cloud',
  'Service Cloud',
  'Data 360',
  'Agentforce',
  'Flows',
  'Marketing Cloud',
  'Experience Cloud',
  'Commerce Cloud',
];

interface Capability {
  icon: string;
  title: string;
  body: string;
  accent: string;
}

const CAPABILITIES: Capability[] = [
  {
    icon: '👁️',
    title: 'Watch as the work gets done',
    body: 'Visual proof-of-work browser automation. Every click, config, and commit happens in front of you — fully auditable.',
    accent: 'from-brand-blue/10 to-brand-cyan/10',
  },
  {
    icon: '🧠',
    title: 'Your org, understood',
    body: 'Progressive context assembly maps your metadata, flows, and data model — with zero training on your sensitive data.',
    accent: 'from-brand-teal/10 to-brand-blue/10',
  },
  {
    icon: '🎨',
    title: 'On-brand asset delivery',
    body: 'Automated brand kits and multi-channel generation keep every email, page, and campaign perfectly on-brand.',
    accent: 'from-brand-cyan/10 to-brand-teal/10',
  },
  {
    icon: '🔌',
    title: 'Integrations, everywhere',
    body: 'Full MCP & A2A support connects MeshMesh to Slack, Braze, Google Drive, and the tools your team already uses.',
    accent: 'from-brand-navy/10 to-brand-blue/10',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative overflow-hidden bg-brand-mist py-24">
      <div className="container-xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Capabilities</span>
          <h2 className="mt-5 text-3xl font-black tracking-tight text-brand-navy sm:text-5xl">
            One assistant, your <span className="text-gradient-ai">entire estate</span>
          </h2>
          <p className="mt-4 text-lg text-brand-ink/60">
            MeshMesh operates across the Salesforce products you already run.
          </p>
        </Reveal>
      </div>

      {/* Product marquee */}
      <div className="mask-fade-x relative mt-12 flex overflow-hidden">
        {[0, 1].map((row) => (
          <div
            key={row}
            className="flex shrink-0 animate-marquee items-center gap-3 pr-3"
            aria-hidden={row === 1}
          >
            {[...PRODUCTS, ...PRODUCTS].map((p, i) => (
              <span
                key={`${p}-${i}`}
                className="whitespace-nowrap rounded-xl border border-brand-navy/10 bg-white px-5 py-3 text-sm font-bold text-brand-navy shadow-sm"
              >
                {p}
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* Capability cards */}
      <div className="container-xl">
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {CAPABILITIES.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="group relative h-full overflow-hidden rounded-3xl border border-brand-navy/10 bg-white p-8 shadow-card"
              >
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${c.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />
                <div className="relative">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-navy text-2xl shadow-glow-blue transition-transform duration-300 group-hover:scale-110">
                    {c.icon}
                  </span>
                  <h3 className="mt-5 text-xl font-black text-brand-navy">{c.title}</h3>
                  <p className="mt-2 text-brand-ink/60">{c.body}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-brand-blue opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                    Learn more <span aria-hidden>→</span>
                  </span>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
