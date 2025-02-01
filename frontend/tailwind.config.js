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
      keyframes: {
        slideColor: {
          '0%': { 'background-size': '100% 0' },
          '100%': { 'background-size': '100% 100%' },
        },
      },
      animation: {
        slideColor: 'slideColor 0.5s forwards',
      },
      backgroundImage: {
        'gradient-to-top-red': 'linear-gradient(to top, red 0%, red 100%)',
      },
    },
    colors:{
      background:'#121212'
    },
    screens: {
      'sm': { 'max': '680px' },
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  variants: {
    extend: {
      backgroundSize: ['hover'],
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}