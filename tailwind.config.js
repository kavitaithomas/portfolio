/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Space Grotesk"],
      },
      colors: {
        "darkest-purple": "#F2E1FF",
        "dark-purple": "#F8F3FF",
        "my-gray": "#241527",
      },
    },
  },
  plugins: [],
};
