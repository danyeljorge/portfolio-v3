/**
 * =====================================================================
 * PORTFOLIO DATA CONFIGURATION // DANIEL JORGE
 * MULTI-LANGUAGE SUPPORT (PORTUGUESE & ENGLISH)
 * =====================================================================
 */

export type Language = "pt" | "en";

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

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    shortBio: string;
    heroHeadline: {
      line1: string;
      line2: string;
      line3: string;
      line4: string;
    };
    location: string;
    coordinates: string;
    systemStatus: string;
    systemId: string;
    coreStack: string;
    yearsExperience: string;
    curriculumUrl: string;
    highlights: { label: string; value: string; icon: string }[];
  };
  contact: {
    email: string;
    phone: string;
    phoneDisplay: string;
    whatsappRaw: string;
    hours: string;
    availabilityBadge: string;
  };
  socialLinks: {
    github: string;
    linkedin: string;
    instagram: string;
    youtube: string;
    facebook: string;
  };
  navLinks: { num: string; label: string; href: string }[];
  marqueeItems: string[];
  featuredProjects: Project[];
  caseStudy: {
    tag: string;
    subtitle: string;
    title: string;
    stackSummary: string;
    headline: string;
    description: string;
    metrics: { value: string; label: string; highlight?: boolean }[];
    dashboardUrl: string;
    statusBadge: string;
    monthlyRevenue: string;
    monthlyGrowth: string;
    logs: { text: string; time: string }[];
  };
  techStack: TechItem[];
  experience: TimelineItem[];
  experienceCounter: {
    value: string;
    unit: string;
    statement: string;
  };
  testimonials: Testimonial[];
}

export interface UiTranslations {
  navCta: string;
  navCtaShort: string;
  themeLight: string;
  themeDark: string;
  themeSwitchLight: string;
  themeSwitchDark: string;
  heroEdition: string;
  heroCtaProjects: string;
  heroCtaFreelance: string;
  heroBadgeTitle: string;
  heroBadgeSub: string;
  heroMetricLabel: string;
  heroMetricValue: string;
  projectsTag: string;
  projectsTitle: string;
  projectsCustom: string;
  projectsVisit: string;
  projectsMoreGithub: string;
  techTag: string;
  techTitle: string;
  techSubtitle: string;
  timelineTag: string;
  timelineTitle: string;
  timelineStatus: string;
  timelineAvailable: string;
  testimonialsTag: string;
  testimonialsTitle: string;
  contactTag: string;
  contactTitle1: string;
  contactTitle2Line1: string;
  contactTitle2Line2: string;
  contactTitle3: string;
  contactDesc: string;
  contactEmailLabel: string;
  contactWhatsappLabel: string;
  contactLocationLabel: string;
  contactScheduleBadge: string;
  contactCvDownload: string;
  contactFormTitle: string;
  contactFormNameLabel: string;
  contactFormNamePlaceholder: string;
  contactFormEmailLabel: string;
  contactFormEmailPlaceholder: string;
  contactFormTelLabel: string;
  contactFormTelPlaceholder: string;
  contactFormServiceLabel: string;
  contactFormServices: string[];
  contactFormMessageLabel: string;
  contactFormMessagePlaceholder: string;
  contactFormSubmit: string;
  contactFormSuccess: string;
  whatsappMessagePrefix: string;
  footerBackToTop: string;
  footerRights: string;
  footerBrutalism: string;
  caseStudyCta: string;
  caseStudyMrrLabel: string;
  langSwitchAria: string;
}

