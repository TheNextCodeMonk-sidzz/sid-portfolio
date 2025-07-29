/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        body:['"Josefin Sans"','sans-serif'],
        robota:['"Roboto"'],
      },
    },
    
  },
  plugins: [],
}
