/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    screens: {
      'sm': '340px',
      'lg': '1100px'
    },
    extend: {
      colors: {
        Yellow: "hsl(47, 88%, 63%)",
        White: "hsl(0, 0%, 100%)",
        Grey: "hsl(0, 0%, 50%)",
        Black: "hsl(0, 0%, 7%)"
      },
      boxShadow: {
        'big': '5px 5px 4px 6px',
      },
      fontFamily: {
        sans: ['Figtree', 'sans-serif'],
      }}
  },
  plugins: [],
}

