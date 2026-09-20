import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  WhatsappIcon,
  YoutubeIcon,
  ArrowRightIcon,
} from "./icons/CyberIcons";
import logoWhiteGreen from "../../public/images/logo-white-green.png";

export default function Footer() {
  const { socialLinks, contact } = PORTFOLIO_DATA;

  return (
    <footer
      className="bg-brand-black border-t border-brand-border py-12"
      data-purpose="site-footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-brand-border/60">
          {/* Logo with New Logo */}
          <Link href="#hero" className="flex items-center gap-3 group">
            <div className="relative h-10 transition-transform duration-300 group-hover:scale-105 flex items-center">
              <Image
                src={logoWhiteGreen}
                alt="Daniel Jorge Logo"
                className="h-10 w-auto object-contain object-left"
              />
            </div>
          </Link>

          {/* Social Icons */}
          <div className="flex items-center space-x-6 text-zinc-400 font-mono">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-neon transition-colors p-2 hover:scale-110 transform duration-200"
              aria-label="GitHub de Daniel Jorge"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-neon transition-colors p-2 hover:scale-110 transform duration-200"
              aria-label="LinkedIn de Daniel Jorge"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-neon transition-colors p-2 hover:scale-110 transform duration-200"
              aria-label="Instagram de Daniel Jorge"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a
              href={`https://wa.me/${contact.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-neon transition-colors p-2 hover:scale-110 transform duration-200"
              aria-label="WhatsApp direto de Daniel Jorge"
            >
              <WhatsappIcon className="w-5 h-5" />
            </a>
            <a
              href={socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-neon transition-colors p-2 hover:scale-110 transform duration-200"
              aria-label="YouTube Trilha da Computação"
            >
              <YoutubeIcon className="w-5 h-5" />
            </a>
          </div>

          {/* Back to top anchor */}
          <div>
            <Link
              href="#hero"
              className="inline-flex items-center gap-1 text-xs font-mono text-zinc-400 hover:text-brand-neon transition-colors"
            >
              <span>VOLTAR AO TOPO</span>
              <span className="-rotate-90 inline-block">→</span>
            </Link>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-500 gap-4">
          <div>
            © {new Date().getFullYear()} Daniel Jorge. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-3">
            <span>DESENHADO &amp; CODIFICADO COM NEXT-GEN BRUTALISM</span>
            <span className="text-brand-neon">✦</span>
            <span>EST. 2019</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
