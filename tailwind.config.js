/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "8xl": "90rem",
      }
    },
  },
  daisyui: {
    themes: ["sunset"],
  },
  plugins: [require("daisyui")],
}

