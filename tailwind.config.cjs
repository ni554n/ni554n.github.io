const defaultTailwindTheme = require("tailwindcss/defaultTheme");

/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    colors: {
      white: "#FFF",
      black: "#000",
      gray: {
        700: "#616161",
        900: "#212121",
      },
      gold: "#AD8715",
      rose: "#B78",
    },
    extend: {
      fontFamily: {
        mono: ["Fira Code", ...defaultTailwindTheme.fontFamily.mono],
      },
    },
  },
};
