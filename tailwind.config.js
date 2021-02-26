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
      },
    },
  },
  variants: {
    animation: ["motion-safe"],
  },
  plugins: [require("@tailwindcss/typography")],
};
