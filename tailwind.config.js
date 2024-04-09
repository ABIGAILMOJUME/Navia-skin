/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'pink-one': '#F3E8F3',
        'pink-two': '#E7C9C9',
        'pink-three':'#D4A7A7',  
        'pink-four': '#F3E8E8',
        'grey-one': '#FCFBFA',
        'grey-two':'#2F2F2F',
         },
      fontFamily:{
          urbanist :['"Urbanist", sans-serif;'],
          syne:['"Syne", sans-serif;'],
          assistant:['"Assistant", sans-serif;'],

         },
      height:{
        'hero':'28rem',
      },   
      fontSize:{
        'big':'4.375rem',
        'marquee': '9.375rem'
      },
      lineHeight:{
        'small': '1.1'
      },
      animation: {
        marquee: 'marquee 120s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
}

