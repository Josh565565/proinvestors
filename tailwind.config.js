/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#01257D",
        secondary: "#00FFFF",
        b: "#22222",
      },
      backgroundImage: {
        "hero-bg": "url('/src/components/Landingpage/images/bg.svg')",
      },
    },
  },
  plugins: [],
};