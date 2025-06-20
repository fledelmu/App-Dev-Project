/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        rule:{
          'bg':'#ebfafa',
          'text':'#7e7e7f',
          60:'#090d12',
          30:'#3dcbf2',
          10:'#64f5f5'
        }
      },
      fontFamily: {
        'inter': ['Inter']
      },
    },
  },
  plugins: [],
}