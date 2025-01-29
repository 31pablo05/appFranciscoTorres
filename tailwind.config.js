/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        turquesa: '#00b8d4',  // Azul Turquesa
        'turquesa-dark': '#008c96',  // Azul Turquesa Oscuro
      }, // Aquí la coma después del objeto de colores
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.scroll-smooth': {
          'scroll-behavior': 'smooth',
        },
        '.scroll-mt-70': {
          'scroll-margin-top': '70px',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}
