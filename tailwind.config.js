module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        noto: "'Noto Sans', sans-serif",
      },
      colors: {
        ivory: {
          dark: "#ede7dc",
          light: "#e2ded0",
        },
        dusty: "#ccafa5",
        "sand-dollar": "#dcd2cc",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
