/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0176D3',
          'blue-dark': '#014486',
          navy: '#032D60',
          ink: '#181818',
          mist: '#F3F5F7',
          cyan: '#16D6FA',
          teal: '#2DD4BF',
        },
        // v2 editorial palette
        ink: '#0B0B0C',
        paper: '#F4F1EA',
        acid: '#C7F94E',
      },
      fontFamily: {
        sans: [
          '"Salesforce Sans"',
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'sans-serif',
        ],
        grotesk: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        display: ['"Instrument Serif"', 'Georgia', 'Cambria', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(22, 214, 250, 0.55)',
        'glow-blue': '0 0 60px -10px rgba(1, 118, 211, 0.6)',
        card: '0 10px 40px -12px rgba(3, 45, 96, 0.25)',
        float: '0 30px 80px -20px rgba(3, 45, 96, 0.45)',
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to right, rgba(3,45,96,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(3,45,96,0.06) 1px, transparent 1px)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '80%, 100%': { transform: 'scale(1.6)', opacity: '0' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'marquee-fast': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 45s linear infinite',
        'gradient-x': 'gradient-x 6s ease infinite',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 9s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        'pulse-ring': 'pulse-ring 2.5s cubic-bezier(0.2, 0.7, 0.4, 1) infinite',
      },
    },
  },
  plugins: [],
};
