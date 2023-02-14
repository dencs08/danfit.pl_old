// import('tailwindcss').Config;
// import('tailwindcss/forms');

module.exports = {
  plugins: [
    require('@tailwindcss/forms'),
  ],
  corePlugins: {
    container: false
  },
  variants: {
    container: [],
  },
  content: ['./src/**/*.{html,js,ts,vue}'],
  theme: {
    extend: {
      colors: {
        'primaryWhite': '#F7F7F7',
        'primaryBlack': '#292929',
        'primaryColor': '#003A94',
        'secondaryColor': '#00ACD4',
        'tertiaryColor': '#FFEA31',
      },

      gridTemplateColumns: {
        '14': 'repeat(14, minmax(0, 1fr))',
        '15': 'repeat(15, minmax(0, 1fr))',
        'calendar': 'minmax(10px, 45px) repeat(14, minmax(0, 1fr))',
      },

      screens: {
        'xs': '400px',
      },
    }
  },
}