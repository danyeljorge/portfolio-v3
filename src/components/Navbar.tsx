"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ArrowUpRightIcon, MenuBarsIcon, CloseIcon } from "./icons/CyberIcons";
import logoWhiteGreen from "../../public/images/logo-white-green.png";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { navLinks } = PORTFOLIO_DATA;

  return (
    <header
      className="sticky top-0 z-40 bg-brand-black/90 backdrop-blur-md border-b border-brand-border"
      data-purpose="main-nav"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo with New Logo */}
        <Link href="#hero" className="flex items-center gap-3 group">
          <div className="relative h-10 md:h-12 transition-transform duration-300 group-hover:scale-105 flex items-center">
            <Image
              src={logoWhiteGreen}
              alt="Daniel Jorge Logo"
              className="h-10 md:h-12 w-auto object-contain object-left"
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
              className="text-zinc-300 hover:text-brand-neon transition-colors flex items-center gap-1 group py-1"
            >
              <span className="text-[9px] text-zinc-500 group-hover:text-brand-neon transition-colors">
                {link.num}
              </span>
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>

        {/* Right Action CTA */}
        <div className="flex items-center gap-4">
          <Link
            href="#contato"
            className="relative inline-flex items-center justify-center px-6 py-2.5 bg-brand-neon text-black font-mono font-bold text-xs uppercase tracking-wider rounded-none hover:bg-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,255,102,0.6)] group border border-brand-neon"
            data-purpose="nav-cta-button"
          >
            <span>VAMOS CONVERSAR</span>
            <ArrowUpRightIcon className="w-3.5 h-3.5 ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            aria-label={mobileMenuOpen ? "Fechar Menu" : "Abrir Menu"}
            className="lg:hidden p-2 text-zinc-400 hover:text-brand-neon focus:outline-none border border-brand-border"
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
        <div className="lg:hidden bg-brand-dark/98 border-b border-brand-border px-6 py-6 space-y-4 font-mono text-sm tracking-widest uppercase animate-fadeIn">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-zinc-300 hover:text-brand-neon py-2 border-b border-brand-border/40 flex items-center justify-between"
            >
              <span>{link.label}</span>
              <span className="text-brand-neon text-xs">{link.num}</span>
            </Link>
          ))}
          <Link
            href="#contato"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center py-3 bg-brand-neon text-black font-bold mt-4 border border-brand-neon"
          >
            VAMOS CONVERSAR ↗
          </Link>
        </div>
      )}
    </header>
  );
}
