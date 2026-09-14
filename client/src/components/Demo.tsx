import SectionHead from './SectionHead';
import { YOUTUBE_EMBED, YOUTUBE_TITLE } from '../lib/sections';

const STEPS = [
  'Approve each step — nothing runs without your consent.',
  'Watch every step live, or step away with confidence.',
  'Delivers real-world, production-grade solutions, not just ideas.',
];

export default function Demo() {
  return (
    <section id="demo" className="border-t border-line py-20 sm:py-24">
      <div className="wrap">
        <SectionHead
          eyebrow="Fig.01 — BrowserMesh, live"
          lede="MeshMesh is like a team of developers, acting on your plan, doing every click, testing its own work, and documenting every step. You’re always in the loop — collaboratively planning and validating the output before anything goes live."
        >
          Watch as the work gets done.
        </SectionHead>

        <div id="demo-video" className="card mt-10 scroll-mt-0 overflow-hidden bg-[#0C0C0C]">
          <iframe
            className="block aspect-video w-full border-0 bg-ink"
            src={YOUTUBE_EMBED}
            title={YOUTUBE_TITLE}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
          <div className="flex items-center justify-between border-t border-line px-5 py-3.5">
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-muted">
              Fig.01 — BrowserMesh Flow Audit Report
            </span>
            <span className="font-mono text-[0.72rem] uppercase tracking-[0.1em] text-coral">
              ▶ Full demo
            </span>
          </div>
        </div>

        <div className="mt-7 grid gap-5 sm:grid-cols-3">
          {STEPS.map((s, i) => (
            <div key={s} className="card p-6">
              <span className="font-mono text-[0.8rem] tracking-[0.1em] text-coral">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="mt-2.5 text-[0.96rem] text-muted">{s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
