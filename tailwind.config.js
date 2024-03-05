/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#FFFFFF',
        'white-smoke': '#F5F5F5',
        'snow': '#FFFAFA',
        'ghost-white': '#F8F8FF',
        'ivory': '#FFFFF0',
        'dark': '#050505',
        'dark2': '#353535',
        'dark3': '#737373',
      },
      fontFamily: {
        'excon': ['Excon', 'sans-serif'],
      },
    },
  },
  plugins: [],
}