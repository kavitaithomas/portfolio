/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "darkest-purple": "#120020",
        "dark-purple": "#2F024A",
        "pinkish-purple": "#A708FD",
        "my-gray": "#F2F2F2",
      },
    },
  },
  plugins: [],
};
