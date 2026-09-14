import SectionHead from './SectionHead';

const FEATURES = [
  {
    marker: 'A',
    title: 'Watch as the work gets done',
    body: 'Visual proof-of-work browser automation. Every click, config, and commit happens in front of you — fully auditable.',
  },
  {
    marker: 'B',
    title: 'Your business, understood',
    body: 'Progressive context assembly maps your metadata, flows, and data model — with zero training on your sensitive data.',
  },
  {
    marker: 'C',
    title: 'On-brand asset delivery',
    body: 'Automated brand kits and multi-channel generation keep every email, page, and campaign perfectly on-brand.',
  },
  {
    marker: 'D',
    title: 'Integrations, everywhere',
    body: 'Full MCP & A2A support connects Salesforce to Shopify, Slack, Braze, Google Drive, Microsoft, and the tools your team already uses.',
  },
];

export default function Features() {
  return (
    <section id="features" className="border-t border-line py-20 sm:py-24">
      <div className="wrap">
        <SectionHead eyebrow="// The platform">One assistant, your entire tech stack.</SectionHead>

        <div className="mt-11 grid gap-5 md:grid-cols-2">
          {FEATURES.map((f) => (
            <article key={f.title} className="card flex gap-[18px] p-7 sm:p-8">
              <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[9px] bg-coral font-mono font-medium text-ink">
                {f.marker}
              </span>
              <div>
                <h3 className="mb-2 text-[1.15rem] font-semibold">{f.title}</h3>
                <p className="text-[0.96rem] text-muted">{f.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
