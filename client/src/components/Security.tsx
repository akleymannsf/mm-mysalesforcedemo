import SectionHead from './SectionHead';
import coverTeal from '../assets/brand/cover-teal.webp';

const TRUST = [
  { title: 'SOC 2 Type II', sub: 'Independently audited.' },
  { title: 'ISO 42001', sub: 'Responsible AI.' },
  { title: 'Zero Training · Zero Retention', sub: 'Never trained on your data.' },
];

export default function Security() {
  return (
    <>
      <section id="security" className="border-t border-line py-20 sm:py-24">
        <div className="wrap">
          <SectionHead eyebrow="Trust">Enterprise-grade by default.</SectionHead>

          <div className="mt-11 grid gap-5 sm:grid-cols-3">
            {TRUST.map((t) => (
              <div key={t.title} className="card p-7">
                <div className="flex items-center gap-1.5 font-mono text-[0.66rem] uppercase tracking-[0.14em] text-mint">
                  ✓ Verified
                </div>
                <h3 className="mb-1.5 mt-3 text-[1.2rem] font-semibold">{t.title}</h3>
                <p className="text-[0.92rem] text-muted">{t.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band over cover art */}
      <section
        className="relative overflow-hidden border-t border-line bg-ink bg-center bg-cover bg-no-repeat py-28 text-center"
        style={{ backgroundImage: `url(${coverTeal})` }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(70% 120% at 50% 50%, rgba(10,10,10,0.62), rgba(10,10,10,0.90) 100%), linear-gradient(0deg, #0A0A0A 0%, rgba(10,10,10,0) 22%, rgba(10,10,10,0) 78%, #0A0A0A 100%)',
          }}
        />
        <div className="wrap relative z-10">
          <h2 className="mb-4 text-[clamp(2rem,4.5vw,3rem)] font-light tracking-[-0.02em]">
            Ready to make the complex simple?
          </h2>
          <p className="mx-auto mb-9 max-w-[52ch] text-[1.1rem] text-muted">
            Customer pilot nominations are open. Put your toughest org in front of MeshMesh.
          </p>
          <a href="#overview" className="btn btn-primary">
            Nominate a customer hero <span aria-hidden>→</span>
          </a>
        </div>
      </section>
    </>
  );
}
