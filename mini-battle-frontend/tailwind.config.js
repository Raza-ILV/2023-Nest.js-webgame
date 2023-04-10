/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      "xs":"250px",
      "sm":"480px",
      "md":"750px",
      "lg":"1200px",
      "xl":"1440px"
    },
    backgroundImage:{
      "berserker-e": "url(./assets/berserker_e.png)",
      "berserker": "url(./assets/berserker.png)",
      "thrall": "url(./assets/thrall.png)",
      "jarl": "url(./assets/jarl.png)",
    }
  },
  plugins: [],
}