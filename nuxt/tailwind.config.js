/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  plugins: [
    require('@tailwindcss/forms'),
  ],
  corePlugins: {
    // container: false
  },
  theme: {
    container: {
      maxWidth: {
        DEFAULT: '90%',
        sm: '90%',
        lg: '90%',
        xl: '90%',
        '2xl': '90%',
      },
    },
    extend: {
      colors: {
        'white-primary': '#F7F7F7',
        'black-primary': '#292929',
        'color-primary': '#003A94',
        'color-secondary': '#00ACD4',
        'color-tertiary': '#FFEA31',
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
