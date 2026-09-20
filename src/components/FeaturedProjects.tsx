"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowUpRightIcon, ArrowRightIcon } from "./icons/CyberIcons";

export default function FeaturedProjects() {
  const { data, t } = useLanguage();
  const { featuredProjects, socialLinks } = data;

  return (
    <section
      className="py-20 lg:py-28 border-b border-zinc-200 dark:border-brand-border relative transition-colors duration-200"
      data-purpose="featured-projects"
      id="trabalhos"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title Header (Poster Styled) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-zinc-200 dark:border-brand-border reveal-on-scroll">
          <div>
            <div className="font-mono text-xs text-emerald-600 dark:text-brand-neon uppercase tracking-widest mb-2">
              {t.projectsTag}
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tighter uppercase text-zinc-900 dark:text-white">
              {t.projectsTitle}
            </h2>
          </div>
          <div className="mt-4 md:mt-0 font-mono text-xs text-zinc-500 dark:text-zinc-400">
            <Link
              href="#contato"
              className="inline-flex items-center gap-2 text-emerald-600 dark:text-brand-neon hover:text-black dark:hover:text-white transition-colors group"
            >
              <span>{t.projectsCustom}</span>
              <span className="group-hover:translate-x-1 transition-transform">↗</span>
            </Link>
          </div>
        </div>

        {/* 4 Cyberpunk Work Cards (Direct Layout Reference) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProjects.map((project, idx) => (
            <article
              key={project.id}
              className={`bg-white dark:bg-brand-card border border-zinc-200 dark:border-brand-border hover:border-emerald-500 dark:hover:border-brand-neon transition-all duration-300 shadow-sm hover:shadow-md dark:shadow-none flex flex-col justify-between group relative overflow-hidden reveal-on-scroll reveal-delay-${(idx % 4) + 1}`}
              data-purpose="project-card"
            >
              {/* Top Card Header */}
              <div className="p-6 border-b border-zinc-100 dark:border-brand-border/60">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-mono text-emerald-600 dark:text-brand-neon tracking-widest uppercase font-semibold">
                    {project.tag}
                  </span>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 group-hover:text-emerald-600 dark:text-zinc-600 dark:group-hover:text-brand-neon transition-colors p-1"
                    aria-label={`Abrir ${project.title}`}
                  >
                    <ArrowUpRightIcon className="w-3.5 h-3.5" />
                  </a>
                </div>
                <h3 className="font-heading font-black text-2xl uppercase tracking-tight text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-brand-neon transition-colors">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Card Visual Mock / Graphic Block */}
              <div className="h-44 bg-zinc-950 p-4 relative flex items-center justify-center overflow-hidden border-b border-zinc-200 dark:border-brand-border/60">
                {project.image ? (
                  <div className="relative w-full h-full overflow-hidden border border-brand-border group-hover:border-brand-neon/50 transition-colors">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-between p-3">
                      <div className="flex justify-between items-center text-[10px] font-mono">
                        <span className="text-zinc-400 font-bold bg-black/70 px-1.5 py-0.5 border border-zinc-800">
                          {project.mockupBadge}
                        </span>
                        <span className="text-brand-neon font-mono text-[9px]">ONLINE</span>
                      </div>
                      <div className="font-display font-black text-sm uppercase text-white tracking-wider">
                        {project.mockupTitle}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    className={`w-full h-full bg-gradient-to-tr ${project.gradient} border border-brand-border p-4 flex flex-col justify-between group-hover:border-brand-neon/40 transition-colors`}
                  >
                    <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500">
                      <span>PROJECT_NODE</span>
                      <span className="text-brand-neon font-bold">{project.mockupBadge}</span>
                    </div>
                    <div className="text-center font-display font-black text-lg tracking-tighter text-zinc-200">
                      {project.mockupTitle}
                    </div>
                    <div className="flex gap-1.5 flex-wrap">
                      {project.techs.map((tech) => (
                        <span
                          key={tech}
                          className="text-[9px] font-mono bg-zinc-800 text-zinc-300 px-2 py-0.5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Meta & Actions */}
              <div className="p-4 bg-zinc-50 dark:bg-brand-dark/80 flex items-center justify-between font-mono text-xs">
                <span className="text-zinc-500 dark:text-zinc-400 text-[11px] truncate max-w-[140px]">
                  {project.metrics}
                </span>
                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] text-zinc-500 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-brand-neon transition-colors"
                      title="Repositório GitHub"
                    >
                      [CODE]
                    </a>
                  )}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 dark:text-brand-neon font-bold text-[11px] hover:underline"
                  >
                    {t.projectsVisit} ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Explore All Repos Link */}
        <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-brand-border/40 flex justify-center">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-zinc-100 dark:bg-brand-card dark:hover:bg-brand-dark text-zinc-700 hover:text-emerald-600 dark:text-zinc-300 dark:hover:text-brand-neon font-mono text-xs uppercase tracking-widest border border-zinc-300 dark:border-brand-border transition-all duration-300 shadow-sm"
          >
            <span>{t.projectsMoreGithub}</span>
            <ArrowRightIcon className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
