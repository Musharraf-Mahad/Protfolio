/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#09090b',
        sidebar: '#0c0c0e',
        surface: '#121215',
        card: '#141418',
        'card-hover': '#18181f',
        border: '#27272a',
        'border-subtle': '#1e1e24',
        'border-light': '#3f3f46',
        primary: '#fafafa',
        secondary: '#a1a1aa',
        muted: '#71717a',
        accent: {
          DEFAULT: '#6366f1',
          hover: '#4f46e5',
          light: '#818cf8',
          subtle: 'rgba(99, 102, 241, 0.08)',
          border: 'rgba(99, 102, 241, 0.25)',
          emerald: '#10b981',
          amber: '#f59e0b',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.5)',
        'card-hover': '0 10px 30px -10px rgba(0, 0, 0, 0.6)',
      },
    },
  },
  plugins: [],
}

