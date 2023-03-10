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
      'smartphone':'340px',
      'tablet': '450px',
      'inter': '700px',
      'desktop': '950px',
    },
  },
  plugins: [],
}
