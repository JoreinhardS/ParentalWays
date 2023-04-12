/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.875rem',
        md: '2.9375rem',
        lg: '10.9375rem',
        xl: '2.5rem',
        '2xl': '10.5rem',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          10: '#F58E49',
          30: '#F7A167',
          50: '#F8B486',
          70: '#FAC6A4',
          90: '#FCD9C2',
        },
        neutral: {
          10: '#BDBDBD',
          30: '#A3A3A3',
          50: '#8A8A8A',
          70: '#707070',
          90: '#575757',
        },
        warning: {
          10: '#FFF1B8',
          30: '#FFE785',
          50: '#FFDD54',
          70: '#FFD21F',
          90: '#EBBC00',
        },
        error: {
          10: '#FD9695',
          30: '#FD6563',
          50: '#FC312F',
          70: '#F60604',
          90: '#C40503',
        },
        success: {
          10: '#61DC95',
          30: '#37D279',
          50: '#27AE60',
          70: '#1E854A',
          90: '#155C33',
        },
        black: {
          DEFAULT: '#000000',
          10: '#242424',
        },
      },
      fontSize: {
        xs: ['0.688rem', '165%'],
        sm: ['0.813rem', '165%'],
        base: ['1rem', '165%'],
        lg: ['1.188rem', '120%'],
        xl: ['1.438rem', '120%'],
        '2xl': ['1.75rem', '120%'],
        '3xl': ['2.063rem', '120%'],
        '4xl': ['2.5rem', '120%'],
        '5xl': ['3rem', '120%'],
        '6xl': ['3.563rem', '120%'],
        '7xl': ['4.313rem', '120%'],
        '8xl': ['5.188rem', '120%'],
      },
    },
  },
  plugins: [],
};
