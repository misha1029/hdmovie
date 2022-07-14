/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

const primary = '#E30B13'

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary,
      black: colors.black,
      white: colors.white,
      transparent: colors.transparent,
      yellow: {
        700: '#F5C521'
      },
      gray: {
        300: '#d9dae8',
        500: '#999AA5',
        600: '#66676E',
        700: '#39393F',
        800: '#242529',
        900: '#191B1F',
        950: '#101215',
      }
    },
    extend: {
      spacing: {
        0.5: '0.12rem',
        layout: '2.75rem'
      },
      fontSize: {
        '2lg': '1.38rem'
      },
      borderRadius: {
        image: '0.5rem',
        layout: '0.8rem'
      },
      transitionTimingFunction: {
        DEFAULT: 'ease-in-out'
      },
      transitionDuration: {
        DEFAULT: '200ms'
      },
      zIndex: {
        1: '1',
        2: '2',
        3: '3',
      },
      keyframes: {
        fade: {
          from: {opacity: 0},
          to: {opacity: 1},
        },
        scaleIn: {
          '0%': {
            opacity: 0,
            transform: 'scale(0.9)'
          },
          '50%': {
            opacity: 0.3,
          },
          '100%': {
            opacity: 1,
            transform: 'scale(1)'
          }
        }
      },
      animation: {
        fade: 'fade .5s ease-in-out',
        scaleIn: 'fade .35s ease-in-out'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    plugin(({addComponents, theme, addUtilities}) => {
      addComponents({
        '.btn-primary': {
          backgroundColor: primary,
          calor: '#FFF',
          borderRadius: '0.65rem',
          transition: 'background-color .3s ease-in-out',
          '&:hover': {
            backgroundColor: '#ff0609',
          }
        },
        '.air-block': {
          backgroundColor: "#101215",
          calor: '#FFF',
          borderRadius: '0.8rem',
          boxShadow: '0 10px 15px -3px rgba(0 0 0 0.1)'
        },
        '.text-link': {
          textUnderlineOffset: 4,
          color: 'rgba(255, 255, 255, .9)',
          transition: 'text-decoration-color .3s ease-in-out',
          textDecorationLine: 'underline',
          textDecorationColor: 'rgba(255, 255, 255, 0.2)',
          '&:hover': {
            textDecorationColor: 'rgba(255, 255, 255, 0.9)',
          },
        },
        'air-block': {
          borderRadius: theme('borderRadius.layout'),
          backgroundColor: theme('colors.gray.950'),
          color: theme('colors.white'),
          boxShadow: theme('boxShadow.lg')
        },
      }),
      addUtilities({
        '.text-shadow': {
          textShadow: '1px 1px rgba(0, 0, 0, 0.4)'
        },
        '.outline-border-none': {
          outline: 'none',
          border: 'none',
        },
        '.flex-center-between': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        },
        '.image-like-bg': {
          objectPosition: 'center',
          objectFit: 'cover',
          pointerEvents: 'none',
        },
      })
    })
  ],
}
