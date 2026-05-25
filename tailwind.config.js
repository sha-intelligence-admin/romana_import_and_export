/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0a0a0a',
        'ink-soft': '#2a2a2a',
        'ink-mute': '#5c5852',
        'ink-faint': '#a39a87',
        paper: '#faf6ee',
        'paper-2': '#f4ede0',
        'paper-3': '#ebe2cf',
        gold: '#b8860b',
        'gold-deep': '#8c6608',
        'gold-soft': '#e8d4a0',
        terracotta: '#8b3a1f',
        'terracotta-deep': '#5c2613',
        rule: '#d8cdb5',
        'rule-soft': '#ebe2cf',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"Inter Tight"', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        page: '1400px',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 1s ease-out both',
      },
    },
  },
  plugins: [],
};
