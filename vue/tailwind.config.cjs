/** @type {import('tailwindcss').Config} */

module.exports = {
  plugins: [
    require('@tailwindcss/forms'),
  ],
  corePlugins: {
    // container: false
  },
  content: ['./src/**/*.{html,js,ts,vue}'],
  theme: {
    // container: {
    //   maxWidth: {
    //     DEFAULT: '90%',
    //     sm: '90%',
    //     lg: '90%',
    //     xl: '90%',
    //     '2xl': '90%',
    //   },
    // },
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