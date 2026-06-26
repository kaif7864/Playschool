/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#f59e0b', // Amber 500
          DEFAULT: '#ea580c', // Orange 600
          dark: '#c2410c', // Orange 700
        },
        secondary: {
          light: '#38bdf8', // Light Blue 400
          DEFAULT: '#0284c7', // Sky 600
          dark: '#0369a1', // Sky 700
        },
        accent: {
          light: '#a78bfa', // Violet 400
          DEFAULT: '#8b5cf6', // Violet 500
          dark: '#6d28d9', // Violet 700
        },
        playful: {
          yellow: '#facc15',
          green: '#4ade80',
          pink: '#f472b6'
        }
      },
      fontFamily: {
        sans: ['"Quicksand"', '"Nunito"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['"Fredoka One"', '"Quicksand"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animation: {
        'blob': 'blob 7s infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
