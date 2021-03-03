const colors = require('tailwindcss/colors')

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    './public/*.html',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem'
    },
    fontFamily: {
      'body': ['Arial', 'sans-serif'],
      'display': ['Arial', 'sans-serif'],
    },
    extend: {
      container: {
        center: true,
        padding: '2rem'
      },
      colors: {
        'light-blue': colors.lightBlue,
        cyan: colors.cyan,
        'space-black': {
          '500': '#2f3e47',
          '800': '#2a3840',
        },
        'sh-green': {
          '500': '#7dc535',
        },
        'sh-blue': {
          '500': '#199ad6',
        }
      },
    },
  },
  variants: {},
  plugins: [],
}
