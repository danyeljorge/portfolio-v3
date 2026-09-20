import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function MarqueeTicker() {
  const { marqueeItems } = PORTFOLIO_DATA;

  return (
    <section
      className="border-y border-brand-border bg-brand-neon py-3 text-black font-mono font-extrabold text-xs tracking-widest uppercase overflow-hidden select-none"
      data-purpose="marquee-ticker"
      aria-hidden="true"
    >
      <div className="flex whitespace-nowrap animate-marquee">
        <div className="flex items-center gap-8 mr-8">
          {marqueeItems.map((item, idx) => (
            <React.Fragment key={idx}>
              <span>{item}</span>
              <span className="text-black/70">✦</span>
            </React.Fragment>
          ))}
        </div>
        <div aria-hidden="true" className="flex items-center gap-8 mr-8">
          {marqueeItems.map((item, idx) => (
            <React.Fragment key={`repeat-${idx}`}>
              <span>{item}</span>
              <span className="text-black/70">✦</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
