/**
 * =====================================================================
 * PORTFOLIO DATA CONFIGURATION // DANIEL JORGE
 * =====================================================================
 * Este arquivo centraliza todas as informações do portfólio.
 * Para adicionar, remover ou editar projetos, links, redes sociais ou
 * textos, basta alterar este arquivo.
 */

export interface Project {
  id: string;
  tag: string;
  title: string;
  description: string;
  techs: string[];
  metrics?: string;
  category: string;
  liveUrl: string;
  githubUrl?: string;
  mockupTitle: string;
  mockupBadge: string;
  gradient: string;
  image?: string;
}

export interface TechItem {
  name: string;
  role: string;
  iconType: string;
  accentColor: string;
}

export interface TimelineItem {
  period: string;
  title: string;
  description: string;
  tag: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  initials: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Daniel Jorge",
    title: "Desenvolvedor Web Front-end & Full Stack",
    shortBio:
      "Desenvolvedor Full Stack & Especialista Front-end. Criando plataformas modernas, interfaces ultra-rápidas e identidades digitais memoráveis com arquitetura limpa.",
    heroHeadline: {
      line1: "EU DESENHO.",
      line2: "EU CODIFICO.",
      line3: "EU ELEVO",
      line4: "MARCAS.",
    },
    location: "Rio de Janeiro, Brasil — Atendimento Global",
    coordinates: "LOC: 22.9068° S, 43.1729° W",
    systemStatus: "SYSTEM: STATUS // OPTIMAL",
    systemId: "SYS.ID: DJ-STACK-2025",
    coreStack: "CORE: FRONT-END & FULL-STACK",
    yearsExperience: "5+",
    curriculumUrl: "/curriculo.pdf",
    highlights: [
      { label: "PageSpeed Score", value: "100%", icon: "bolt" },
      { label: "Experiência Web", value: "5+ Anos", icon: "layer" },
      { label: "Core Stack", value: "Next.js & React", icon: "terminal" },
    ],
  },

  contact: {
    email: "contato@danieljorge.dev.br",
    phone: "+55 (21) 99845-2350",
    phoneDisplay: "+55 (21) 99845-2350",
    whatsappRaw: "5521998452350",
    hours: "Segunda à Sexta — 09:00 às 18:00",
    availabilityBadge: "DISPONÍVEL PARA NOVOS PROJETOS",
  },

  socialLinks: {
    github: "https://github.com/danyeljorge",
    linkedin: "https://www.linkedin.com/in/danieljorgee/",
    instagram: "https://www.instagram.com/danyeljorgee/",
    youtube: "https://www.youtube.com/@trilhadacomputacao",
    facebook: "https://www.facebook.com/devdanieljorge",
  },

  navLinks: [
    { num: "01.", label: "HOME", href: "#hero" },
    { num: "02.", label: "TRABALHOS", href: "#trabalhos" },
    { num: "03.", label: "STACK", href: "#tech" },
    { num: "04.", label: "CARREIRA", href: "#experiencia" },
    { num: "05.", label: "REVIEWS", href: "#depoimentos" },
  ],

  marqueeItems: [
    "FRONT-END ARCHITECTURE",
    "FULL STACK REACT & NEXT.JS",
    "HIGH-PERFORMANCE INTERFACES",
    "REST API & NODE INTEGRATION",
    "UI / UX DESIGN BRUTALISTA",
    "SEO & 99+ LIGHTHOUSE PERFORMANCE",
    "CYBERPUNK MODERN AESTHETIC",
    "CLEAN & SCALABLE CODE",
  ],

  featuredProjects: [
    {
      id: "elohim",
      tag: "01 // INSTITUCIONAL",
      title: "ELOHIM RESIDENCE",
      description:
        "Portal institucional moderno para lar de idosos com navegação humanizada, agendamento de visitas online e painel administrativo.",
      techs: ["NEXT.JS", "TAILWIND", "REACT"],
      metrics: "Clean UI / SEO Otimizado",
      category: "CASE V1.2",
      liveUrl: "https://www.casaderepousoelohim.com.br/",
      githubUrl: "https://github.com/danyeljorge",
      mockupTitle: "CASA ELOHIM",
      mockupBadge: "100% RESPONSIVO",
      gradient: "from-emerald-950/40 via-zinc-900 to-black",
      image: "/images/projects/projeto_07_elohim_v2.png",
    },
    {
      id: "keygen",
      tag: "02 // CYBERSECURITY",
      title: "KEYGEN SECURITY",
      description:
        "Gerador de senhas de alta entropia criptográfica com validação de força, cálculo de segurança em tempo real e cópia instantânea.",
      techs: ["TYPESCRIPT", "REACT", "CRYPTO"],
      metrics: "TypeScript & React",
      category: "UTILITÁRIO",
      liveUrl: "https://danyeljorge.github.io/password-generator/",
      githubUrl: "https://github.com/danyeljorge/password-generator",
      mockupTitle: "!k9#Xm@90_Zq$99",
      mockupBadge: "ENTROPY 128-BIT",
      gradient: "from-zinc-900 via-black to-zinc-950",
      image: "/images/projects/projeto_02_gerador-senha.jpg",
    },
    {
      id: "clima",
      tag: "03 // WEATHER API",
      title: "CLIMA TEMPO RADAR",
      description:
        "Aplicação climática em tempo real com busca por geolocalização dinâmica, previsões meteorológicas e renderização atmosférica.",
      techs: ["JAVASCRIPT", "OPENWEATHER", "REST"],
      metrics: "OpenWeather API",
      category: "ASYNC REST",
      liveUrl: "https://danyeljorge.github.io/climatempo/",
      githubUrl: "https://github.com/danyeljorge/climatempo",
      mockupTitle: "28°C // RIO DE JANEIRO",
      mockupBadge: "LIVE API",
      gradient: "from-blue-950/30 via-zinc-900 to-black",
      image: "/images/projects/projeto_05_previsao-tempo.jpg",
    },
    {
      id: "fintech",
      tag: "04 // FINTECH TOOL",
      title: "CALC FINTECH & PONTO",
      description:
        "Simulador financeiro de juros compostos, amortização de aportes e cálculo inteligente de banco de horas e retorno de almoço.",
      techs: ["REACT", "ALGORITMOS", "VERCEL"],
      metrics: "SaaS Engine / Dashboard",
      category: "FINANCE",
      liveUrl: "https://calc-juros-compostos.vercel.app/",
      githubUrl: "https://github.com/danyeljorge/calc-juros-compostos",
      mockupTitle: "DASHBOARD METRICS",
      mockupBadge: "↑ 240% RETORNO",
      gradient: "from-zinc-900 via-black to-zinc-950",
      image: "/images/projects/projeto_03_juros-compostos.jpg",
    },
  ],

  caseStudy: {
    tag: "CASE STUDY #01",
    subtitle: "ESTUDO DE CASO EM DESTAQUE",
    title: "SPARK SAAS PLATFORM",
    stackSummary: "STACK: NEXT.JS + TAILWIND + NODE.JS + STRIPE",
    headline: "Redesenho & Otimização de Performance para SaaS B2B",
    description:
      "Refatoração integral de um ecossistema digital para automação empresarial. A transição para Next.js e modernização da interface resultou em quedas drásticas de tempo de carregamento e elevação substancial de conversões.",
    metrics: [
      { value: "+180%", label: "Aumento em Conversões", highlight: true },
      { value: "2.4X", label: "Mais Rápido no Carregamento", highlight: false },
      { value: "99+", label: "PageSpeed Lighthouse", highlight: true },
    ],
    dashboardUrl: "dashboard.spark-saas.app",
    statusBadge: "LIVE_METRICS: OK",
    monthlyRevenue: "R$ 148.920,00",
    monthlyGrowth: "↑ 24.8% este mês",
    logs: [
      { text: "Deploy Automatizado Edge Vercel", time: "12ms" },
      { text: "Cache Edge CDN Hit Ratio", time: "99.4%" },
    ],
  },

  techStack: [
    { name: "REACT.JS", role: "Frontend Core", iconType: "react", accentColor: "#61DAFB" },
    { name: "NEXT.JS", role: "SSR & Full Stack", iconType: "nextjs", accentColor: "#FFFFFF" },
    { name: "TYPESCRIPT", role: "Tipagem Segura", iconType: "typescript", accentColor: "#3178C6" },
    { name: "JAVASCRIPT", role: "ES6+ Moderno", iconType: "javascript", accentColor: "#F7DF1E" },
    { name: "TAILWIND CSS", role: "Utility First", iconType: "tailwind", accentColor: "#38BDF8" },
    { name: "NODE.JS", role: "Backend & APIs", iconType: "nodejs", accentColor: "#22C55E" },
    { name: "HTML5", role: "Semântica & A11y", iconType: "html5", accentColor: "#E34F26" },
    { name: "CSS3", role: "Layouts & Motion", iconType: "css3", accentColor: "#1572B6" },
    { name: "GIT / GITHUB", role: "Versionamento CI/CD", iconType: "github", accentColor: "#FFFFFF" },
    { name: "FIGMA", role: "Prototipagem & UI", iconType: "figma", accentColor: "#F24E1E" },
    { name: "WORDPRESS", role: "CMS & Headless", iconType: "wordpress", accentColor: "#21759B" },
    { name: "PAGESPEED", role: "SEO & Core Vitals", iconType: "pagespeed", accentColor: "#00FF66" },
  ],

  experience: [
    {
      period: "2019 — INÍCIO",
      title: "Início da Jornada Autodidata",
      description:
        "Primeiras linhas de código em HTML, CSS e JavaScript. Criação de landing pages e templates responsivos do zero com foco em boas práticas.",
      tag: "FUNDAMENTOS",
    },
    {
      period: "2021 — FREELANCE",
      title: "Desenvolvedor Web Freelance",
      description:
        "Atendimento direto a clientes e agências. Criação de soluções corporativas, sites institucionais, integrações e interfaces interativas.",
      tag: "PROJETOS REAIS",
    },
    {
      period: "2023 — FULL STACK",
      title: "Full-Stack & Next.js",
      description:
        "Aprofundamento no ecossistema React, Next.js, integrações RESTful, gerenciamento de banco de dados e componentização modular escalável.",
      tag: "ARQUITETURA",
    },
    {
      period: "2025 — ATUAL",
      title: "Criador & Arquiteto Front-end",
      description:
        "Desenvolvimento de sistemas SaaS escaláveis, UI brutalista contemporânea e consultoria de alta conversão para marcas modernas.",
      tag: "LEAD DEV",
    },
  ],

  experienceCounter: {
    value: "5+",
    unit: "ANOS DE EXPERIÊNCIA CONTÍNUA",
    statement: "APRENDIZADO CONSTANTE, CÓDIGO LIMPO E CONSTRUÇÃO DE EXPERIÊNCIAS WEB EFICIENTES.",
  },

  testimonials: [
    {
      quote:
        "Trabalhar com o Daniel foi um divisor de águas absoluto. O projeto da nossa plataforma foi entregue rigorosamente no prazo e com um nível de acabamento muito além do esperado.",
      name: "Daniel K.",
      role: "Fundador, Nexora Studio",
      initials: "DK",
    },
    {
      quote:
        "Ele não é apenas um excelente programador front-end, mas um solucionador de problemas estratégico. O site ficou incrivelmente rápido e as conversões dobraram.",
      name: "Sophia M.",
      role: "Product Manager, Spark",
      initials: "SM",
    },
    {
      quote:
        "Código limpo, comunicação ágil e resultados excepcionais. A facilidade com que ele transformou o Figma em código limpo foi impressionante. Recomendo de olhos fechados.",
      name: "Alex R.",
      role: "CEO, Outlier Tech",
      initials: "AR",
    },
  ],
};
