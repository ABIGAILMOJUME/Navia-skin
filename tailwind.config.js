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
        'pink-four': '##F3E8E8',
        'grey-one': '#FCFBFA',
        'grey-two':'#2F2F2F',
         },
      fontFamily:{
          textone :['"Urbanist", sans-serif;']
         }
    },
  },
  plugins: [],
}

