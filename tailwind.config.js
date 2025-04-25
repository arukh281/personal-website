/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF3366',
          dark: '#CC2952',
          light: '#FF6699',
        },
        secondary: {
          DEFAULT: '#00F5FF',
          dark: '#00C4CC',
          light: '#33F7FF',
        },
        accent: {
          DEFAULT: '#FFD700',
          dark: '#CCAD00',
          light: '#FFE033',
        },
        dark: {
          DEFAULT: '#0A0A0A',
          light: '#1A1A1A',
        },
      },
      fontFamily: {
        sans: ['var(--font-space-grotesk)'],
        mono: ['var(--font-jetbrains-mono)'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
    },
  },
  plugins: [],
} 