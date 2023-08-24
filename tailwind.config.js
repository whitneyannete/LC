/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'my': "url('Assets/Background.png')",
      },
    },
  },
  plugins: [],
}

