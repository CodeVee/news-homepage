/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.vue",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          grayish: '#C5C6CE',
          grayishdark: '#5E607A',
          vdark: '#00001A'
        },
        red: {
          soft: '#F15D51'
        },
        orange: {
          soft: '#E9AA52'
        },
        white: {
          off: '#FFFDFA'
        }
      }
    },
  },
  plugins: [],
}
