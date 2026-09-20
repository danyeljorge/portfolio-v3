"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function ExperienceTimeline() {
  const { data, t } = useLanguage();
  const { experience, experienceCounter } = data;

  return (
    <section
      className="py-20 lg:py-28 bg-[#f8fafc] dark:bg-brand-black border-b border-zinc-200 dark:border-brand-border relative transition-colors duration-200"
      data-purpose="experience-timeline"
      id="experiencia"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="font-mono text-xs text-emerald-600 dark:text-brand-neon uppercase tracking-widest mb-2 reveal-on-scroll">
          {t.timelineTag}
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tight uppercase text-zinc-900 dark:text-white mb-12 reveal-on-scroll reveal-delay-1">
          {t.timelineTitle}
        </h2>

        {/* Brutalist Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Timeline Steps (Left 8 Cols) */}
          <div className="lg:col-span-8 bg-white dark:bg-brand-card border border-zinc-200 dark:border-brand-border p-6 lg:p-10 flex flex-col justify-between shadow-sm dark:shadow-none reveal-on-scroll reveal-delay-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative">
              {experience.map((item, idx) => (
                <div
                  key={idx}
                  className="border-l-2 border-brand-neon pl-4 space-y-1.5 hover:border-black dark:hover:border-white transition-colors"
                >
                  <span className="font-mono text-emerald-600 dark:text-brand-neon font-black text-sm block">
                    {item.period}
                  </span>
                  <h3 className="font-display font-bold text-lg text-zinc-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 font-heading leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-brand-border/60 flex flex-wrap items-center justify-between text-xs font-mono text-zinc-500 gap-2">
              <span>{t.timelineStatus}</span>
              <span className="text-emerald-600 dark:text-brand-neon font-bold">
                {t.timelineAvailable}
              </span>
            </div>
          </div>

          {/* Big Stat Block (Right 4 Cols - Styled like reference neon green block) */}
          <div className="lg:col-span-4 bg-brand-neon text-black p-8 lg:p-10 flex flex-col justify-between border-2 border-brand-neon shadow-[0_0_30px_rgba(0,255,102,0.3)] reveal-on-scroll reveal-delay-3">
            <div>
              <div className="font-mono text-xs uppercase font-extrabold tracking-widest text-black/80 mb-2">
                METRIC_COUNTER
              </div>
              <div className="font-display font-black text-7xl lg:text-8xl leading-none tracking-tighter">
                {experienceCounter.value}
              </div>
              <div className="font-heading font-black text-xl uppercase tracking-tight mt-2 text-black leading-tight">
                {experienceCounter.unit}
              </div>
            </div>
            <div className="mt-8 pt-6 border-t-2 border-black/20 font-mono text-xs font-bold leading-relaxed">
              {experienceCounter.statement}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
