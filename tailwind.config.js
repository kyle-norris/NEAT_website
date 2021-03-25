const colors = require("tailwindcss/colors");

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
    extend: {
      fontFamily: {
        arch: ["Architects Daughter", "sans-serif"],
        audio: ["Audiowide", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      fontSize: {
        '10xl': '10rem',
      },
    },
    colors: {
      orange: colors.orange,
      blue: colors.blue,
      white: colors.white,
      gray: colors.gray,
      black: colors.black,
      transparent: 'transparent',
    },
  },
  variants: {
    animation: ["motion-safe"],
  },
  plugins: [require("@tailwindcss/typography")],
};
