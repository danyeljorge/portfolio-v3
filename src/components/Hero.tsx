"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  ArrowRightIcon,
  BoltIcon,
  LayerIcon,
  TerminalIcon,
  GaugeIcon,
} from "./icons/CyberIcons";
import danielPhoto from "../../public/images/sobreMim-01.webp";

export default function Hero() {
  const { data, t } = useLanguage();
  const { personal, contact } = data;

  return (
    <section
      className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-zinc-200 dark:border-brand-border overflow-hidden transition-colors duration-200"
      data-purpose="hero-section"
      id="hero"
    >
      {/* Brutalist Watermark Backing */}
      <div
        className="absolute -right-16 top-10 select-none pointer-events-none text-zinc-200/80 dark:text-zinc-900/60 font-black text-[180px] lg:text-[280px] leading-none z-0 tracking-tighter opacity-40 font-display"
        aria-hidden="true"
      >
        DEV
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Utility Header Meta Inspired by Poster Reference */}
        <div className="flex items-center justify-between pb-6 border-b border-zinc-200 dark:border-brand-border/60 text-xs font-mono text-zinc-500 animate-hero-header">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 bg-brand-neon animate-ping rounded-full"></span>
            <span className="text-zinc-700 dark:text-zinc-300 font-semibold uppercase tracking-wider">
              {contact.availabilityBadge}
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-6 tracking-widest text-[11px] text-zinc-600 dark:text-zinc-400">
            <span>UI/UX DESIGNER</span>
            <span className="text-brand-neon">✕</span>
            <span>FRONT-END DEV</span>
            <span className="text-brand-neon">✕</span>
            <span>FULL STACK</span>
          </div>
        </div>

        {/* Main Hero Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start pt-8 lg:pt-12">
          {/* Left Col: Editorial Headline & Actions (order-2 on mobile, order-1 on desktop) */}
          <div
            className="order-2 lg:order-1 lg:col-span-7 flex flex-col justify-between"
            data-purpose="hero-copy"
          >
            {/* Brutalist Cross Icon Header */}
            <div className="text-brand-neon text-2xl font-mono mb-4 flex items-center gap-2 animate-hero-header">
              <span>✛</span>
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">
                {t.heroEdition}
              </span>
            </div>

            {/* Big Brutalist Kinetic Typography */}
            <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-[64px] xl:text-[76px] leading-[0.92] tracking-tighter uppercase mb-6 text-zinc-900 dark:text-white animate-hero-headline">
              {personal.heroHeadline.line1}
              <br />
              <span className="text-zinc-900 dark:text-white">{personal.heroHeadline.line2}</span>
              <br />
              <span className="text-brand-neon inline-block drop-shadow-[0_0_20px_rgba(0,255,102,0.4)]">
                {personal.heroHeadline.line3}
              </span>
              <br />
              {personal.heroHeadline.line4}
            </h1>

            <p className="font-heading text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 font-normal max-w-xl leading-relaxed mb-8 animate-hero-bio">
              {personal.shortBio}
            </p>

            {/* CTA Actions Button Group */}
            <div className="flex flex-wrap items-center gap-4 pt-2 animate-hero-cta">
              <Link
                href="#trabalhos"
                className="px-8 py-4 bg-brand-neon text-black font-mono font-extrabold text-sm tracking-wider uppercase hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 shadow-[0_0_30px_rgba(0,255,102,0.35)] flex items-center gap-2 border border-brand-neon group"
              >
                <span>{t.heroCtaProjects}</span>
                <ArrowRightIcon className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
              </Link>
              <Link
                href="#contato"
                className="px-7 py-4 bg-white hover:bg-zinc-100 dark:bg-brand-card dark:hover:bg-brand-dark text-zinc-800 dark:text-zinc-300 dark:hover:text-white font-mono text-sm tracking-wider uppercase transition-all duration-300 border border-zinc-300 dark:border-brand-border flex items-center gap-3 group shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-brand-neon animate-pulse"></span>
                <span>{t.heroCtaFreelance}</span>
              </Link>
            </div>

            {/* Quick Tech Highlights */}
            <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-brand-border/80 flex flex-wrap items-center gap-8 font-mono text-xs text-zinc-600 dark:text-zinc-400 animate-hero-highlights">
              {personal.highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  {item.icon === "bolt" && <BoltIcon className="w-4 h-4 text-brand-neon" />}
                  {item.icon === "layer" && <LayerIcon className="w-4 h-4 text-brand-neon" />}
                  {item.icon === "terminal" && <TerminalIcon className="w-4 h-4 text-brand-neon" />}
                  <span className="text-zinc-900 dark:text-white font-bold">{item.value}</span>{" "}
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          {/* Right Col: Visual Portrait with Cyberpunk Backing (order-1 on mobile, order-2 on desktop) */}
          <div
            className="order-1 lg:order-2 lg:col-span-5 relative flex justify-center lg:justify-end self-start animate-hero-portrait"
            data-purpose="hero-portrait-container"
          >
            {/* Graphic Neon Grunge Tape / Cross Overlay Accent */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-0">
              <div className="w-72 h-72 sm:w-96 sm:h-96 bg-brand-neon/15 blur-3xl rounded-full absolute -top-10 -right-10"></div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-80 bg-brand-neon/20 border-r-4 border-brand-neon transform rotate-6 -z-10 hidden sm:block"></div>
              <div className="absolute top-4 right-6 font-mono text-brand-neon font-black text-xl tracking-widest select-none">
                ///////
              </div>
            </div>

            {/* Profile Cutout Composition */}
            <div className="relative z-10 w-full max-w-[420px] lg:max-w-none">
              {/* Floating Badge 1: Top Right UI/UX Target */}
              <div className="absolute top-2 -left-3 sm:-left-6 z-20 bg-white/95 dark:bg-brand-card/90 backdrop-blur-md border border-zinc-300 dark:border-brand-neon px-3 py-2 text-[11px] font-mono text-zinc-900 dark:text-white shadow-xl flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-brand-neon"></div>
                <div>
                  <div className="font-bold text-emerald-600 dark:text-brand-neon">{t.heroBadgeTitle}</div>
                  <div className="text-[9px] text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                    {t.heroBadgeSub}
                  </div>
                </div>
              </div>

              {/* Floating Badge 2: Metrics badge bottom */}
              <div className="absolute -bottom-4 right-0 sm:right-4 z-20 bg-white dark:bg-brand-black border border-zinc-300 dark:border-brand-border p-3.5 shadow-2xl font-mono text-xs">
                <div className="flex items-center gap-3">
                  <div className="bg-brand-neon/15 text-emerald-600 dark:text-brand-neon p-2 text-lg">
                    <GaugeIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-zinc-500 uppercase tracking-widest">
                      {t.heroMetricLabel}
                    </div>
                    <div className="font-bold text-zinc-900 dark:text-white text-sm">
                      {t.heroMetricValue}
                    </div>
                  </div>
                </div>
              </div>

              {/* Cutout Image of Daniel Jorge (sobreMim-01) with Face turned inward */}
              <div className="relative overflow-hidden border-b-4 border-brand-neon">
                <Image
                  src={danielPhoto}
                  alt="Daniel Jorge - Front-end & Full Stack Web Developer"
                  className="w-full h-auto object-contain max-h-[520px] filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] scale-x-[-1] hover:scale-x-[-1.02] transition-transform duration-500"
                  priority
                />
                {/* Neon Underglow Edge */}
                <div className="absolute bottom-0 inset-x-0 h-1 bg-brand-neon shadow-[0_0_15px_#00FF66]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
