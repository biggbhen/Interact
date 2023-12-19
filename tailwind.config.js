/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['**/*.{html,js}'],
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      screens: {
        'xxs':{'max':'600px'},
        'sm': {'max': '639px'},
        'md': {'max': '767px'},
        'lg': {'max': '1023px'},
        'xl': {'max': '1279px'},
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
}