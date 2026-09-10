/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0F14',
        sidebar: '#0D141B',
        surface: '#111820',
        card: '#151D25',
        'card-hover': '#1A242E',
        border: '#26313B',
        'border-light': '#334155',
        primary: '#F1F5F9',
        secondary: '#94A3B8',
        muted: '#64748B',
        accent: {
          DEFAULT: '#10B981', // Emerald
          cyan: '#06B6D4',
          emerald: '#10B981',
          glow: '#00F5A0',
          dark: '#064E3B',
          light: '#34D399',
          dim: 'rgba(16, 185, 129, 0.1)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px rgba(16, 185, 129, 0.25)',
        'glow-md': '0 0 25px -5px rgba(16, 185, 129, 0.3)',
        'glow-cyan': '0 0 25px -5px rgba(6, 182, 212, 0.3)',
        'terminal': '0 20px 40px -15px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(38, 49, 59, 0.8)',
      },
      animation: {
        'blink': 'blink 1.2s infinite',
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.02)' },
        }
      }
    },
  },
  plugins: [],
}
