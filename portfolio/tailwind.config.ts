import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-outfit)', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 28px 100px rgba(255,255,255,0.08)',
      },
      colors: {
        surface: '#0a0a0a',
      },
    },
  },
  plugins: [],
} satisfies Config
