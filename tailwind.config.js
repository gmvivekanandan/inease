module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        noto: "'Noto Sans', sans-serif",
      },
      colors: {
        primary: {
          light: "#FFFFFF",
          dark: "#23120B",
        },
        tertiary: "#FDB827",
        secondary: "#21209C",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
