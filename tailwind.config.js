/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "black": "#000000",
        "black-800":"#0d0d0f",
        "black-600":"#141416",
      }
    },
  },
  plugins: [],
}