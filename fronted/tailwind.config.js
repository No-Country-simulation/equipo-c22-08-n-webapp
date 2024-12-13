/** @type {import('tailwindcss').Config} */ 
export default {   
  content: ['./src/**/*.{html,jsx,js}'],   
  theme: {     
    colors: {
      // Colores personalizados
      ...require('tailwindcss/colors'),

      'primary': '#153448',
      'secondary': '#3C5B6F',
      'secondary-light': '#b9deff',
      'secondary-strong':'#3148f7',
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
      'success':'#2E7D32',
      'transparent': '#00000000',
      'red': "#982B1C",
      'beige-light': '#F4EED8',
      // 'success': '#2E7D32',
      'yellow-light': "#f9f2b0"
      // Mantener los colores predeterminados de Tailwind
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
      },
      keyframes: {
        bounce: {
          '0%, 100%': { 
            transform: 'translateY(-1%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': { 
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
          }
        }
      },
      animation: {
        'bounce': 'bounce 1s infinite'
      }
    }
  },   
  plugins: [
     function ({ addComponents }) {
      addComponents({
        '.custom-scrollbar': {
          '&::-webkit-scrollbar': {
            width: '0.5rem', 
          },
          '&::-webkit-scrollbar-track': {
            borderRadius: '9999px', 
            backgroundColor: '#f3f4f6', 
          },
          '&::-webkit-scrollbar-thumb': {
            borderRadius: '9999px', 
            backgroundColor: '#FFA07A', 
          },
        },
      });
    },
  ], 
}
