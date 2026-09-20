import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function Testimonials() {
  const { testimonials } = PORTFOLIO_DATA;

  return (
    <section
      className="py-20 lg:py-28 border-b border-brand-border relative"
      data-purpose="testimonials"
      id="depoimentos"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="font-mono text-xs text-brand-neon uppercase tracking-widest mb-2 reveal-on-scroll">
          // FEEDBACK &amp; CONFIANÇA
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight uppercase text-white mb-12 reveal-on-scroll reveal-delay-1">
          O QUE OS CLIENTES DIZEM
        </h2>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className={`bg-brand-card border border-brand-border p-6 sm:p-8 flex flex-col justify-between hover:border-brand-neon transition-colors duration-300 group reveal-on-scroll reveal-delay-${idx + 1}`}
            >
              <div>
                <div className="text-brand-neon text-4xl font-display font-black mb-3">
                  “
                </div>
                <p className="font-heading text-sm text-zinc-300 leading-relaxed mb-6">
                  {t.quote}
                </p>
              </div>

              <div className="pt-4 border-t border-brand-border/60 flex items-center gap-3">
                <div className="w-10 h-10 rounded-none bg-brand-neon text-black font-bold flex items-center justify-center font-mono text-sm group-hover:scale-105 transition-transform">
                  {t.initials}
                </div>
                <div>
                  <div className="font-display font-bold text-sm text-white">
                    {t.name}
                  </div>
                  <div className="font-mono text-[11px] text-zinc-500">
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
