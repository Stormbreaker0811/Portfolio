/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'navbar': '#124559',
        'hero':'#01161e',
        'text-color': '#eff6e0',
        'github-btn':'#007ea7'
      },
      fontFamily:{
        'Ubuntu': ['Ubuntu','sans-serif']
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ['light', 'dark'],
  }
}

