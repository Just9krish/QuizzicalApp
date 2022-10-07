/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "inter": ["Inter", "sans-serif"],
        "karla": ["Karla", "sans-serif"],
      },
      colors: {
        "clr-blue-text": "#293264",
        "clr-blue-btn": "#4D5B9E",
        "clr-white": "#F5F7FB",
        "clr-choose": "#D6DBF5",
        "clr-right-answer": "#94D7A2",
        "clr-wrong-answer": "#F8BCBC",
        "dark-para": "#EEEEEE",
        "dark-head": "#ECB365",
        "dark-bg": "#041C32"
      },
      keyframes: {
        fadeInAnimation: {
          "0%": {
            opacity: "0"
          },
          "100%": {
            opacity: "1"
          }
        }
      },
      animation: {
        "fade-in": "fadeInAnimation ease 2s 1 forwards"
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['disabled'],
      textColor: ['disabled'],
    },
  },
  plugins: [],
}