/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,twig}'],
  theme: {
    container: {
      center: true
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': 'white',
      'primary': {
        200: '#bdcaef',
        300: '#6986db',
        DEFAULT: '#2953cc',
        700: '#1f3e99'
      },
      'secondary': {              
        200: '#ffefb2',
        300: '#ffe57f',
        DEFAULT: '#ffcd00',
        700: '#eca806'
      },
      'tertiary': {
        200: '#f3bdbd',
        300: '#e87d7d',
        DEFAULT: '#d82626',
        700: '#b42727'
      }
    },
    extend: {},
  },
  plugins: [],
}

