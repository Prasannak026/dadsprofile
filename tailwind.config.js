/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f2f6f2',
          100: '#dbe6dc',
          200: '#b8ccb9',
          300: '#92b296',
          400: '#6c9974',
          500: '#4f7f5a',
          600: '#3b6246',
          700: '#2f4e38',
          800: '#263f2f',
          900: '#1f3226',
        },
        sand: {
          50: '#fdfaf5',
          100: '#f5efe4',
          200: '#e7dcc8',
          300: '#d6c4a6',
          400: '#c3a880',
          500: '#b08d5c',
          600: '#8e6f47',
          700: '#6f5638',
          800: '#58442d',
          900: '#463626',
        },
        clay: {
          50: '#fbf7f4',
          100: '#f2e9e2',
          200: '#e3d3c8',
          300: '#d0b9a8',
          400: '#b99680',
          500: '#9f755a',
          600: '#825c46',
          700: '#674839',
          800: '#523b2f',
          900: '#433129',
        },
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', '"Georgia"', 'serif'],
        body: ['"Avenir Next"', '"Avenir"', '"Segoe UI"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 60px -40px rgba(31, 50, 38, 0.4)',
      },
    },
  },
  plugins: [],
}

