/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Roboto Mono"],
      },
      colors: {
        "darkest-purple": "#F2E1FF", //light pink
        "dark-purple": "#F8F3FF", // whitish pink
        "my-gray": "#432206", // brown
        "my-light": "#FAF6FF", // white
        "my-yellow": "#F2E5C1",
      },
    },
  },
  plugins: [],
};
