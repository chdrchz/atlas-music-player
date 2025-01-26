/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'black': '#25291C',
      'white': '#EFF7FF',
      'accent-yellow': '#FDCA40',
      'accent-blue': '#52489C',
      'accent-green': '#4FB477',
    },
    fontFamily: {
      comfortaa: ['Comfortaa'],
      montserrat: ['Montserrat']
    },
    extend: {},
  },
  plugins: [],
};
