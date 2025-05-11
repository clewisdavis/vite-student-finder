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
          light: "#3B82F6", // Light mode primary color
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
        background: {
          light: "#F3F4F6", // Light mode background color
          dark: "#111827", // Dark mode background color
        },
        surface: {
          light: "#FFFFFF", // Light mode surface color
          dark: "#1F2937", // Dark mode surface color
        },
        text: {
          primary: {
            light: "#111827", // Light mode primary text color
            dark: "#F9FAFB", // Dark mode primary text color
          },
          secondary: {
            light: "#6B7280", // Light mode secondary text color
            dark: "#D1D5DB", // Dark mode secondary text color
          },
        },
        success: {
          light: "#10B981", // Light mode success color
          dark: "#047857", // Dark mode success color
        },
        error: {
          light: "#EF4444", // Light mode error color
          dark: "#B91C1C", // Dark mode error color
        },
        warning: {
          light: "#F59E0B", // Light mode warning color
          dark: "#B45309", // Dark mode warning color
        },
        info: {
          light: "#3B82F6", // Light mode info color
          dark: "#1E40AF", // Dark mode info color
        },
      },
    },
  },
  plugins: [],
};