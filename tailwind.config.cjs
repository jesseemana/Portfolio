/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: "Montserrat",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1234px",
      },
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)' },
          '80%': { transform: 'scaleY(1.2)' },
          '100%': { transform: 'scaleY(1)' },
        }
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards'
      }
    },
  },
  plugins: [],
}
