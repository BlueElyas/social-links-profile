/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primaryGreen: "hsl(75, 94%, 57%);",
        neutralWhite: "hsl(0, 0%, 100%)",
        neutralDarkGray: "hsl(0, 0%, 12%)",
        neutralOffBlack: "hsl(0, 0%, 8%)",
        neutralGray: "hsl(0, 0%, 20%)",
      },
    },
    screens: {
      sm: "500px",
    },
  },
  plugins: [],
};
