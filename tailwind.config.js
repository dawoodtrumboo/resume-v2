/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        'md' : '768px',
        'lg' : '1000px',
      }
    },
  },
  plugins: [],
}

