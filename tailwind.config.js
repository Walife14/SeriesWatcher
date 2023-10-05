/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        blueberry: '#00000a'
      },
      backgroundImage: {
        'landing-header': "url('/assets/icons/seriesdistorted2.png')"
      }
    },
  },
  plugins: [],
}