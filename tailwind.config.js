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
        local4:['Kanit'],
        local5:['Nunito'],
        local6:['Playwrite']
      },
      colors: {
        customGreen: '#245600',
      },
      screens:{
        '34hsize':'344px',
        '4hsize':'405px',
        '45hsize':'450px',
        'xs': '550px',
        '5hsize':'575px',
        'slg':'900px',
        '1tsize':'1170px'
        
        
      },
      boxShadow: {
        'custom-outer': '7px 7px 7px 0px rgba(30, 80, 0, 0.50)',
        'custom-outer1': '3px 5px 3px 0px rgba(0, 0, 0, 0.3)',
        'custom-outer2': '2px 2px 2px 0px rgba(0, 0, 0, 0.5)',
        'custom-outer3': '0px 5px 5px 2px rgba(0, 0, 0,0.2)',
        'custom-outer4': '2px 2px 2px 0px rgba(0, 0, 0,0.2)',
        'inner-custom': 'inset 1px 1px 7px 0px rgba(0,0,0)',
      },
      keyframes: {
        slideDown: { '0%': { transform: 'translateY(-300px)' }, '100%': { transform: 'translateY(0)' } },
        slideUp: { 
          '0%': { transform: 'translateY(0)' }, 
          '100%': { transform: 'translateY(-300px)' } 
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
     
      animation: {
        slideDown: 'slideDown 1s ease-in-out',
        slideUp: 'slideUp 1s ease-in-out forwards',
        spin: 'spin 1s linear infinite',
        fadeIn: 'fadeIn 3s ease-in-out forwards',
        
      },
    },
   
  },
  plugins: [],
}
