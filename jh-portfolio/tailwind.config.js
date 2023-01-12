/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
      },
    },
    colors: {
      blue: {
        850: "#0e76a8",
        950: "#4078c0",
      },
    },
  },

  plugins: [],
}
