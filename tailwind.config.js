/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-grey': '#2a2727',
        'blueberry': '#00000a'
      },
      backgroundImage: {
        'landing-header': "url('/assets/icons/seriesdistorted2.png')"
      }
    },
  },
  plugins: [],
}