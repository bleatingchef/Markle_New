/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideInLeft: {
          '0%': { 
            transform: 'translateX(-100%)', 
            opacity: 0 
          },
          '100%': { 
            transform: 'translateX(0)', 
            opacity: 1 
          },
        },
        slideInRight: {
          '0%': { 
            transform: 'translateX(100%)', 
            opacity: 0 
          },
          '100%': { 
            transform: 'translateX(0)', 
            opacity: 1 
          },
        },
      },
      animation: {
        slideInLeft1: 'slideInLeft 1.5s ease-out',
        slideInRight: 'slideInRight 1.5s ease-out 0.5s', // Delay for the second image
      },
    },
  },
  plugins: [],
}
