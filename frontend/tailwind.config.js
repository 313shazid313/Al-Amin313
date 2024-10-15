/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "tale": "#173334",
        "light-tale":"#204849",
        "gold":"#FEBD2F"
      },
    },
  },
  plugins: [],
};
