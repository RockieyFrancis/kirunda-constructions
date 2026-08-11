import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A1F3F',
          deep: '#071530',
          mid: '#132C54'
        },
        gold: {
          DEFAULT: '#C9A227',
          light: '#E0C158'
        },
        ivory: '#F7F5EF',
        charcoal: '#1B1E24',
        steel: '#5A6472',
        line: 'var(--line)'
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace']
      }
    }
  },
  plugins: []
};

export default config;
