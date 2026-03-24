import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0a0a0a',
          secondary: '#111111',
          card: '#161616',
          'card-hover': '#1c1c1c',
        },
        text: {
          primary: '#f0ece4',
          secondary: '#8a8578',
          muted: '#5a5650',
        },
        accent: {
          red: '#c41e3a',
          'red-glow': 'rgba(196, 30, 58, 0.15)',
          gold: '#c4a265',
          'gold-dim': 'rgba(196, 162, 101, 0.2)',
          blue: '#6a9fb5',
          green: '#7cb342',
        },
        border: {
          DEFAULT: '#222222',
          light: '#2a2a2a',
        },
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-source-sans)', '-apple-system', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
