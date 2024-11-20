/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,jsx,js}'],
  theme: {
    colors: {
      'primary': '#153448',
      'secondary': '#3C5B6F',
      'beige': '#DFD0B8',
      'brown': '#96876f',
      'green': '#13ce66',
      'yellow': '#fcba03',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'white-2': '#f8f9fa',
      'green-lila': '#5EAFA8',
      'black': '#1c1a15',
      'orange':'#FFA07A',
      'orange-hover':'#FF9066',
      'transparent': '#00000000',
      
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
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
}