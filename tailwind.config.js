// const defaultTheme = require('tailwindcss/defaultTheme');
// module.exports = {
//   purge: ['./components/**/*.js', './pages/**/*.js'],
//   extend: {
//     fontFamily: {
//       sans: ['Inter', ...defaultTheme.fontFamily.sans],
//     },
//   },
// };

const { spacing, fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js', './layouts/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'blue-opaque': 'rgb(13 42 148 / 18%)',
        'red-500': '#ff3333',
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
    },
  },
  variants: {
    typography: ['dark'],
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tw-elements/dist/plugin')
  ],
};
