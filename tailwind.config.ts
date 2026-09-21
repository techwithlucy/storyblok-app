import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        '2xl': '1200px',
      },
    },
    extend: {
      fontFamily: {
        pixel: ['var(--font-pixel)', 'monospace'],
        retro: ['var(--font-retro)', 'monospace'],
        sans: ['var(--font-retro)', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
