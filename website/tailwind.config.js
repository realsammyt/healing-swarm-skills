/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,mdx}',
    './docs/**/*.{md,mdx}',
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        // Healing colors from design-tokens.json
        healing: {
          primary: '#2dd284',
          dark: '#1fa865',
          light: '#86efac',
          ghost: 'rgba(45, 210, 132, 0.1)',
          subtle: 'rgba(45, 210, 132, 0.2)',
          border: 'rgba(45, 210, 132, 0.3)',
        },
        calm: {
          primary: '#38bdf8',
          dark: '#0ea5e9',
          light: '#7dd3fc',
          ghost: 'rgba(56, 189, 248, 0.1)',
          border: 'rgba(56, 189, 248, 0.3)',
        },
        sacred: {
          gold: '#fbbf24',
          'gold-dark': '#f59e0b',
          'gold-light': '#fcd34d',
          'gold-ghost': 'rgba(251, 191, 36, 0.1)',
        },
        grounding: {
          darkest: '#0f172a',
          dark: '#1e293b',
          medium: '#334155',
          light: '#475569',
        },
        // Feedback colors
        feedback: {
          success: '#2dd284',
          warning: '#fbbf24',
          error: '#ff5459',
          info: '#38bdf8',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['SF Mono', 'Fira Code', 'Consolas', 'Liberation Mono', 'monospace'],
      },
      boxShadow: {
        'glow-healing': '0 0 20px rgba(45, 210, 132, 0.4)',
        'glow-healing-strong': '0 0 40px rgba(45, 210, 132, 0.6)',
        'glow-calm': '0 0 20px rgba(56, 189, 248, 0.4)',
        'glow-sacred': '0 0 20px rgba(251, 191, 36, 0.4)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'breathe': 'breathe 4s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
      },
      keyframes: {
        breathe: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(45, 210, 132, 0.3)' },
          '50%': { boxShadow: '0 0 25px rgba(45, 210, 132, 0.6)' },
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // Disable Tailwind's reset to avoid conflicts with Docusaurus
  },
};
