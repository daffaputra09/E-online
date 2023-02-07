/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily:{
        "Poppins": ["Poppins", "Sans-serif"]
      },
      colors: {
        'primary': '#007D6F',
        'darkprimary': '#025E53',
        'lightprimary': '#CDEAEE',
        'second' : '#FF7131',
        'hovsecond': '#BB5325',
      },
      boxShadowColor:{
        'primary': '#007D6F',
        'darkprimary': '#025E53',
        'lightprimary': '#CDEAEE',
      }
    },
  },
  plugins: [],
}
