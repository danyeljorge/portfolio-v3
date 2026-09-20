import type { Metadata } from "next";
import { Space_Grotesk, Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { PORTFOLIO_DATA } from "@/data/portfolio";

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
      className={`scroll-smooth ${spaceGrotesk.variable} ${syne.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-brand-black text-white relative grid-bg-pattern antialiased selection:bg-brand-neon selection:text-brand-black">
        {children}
      </body>
    </html>
  );
}
