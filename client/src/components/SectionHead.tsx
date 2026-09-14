import type { ReactNode } from 'react';

interface SectionHeadProps {
  eyebrow: string;
  children: ReactNode; // heading content
  lede?: ReactNode;
}

export default function SectionHead({ eyebrow, children, lede }: SectionHeadProps) {
  return (
    <div>
      <div className="rule" />
      <span className="eyebrow block">{eyebrow}</span>
      <h2 className="mt-2.5 text-[clamp(1.9rem,3.5vw,2.6rem)] font-normal tracking-[-0.01em]">
        {children}
      </h2>
      {lede && <p className="mt-3.5 max-w-[64ch] text-[1.08rem] text-muted">{lede}</p>}
    </div>
  );
}
