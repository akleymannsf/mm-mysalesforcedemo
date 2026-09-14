import SectionHead from './SectionHead';

const PHASES = [
  {
    n: '01',
    title: 'Diagnose',
    tag: 'See where you stand. Know what to do first. Priorities, not guesswork.',
    body: 'Map every object, flow, and integration. Read health, signals, and identify risk. MeshMesh prioritizes from your actual state — not opinion — and sequences the work.',
    outcome: 'Clarity on what you own and what to fix first.',
  },
  {
    n: '02',
    title: 'Fix',
    tag: 'Resolve what’s in the way. Unblock what’s next. Safely fix what’s broken.',
    body: 'Uncover the causes of failures. Repair automations and integrations, and remediate technical debt. UAT in a sandbox and deploy to production — with a rollback backstop for every change.',
    outcome: 'Blockers resolved in hours, not weeks.',
  },
  {
    n: '03',
    title: 'Innovate',
    tag: 'Imagine what’s possible. Ship it. From idea to impact.',
    body: 'Reinvent any business process across every cloud. Build from the plan, test in a sandbox, and deploy. Quickly ship new innovations.',
    outcome: 'Innovation that ships, not a roadmap that waits.',
  },
];

export default function Approach() {
  return (
    <section id="approach" className="border-t border-line py-20 sm:py-24">
      <div className="wrap">
        <SectionHead
          eyebrow="// The method"
          lede="Apply your business judgment and tell MeshMesh the outcome you want. Conversation, not configuration."
        >
          Diagnose. Fix. Innovate.
        </SectionHead>

        <div className="mt-11 grid gap-5 lg:grid-cols-3">
          {PHASES.map((p) => (
            <article key={p.title} className="card flex flex-col p-7 sm:p-8">
              <span className="font-mono text-[0.78rem] tracking-[0.14em] text-subtle">{p.n}</span>
              <h3 className="mb-3 mt-2 text-2xl font-medium">{p.title}</h3>
              <p className="mb-3 font-medium text-fg">{p.tag}</p>
              <p className="mb-5 text-[0.96rem] text-muted">{p.body}</p>
              <div className="mt-auto border-t border-line pt-5">
                <div className="font-mono text-[0.64rem] uppercase tracking-[0.16em] text-coral">
                  Outcome
                </div>
                <div className="mt-1 text-[0.98rem] text-fg">{p.outcome}</div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-9 max-w-[60ch] text-[1.15rem] text-muted">
          MeshMesh enables quick execution across{' '}
          <strong className="font-medium text-fg">your entire tech stack</strong> — reducing time to
          value and optimizing every experience.
        </p>
      </div>
    </section>
  );
}
