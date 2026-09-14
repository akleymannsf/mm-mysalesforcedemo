import coverBlue from '../assets/brand/cover-blue.webp';

const STATS = [
  { num: '3,500+', lbl: 'Builders daily' },
  { num: '40+', lbl: 'Products covered' },
  { num: '6,000+', lbl: 'Tasks completed' },
];

export default function Hero() {
  return (
    <header
      id="overview"
      className="relative overflow-hidden bg-ink bg-[right_center] bg-cover bg-no-repeat pb-24 pt-32 sm:pt-36"
      style={{ backgroundImage: `url(${coverBlue})` }}
    >
      {/* Two-part scrim so left-aligned white type stays legible over the art */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(10,10,10,0.96) 0%, rgba(10,10,10,0.90) 42%, rgba(10,10,10,0.62) 66%, rgba(10,10,10,0.12) 100%), linear-gradient(0deg, #0A0A0A 0%, rgba(10,10,10,0.35) 14%, rgba(10,10,10,0) 34%)',
        }}
      />

      <div className="wrap relative z-10">
        <span className="kicker mb-4 block">// ASK FOR WHAT YOU NEED — MESHMESH DOES THE REST</span>

        <h1 className="mb-6 max-w-[15ch] text-[clamp(2.6rem,6.5vw,4.4rem)] font-light leading-[1.02] tracking-[-0.02em]">
          Make the complex Salesforce simple.
        </h1>

        <p className="mb-9 max-w-[54ch] text-xl text-muted">
          MeshMesh is Salesforce&rsquo;s AI-native, agent-driven teammate that operates your entire
          tech stack — Salesforce and beyond. Rapidly diagnose challenges, apply a fix, and ship
          innovation — giving back up to <strong className="font-medium text-fg">90% of setup time</strong>.
          Conversation, not configuration.
        </p>

        <div className="mb-14 flex flex-wrap gap-3.5">
          <a href="#demo" className="btn btn-primary">
            See it in action <span aria-hidden>→</span>
          </a>
          <a href="#approach" className="btn btn-ghost">
            How it works
          </a>
        </div>

        <dl className="flex max-w-[640px] flex-wrap gap-x-[52px] gap-y-8 border-t border-line pt-8">
          {STATS.map((s) => (
            <div key={s.lbl}>
              <dd className="text-[2.1rem] font-normal leading-none tracking-[-0.01em] text-fg">
                {s.num}
              </dd>
              <dt className="mt-1.5 font-mono text-[0.66rem] uppercase tracking-[0.14em] text-subtle">
                {s.lbl}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </header>
  );
}
