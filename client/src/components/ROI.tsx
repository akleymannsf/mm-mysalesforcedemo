import SectionHead from './SectionHead';

const FIGURES = [
  { big: '11x', unit: '', lbl: 'ROI', sub: '≈100,000+ hours saved to date' },
  { big: '90', unit: '%', lbl: 'Time back', sub: 'On Salesforce setup & operations' },
  { big: '11.4x', unit: '', lbl: 'Fewer steps', sub: 'Across standard tasks (Jul 2026)' },
  { big: '98', unit: '%', lbl: 'Faster', sub: 'RFP → POC: 45 min vs ~40 hrs' },
];

export default function ROI() {
  return (
    <section id="roi" className="border-t border-line py-20 sm:py-24">
      <div className="wrap">
        <SectionHead eyebrow="(Figures)">Enterprise ROI, measured.</SectionHead>

        <div className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FIGURES.map((f) => (
            <div key={f.lbl} className="card p-6 sm:p-7">
              <div className="text-[2.9rem] font-light leading-none tracking-[-0.02em] text-fg">
                {f.big}
                {f.unit && <span className="text-[1.4rem] text-muted">{f.unit}</span>}
              </div>
              <div className="mt-3.5 font-mono text-[0.66rem] uppercase tracking-[0.14em] text-subtle">
                {f.lbl}
              </div>
              <div className="mt-1.5 text-[0.92rem] text-muted">{f.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
