"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import {
  MailIcon,
  WhatsappIcon,
  LocationIcon,
  PaperPlaneIcon,
  ArrowRightIcon,
} from "./icons/CyberIcons";

export default function ContactSection() {
  const { contact, personal } = PORTFOLIO_DATA;

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    tipoProjeto: "Desenvolvimento Web Front-End (Next.js/React)",
    mensagem: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { nome, email, telefone, tipoProjeto, mensagem } = formData;
    const texto = `Olá Daniel! Gostaria de conversar sobre um projeto:\n\n*Nome:* ${nome}\n*E-mail:* ${email}\n*WhatsApp/Tel:* ${telefone}\n*Tipo de Projeto:* ${tipoProjeto}\n*Mensagem:* ${mensagem}`;

    const url = `https://wa.me/${contact.whatsappRaw}?text=${encodeURIComponent(
      texto
    )}`;

    window.open(url, "_blank");
    setSubmitted(true);
  };

  return (
    <section
      className="py-20 lg:py-28 bg-brand-dark relative"
      data-purpose="contact-section"
      id="contato"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Col: Bold Invitation & Direct Info */}
          <div className="lg:col-span-6 space-y-6 reveal-on-scroll">
            <div className="font-mono text-xs text-brand-neon uppercase tracking-widest">
              // VAMOS CONSTRUIR JUNTOS
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black uppercase tracking-tight text-white leading-tight">
              VAMOS CRIAR ALGO
              <span className="block text-4xl sm:text-5xl lg:text-[52px] xl:text-[60px] text-brand-neon font-display font-black leading-[0.92] tracking-tighter my-2 drop-shadow-[0_0_20px_rgba(0,255,102,0.4)]">
                EXTRAOR<br />DINÁRIO
              </span>
              HOJE.
            </h2>
            <p className="font-heading text-zinc-300 text-base sm:text-lg leading-relaxed max-w-lg">
              Tem um projeto em mente ou precisa acelerar o front-end da sua
              empresa? Estou pronto para transformar ideias arrojadas em
              aplicações reais de alta performance.
            </p>

            {/* Direct Contact List */}
            <div className="space-y-4 pt-4 font-mono text-sm">
              <div className="flex items-center gap-3 text-zinc-300">
                <div className="w-9 h-9 bg-brand-card border border-brand-border flex items-center justify-center text-brand-neon">
                  <MailIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-zinc-500 uppercase">
                    E-mail Profissional
                  </div>
                  <a
                    href={`mailto:${contact.email}`}
                    className="hover:text-brand-neon transition-colors font-bold"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-zinc-300">
                <div className="w-9 h-9 bg-brand-card border border-brand-border flex items-center justify-center text-brand-neon">
                  <WhatsappIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-zinc-500 uppercase">
                    WhatsApp Direto
                  </div>
                  <a
                    href={`https://wa.me/${contact.whatsappRaw}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-neon transition-colors font-bold"
                  >
                    {contact.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-zinc-300">
                <div className="w-9 h-9 bg-brand-card border border-brand-border flex items-center justify-center text-brand-neon">
                  <LocationIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-zinc-500 uppercase">
                    Localização &amp; Atendimento
                  </div>
                  <span className="font-bold text-white">
                    {personal.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Availability & CV Download */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <div className="inline-flex items-center gap-2 bg-brand-card border border-brand-neon/40 px-4 py-2 text-xs font-mono text-brand-neon">
                <span className="w-2 h-2 rounded-full bg-brand-neon animate-ping"></span>
                <span>AGENDA ABERTA PARA NOVOS CONTRATOS</span>
              </div>
              <a
                href={personal.curriculumUrl}
                download
                className="inline-flex items-center gap-2 bg-brand-card hover:bg-brand-black border border-brand-border px-4 py-2 text-xs font-mono text-zinc-300 hover:text-white transition-colors"
              >
                <span>BAIXAR CURRÍCULO TECH (PDF)</span>
                <ArrowRightIcon className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right Col: Cyberpunk Contact Form */}
          <div className="lg:col-span-6 bg-brand-card border-2 border-brand-border hover:border-brand-neon/80 p-8 transition-colors duration-300 shadow-2xl reveal-on-scroll reveal-delay-2">
            <h3 className="font-display font-bold text-xl uppercase tracking-tight text-white mb-6 flex items-center gap-2">
              <span className="text-brand-neon">/</span> ENVIE UMA MENSAGEM
              DIRETA
            </h3>

            {submitted && (
              <div className="mb-6 p-4 bg-brand-neon/10 border border-brand-neon text-brand-neon font-mono text-xs">
                ✓ Redirecionando para o WhatsApp com seus dados preenchidos!
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block font-mono text-xs uppercase text-zinc-400 mb-1.5"
                >
                  Seu Nome ou Empresa
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Ex: Carlos Silva"
                  value={formData.nome}
                  onChange={(e) =>
                    setFormData({ ...formData, nome: e.target.value })
                  }
                  className="w-full bg-brand-black border border-brand-border px-4 py-3 text-sm text-white font-mono focus:border-brand-neon focus:ring-0 focus:outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block font-mono text-xs uppercase text-zinc-400 mb-1.5"
                  >
                    Seu E-mail Corporativo
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="carlos@empresa.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-brand-black border border-brand-border px-4 py-3 text-sm text-white font-mono focus:border-brand-neon focus:ring-0 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="tel"
                    className="block font-mono text-xs uppercase text-zinc-400 mb-1.5"
                  >
                    Seu WhatsApp / Telefone
                  </label>
                  <input
                    id="tel"
                    type="tel"
                    placeholder="(21) 99999-9999"
                    value={formData.telefone}
                    onChange={(e) =>
                      setFormData({ ...formData, telefone: e.target.value })
                    }
                    className="w-full bg-brand-black border border-brand-border px-4 py-3 text-sm text-white font-mono focus:border-brand-neon focus:ring-0 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block font-mono text-xs uppercase text-zinc-400 mb-1.5"
                >
                  Tipo de Projeto
                </label>
                <select
                  id="service"
                  value={formData.tipoProjeto}
                  onChange={(e) =>
                    setFormData({ ...formData, tipoProjeto: e.target.value })
                  }
                  className="w-full bg-brand-black border border-brand-border px-4 py-3 text-sm text-zinc-300 font-mono focus:border-brand-neon focus:ring-0 focus:outline-none transition-colors"
                >
                  <option>Landing Page de Alta Conversão</option>
                  <option>Desenvolvimento Web Front-End (Next.js/React)</option>
                  <option>Sistema Web Full Stack Completo</option>
                  <option>Refatoração &amp; Otimização de Performance</option>
                  <option>Outro / Consultoria Dedicada</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-mono text-xs uppercase text-zinc-400 mb-1.5"
                >
                  Mensagem / Escopo
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Conte brevemente sobre as metas, prazos e expectativas do seu projeto..."
                  value={formData.mensagem}
                  onChange={(e) =>
                    setFormData({ ...formData, mensagem: e.target.value })
                  }
                  className="w-full bg-brand-black border border-brand-border px-4 py-3 text-sm text-white font-mono focus:border-brand-neon focus:ring-0 focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-brand-neon text-black font-mono font-black text-sm uppercase tracking-wider hover:bg-white transition-all duration-300 shadow-[0_0_25px_rgba(0,255,102,0.4)] flex items-center justify-center gap-2 mt-4 group"
              >
                <span>DISPARAR MENSAGEM</span>
                <PaperPlaneIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
