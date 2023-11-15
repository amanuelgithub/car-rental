/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FA4226",
        secondary: "#010103",
        "secondary-light": "#706F7B",
        "secondary-extra-light": "#ECECEC",
      },
      fontFamily: {
        poppins: ["Poppins", "san-serif"],
        rubik: ["Rubik", "san-serif"],
      },
    },
  },
  plugins: [],
};
