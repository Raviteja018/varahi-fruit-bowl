/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#04110A',
          900: '#071A10',
          800: '#0B291A',
          700: '#113E28',
          600: '#195637',
          500: '#23734B',
        },
        fresh: {
          emerald: '#10B981',
          light: '#34D399',
          bright: '#22C55E',
          glow: '#A7F3D0',
        },
        cream: {
          50: '#FDFBF7',
          100: '#FAF8F5',
          200: '#F5F0E6',
          300: '#ECE4D2',
        },
        berry: {
          DEFAULT: '#E11D48',
          dark: '#9F1239',
          light: '#FDA4AF',
          beetroot: '#380B19',
          wine: '#4D1024',
        },
        citrus: {
          DEFAULT: '#F97316',
          dark: '#C2410C',
          light: '#FDBA74',
          yellow: '#FBBF24',
        },
        ragi: {
          dark: '#2A1A10',
          deep: '#3D2719',
          warm: '#5E3C27',
          light: '#F4ECE4',
        }
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        script: ['Caveat', 'cursive'],
      },
      borderRadius: {
        'organic-1': '32px 20px 36px 22px',
        'organic-2': '24px 36px 20px 32px',
        'organic-3': '40px 24px 34px 26px',
        'organic-card': '28px 24px 32px 20px',
      },
      boxShadow: {
        'soft-glow': '0 20px 45px -15px rgba(16, 185, 129, 0.18)',
        'premium': '0 25px 60px -15px rgba(7, 26, 16, 0.12)',
        'float': '0 30px 60px -12px rgba(11, 41, 26, 0.22)',
        'deep': '0 35px 70px -15px rgba(0, 0, 0, 0.35)',
        'berry': '0 20px 45px -15px rgba(225, 29, 72, 0.22)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 2s infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(2deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.9', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.02)' },
        }
      }
    },
  },
  plugins: [],
}
