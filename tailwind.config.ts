import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#070809',
          dark: '#0e1013',
          card: '#13161b',
          border: '#1f242d',
          neon: '#00FF66',
          neonHover: '#00e05a',
          neonGlow: 'rgba(0, 255, 102, 0.25)',
          accent: '#0dff75',
          gray: '#8a93a3',
        },
      },
      fontFamily: {
        display: ['var(--font-syne)', 'sans-serif'],
        heading: ['var(--font-space)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.06em',
        tight: '-0.04em',
        widest: '0.22em',
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
