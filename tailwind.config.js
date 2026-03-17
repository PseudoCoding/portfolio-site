/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        // Brand palette ─ tweak these in config.ts to retheme globally
        cyan: {
          DEFAULT: '#00f5d4',
          50: '#f0fffd',
          100: '#ccfff6',
          200: '#99ffed',
          300: '#5cffe3',
          400: '#00f5d4',
          500: '#00cbb0',
          600: '#00a38e',
          700: '#008072',
          800: '#00645a',
          900: '#00514a',
        },
        slate: {
          925: '#0a0f1e',
          950: '#060c18',
        },
      },
      backgroundImage: {
        'grid-pattern':
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M0 40L40 0M-10 10L10-10M30 50L50 30' stroke='%2300f5d4' stroke-width='0.3' stroke-opacity='0.08'/%3E%3C/svg%3E\")",
        'dot-pattern':
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Ccircle cx='1' cy='1' r='1' fill='%2300f5d4' fill-opacity='0.12'/%3E%3C/svg%3E\")",
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        typing: 'typing 2s steps(20) forwards',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px 0px rgba(0,245,212,0.3)' },
          '50%': { boxShadow: '0 0 40px 8px rgba(0,245,212,0.5)' },
        },
      },
      boxShadow: {
        glow: '0 0 20px rgba(0,245,212,0.35)',
        'glow-sm': '0 0 10px rgba(0,245,212,0.2)',
        'glow-lg': '0 0 40px rgba(0,245,212,0.45)',
      },
    },
  },
  plugins: [],
};
