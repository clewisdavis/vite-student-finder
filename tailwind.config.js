/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#FF0000", // Light mode primary color
          dark: "#1E3A8A", // Dark mode primary color
        },
        secondary: {
          light: "#9333EA", // Light mode secondary color
          dark: "#7C3AED", // Dark mode secondary color
        },
        accent: {
          light: "#F59E0B", // Light mode accent color
          dark: "#D97706", // Dark mode accent color
        },
      },
    },
  },
  plugins: [],
};