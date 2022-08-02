/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",'./node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      keyframes:{
        titleAnim: {
          "0%": {transform: "translatey(-100%)"},
          "100%": {transform: "translatey(0)"},
        },
        dreamAnim: {
          "0%": {transform: "translatex(-100%)"},
          "100%": {transform: "translatex(0)"},
        },
        carouselAnim: {
          "0%": {transform: "translatex(100%)"},
          "100%": {transform: "translatex(0)"},
        }
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
