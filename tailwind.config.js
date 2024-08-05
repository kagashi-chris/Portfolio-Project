/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "#0a192f",
        customLightBlue: "#112240",
        secondaryColor: "#EF4444",
        darkWhite: "#8892b0",
        darkerWhite: "#233554",
        fontWhite: "#CCD6F6",
        fontDarkerWhite: "#8892b0",
      },
    },
  },
  plugins: [],
};
