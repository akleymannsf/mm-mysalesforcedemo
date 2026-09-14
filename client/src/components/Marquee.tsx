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

function Chip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-line px-[15px] py-[7px] text-sm text-muted">
      <span className="text-[0.7rem] text-coral">✳</span>
      {label}
    </span>
  );
}

export default function Marquee() {
  return (
    <div className="overflow-hidden border-y border-line bg-[#0C0C0C] py-[22px]">
      <div
        className="flex"
        style={{
          maskImage:
            'linear-gradient(90deg, transparent 0, #000 6%, #000 94%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(90deg, transparent 0, #000 6%, #000 94%, transparent 100%)',
        }}
      >
        {[0, 1].map((row) => (
          <div
            key={row}
            aria-hidden={row === 1}
            className="flex w-max shrink-0 animate-mm-marquee gap-3 pl-3 hover:[animation-play-state:paused]"
          >
            {PRODUCTS.map((p) => (
              <Chip key={`${row}-${p}`} label={p} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
