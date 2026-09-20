"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import {
  Language,
  PortfolioData,
  UiTranslations,
  getPortfolioData,
  UI_TRANSLATIONS,
} from "@/data/portfolio";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  data: PortfolioData;
  t: UiTranslations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("pt");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem("portfolio_lang") as Language | null;
      if (savedLang === "en" || savedLang === "pt") {
        setLanguageState(savedLang);
        document.documentElement.lang = savedLang === "en" ? "en" : "pt-BR";
      }
    } catch {
      // Ignore storage read error
    }
    setMounted(true);
  }, []);

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
    try {
      localStorage.setItem("portfolio_lang", newLang);
      document.documentElement.lang = newLang === "en" ? "en" : "pt-BR";
    } catch {
      // Ignore storage write error
    }
  };

  const toggleLanguage = () => {
    const nextLang: Language = language === "pt" ? "en" : "pt";
    setLanguage(nextLang);
  };

  const data = getPortfolioData(language);
  const t = UI_TRANSLATIONS[language];

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        data,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
