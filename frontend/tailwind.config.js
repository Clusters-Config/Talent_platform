/** @type {import('tailwindcss').Config} */

const flowbite = require("flowbite-react/tailwind");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage: {
       
        },
    },
    colors:{
      background:'#121212',
      primary:'#3F83F8',
      homeWhite:'#EFEFEF',
      bground:'#0E1421'
    },
    screens: {
      'sm': { 'max': '680px' },
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
 
  plugins: [
    flowbite.plugin(),
  ],
}