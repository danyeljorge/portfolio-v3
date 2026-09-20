"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  WhatsappIcon,
  YoutubeIcon,
  ArrowRightIcon,
} from "./icons/CyberIcons";
import logoWhiteGreen from "../../public/images/logo-white-green.png";
import logoBlackGreen from "../../public/images/logo-black-green.png";

export default function Footer() {
  const { data, t } = useLanguage();
  const { socialLinks, contact } = data;

  return (
    <footer
      className="bg-slate-50 dark:bg-brand-black border-t border-zinc-200 dark:border-brand-border py-12 transition-colors duration-200"
      data-purpose="site-footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-200 dark:border-brand-border/60">
          {/* Logo with Adaptive Logo */}
          <Link href="#hero" className="flex items-center gap-3 group">
            <div className="relative h-10 transition-transform duration-300 group-hover:scale-105 flex items-center">
              {/* Dark Mode Logo */}
              <Image
                src={logoWhiteGreen}
                alt="Daniel Jorge Logo"
                className="h-10 w-auto object-contain object-left hidden dark:block"
              />
              {/* Light Mode Logo */}
              <Image
                src={logoBlackGreen}
                alt="Daniel Jorge Logo"
                className="h-10 w-auto object-contain object-left block dark:hidden"
              />
            </div>
          </Link>

          {/* Social Icons */}
          <div className="flex items-center space-x-6 text-zinc-600 dark:text-zinc-400 font-mono">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-600 dark:hover:text-brand-neon transition-colors p-2 hover:scale-110 transform duration-200"
              aria-label="GitHub de Daniel Jorge"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-600 dark:hover:text-brand-neon transition-colors p-2 hover:scale-110 transform duration-200"
              aria-label="LinkedIn de Daniel Jorge"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-600 dark:hover:text-brand-neon transition-colors p-2 hover:scale-110 transform duration-200"
              aria-label="Instagram de Daniel Jorge"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a
              href={`https://wa.me/${contact.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-600 dark:hover:text-brand-neon transition-colors p-2 hover:scale-110 transform duration-200"
              aria-label="WhatsApp direto de Daniel Jorge"
            >
              <WhatsappIcon className="w-5 h-5" />
            </a>
            <a
              href={socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-600 dark:hover:text-brand-neon transition-colors p-2 hover:scale-110 transform duration-200"
              aria-label="YouTube Trilha da Computação"
            >
              <YoutubeIcon className="w-5 h-5" />
            </a>
          </div>

          {/* Back to top anchor */}
          <div>
            <Link
              href="#hero"
              className="inline-flex items-center gap-1 text-xs font-mono text-zinc-600 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-brand-neon transition-colors"
            >
              <span>{t.footerBackToTop}</span>
              <span className="-rotate-90 inline-block">→</span>
            </Link>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-500 gap-4">
          <div>
            © {new Date().getFullYear()} {t.footerRights}
          </div>
          <div className="flex items-center gap-3">
            <span>{t.footerBrutalism}</span>
            <span className="text-emerald-600 dark:text-brand-neon">✦</span>
            <span>EST. 2019</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
