/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: {
          fontSize: theme("fontSize.3xl"),
          fontWeight: theme("fontWeight.bold"),
          lineHeight: "2.25rem",
        },
        h2: {
          fontSize: theme("fontSize.2xl"),
          fontWeight: theme("fontWeight.bold"),
          lineHeight: "2rem",
        },
        h3: {
          fontSize: theme("fontSize.xl"),
          fontWeight: theme("fontWeight.bold"),
          lineHeight: "1.75rem",
        },
        h4: {
          fontSize: theme("fontSize.lg"),
          fontWeight: theme("fontWeight.bold"),
          lineHeight: "1.75rem",
        },
        h5: {
          fontSize: theme("fontSize.lg"),
          fontWeight: theme("fontWeight.bold"),
          lineHeight: "1.75rem",
        },
      });
    }),
  ],
};
