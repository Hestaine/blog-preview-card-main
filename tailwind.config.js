/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    screens: {
      'sm': '375px',
      'lg': '1440px'
    },
    extend: {
      colors: {
        Yellow: "hsl(47, 88%, 63%)",
        White: "hsl(0, 0%, 100%)",
        Grey: "hsl(0, 0%, 50%)",
        Black: "hsl(0, 0%, 7%)"
      },
      boxShadow: {
        'big': '6px 6px 6px 8px black',
      },
      fontFamily: {
        sans: ['Figtree', 'sans-serif'],
      }}
  },
  plugins: [],
}

