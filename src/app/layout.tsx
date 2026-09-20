import type { Metadata } from "next";
import { Space_Grotesk, Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Daniel Jorge | Desenvolvedor Web Front-end & Full Stack",
  description: PORTFOLIO_DATA.personal.shortBio,
  keywords: [
    "Daniel Jorge",
    "Desenvolvedor Front-end",
    "Desenvolvedor Full Stack",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "UI/UX Design",
    "Portfólio Cyberpunk",
    "Rio de Janeiro",
  ],
  authors: [{ name: "Daniel Jorge", url: "https://www.danieljorge.dev.br" }],
  creator: "Daniel Jorge",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Daniel Jorge | Desenvolvedor Web Front-end & Full Stack",
    description: PORTFOLIO_DATA.personal.shortBio,
    url: "https://www.danieljorge.dev.br",
    siteName: "Daniel Jorge Portfólio",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`scroll-smooth dark ${spaceGrotesk.variable} ${syne.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('portfolio_theme');
                  if (saved === 'light') {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                  } else {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                  }
                } catch (e) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-[#f8fafc] dark:bg-brand-black text-zinc-900 dark:text-white relative grid-bg-pattern antialiased selection:bg-brand-neon selection:text-brand-black transition-colors duration-200">
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
