/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    container: false
  },
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primaryWhite': '#F7F7F7',
        'primaryBlack': '#292929',
        'primaryColor': '#003A94',
        'secondaryColor': '#00ACD4',
        'tertiaryColor': '#FFEA31',
      },
    }
  },
  plugins: [],
}