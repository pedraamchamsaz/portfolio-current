/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        cabins: {
          '0%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        }
      },
      animation: {
        'cabin-spin': 'cabins 10s linear infinite'
      }
    },
  },
  plugins: [],
}
