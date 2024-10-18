/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",   // Include the app directory
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#f0f8ff',
          600: '#1e90ff',
          700: '#1c86ee',
        },
      },
      keyframes: {
        jiggle: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        }
      },
      animation: {
        jiggle: 'jiggle 0.2s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};