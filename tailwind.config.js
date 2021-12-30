module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
       'display' : ['"archivo black"', 'sans-serif'],
       'body' : ['"questrial"', 'sans-serif'],
      },
      backgroundSize: {
        '50%' : '50%',
        '16' : '4rem',
      },
      container: {
        center: true,
      }
    },
  },
  plugins: [],
}
