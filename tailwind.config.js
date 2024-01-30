/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx,ts,tsx,js}"],
  theme: {
    extend: {
      colors: {
        accent: "#EE6C4D",
        text: "#f5a693",
      },
    },
  },
  plugins: [],
};

