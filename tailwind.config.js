module.exports = {
  darkMode: "class",

  content: [
    "./src/**/*.{js,jsx,ts,tsx,mdx}",
  ],

  theme: {
    extend: {},
  },

  plugins: [
    require("daisyui"),
  ],

  daisyui: {
    themes: ["light", "dark"],
    darkTheme: "dark",
  },
};