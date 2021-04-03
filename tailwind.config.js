module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        montserrat: 'Montserrat, sans-serif',
        openSans: 'Open Sans, sans-serif',
      },
      textShadow: {
        blue: '#C67DFF',
        peach: '#FFBEBE',
        pastelBlue: '#C0DDFF',
        
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ],
}
