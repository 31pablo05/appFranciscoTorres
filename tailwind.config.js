/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Agregar estilos personalizados aquí
    },
  },
  plugins: [
    // Plugin para scroll behavior
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
