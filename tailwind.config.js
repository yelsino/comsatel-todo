/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors:{
      'primary': '#1c2a37',
      'secondary': '#2196f3',
      'tertiary': '#d8d9d6',
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        passion: ['Passion One', 'cursive'],
        catamaran: ['Catamaran', 'sans-serif']
      },
      gridTemplateColumns: {
        '35/65': '35% 65%'
      }
    }
  },
  plugins: []
}
