/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'muli':['Mulish', 'san-serif']
      }
    },
  },
  variants: {
    backgroundColor:['hover', 'focus', 'active']
  },
  plugins: [
    require('flowbite/plugin')
  ],
}