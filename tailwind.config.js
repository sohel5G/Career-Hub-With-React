/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      lineHeight: {
        extraSizes: '150px',
      },
      colors: {
        myBlack: '#1A1919',
        primary0: '#7E90FE',
        primary100: '#9873FF'
      },
    },
  },
  plugins: [
    require("daisyui"), 
    require('flowbite/plugin')
  ]
}

