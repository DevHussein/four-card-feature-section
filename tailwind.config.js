/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}", // Matches all HTML and JS files in the root directory
    "./**/*.{html,js}", // Recursively matches all HTML and JS files in any subdirectories
    "index.html",
  ],
  theme: {
    extend: {
      colors: {
        lightGray: "#F2F2F2",
        cultured: "#FAFAFA",
        siennaRed: "#EA5454",
        turquoise: "#44D3D2",
        sandyOrange: "#FCAE4A",
        cornflowerBlue: "#549EF2",
        gunmetal: "#4D4F62",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
