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
        cyan: {
          DEFAULT: '#86e33d',
          50:  '#f2ffe4',
          100: '#dfffa8',
          200: '#c3f570',
          300: '#a5eb4c',
          400: '#86e33d',
          500: '#67c227',
          600: '#4f9a19',
          700: '#3b7512',
          800: '#2a540c',
          900: '#1c3c08',
        },
        slate: {
          925: '#111111',
          950: '#0a0a0a',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        accent: {
          purple: '#7C3AED',
          pink: '#EC4899',
          orange: '#F97316',
          blue: '#3B82F6',
          yellow: '#FACC15',
        },
      },
      backgroundImage: {
        'grid-pattern':
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M0 40L40 0M-10 10L10-10M30 50L50 30' stroke='%2386e33d' stroke-width='0.3' stroke-opacity='0.1'/%3E%3C/svg%3E\")",
        'dot-pattern':
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Ccircle cx='1' cy='1' r='1' fill='%2386e33d' fill-opacity='0.14'/%3E%3C/svg%3E\")",
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        typing: 'typing 2s steps(20) forwards',
        'spin-slow': 'spin 20s linear infinite',
        'bounce-slow': 'bounceSlow 3s infinite',
        'slide-in-left': 'slideInLeft 0.5s ease-out forwards',
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
          '0%, 100%': { boxShadow: '0 0 20px 0px rgba(134,227,61,0.2)' },
          '50%': { boxShadow: '0 0 40px 8px rgba(134,227,61,0.4)' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      boxShadow: {
        glow: '0 0 20px rgba(134,227,61,0.25)',
        'glow-sm': '0 0 10px rgba(134,227,61,0.15)',
        'glow-lg': '0 0 40px rgba(134,227,61,0.35)',
      },
    },
  },
  plugins: [],
};