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
        local2:['Gruppo'],
        local3:['Agbalumo'],
        

      },
      colors: {
        customGreen: '#245600',
      },
      screens:{
        'xs': '550px',
        'slg':'900px'
      },
      boxShadow: {
        'custom-outer': '7px 7px 7px 0px rgba(30, 80, 0, 0.50)',
        'custom-outer1': '2px 2px 2px 0px rgba(0, 0, 0, 0.5)',
      },
      keyframes: {
        slideDown: { '0%': { transform: 'translateY(-300px)' }, '100%': { transform: 'translateY(0)' } },
        slideUp: { 
          '0%': { transform: 'translateY(0)' }, 
          '100%': { transform: 'translateY(-300px)' } 
        },
      },
      animation: {
        slideDown: 'slideDown 1s ease-in-out',
        slideUp: 'slideUp 1s ease-in-out forwards',
      },
    },
   
  },
  plugins: [],
}
