"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowUpRightIcon } from "./icons/CyberIcons";

export default function CaseStudy() {
  const { data, t } = useLanguage();
  const { caseStudy } = data;

  return (
    <section
      className="py-20 lg:py-28 bg-slate-100 dark:bg-brand-dark border-b border-zinc-200 dark:border-brand-border relative overflow-hidden transition-colors duration-200"
      data-purpose="case-study-feature"
      id="case-study"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="font-mono text-xs text-emerald-600 dark:text-brand-neon uppercase tracking-widest mb-3">
          // {caseStudy.subtitle}
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12">
          <h2 className="text-3xl sm:text-5xl font-display font-black uppercase tracking-tight text-zinc-900 dark:text-white">
            {caseStudy.title}
          </h2>
          <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400 mt-2 lg:mt-0">
            {caseStudy.stackSummary}
          </span>
        </div>

        {/* Split Feature Case Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-2 border-brand-neon shadow-[0_0_30px_rgba(0,255,102,0.15)] bg-white dark:bg-brand-black">
          {/* Left Column: Metrics & Story */}
          <div className="lg:col-span-6 p-8 lg:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-zinc-200 dark:border-brand-border">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-700 dark:text-brand-neon bg-zinc-100 dark:bg-brand-card px-3 py-1.5 border border-emerald-500/40 dark:border-brand-neon/40 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-neon animate-ping"></span>
                <span>{caseStudy.tag}</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-display font-extrabold uppercase text-zinc-900 dark:text-white mb-4 leading-tight">
                {caseStudy.headline}
              </h3>
              <p className="font-heading text-zinc-700 dark:text-zinc-300 text-sm sm:text-base leading-relaxed mb-8">
                {caseStudy.description}
              </p>

              {/* Big Bold Metrics Grid */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-brand-border font-mono">
                {caseStudy.metrics.map((metric, idx) => (
                  <div key={idx}>
                    <div
                      className={`text-3xl sm:text-4xl font-black font-display ${
                        metric.highlight ? "text-brand-neon" : "text-white"
                      }`}
                    >
                      {metric.value}
                    </div>
                    <div className="text-[10px] sm:text-xs text-zinc-400 mt-1 uppercase leading-tight">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Button */}
            <div className="mt-8 pt-6 border-t border-brand-border/60">
              <Link
                href="#contato"
                className="inline-flex items-center gap-3 px-8 py-3.5 bg-brand-neon text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_20px_rgba(0,255,102,0.4)]"
              >
                <span>{t.caseStudyCta}</span>
                <ArrowUpRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Styled Mockup Dashboard */}
          <div className="lg:col-span-6 bg-zinc-950 p-6 lg:p-8 flex flex-col justify-center relative overflow-hidden">
            {/* Technical Window Frame */}
            <div className="bg-brand-card border border-brand-border rounded-none shadow-2xl overflow-hidden font-mono text-xs">
              {/* Window top bar */}
              <div className="bg-brand-black px-4 py-3 border-b border-brand-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-neon"></div>
                  <span className="ml-2 text-[10px] text-zinc-400 font-mono">
                    {caseStudy.dashboardUrl}
                  </span>
                </div>
                <div className="text-[10px] text-brand-neon font-bold">
                  {caseStudy.statusBadge}
                </div>
              </div>

              {/* Dashboard Body */}
              <div className="p-6 space-y-6 bg-[#0c0e12]">
                {/* Metric Pill Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[11px] text-zinc-500 uppercase tracking-wider">
                      {t.caseStudyMrrLabel}
                    </div>
                    <div className="text-2xl font-bold text-white font-display mt-0.5">
                      {caseStudy.monthlyRevenue}
                    </div>
                  </div>
                  <div className="bg-brand-neon/10 border border-brand-neon/30 text-brand-neon px-2.5 py-1 text-xs font-bold font-mono">
                    {caseStudy.monthlyGrowth}
                  </div>
                </div>

                {/* Graphic Vector Chart Visualization */}
                <div className="h-28 w-full border-b border-brand-border flex items-end justify-between gap-2 pt-4 px-1">
                  <div className="w-1/12 bg-zinc-800 hover:bg-brand-neon h-[25%] transition-all"></div>
                  <div className="w-1/12 bg-zinc-800 hover:bg-brand-neon h-[40%] transition-all"></div>
                  <div className="w-1/12 bg-zinc-800 hover:bg-brand-neon h-[35%] transition-all"></div>
                  <div className="w-1/12 bg-zinc-800 hover:bg-brand-neon h-[55%] transition-all"></div>
                  <div className="w-1/12 bg-zinc-800 hover:bg-brand-neon h-[70%] transition-all"></div>
                  <div className="w-1/12 bg-zinc-800 hover:bg-brand-neon h-[60%] transition-all"></div>
                  <div className="w-1/12 bg-zinc-800 hover:bg-brand-neon h-[85%] transition-all"></div>
                  <div className="w-1/12 bg-brand-neon h-[98%] shadow-[0_0_15px_#00FF66]"></div>
                </div>

                {/* Mini Feed Logs */}
                <div className="space-y-2 pt-2 text-[11px] text-zinc-400">
                  {caseStudy.logs.map((log, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between border-b border-brand-border/40 pb-1.5"
                    >
                      <span className="flex items-center gap-2">
                        <span className="text-brand-neon text-xs">●</span> {log.text}
                      </span>
                      <span className="text-zinc-300 font-mono">{log.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
