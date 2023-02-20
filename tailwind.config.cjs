/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
    fontSize: {
      sm: ["14px", "1.5rem"],
    },
  },
  plugins: [],
};
