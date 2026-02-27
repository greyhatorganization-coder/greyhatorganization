/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neon: "#39FF14",
        darkbg: "#0B0F0F",
      },
      boxShadow: {
        neon: "0 0 25px #39FF14",
      },
    },
  },
  plugins: [],
};