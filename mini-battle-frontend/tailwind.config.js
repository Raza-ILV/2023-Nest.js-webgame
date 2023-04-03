/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        "home": "#94a3b8",
        "vikings": "#ea580c",
        "knights": "#0891b2",
        "samurais": "#e11d48"
      },
    },
  },
  plugins: [],
}