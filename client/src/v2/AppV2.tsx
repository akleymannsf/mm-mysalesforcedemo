import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import logo from '../assets/logo.png';
import Counter from '../components/Counter';
import { useActiveSection } from '../hooks/useActiveSection';
import { NAV_SECTIONS, YOUTUBE_EMBED, YOUTUBE_TITLE } from '../lib/sections';

const SECTION_IDS = NAV_SECTIONS.map((s) => s.id);

/* ------------------------------------------------------------------ */
/* Shared editorial primitives                                         */
/* ------------------------------------------------------------------ */

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-paper/40">
      {children}
    </span>
  );
}

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* Crop-mark corner frame */
function CropCorners() {
  const base = 'absolute h-4 w-4 border-acid';
  return (
    <>
      <span className={`${base} left-0 top-0 border-l border-t`} />
      <span className={`${base} right-0 top-0 border-r border-t`} />
      <span className={`${base} bottom-0 left-0 border-b border-l`} />
      <span className={`${base} bottom-0 right-0 border-b border-r`} />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Nav                                                                 */
/* ------------------------------------------------------------------ */

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white text-ink transition-shadow duration-300 ${
        scrolled
          ? 'shadow-[0_1px_0_rgba(0,0,0,0.06),0_10px_30px_-18px_rgba(0,0,0,0.28)]'
          : 'border-b border-ink/10'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-5 sm:h-24 sm:px-10">
        <a href="#overview" className="flex items-center gap-3" aria-label="MeshMesh home">
          <img src={logo} alt="MeshMesh from Salesforce" className="h-11 w-auto sm:h-14" />
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {NAV_SECTIONS.map((s, i) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={`font-mono text-[11px] uppercase tracking-[0.2em] transition-colors ${
                  active === s.id ? 'text-acid' : 'text-ink/45 hover:text-ink'
                }`}
              >
                <span className="text-ink/25">{String(i + 1).padStart(2, '0')} </span>
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="#security"
            className="hidden font-mono text-[11px] uppercase tracking-[0.2em] text-ink transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            <span className="rounded-full bg-acid px-4 py-2">Nominate a hero →</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink md:hidden"
          >
            {open ? '[ close ]' : '[ menu ]'}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-20 z-40 bg-white sm:top-24 md:hidden"
          >
            <ul className="flex flex-col divide-y divide-ink/10 border-t border-ink/10">
              {NAV_SECTIONS.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline justify-between px-5 py-5 font-display text-3xl text-ink"
                  >
                    {s.label}
                    <span className="font-mono text-xs text-ink/30">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#security"
              onClick={() => setOpen(false)}
              className="mx-5 mt-6 block rounded-full bg-acid px-5 py-4 text-center font-mono text-xs uppercase tracking-[0.2em] text-ink"
            >
              Nominate a customer hero →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section id="overview" className="relative overflow-hidden pt-32 sm:pt-44">
      {/* backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* smooth transition from the white header into the dark canvas */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        <div className="absolute -top-24 right-[-10%] h-[34rem] w-[34rem] rounded-full bg-acid/10 blur-[120px]" />
        <div className="absolute bottom-0 left-[-10%] h-[26rem] w-[26rem] rounded-full bg-brand-cyan/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-[1400px] px-5 sm:px-10">
        <div className="flex items-center justify-between border-b border-paper/10 pb-5">
          <Kicker>(01) — the agentic teammate</Kicker>
          <Kicker>Salesforce · and beyond</Kicker>
        </div>

        <div className="grid gap-10 pt-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="font-mono text-xs uppercase tracking-[0.25em] text-acid"
            >
              // ask for what you need — meshmesh does the rest
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05 }}
              className="mt-6 font-display text-[3.4rem] leading-[0.95] tracking-tight text-paper sm:text-[5.5rem] lg:text-[6.5rem]"
            >
              Make the complex
              <br />
              Salesforce <em className="not-italic text-acid">simple.</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-8 max-w-xl text-lg leading-relaxed text-paper/60"
            >
              MeshMesh is Salesforce&rsquo;s AI-native, agent-driven teammate that operates your
              entire tech stack — Salesforce and beyond. Rapidly diagnose challenges, apply a fix,
              and ship innovation, saving{' '}
              <span className="text-paper">120+ hours a month</span>. Conversation, not
              configuration.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-10 flex flex-wrap items-center gap-5"
            >
              <a
                href="#demo"
                className="rounded-full bg-acid px-7 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-ink transition-transform hover:-translate-y-0.5"
              >
                See it in action →
              </a>
              <a
                href="#approach"
                className="font-mono text-xs uppercase tracking-[0.2em] text-paper/60 underline decoration-paper/20 underline-offset-4 transition-colors hover:text-acid"
              >
                How it works
              </a>
            </motion.div>
          </div>

          {/* Editorial stat rail */}
          <div className="lg:col-span-5 lg:pl-10">
            <motion.dl
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="divide-y divide-paper/10 border-y border-paper/10"
            >
              {[
                { k: 'ROI multiplier', v: '+940%' },
                { k: 'Hours unlocked / mo', v: '80' },
                { k: 'Work satisfaction', v: '80–95%' },
              ].map((row) => (
                <div key={row.k} className="flex items-baseline justify-between py-5">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper/40">
                    {row.k}
                  </dt>
                  <dd className="font-display text-4xl text-paper">{row.v}</dd>
                </div>
              ))}
            </motion.dl>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Demo                                                                */
/* ------------------------------------------------------------------ */

const DEMO_NOTES = [
  'Approve each step — nothing runs without your consent',
  'Watch every step live, or step away with confidence',
  'Delivers real-world, production-grade solutions, not just ideas',
];

function Demo() {
  return (
    <section id="demo" className="mx-auto max-w-[1400px] px-5 pt-20 sm:px-10">
      <div className="grid gap-8 border-b border-paper/10 pb-8 md:grid-cols-12 md:items-end">
        <h2 className="font-display text-5xl leading-none text-paper sm:text-7xl md:col-span-7">
          Watch as the
          <br />
          work <em className="not-italic text-acid">gets done.</em>
        </h2>
        <p className="text-paper/60 md:col-span-5">
          MeshMesh is like a team of junior developers, acting on your plan, doing every click,
          testing its own work, and documenting every step. You&rsquo;re always in the loop —
          collaboratively planning and validating the output before anything goes live.
        </p>
      </div>

      <Reveal className="relative mt-10">
        <div className="mb-3 flex items-center justify-between">
          <Kicker>fig.01 — browsermesh, live</Kicker>
          <Kicker>▶ full demo</Kicker>
        </div>
        <div className="relative border border-paper/15 p-1.5">
          <CropCorners />
          <div className="aspect-video w-full overflow-hidden bg-black">
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
      </Reveal>

      <div className="mt-8 grid gap-px bg-paper/10 sm:grid-cols-3">
        {DEMO_NOTES.map((n, i) => (
          <div key={n} className="flex items-start gap-3 bg-ink p-6">
            <span className="font-mono text-xs text-acid">0{i + 1}</span>
            <p className="text-sm text-paper/75">{n}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Marquee band                                                        */
/* ------------------------------------------------------------------ */

const PRODUCTS = [
  'Sales Cloud',
  'Service Cloud',
  'Data 360',
  'Agentforce',
  'Flows',
  'Marketing Cloud',
  'Shopify',
  'Slack',
  'Microsoft',
  'Google Drive',
];

function Marquee() {
  return (
    <section className="border-y border-paper/10 py-6">
      <div className="flex overflow-hidden">
        {[0, 1].map((row) => (
          <div
            key={row}
            aria-hidden={row === 1}
            className="flex shrink-0 animate-marquee items-center gap-8 pr-8"
          >
            {[...PRODUCTS, ...PRODUCTS].map((p, i) => (
              <span
                key={`${p}-${i}`}
                className="flex items-center gap-8 whitespace-nowrap font-display text-3xl text-paper/70"
              >
                {p} <span className="text-acid">✳</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Approach — editorial numbered list                                  */
/* ------------------------------------------------------------------ */

const PILLARS = [
  {
    n: '01',
    title: 'Diagnose',
    lead: 'See where you stand. Know what to do first. Priorities, not guesswork.',
    body: 'Map every object, flow, and integration. Read health, signals, and identify risk. MeshMesh prioritizes from your actual state — not opinion — and sequences the work.',
    outcome: 'Clarity on what you own and what to fix first.',
  },
  {
    n: '02',
    title: 'Fix',
    lead: 'Resolve what’s in the way. Unblock what’s next. Safely fix what’s broken.',
    body: 'Uncover the causes of failures. Repair automations and integrations, and remediate technical debt. UAT in a sandbox and deploy to production — with a rollback backstop for every change.',
    outcome: 'Blockers resolved in hours, not weeks.',
  },
  {
    n: '03',
    title: 'Innovate',
    lead: 'Imagine what’s possible. Ship it. From idea to impact.',
    body: 'Reinvent any business process across every cloud. Build from the plan, test in a sandbox, and deploy. Quickly ship new innovations.',
    outcome: 'Innovation that ships, not a roadmap that waits.',
  },
];

function Approach() {
  return (
    <section id="approach" className="mx-auto max-w-[1400px] px-5 py-24 sm:px-10">
      <div className="flex flex-col justify-between gap-6 border-b border-paper/10 pb-8 md:flex-row md:items-end">
        <h2 className="font-display text-5xl leading-none text-paper sm:text-7xl">
          Diagnose. Fix.
          <br />
          <em className="not-italic text-acid">Innovate.</em>
        </h2>
        <p className="max-w-sm text-paper/60">
          Apply your business judgment and tell MeshMesh the outcome you want.{' '}
          <span className="text-paper">Conversation, not configuration.</span>
        </p>
      </div>

      <div className="divide-y divide-paper/10">
        {PILLARS.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.05}>
            <div className="group grid gap-6 py-10 md:grid-cols-12 md:gap-10">
              <div className="md:col-span-3">
                <span className="font-display text-6xl text-paper/20 transition-colors group-hover:text-acid">
                  {p.n}
                </span>
                <h3 className="mt-2 font-display text-4xl text-paper">{p.title}</h3>
              </div>
              <p className="text-lg text-paper/80 md:col-span-5">
                {p.lead}
                <span className="mt-3 block text-base text-paper/50">{p.body}</span>
              </p>
              <div className="md:col-span-4 md:pl-6">
                <div className="border-l-2 border-acid pl-4">
                  <Kicker>outcome</Kicker>
                  <p className="mt-2 text-lg text-paper">{p.outcome}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <p className="mt-12 max-w-3xl font-display text-3xl leading-snug text-paper/70 sm:text-4xl">
        MeshMesh enables quick execution across{' '}
        <span className="text-acid">your entire tech stack</span> — reducing time to value and
        optimizing every experience.
      </p>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Testimonials                                                        */
/* ------------------------------------------------------------------ */

const WITH = [
  'This was AWESOME! So easy and fast and much better code than I would have written.',
  'Evaluated the codebase + SF context and identified root causes 1-shot.',
];
const WITHOUT = [
  "It's not possible without it. 10 humans, a year, and millions of dollars.",
  'Days — sometimes weeks — of manual config and asset creation.',
];

function Testimonials() {
  return (
    <section id="testimonials" className="border-t border-paper/10 py-24">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-10">
        <div className="flex items-end justify-between border-b border-paper/10 pb-8">
          <h2 className="font-display text-5xl leading-none text-paper sm:text-7xl">
            Two very
            <br />
            different Mondays
          </h2>
          <Kicker>with / without</Kicker>
        </div>

        <div className="grid gap-px bg-paper/10 md:grid-cols-2">
          <div className="bg-ink p-8 sm:p-12">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-acid" />
              <Kicker>with meshmesh</Kicker>
            </div>
            <div className="space-y-8">
              {WITH.map((q) => (
                <Reveal key={q}>
                  <p className="font-display text-3xl leading-tight text-paper">
                    <span className="text-acid">“</span>
                    {q}
                    <span className="text-acid">”</span>
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="bg-ink p-8 sm:p-12">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-paper/30" />
              <Kicker>without meshmesh</Kicker>
            </div>
            <div className="space-y-8">
              {WITHOUT.map((q) => (
                <Reveal key={q}>
                  <p className="font-display text-3xl leading-tight text-paper/45">
                    <span className="text-paper/30">“</span>
                    {q}
                    <span className="text-paper/30">”</span>
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* ROI                                                                 */
/* ------------------------------------------------------------------ */

const METRICS: { value: React.ReactNode; label: string; sub: string }[] = [
  { value: <><span>+</span><Counter to={940} suffix="%" /></>, label: 'ROI multiplier', sub: '9.4 hrs value per hour used' },
  { value: <Counter to={55} suffix="%" />, label: 'Game-changers', sub: 'Save 1+ business day / week' },
  { value: <Counter to={80} suffix=" hrs" />, label: 'Unlocked / month', sub: 'Per employee' },
  { value: <><Counter to={80} />–<Counter to={95} suffix="%" /></>, label: 'Satisfaction lift', sub: 'In work satisfaction' },
];

function ROI() {
  return (
    <section id="roi" className="border-t border-paper/10 py-24">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-10">
        <div className="mb-10 flex items-end justify-between border-b border-paper/10 pb-8">
          <h2 className="font-display text-5xl leading-none text-paper sm:text-7xl">
            Enterprise ROI,
            <br />
            <em className="not-italic text-acid">measured.</em>
          </h2>
          <Kicker>(figures)</Kicker>
        </div>

        <div className="grid gap-px bg-paper/10 sm:grid-cols-2 lg:grid-cols-4">
          {METRICS.map((m) => (
            <div key={m.label} className="bg-ink p-8">
              <p className="font-display text-6xl text-paper">{m.value}</p>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-acid">
                {m.label}
              </p>
              <p className="mt-1 text-sm text-paper/50">{m.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Features — index rows                                               */
/* ------------------------------------------------------------------ */

const CAPS = [
  {
    k: 'A',
    title: 'Watch as the work gets done',
    body: 'Visual proof-of-work browser automation. Every click, config, and commit happens in front of you — fully auditable.',
  },
  {
    k: 'B',
    title: 'Your business, understood',
    body: 'Progressive context assembly maps your metadata, flows, and data model — with zero training on your sensitive data.',
  },
  {
    k: 'C',
    title: 'On-brand asset delivery',
    body: 'Automated brand kits and multi-channel generation keep every email, page, and campaign perfectly on-brand.',
  },
  {
    k: 'D',
    title: 'Integrations, everywhere',
    body: 'Full MCP & A2A support connects Salesforce to Shopify, Slack, Braze, Google Drive, Microsoft, and the tools your team already uses.',
  },
];

function Features() {
  return (
    <section id="features" className="border-t border-paper/10 py-24">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-10">
        <div className="mb-4 flex items-end justify-between border-b border-paper/10 pb-8">
          <h2 className="font-display text-5xl leading-none text-paper sm:text-7xl">
            One assistant,
            <br />
            your <em className="not-italic text-acid">entire tech stack.</em>
          </h2>
          <p className="hidden max-w-xs text-paper/60 md:block">
            MeshMesh operates across Salesforce and well beyond.
          </p>
        </div>

        <div className="divide-y divide-paper/10">
          {CAPS.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.05}>
              <div className="group grid items-start gap-4 py-8 md:grid-cols-12 md:gap-10">
                <div className="flex items-center gap-4 md:col-span-4">
                  <span className="font-mono text-xs text-acid">[{c.k}]</span>
                  <h3 className="font-display text-3xl text-paper transition-transform duration-300 group-hover:translate-x-1">
                    {c.title}
                  </h3>
                </div>
                <p className="text-paper/55 md:col-span-7 md:col-start-6">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Security + CTA (inverted paper block)                               */
/* ------------------------------------------------------------------ */

const BADGES = [
  { t: 'SOC 2 Type II', s: 'Independently audited' },
  { t: 'ISO 42001', s: 'Responsible AI' },
  { t: 'Zero Training · Zero Retention', s: 'Never trained on your data' },
];

function Security() {
  return (
    <section id="security" className="border-t border-paper/10 py-24">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-10">
        <div className="mb-10 flex items-end justify-between border-b border-paper/10 pb-8">
          <h2 className="font-display text-5xl leading-none text-paper sm:text-7xl">
            Enterprise-grade
            <br />
            by <em className="not-italic text-acid">default.</em>
          </h2>
          <Kicker>trust</Kicker>
        </div>

        <div className="grid gap-px bg-paper/10 sm:grid-cols-3">
          {BADGES.map((b) => (
            <div key={b.t} className="flex flex-col gap-2 bg-ink p-8">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-acid">✓ verified</span>
              <p className="font-display text-3xl text-paper">{b.t}</p>
              <p className="text-sm text-paper/50">{b.s}</p>
            </div>
          ))}
        </div>

        {/* Inverted CTA block */}
        <Reveal>
          <div className="relative mt-14 overflow-hidden bg-paper p-10 text-ink sm:p-16">
            <CropCorners />
            <div className="grid gap-8 md:grid-cols-12 md:items-center">
              <h3 className="font-display text-4xl leading-none text-ink sm:text-6xl md:col-span-8">
                Ready to make the complex simple?
              </h3>
              <div className="md:col-span-4 md:text-right">
                <p className="mb-6 text-ink/60">
                  Customer pilot nominations are open. Put your toughest org in front of MeshMesh.
                </p>
                <a
                  href="#overview"
                  className="inline-flex rounded-full bg-ink px-7 py-3.5 font-mono text-xs uppercase tracking-[0.2em] text-paper transition-transform hover:-translate-y-0.5"
                >
                  Nominate a customer hero →
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */

function Footer() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <footer className="relative border-t border-ink/10 bg-white text-ink">
      <div className="mx-auto max-w-[1400px] px-5 py-14 sm:px-10">
        <img src={logo} alt="MeshMesh from Salesforce" className="h-9 w-auto sm:h-10" />

        <div className="mt-10 grid gap-8 border-b border-ink/10 pb-10 md:grid-cols-12">
          <p className="max-w-sm font-display text-2xl text-ink/70 md:col-span-6">
            The agentic AI assistant for the Salesforce enterprise and beyond. Plan and build by
            simply asking.
          </p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 md:col-span-6 md:justify-end">
            {NAV_SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/50 transition-colors hover:text-acid"
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex flex-col justify-between gap-3 pt-6 sm:flex-row">
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink/40">
            © {new Date().getFullYear()} MeshMesh — a Salesforce Product
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink/40">
            SOC 2 · ISO 42001 · Zero Training · Zero Retention
          </p>
        </div>
      </div>

      <AnimatePresence>
        {showTop && (
          <motion.a
            href="#overview"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            aria-label="Back to top"
            className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-acid font-mono text-ink"
          >
            ↑
          </motion.a>
        )}
      </AnimatePresence>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/* App                                                                 */
/* ------------------------------------------------------------------ */

export default function AppV2() {
  return (
    <div className="min-h-screen bg-ink font-grotesk text-paper selection:bg-acid selection:text-ink">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Demo />
        <Approach />
        <Testimonials />
        <ROI />
        <Features />
        <Security />
      </main>
      <Footer />
    </div>
  );
}
