import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { TechIcon } from "./icons/CyberIcons";

export default function TechStack() {
  const { techStack } = PORTFOLIO_DATA;

  return (
    <section
      className="py-20 lg:py-28 border-b border-brand-border relative"
      data-purpose="tech-stack"
      id="tech"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-6 border-b border-brand-border reveal-on-scroll">
          <div>
            <div className="font-mono text-xs text-brand-neon uppercase tracking-widest mb-2">
              // ARSENAL TÉCNICO
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight uppercase text-white">
              FERRAMENTAS &amp; STACK
            </h2>
          </div>
          <div className="font-mono text-xs text-zinc-400 mt-4 sm:mt-0">
            TECNOLOGIAS MODERNAS // FOCO EM PERFORMANCE
          </div>
        </div>

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {techStack.map((tech, idx) => (
            <div
              key={tech.name}
              className={`bg-brand-card border border-brand-border p-5 flex flex-col items-center justify-center text-center hover:border-brand-neon group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,255,102,0.15)] reveal-on-scroll reveal-delay-${(idx % 6) + 1}`}
            >
              <div
                className="mb-3 group-hover:scale-110 transition-transform flex items-center justify-center h-12 w-12"
                style={{ color: tech.accentColor }}
              >
                <TechIcon type={tech.iconType} className="w-9 h-9" />
              </div>
              <span className="font-display font-bold text-sm text-white group-hover:text-brand-neon transition-colors">
                {tech.name}
              </span>
              <span className="font-mono text-[10px] text-zinc-500 mt-1 uppercase">
                {tech.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
