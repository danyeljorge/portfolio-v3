"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import {
  ArrowUpRightIcon,
  MenuBarsIcon,
  CloseIcon,
  SunIcon,
  MoonIcon,
} from "./icons/CyberIcons";
import logoWhiteGreen from "../../public/images/logo-white-green.png";
import logoBlackGreen from "../../public/images/logo-black-green.png";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, data, t } = useLanguage();
  const { navLinks } = data;

  return (
    <header
      className="sticky top-0 z-40 bg-white/90 dark:bg-brand-black/90 backdrop-blur-md border-b border-zinc-200 dark:border-brand-border transition-colors duration-200"
      data-purpose="main-nav"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo with Adaptive Logo */}
        <Link href="#hero" className="flex items-center gap-3 group">
          <div className="relative h-10 md:h-12 transition-transform duration-300 group-hover:scale-105 flex items-center">
            {/* Dark Mode Logo (White Text + Green Icon) */}
            <Image
              src={logoWhiteGreen}
              alt="Daniel Jorge Logo"
              className="h-10 md:h-12 w-auto object-contain object-left hidden dark:block"
              priority
            />
            {/* Light Mode Logo (Black Text + Green Icon) */}
            <Image
              src={logoBlackGreen}
              alt="Daniel Jorge Logo"
              className="h-10 md:h-12 w-auto object-contain object-left block dark:hidden"
              priority
            />
          </div>
        </Link>

        {/* Desktop Menu Links */}
        <nav
          className="hidden lg:flex items-center space-x-8 font-mono text-xs tracking-wider uppercase"
          data-purpose="nav-links"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-zinc-600 hover:text-emerald-600 dark:text-zinc-300 dark:hover:text-brand-neon transition-colors flex items-center gap-1 group py-1"
            >
              <span className="text-[9px] text-zinc-400 group-hover:text-emerald-600 dark:text-zinc-500 dark:group-hover:text-brand-neon transition-colors">
                {link.num}
              </span>
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>

        {/* Right Action CTA, Theme Toggle & Language Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Switcher Button (Desktop & Mobile) */}
          <button
            onClick={toggleLanguage}
            aria-label={t.langSwitchAria}
            title={language === "pt" ? "Switch language to English" : "Alternar idioma para Português"}
            className="px-2.5 py-2 bg-zinc-100 hover:bg-zinc-200 dark:bg-brand-card dark:hover:bg-brand-dark border border-zinc-300 dark:border-brand-border font-mono text-[11px] font-bold transition-all duration-300 flex items-center gap-1 cursor-pointer select-none"
          >
            <span
              className={
                language === "pt"
                  ? "text-emerald-600 dark:text-brand-neon font-black"
                  : "text-zinc-400 dark:text-zinc-500"
              }
            >
              PT
            </span>
            <span className="text-zinc-300 dark:text-zinc-600">/</span>
            <span
              className={
                language === "en"
                  ? "text-emerald-600 dark:text-brand-neon font-black"
                  : "text-zinc-400 dark:text-zinc-500"
              }
            >
              EN
            </span>
          </button>

          {/* Theme Toggle Button (Desktop & Mobile) */}
          <button
            onClick={toggleTheme}
            aria-label={theme === "dark" ? t.themeSwitchLight : t.themeSwitchDark}
            title={theme === "dark" ? t.themeSwitchLight : t.themeSwitchDark}
            className="p-2.5 bg-zinc-100 hover:bg-zinc-200 dark:bg-brand-card dark:hover:bg-brand-dark border border-zinc-300 dark:border-brand-border text-zinc-800 dark:text-brand-neon transition-all duration-300 flex items-center gap-1.5 group cursor-pointer"
          >
            {theme === "dark" ? (
              <>
                <SunIcon className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform duration-300" />
                <span className="hidden xl:inline-block font-mono text-[11px] font-bold text-zinc-300 tracking-wider">
                  {t.themeLight}
                </span>
              </>
            ) : (
              <>
                <MoonIcon className="w-4 h-4 text-zinc-800 group-hover:-rotate-12 transition-transform duration-300" />
                <span className="hidden xl:inline-block font-mono text-[11px] font-bold text-zinc-700 tracking-wider">
                  {t.themeDark}
                </span>
              </>
            )}
          </button>

          <Link
            href="#contato"
            className="relative inline-flex items-center justify-center px-4 sm:px-6 py-2.5 bg-brand-neon text-black font-mono font-bold text-xs uppercase tracking-wider rounded-none hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,255,102,0.6)] group border border-brand-neon"
            data-purpose="nav-cta-button"
          >
            <span className="hidden sm:inline">{t.navCta}</span>
            <span className="sm:hidden">{t.navCtaShort}</span>
            <ArrowUpRightIcon className="w-3.5 h-3.5 ml-1.5 sm:ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            aria-label={mobileMenuOpen ? "Fechar Menu" : "Abrir Menu"}
            className="lg:hidden p-2 text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-brand-neon focus:outline-none border border-zinc-300 dark:border-brand-border"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <CloseIcon className="w-6 h-6" />
            ) : (
              <MenuBarsIcon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 dark:bg-brand-dark/98 border-b border-zinc-200 dark:border-brand-border px-6 py-6 space-y-4 font-mono text-sm tracking-widest uppercase animate-fadeIn shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-zinc-700 hover:text-emerald-600 dark:text-zinc-300 dark:hover:text-brand-neon py-2 border-b border-zinc-100 dark:border-brand-border/40 flex items-center justify-between"
            >
              <span>{link.label}</span>
              <span className="text-emerald-600 dark:text-brand-neon text-xs">{link.num}</span>
            </Link>
          ))}

          {/* Mobile Language Switcher Item */}
          <button
            onClick={() => {
              toggleLanguage();
            }}
            className="w-full text-left py-2.5 px-3 bg-zinc-100 dark:bg-brand-card border border-zinc-300 dark:border-brand-border flex items-center justify-between font-mono text-xs text-zinc-800 dark:text-zinc-200"
          >
            <span>IDIOMA // LANGUAGE</span>
            <span className="text-emerald-600 dark:text-brand-neon font-bold">
              {language === "pt" ? "[ PORTUGUÊS 🇧🇷 ]" : "[ ENGLISH 🇺🇸 ]"}
            </span>
          </button>

          {/* Mobile Theme Toggle Item */}
          <button
            onClick={() => {
              toggleTheme();
            }}
            className="w-full text-left py-2.5 px-3 bg-zinc-100 dark:bg-brand-card border border-zinc-300 dark:border-brand-border flex items-center justify-between font-mono text-xs text-zinc-800 dark:text-zinc-200"
          >
            <span className="flex items-center gap-2">
              {theme === "dark" ? (
                <>
                  <SunIcon className="w-4 h-4 text-amber-400" />
                  <span>{t.themeSwitchLight}</span>
                </>
              ) : (
                <>
                  <MoonIcon className="w-4 h-4 text-zinc-800" />
                  <span>{t.themeSwitchDark}</span>
                </>
              )}
            </span>
            <span className="text-brand-neon font-bold">
              {theme === "dark" ? `[☀ ${t.themeLight}]` : `[🌙 ${t.themeDark}]`}
            </span>
          </button>

          <Link
            href="#contato"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center py-3 bg-brand-neon text-black font-bold mt-4 border border-brand-neon"
          >
            {t.navCta} ↗
          </Link>
        </div>
      )}
    </header>
  );
}
