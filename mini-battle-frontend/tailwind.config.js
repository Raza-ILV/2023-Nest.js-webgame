/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens:{
      "none": "20px",
      "sm":"320px",
      "md": "480px",
    },
    backgroundImage:{
      "LVL": "url(./assets/LVL.png)",
      "MAX": "url(./assets/MAX.png)",
      "RIP": "url(./assets/RIP.png)",
      "berserker-e": "url(./assets/berserker_e.png)",
      "berserker": "url(./assets/berserker.png)",
      "thrall": "url(./assets/thrall.png)",
      "jarl": "url(./assets/jarl.png)",
      "knight-e": "url(./assets/knight_e.png)",
      "knight": "url(./assets/knight.png)",
      "oficer": "url(./assets/oficer.png)",
      "lord": "url(./assets/lord.png)",
      "swordsman-e": "url(./assets/swordsman_e.png)",
      "swordsman": "url(./assets/swordsman.png)",
      "samurai": "url(./assets/samurai.png)",
      "shogun": "url(./assets/shogun.png)",
    }
  },
  plugins: [],
}