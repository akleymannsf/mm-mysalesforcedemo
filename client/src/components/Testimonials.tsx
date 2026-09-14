import SectionHead from './SectionHead';

const WITH = [
  'This was AWESOME! So easy and fast and much better code than I would have written.',
  'Evaluated the codebase + SF context and identified root causes 1-shot.',
];
const WITHOUT = [
  "It's not possible without it. 10 humans, a year, and millions of dollars.",
  'Days — sometimes weeks — of manual config and asset creation.',
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="border-t border-line py-20 sm:py-24">
      <div className="wrap">
        <SectionHead eyebrow="With / without">Two very different Mondays</SectionHead>

        <div className="mt-11 grid gap-5 md:grid-cols-2">
          <div
            className="rounded-card border p-7 sm:p-8"
            style={{
              background: 'linear-gradient(180deg, rgba(58,213,152,0.06), #141414)',
              borderColor: 'rgba(58,213,152,0.28)',
            }}
          >
            <div className="mb-5 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-mint">
              With MeshMesh
            </div>
            {WITH.map((q) => (
              <p
                key={q}
                className="mb-5 border-l-2 border-mint pl-4 text-[1.12rem] leading-snug last:mb-0"
              >
                &ldquo;{q}&rdquo;
              </p>
            ))}
          </div>

          <div className="card p-7 sm:p-8">
            <div className="mb-5 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-subtle">
              Without MeshMesh
            </div>
            {WITHOUT.map((q) => (
              <p
                key={q}
                className="mb-5 border-l-2 border-line pl-4 text-[1.12rem] leading-snug text-muted last:mb-0"
              >
                &ldquo;{q}&rdquo;
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
