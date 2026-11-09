/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        maroon: "#5a1022",
        crimson: "#8e1835",
        antique: "#c99a43",
        cream: "#fff8e9"
      }
    }
  },
  plugins: []
};