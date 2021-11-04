module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ...theme("colors"),
        "gray-350": "#cacaca",
      }),

      screens: {
        "xl.5": "1149px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
