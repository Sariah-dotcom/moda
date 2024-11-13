/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'dm-sans': ['DM Sans', 'sans-serif'],
      'inter': ['Inter', 'sans-serif'],
    },
    colors: {
      'brown': '#69301E',
      'white': '#FFF',
      
    },
    extend: {},
  },
  plugins: [],
}

