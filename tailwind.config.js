/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      animation: {
        float: 'float 3s ease-in-out infinite',
        'shadow-pulse': 'shadow-pulse 1s infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },

        'shadow-pulse': {
          '0%': {
            boxShadow: '0 0 0 0px rgb(253 192 77)', // yellow color
          },
          '100%': {
            boxShadow: '0 0 0 35px rgba(0, 0, 0, 0)',
          },
        }
      },
    },
  },
  plugins: [],
}

