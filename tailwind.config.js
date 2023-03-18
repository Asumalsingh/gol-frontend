/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dimgray: "#555",
        "sub-heading": "#3a3a3a",
        line: "#a2a8ab",
        paragraph: "#5a5a5a",
        "black-fonts-headings": "#2d2e2e",
        "light-blue": "#f6fdff",
        "grey-input-text": "#ababab",

        "sky-dark": "#979c9e",
        // contact us background
        cadetblue: "#42a7c3",
        // Theme primary color
        "primary-color": "#3282ad",
        // visit button colour
        "dark-light-blue": "#d2f4ff",
      },
    },
  },
  plugins: [],
};
