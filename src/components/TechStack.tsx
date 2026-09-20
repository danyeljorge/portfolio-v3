"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { TechIcon } from "./icons/CyberIcons";

export default function TechStack() {
  const { data, t } = useLanguage();
  const { techStack } = data;

  return (
    <section
      className="py-20 lg:py-28 border-b border-zinc-200 dark:border-brand-border relative transition-colors duration-200"
      data-purpose="tech-stack"
      id="tech"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-6 border-b border-zinc-200 dark:border-brand-border reveal-on-scroll">
          <div>
            <div className="font-mono text-xs text-emerald-600 dark:text-brand-neon uppercase tracking-widest mb-2">
              {t.techTag}
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight uppercase text-zinc-900 dark:text-white">
              {t.techTitle}
            </h2>
          </div>
          <div className="font-mono text-xs text-zinc-500 dark:text-zinc-400 mt-4 sm:mt-0">
            {t.techSubtitle}
          </div>
        </div>

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {techStack.map((tech, idx) => (
            <div
              key={tech.name}
              className={`bg-white dark:bg-brand-card border border-zinc-200 dark:border-brand-border p-5 flex flex-col items-center justify-center text-center hover:border-emerald-500 dark:hover:border-brand-neon group transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md dark:shadow-none hover:shadow-[0_0_20px_rgba(0,255,102,0.15)] reveal-on-scroll reveal-delay-${(idx % 6) + 1}`}
            >
              <div
                className="mb-3 group-hover:scale-110 transition-transform flex items-center justify-center h-12 w-12"
                style={{ color: tech.accentColor }}
              >
                <TechIcon type={tech.iconType} className="w-9 h-9" />
              </div>
              <span className="font-display font-bold text-sm text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-brand-neon transition-colors">
                {tech.name}
              </span>
              <span className="font-mono text-[10px] text-zinc-500 dark:text-zinc-500 mt-1 uppercase">
                {tech.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
