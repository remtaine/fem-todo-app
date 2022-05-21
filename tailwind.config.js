const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      extend: {
          colors: {
              'fem': {
                  100: 'hsl(220, 98%, 61%)',
                  200: 'hsl(192, 100%, 67%)',
                  300: 'hsl(280, 87%, 65%)',
              },
              'fem-light': {
                  100: 'hsl(0, 0%, 98%)',
                  200: 'hsl(236, 33%, 92%)',
                  300: 'hsl(233, 11%, 84%)',
                  400: 'hsl(236, 9%, 61%)',
                  500: 'hsl(235, 19%, 35%)',
              },
              'fem-dark': {
                  100: 'hsl(235, 21%, 11%)',
                  200: 'hsl(235, 24%, 19%)',
                  300: 'hsl(234, 39%, 85%)',
                  400: 'hsl(236, 33%, 92%)',
                  500: 'hsl(234, 11%, 52%)',
                  600: 'hsl(233, 14%, 35%)',
                  700: 'hsl(237, 14%, 26%)',
              },
          },
          fontFamily: {
              'josefin': ['Josefin Sans','sans-serif'],
          },
          screens: {
              'mobile': '375px',
              'desktop': '1440px',
              ...defaultTheme.screens,
          },
      },
  },

  plugins: [],
}