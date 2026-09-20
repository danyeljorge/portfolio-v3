"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  MailIcon,
  WhatsappIcon,
  LocationIcon,
  PaperPlaneIcon,
  ArrowRightIcon,
} from "./icons/CyberIcons";

export default function ContactSection() {
  const { data, t, language } = useLanguage();
  const { contact, personal } = data;

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    tipoProjeto: "",
    mensagem: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { nome, email, telefone, tipoProjeto, mensagem } = formData;
    const selectedService = tipoProjeto || t.contactFormServices[0];

    const labelName = language === "en" ? "Name" : "Nome";
    const labelEmail = language === "en" ? "Email" : "E-mail";
    const labelTel = language === "en" ? "WhatsApp/Phone" : "WhatsApp/Tel";
    const labelService = language === "en" ? "Project Type" : "Tipo de Projeto";
    const labelMessage = language === "en" ? "Message" : "Mensagem";

    const texto = `${t.whatsappMessagePrefix}\n\n*${labelName}:* ${nome}\n*${labelEmail}:* ${email}\n*${labelTel}:* ${telefone}\n*${labelService}:* ${selectedService}\n*${labelMessage}:* ${mensagem}`;

    const url = `https://wa.me/${contact.whatsappRaw}?text=${encodeURIComponent(
      texto
    )}`;

    window.open(url, "_blank");
    setSubmitted(true);
  };

  return (
    <section
      className="py-20 lg:py-28 bg-slate-100 dark:bg-brand-dark relative transition-colors duration-200"
      data-purpose="contact-section"
      id="contato"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Col: Bold Invitation & Direct Info */}
          <div className="lg:col-span-6 space-y-6 reveal-on-scroll">
            <div className="font-mono text-xs text-emerald-600 dark:text-brand-neon uppercase tracking-widest">
              {t.contactTag}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black uppercase tracking-tight text-zinc-900 dark:text-white leading-tight">
              {t.contactTitle1}
              <span className="block text-4xl sm:text-5xl lg:text-[52px] xl:text-[60px] text-emerald-600 dark:text-brand-neon font-display font-black leading-[0.92] tracking-tighter my-2 drop-shadow-[0_0_20px_rgba(0,255,102,0.4)]">
                {t.contactTitle2Line1}<br />{t.contactTitle2Line2}
              </span>
              {t.contactTitle3}
            </h2>
            <p className="font-heading text-zinc-700 dark:text-zinc-300 text-base sm:text-lg leading-relaxed max-w-lg">
              {t.contactDesc}
            </p>

            {/* Direct Contact List */}
            <div className="space-y-4 pt-4 font-mono text-sm">
              <div className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
                <div className="w-9 h-9 bg-white dark:bg-brand-card border border-zinc-200 dark:border-brand-border flex items-center justify-center text-emerald-600 dark:text-brand-neon shadow-sm">
                  <MailIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-zinc-500 uppercase">
                    {t.contactEmailLabel}
                  </div>
                  <a
                    href={`mailto:${contact.email}`}
                    className="hover:text-emerald-600 dark:hover:text-brand-neon transition-colors font-bold text-zinc-900 dark:text-white"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
                <div className="w-9 h-9 bg-white dark:bg-brand-card border border-zinc-200 dark:border-brand-border flex items-center justify-center text-emerald-600 dark:text-brand-neon shadow-sm">
                  <WhatsappIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-zinc-500 uppercase">
                    {t.contactWhatsappLabel}
                  </div>
                  <a
                    href={`https://wa.me/${contact.whatsappRaw}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-600 dark:hover:text-brand-neon transition-colors font-bold text-zinc-900 dark:text-white"
                  >
                    {contact.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
                <div className="w-9 h-9 bg-white dark:bg-brand-card border border-zinc-200 dark:border-brand-border flex items-center justify-center text-emerald-600 dark:text-brand-neon shadow-sm">
                  <LocationIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-zinc-500 uppercase">
                    {t.contactLocationLabel}
                  </div>
                  <span className="font-bold text-zinc-900 dark:text-white">
                    {personal.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Availability & CV Download */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <div className="inline-flex items-center gap-2 bg-white dark:bg-brand-card border border-emerald-600/40 dark:border-brand-neon/40 px-4 py-2 text-xs font-mono text-emerald-700 dark:text-brand-neon shadow-sm">
                <span className="w-2 h-2 rounded-full bg-brand-neon animate-ping"></span>
                <span>{t.contactScheduleBadge}</span>
              </div>
              <a
                href={personal.curriculumUrl}
                download
                className="inline-flex items-center gap-2 bg-white hover:bg-zinc-100 dark:bg-brand-card dark:hover:bg-brand-black border border-zinc-300 dark:border-brand-border px-4 py-2 text-xs font-mono text-zinc-700 hover:text-black dark:text-zinc-300 dark:hover:text-white transition-colors shadow-sm"
              >
                <span>{t.contactCvDownload}</span>
                <ArrowRightIcon className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right Col: Cyberpunk Contact Form */}
          <div className="lg:col-span-6 bg-white dark:bg-brand-card border-2 border-zinc-200 dark:border-brand-border hover:border-emerald-500/80 dark:hover:border-brand-neon/80 p-8 transition-colors duration-300 shadow-xl dark:shadow-2xl reveal-on-scroll reveal-delay-2">
            <h3 className="font-display font-bold text-xl uppercase tracking-tight text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
              <span className="text-emerald-600 dark:text-brand-neon">/</span> {t.contactFormTitle}
            </h3>

            {submitted && (
              <div className="mb-6 p-4 bg-emerald-50 dark:bg-brand-neon/10 border border-emerald-500 dark:border-brand-neon text-emerald-700 dark:text-brand-neon font-mono text-xs">
                {t.contactFormSuccess}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block font-mono text-xs uppercase text-zinc-600 dark:text-zinc-400 mb-1.5"
                >
                  {t.contactFormNameLabel}
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder={t.contactFormNamePlaceholder}
                  value={formData.nome}
                  onChange={(e) =>
                    setFormData({ ...formData, nome: e.target.value })
                  }
                  className="w-full bg-zinc-50 dark:bg-brand-black border border-zinc-300 dark:border-brand-border px-4 py-3 text-sm text-zinc-900 dark:text-white font-mono focus:border-emerald-500 dark:focus:border-brand-neon focus:ring-0 focus:outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block font-mono text-xs uppercase text-zinc-600 dark:text-zinc-400 mb-1.5"
                  >
                    {t.contactFormEmailLabel}
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder={t.contactFormEmailPlaceholder}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-zinc-50 dark:bg-brand-black border border-zinc-300 dark:border-brand-border px-4 py-3 text-sm text-zinc-900 dark:text-white font-mono focus:border-emerald-500 dark:focus:border-brand-neon focus:ring-0 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="tel"
                    className="block font-mono text-xs uppercase text-zinc-600 dark:text-zinc-400 mb-1.5"
                  >
                    {t.contactFormTelLabel}
                  </label>
                  <input
                    id="tel"
                    type="tel"
                    placeholder={t.contactFormTelPlaceholder}
                    value={formData.telefone}
                    onChange={(e) =>
                      setFormData({ ...formData, telefone: e.target.value })
                    }
                    className="w-full bg-zinc-50 dark:bg-brand-black border border-zinc-300 dark:border-brand-border px-4 py-3 text-sm text-zinc-900 dark:text-white font-mono focus:border-emerald-500 dark:focus:border-brand-neon focus:ring-0 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block font-mono text-xs uppercase text-zinc-600 dark:text-zinc-400 mb-1.5"
                >
                  {t.contactFormServiceLabel}
                </label>
                <select
                  id="service"
                  value={formData.tipoProjeto || t.contactFormServices[0]}
                  onChange={(e) =>
                    setFormData({ ...formData, tipoProjeto: e.target.value })
                  }
                  className="w-full bg-zinc-50 dark:bg-brand-black border border-zinc-300 dark:border-brand-border px-4 py-3 text-sm text-zinc-800 dark:text-zinc-300 font-mono focus:border-emerald-500 dark:focus:border-brand-neon focus:ring-0 focus:outline-none transition-colors"
                >
                  {t.contactFormServices.map((service, idx) => (
                    <option key={idx} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-mono text-xs uppercase text-zinc-600 dark:text-zinc-400 mb-1.5"
                >
                  {t.contactFormMessageLabel}
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder={t.contactFormMessagePlaceholder}
                  value={formData.mensagem}
                  onChange={(e) =>
                    setFormData({ ...formData, mensagem: e.target.value })
                  }
                  className="w-full bg-zinc-50 dark:bg-brand-black border border-zinc-300 dark:border-brand-border px-4 py-3 text-sm text-zinc-900 dark:text-white font-mono focus:border-emerald-500 dark:focus:border-brand-neon focus:ring-0 focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-brand-neon text-black font-mono font-black text-sm uppercase tracking-wider hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 shadow-[0_0_25px_rgba(0,255,102,0.4)] flex items-center justify-center gap-2 mt-4 group cursor-pointer"
              >
                <span>{t.contactFormSubmit}</span>
                <PaperPlaneIcon className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