export const PORTFOLIO_DATA_PT: PortfolioData = {
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
    "ARQUITETURA FRONT-END",
    "FULL STACK REACT & NEXT.JS",
    "INTERFACES DE ALTA PERFORMANCE",
    "INTEGRAÇÃO REST API & NODE",
    "UI / UX DESIGN BRUTALISTA",
    "SEO & 99+ LIGHTHOUSE PERFORMANCE",
    "ESTÉTICA CYBERPUNK MODERNA",
    "CÓDIGO LIMPO & ESCALÁVEL",
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
      mockupBadge: "ENTROPIA 128-BIT",
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

export const PORTFOLIO_DATA_EN: PortfolioData = {
  personal: {
    name: "Daniel Jorge",
    title: "Front-end & Full Stack Web Developer",
    shortBio:
      "Full Stack Developer & Front-end Specialist. Building modern platforms, ultra-fast interfaces, and memorable digital brand identities with clean architecture.",
    heroHeadline: {
      line1: "I DESIGN.",
      line2: "I CODE.",
      line3: "I ELEVATE",
      line4: "BRANDS.",
    },
    location: "Rio de Janeiro, Brazil — Global Availability",
    coordinates: "LOC: 22.9068° S, 43.1729° W",
    systemStatus: "SYSTEM: STATUS // OPTIMAL",
    systemId: "SYS.ID: DJ-STACK-2025",
    coreStack: "CORE: FRONT-END & FULL-STACK",
    yearsExperience: "5+",
    curriculumUrl: "/curriculo.pdf",
    highlights: [
      { label: "PageSpeed Score", value: "100%", icon: "bolt" },
      { label: "Web Experience", value: "5+ Years", icon: "layer" },
      { label: "Core Stack", value: "Next.js & React", icon: "terminal" },
    ],
  },

  contact: {
    email: "contato@danieljorge.dev.br",
    phone: "+55 (21) 99845-2350",
    phoneDisplay: "+55 (21) 99845-2350",
    whatsappRaw: "5521998452350",
    hours: "Monday to Friday — 09:00 AM to 06:00 PM (BRT)",
    availabilityBadge: "AVAILABLE FOR NEW PROJECTS",
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
    { num: "02.", label: "WORKS", href: "#trabalhos" },
    { num: "03.", label: "STACK", href: "#tech" },
    { num: "04.", label: "CAREER", href: "#experiencia" },
    { num: "05.", label: "REVIEWS", href: "#depoimentos" },
  ],

  marqueeItems: [
    "FRONT-END ARCHITECTURE",
    "FULL STACK REACT & NEXT.JS",
    "HIGH-PERFORMANCE INTERFACES",
    "REST API & NODE INTEGRATION",
    "BRUTALIST UI / UX DESIGN",
    "SEO & 99+ LIGHTHOUSE PERFORMANCE",
    "MODERN CYBERPUNK AESTHETIC",
    "CLEAN & SCALABLE CODE",
  ],

  featuredProjects: [
    {
      id: "elohim",
      tag: "01 // INSTITUTIONAL",
      title: "ELOHIM RESIDENCE",
      description:
        "Modern institutional platform for a senior care community featuring human-centered navigation, online tour booking, and administrative console.",
      techs: ["NEXT.JS", "TAILWIND", "REACT"],
      metrics: "Clean UI / Optimized SEO",
      category: "CASE V1.2",
      liveUrl: "https://www.casaderepousoelohim.com.br/",
      githubUrl: "https://github.com/danyeljorge",
      mockupTitle: "ELOHIM RESIDENCE",
      mockupBadge: "100% RESPONSIVE",
      gradient: "from-emerald-950/40 via-zinc-900 to-black",
      image: "/images/projects/projeto_07_elohim_v2.png",
    },
    {
      id: "keygen",
      tag: "02 // CYBERSECURITY",
      title: "KEYGEN SECURITY",
      description:
        "High-entropy cryptographic password generator with strength validation, real-time security score, and one-click clipboard copy.",
      techs: ["TYPESCRIPT", "REACT", "CRYPTO"],
      metrics: "TypeScript & React",
      category: "UTILITY",
      liveUrl: "https://danyeljorge.github.io/password-generator/",
      githubUrl: "https://github.com/danyeljorge/password-generator",
      mockupTitle: "!k9#Xm@90_Zq$99",
      mockupBadge: "128-BIT ENTROPY",
      gradient: "from-zinc-900 via-black to-zinc-950",
      image: "/images/projects/projeto_02_gerador-senha.jpg",
    },
    {
      id: "clima",
      tag: "03 // WEATHER API",
      title: "WEATHER RADAR",
      description:
        "Real-time weather radar application featuring dynamic geolocation search, forecast models, and atmospheric data rendering.",
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
      title: "FINTECH & WORK CALC",
      description:
        "Financial simulator for compound interest, contribution amortization, and smart work-hour tracking and break time management.",
      techs: ["REACT", "ALGORITHMS", "VERCEL"],
      metrics: "SaaS Engine / Dashboard",
      category: "FINANCE",
      liveUrl: "https://calc-juros-compostos.vercel.app/",
      githubUrl: "https://github.com/danyeljorge/calc-juros-compostos",
      mockupTitle: "DASHBOARD METRICS",
      mockupBadge: "↑ 240% RETURN",
      gradient: "from-zinc-900 via-black to-zinc-950",
      image: "/images/projects/projeto_03_juros-compostos.jpg",
    },
  ],

  caseStudy: {
    tag: "CASE STUDY #01",
    subtitle: "FEATURED CASE STUDY",
    title: "SPARK SAAS PLATFORM",
    stackSummary: "STACK: NEXT.JS + TAILWIND + NODE.JS + STRIPE",
    headline: "Redesign & Performance Optimization for B2B SaaS",
    description:
      "Comprehensive refactoring of an enterprise automation ecosystem. Transitioning to Next.js and modernizing the UI slashed load times and doubled conversion rates.",
    metrics: [
      { value: "+180%", label: "Conversion Growth", highlight: true },
      { value: "2.4X", label: "Faster Load Speed", highlight: false },
      { value: "99+", label: "PageSpeed Lighthouse", highlight: true },
    ],
    dashboardUrl: "dashboard.spark-saas.app",
    statusBadge: "LIVE_METRICS: OK",
    monthlyRevenue: "$ 148,920.00",
    monthlyGrowth: "↑ 24.8% this month",
    logs: [
      { text: "Edge Automated Deploy Vercel", time: "12ms" },
      { text: "CDN Edge Cache Hit Ratio", time: "99.4%" },
    ],
  },

  techStack: [
    { name: "REACT.JS", role: "Frontend Core", iconType: "react", accentColor: "#61DAFB" },
    { name: "NEXT.JS", role: "SSR & Full Stack", iconType: "nextjs", accentColor: "#FFFFFF" },
    { name: "TYPESCRIPT", role: "Type Safety", iconType: "typescript", accentColor: "#3178C6" },
    { name: "JAVASCRIPT", role: "Modern ES6+", iconType: "javascript", accentColor: "#F7DF1E" },
    { name: "TAILWIND CSS", role: "Utility First", iconType: "tailwind", accentColor: "#38BDF8" },
    { name: "NODE.JS", role: "Backend & APIs", iconType: "nodejs", accentColor: "#22C55E" },
    { name: "HTML5", role: "Semantics & A11y", iconType: "html5", accentColor: "#E34F26" },
    { name: "CSS3", role: "Layouts & Motion", iconType: "css3", accentColor: "#1572B6" },
    { name: "GIT / GITHUB", role: "CI/CD Versioning", iconType: "github", accentColor: "#FFFFFF" },
    { name: "FIGMA", role: "UI & Prototyping", iconType: "figma", accentColor: "#F24E1E" },
    { name: "WORDPRESS", role: "CMS & Headless", iconType: "wordpress", accentColor: "#21759B" },
    { name: "PAGESPEED", role: "SEO & Core Vitals", iconType: "pagespeed", accentColor: "#00FF66" },
  ],

  experience: [
    {
      period: "2019 — BEGINNING",
      title: "Self-Taught Journey Begins",
      description:
        "First lines of code in HTML, CSS, and JavaScript. Building landing pages and responsive templates from scratch with strict adherence to best practices.",
      tag: "FUNDAMENTALS",
    },
    {
      period: "2021 — FREELANCE",
      title: "Freelance Web Developer",
      description:
        "Working directly with clients and agencies. Crafting corporate web solutions, institutional sites, custom integrations, and interactive interfaces.",
      tag: "REAL PROJECTS",
    },
    {
      period: "2023 — FULL STACK",
      title: "Full-Stack & Next.js",
      description:
        "Deep exploration into React, Next.js, RESTful architectures, database management, and scalable modular component design.",
      tag: "ARCHITECTURE",
    },
    {
      period: "2025 — PRESENT",
      title: "Front-end Architect & Lead Dev",
      description:
        "Building scalable SaaS applications, contemporary brutalist UIs, and high-conversion technical consulting for forward-thinking brands.",
      tag: "LEAD DEV",
    },
  ],

  experienceCounter: {
    value: "5+",
    unit: "YEARS OF CONTINUOUS EXPERIENCE",
    statement: "CONSTANT LEARNING, CLEAN CODE, AND CRAFTING HIGH-PERFORMANCE WEB EXPERIENCES.",
  },

  testimonials: [
    {
      quote:
        "Working with Daniel was an absolute game changer. Our platform project was delivered strictly on schedule and with a level of polish well beyond what we imagined.",
      name: "Daniel K.",
      role: "Founder, Nexora Studio",
      initials: "DK",
    },
    {
      quote:
        "He is not only an exceptional front-end developer, but a strategic problem solver. The website became blazingly fast and our conversions doubled.",
      name: "Sophia M.",
      role: "Product Manager, Spark",
      initials: "SM",
    },
    {
      quote:
        "Clean code, lightning-fast communication, and outstanding results. The precision with which he translated Figma designs into clean, performant code was remarkable. Highly recommended.",
      name: "Alex R.",
      role: "CEO, Outlier Tech",
      initials: "AR",
    },
  ],
};

export const UI_TRANSLATIONS: Record<Language, UiTranslations> = {
  pt: {
    navCta: "VAMOS CONVERSAR",
    navCtaShort: "CONTATO",
    themeLight: "LIGHT",
    themeDark: "DARK",
    themeSwitchLight: "ALTERNAR PARA MODO CLARO",
    themeSwitchDark: "ALTERNAR PARA MODO ESCURO",
    heroEdition: "PORTFÓLIO EDITORIAL 2025 // V3.8",
    heroCtaProjects: "VER PROJETOS",
    heroCtaFreelance: "CONTRATAR FREELANCE",
    heroBadgeTitle: "DANIEL JORGE",
    heroBadgeSub: "FULL STACK DEVELOPER",
    heroMetricLabel: "PERFORMANCE",
    heroMetricValue: "99+ PIXEL PERFECT",
    projectsTag: "// PORTFÓLIO SELECIONADO",
    projectsTitle: "TRABALHOS EM DESTAQUE",
    projectsCustom: "SOLICITAR PROJETO SOB MEDIDA",
    projectsVisit: "VISITAR",
    projectsMoreGithub: "VER MAIS PROJETOS NO GITHUB",
    techTag: "// ARSENAL TÉCNICO",
    techTitle: "FERRAMENTAS & STACK",
    techSubtitle: "TECNOLOGIAS MODERNAS // FOCO EM PERFORMANCE",
    timelineTag: "// LINHA DO TEMPO",
    timelineTitle: "EXPERIÊNCIA & JORNADA",
    timelineStatus: "STATUS: CODIFICANDO ATIVAMENTE",
    timelineAvailable: "DISPONÍVEL PARA PROJETOS",
    testimonialsTag: "// FEEDBACK & CONFIANÇA",
    testimonialsTitle: "O QUE OS CLIENTES DIZEM",
    contactTag: "// VAMOS CONSTRUIR JUNTOS",
    contactTitle1: "VAMOS CRIAR ALGO",
    contactTitle2Line1: "EXTRAOR",
    contactTitle2Line2: "DINÁRIO",
    contactTitle3: "HOJE.",
    contactDesc:
      "Tem um projeto em mente ou precisa acelerar o front-end da sua empresa? Estou pronto para transformar ideias arrojadas em aplicações reais de alta performance.",
    contactEmailLabel: "E-mail Profissional",
    contactWhatsappLabel: "WhatsApp Direto",
    contactLocationLabel: "Localização & Atendimento",
    contactScheduleBadge: "AGENDA ABERTA PARA NOVOS CONTRATOS",
    contactCvDownload: "BAIXAR CURRÍCULO TECH (PDF)",
    contactFormTitle: "ENVIE UMA MENSAGEM DIRETA",
    contactFormNameLabel: "Seu Nome ou Empresa",
    contactFormNamePlaceholder: "Ex: Carlos Silva",
    contactFormEmailLabel: "Seu E-mail Corporativo",
    contactFormEmailPlaceholder: "carlos@empresa.com",
    contactFormTelLabel: "Seu WhatsApp / Telefone",
    contactFormTelPlaceholder: "(21) 99999-9999",
    contactFormServiceLabel: "Tipo de Projeto",
    contactFormServices: [
      "Landing Page de Alta Conversão",
      "Desenvolvimento Web Front-End (Next.js/React)",
      "Sistema Web Full Stack Completo",
      "Refatoração & Otimização de Performance",
      "Outro / Consultoria Dedicada",
    ],
    contactFormMessageLabel: "Mensagem / Escopo",
    contactFormMessagePlaceholder:
      "Conte brevemente sobre as metas, prazos e expectativas do seu projeto...",
    contactFormSubmit: "DISPARAR MENSAGEM",
    contactFormSuccess: "✓ Redirecionando para o WhatsApp com seus dados preenchidos!",
    whatsappMessagePrefix: "Olá Daniel! Gostaria de conversar sobre um projeto:",
    footerBackToTop: "VOLTAR AO TOPO",
    footerRights: "Daniel Jorge. Todos os direitos reservados.",
    footerBrutalism: "DESENHADO & CODIFICADO COM NEXT-GEN BRUTALISM",
    caseStudyCta: "VER DETALHES DO PROJETO",
    caseStudyMrrLabel: "Receita Recorrente Mensal",
    langSwitchAria: "Alternar idioma para Inglês",
  },
  en: {
    navCta: "LET'S TALK",
    navCtaShort: "CONTACT",
    themeLight: "LIGHT",
    themeDark: "DARK",
    themeSwitchLight: "SWITCH TO LIGHT MODE",
    themeSwitchDark: "SWITCH TO DARK MODE",
    heroEdition: "EDITORIAL PORTFOLIO 2025 // V3.8",
    heroCtaProjects: "VIEW PROJECTS",
    heroCtaFreelance: "HIRE FREELANCE",
    heroBadgeTitle: "DANIEL JORGE",
    heroBadgeSub: "FULL STACK DEVELOPER",
    heroMetricLabel: "PERFORMANCE",
    heroMetricValue: "99+ PIXEL PERFECT",
    projectsTag: "// SELECTED PORTFOLIO",
    projectsTitle: "FEATURED WORKS",
    projectsCustom: "REQUEST CUSTOM PROJECT",
    projectsVisit: "VISIT",
    projectsMoreGithub: "VIEW MORE PROJECTS ON GITHUB",
    techTag: "// TECHNICAL ARSENAL",
    techTitle: "TOOLS & STACK",
    techSubtitle: "MODERN TECH // FOCUSED ON PERFORMANCE",
    timelineTag: "// TIMELINE",
    timelineTitle: "EXPERIENCE & JOURNEY",
    timelineStatus: "STATUS: ACTIVELY CODING",
    timelineAvailable: "AVAILABLE FOR PROJECTS",
    testimonialsTag: "// FEEDBACK & TRUST",
    testimonialsTitle: "WHAT CLIENTS SAY",
    contactTag: "// LET'S BUILD TOGETHER",
    contactTitle1: "LET'S BUILD SOMETHING",
    contactTitle2Line1: "EXTRAOR",
    contactTitle2Line2: "DINARY",
    contactTitle3: "TODAY.",
    contactDesc:
      "Have a project in mind or need to accelerate your team's front-end? I'm ready to turn ambitious ideas into high-performance, real-world web applications.",
    contactEmailLabel: "Business Email",
    contactWhatsappLabel: "Direct WhatsApp",
    contactLocationLabel: "Location & Service",
    contactScheduleBadge: "SCHEDULE OPEN FOR NEW CONTRACTS",
    contactCvDownload: "DOWNLOAD TECH RESUME (PDF)",
    contactFormTitle: "SEND A DIRECT MESSAGE",
    contactFormNameLabel: "Your Name or Company",
    contactFormNamePlaceholder: "e.g. John Doe",
    contactFormEmailLabel: "Your Business Email",
    contactFormEmailPlaceholder: "john@company.com",
    contactFormTelLabel: "Your WhatsApp / Phone",
    contactFormTelPlaceholder: "+1 (555) 000-0000",
    contactFormServiceLabel: "Project Type",
    contactFormServices: [
      "High-Converting Landing Page",
      "Front-End Web Development (Next.js/React)",
      "Full Stack Web Application",
      "Refactoring & Performance Optimization",
      "Other / Dedicated Consulting",
    ],
    contactFormMessageLabel: "Message / Scope",
    contactFormMessagePlaceholder:
      "Tell me briefly about your goals, timeline, and expectations...",
    contactFormSubmit: "DISPATCH MESSAGE",
    contactFormSuccess: "✓ Redirecting to WhatsApp with your details pre-filled!",
    whatsappMessagePrefix: "Hi Daniel! I would like to discuss a project:",
    footerBackToTop: "BACK TO TOP",
    footerRights: "Daniel Jorge. All rights reserved.",
    footerBrutalism: "DESIGNED & CODED WITH NEXT-GEN BRUTALISM",
    caseStudyCta: "VIEW PROJECT DETAILS",
    caseStudyMrrLabel: "Monthly Recurring Revenue",
    langSwitchAria: "Switch language to Portuguese",
  },
};

export function getPortfolioData(lang: Language = "pt"): PortfolioData {
  return lang === "en" ? PORTFOLIO_DATA_EN : PORTFOLIO_DATA_PT;
}

// Backward-compatible default export
export const PORTFOLIO_DATA = PORTFOLIO_DATA_PT;
