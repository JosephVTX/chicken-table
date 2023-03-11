/** @type {import('tailwindcss').Config} */
module.exports = {

  important: "#tablaAlergenos",
  future: {

    removeDeprecatedGapUtilities: true,

    purgeLayersByDefault: true,

  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      backgroundColor:{


        'chicken': '#FF0000'
      }
    },
  },
  plugins: [],
}