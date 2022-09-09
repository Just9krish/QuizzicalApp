/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "inter": ["Inte", "sans-serif"],
        "karla": ["Karla", "sans-serif"],
      },
      colors: {
        "clr-blue-text": "#293264",
        "clr-blue-btn": "#4D5B9E",
        "clr-white": "#F5F7FB",
        "clr-choose": "#D6DBF5",
        "clr-right-answer": "#94D7A2",
        "clr-wrong-answer": "#F8BCBC"
      },
    },
  },
  plugins: [],
}