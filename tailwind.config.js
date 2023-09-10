/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-violet': '#220930',
      },
      scale: {
        '60': '0.6',
        '80': '0.8',
      }
    },
    fontFamily: {
      card: ['Space Grotesk'],
    },
    screens: {
      xs: "400px",
      '2xs': "480px",
      ...defaultTheme.screens,
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

