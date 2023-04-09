/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], theme: {
    extend: {
      fontFamily: {
        body: ['Manrope']
      }
    },
    screens: {
      'smartphone': '340px',
      'tablet': '450px',
      'inter': '700px',
      'desktop': '950px',
    },
    fontSize: {
      categoria: '0.6rem',
      xs: '0.8rem',
      sm: '0.83rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    }
  },
  plugins: [],
}
