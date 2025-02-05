/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        slideInFromRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0%' },
          '100%': { transform: 'translateX(0)', opacity: '100%' },
        },

        slideOutFromLeft: {
          '0%': { transform: 'translateX(0)', opacity: '100%' },
          '100%': { transform: 'translateX(100%)', opacity: '0%' },
        },
      },

      animation: {
        slideInFromRight: 'slideInFromRight 0.5s ease-in-out forwards',
        slideOutToRight: 'slideOutFromLeft 0.5s ease-in-out forwards',
      }

    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

