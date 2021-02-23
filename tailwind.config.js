const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    mode: "all",
    content: ["./**/*.html"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    container: {
      center: true,
    },
    // colors: {
    //   transparent: 'transparent',
    //   teal: colors.teal,
    // },
  },
  variants: {
    animation: ["motion-safe"]
  },
  plugins: [require("@tailwindcss/typography")],
};
