/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // MeshMesh × Salesforce brand kit (dark-first)
        ink: '#0A0A0A',
        surface: '#141414',
        'surface-2': '#1C1C1C',
        fg: '#FFFFFF',
        muted: '#A1A1A1',
        subtle: '#6B6B6B',
        line: '#262626',
        cloud: '#00B3FF',
        coral: {
          DEFAULT: '#FA6863',
          hover: '#E5473F',
          50: '#FFF1EF',
          100: '#FFDED9',
          200: '#FFBCB3',
          300: '#FF988C',
          400: '#FD7A70',
          500: '#FA6863',
          600: '#E5473F',
          700: '#C93B34',
          800: '#A32F2A',
          900: '#7D2622',
          950: '#4D1512',
        },
        mint: {
          DEFAULT: '#3AD598',
          50: '#E9FBF3',
          100: '#C9F5E1',
          200: '#96ECC6',
          300: '#5EDDA8',
          400: '#3AD598',
          500: '#1FB87E',
          600: '#159566',
          700: '#137553',
          800: '#125C43',
          900: '#0F4A38',
          950: '#062A20',
        },
        amber: {
          DEFAULT: '#D38C49',
          400: '#D38C49',
          500: '#B6753B',
          600: '#985F30',
        },
      },
      fontFamily: {
        sans: [
          'Geist',
          '"Geist Sans"',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'sans-serif',
        ],
        mono: ['"Geist Mono"', '"SF Mono"', 'Monaco', 'monospace'],
      },
      borderColor: {
        DEFAULT: '#262626',
      },
      borderRadius: {
        DEFAULT: '0.475rem',
        card: '1rem',
      },
      maxWidth: {
        wrap: '1080px',
      },
      keyframes: {
        'mm-marquee': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'mm-marquee': 'mm-marquee 40s linear infinite',
      },
    },
  },
  plugins: [],
};
