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
      'body': ['Open Sans', 'Sans-serif'],
      'display': ['Arial', 'sans-serif'],
    },
    extend: {
      container: {
        // To center containers by default, set the center option to true
        center: true,
        // Add horizontal padding by default
        padding: '2rem'
      },
      // We can access utilities like bg-sh-green-500 or text-space-black-800
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
