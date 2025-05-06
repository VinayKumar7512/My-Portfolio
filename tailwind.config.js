/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#eef4ff',
          100: '#e0eaff',
          200: '#c7d7fe',
          300: '#a5bbfd',
          400: '#8094f9',
          500: '#6371f1',
          600: '#4f4fe5',
          700: '#3a3cca',
          800: '#3334a3',
          900: '#2d3280',
          950: '#1a1c4b',
        },
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      spacing: {
        '18': '4.5rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
};