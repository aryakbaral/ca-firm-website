/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#F0F4F8",
          100: "#DCE6F0",
          500: "#2C5785",
          600: "#1F4266",
          700: "#16304C",
          800: "#102338",
          900: "#0A1826",
          950: "#060F1A",
        },
        gold: {
          200: "#F0E2B6",
          300: "#E3C878",
          400: "#D6BC7A",
          500: "#C2A45C",
          600: "#A8893F",
          700: "#8A6F2F",
        },
        forest: {
          500: "#2F6B54",
          700: "#1E4638",
          900: "#0F2A22",
        },
        ink: "#1A2330",
        paper: "#F7F5F0",
        mist: "#EDF0F4",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
