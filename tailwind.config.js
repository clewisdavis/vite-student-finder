/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF0000", // Custom primary color
        secondary: "#9333EA", // Custom secondary color
        accent: "#F59E0B", // Custom accent color
      },
    },
  },
  plugins: [],
};