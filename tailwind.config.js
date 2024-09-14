/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        local:['Montserrat'],
        local1:['Cinzel'],
        local3:['Agbalumo']

      },
      colors: {
        customGreen: '#245600',
      },
      screens:{
        'xs': '550px'
      }
    },
    keyframes: {
      slideDown: {
        '0%': { transform: 'translateY(-300px)' },
        '100%': { transform: 'translateY(0)' },
      },
    },
    animation: {
      slideDown: 'slideDown 1s ease-in-out',
    },
  },
  plugins: [],
}
