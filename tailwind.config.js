/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        keys: "Space Mono",
        hangman: "Chokokutai",
        title: "Outfit",
        word: "Inconsolata",
        primary: "Montserrat",
        secondary: "Roboto Mono",
      },
      colors: {
        shadeWhite: "#FFFFEA",
        shadeRed: "#FC5130",
        shadeDark: "#050401",
        shadeGray: "#E2E1B9",
        shadeBlue: "#4D7EA8",
        shadeWrong: "#F8333C",
        shadeCorrect: "#44AF69",
        shadeDisable: "#CAD2C5",
        shadeAccent: "#F44E3F",
      },
    },
  },
  plugins: [],
};
