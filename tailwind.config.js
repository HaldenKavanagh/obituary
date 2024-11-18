// tailwind.config.js
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        pt: ["PT Serif", "serif"],
      },
      colors: {
        beige: "#f2e9e4",
        brown: "#4a4437",
        accent: "#14b8a6",
      },
    },
  },
  plugins: [],
};
