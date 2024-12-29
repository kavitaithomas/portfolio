/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Chango"],
      },
      colors: {
        "darkest-purple": "#120020",
        "dark-purple": "#49003B",
        "my-gray": "#F2F2F2",
      },
    },
  },
  plugins: [],
};
