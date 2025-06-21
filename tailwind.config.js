/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'black-gradient': 'linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6))',
      },
      colors: {
      primary: "#050816",
      secondary: "#aaa6c3",
      tertiary: "#151030",
    },},
  },
  plugins: [],
}

