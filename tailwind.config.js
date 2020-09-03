module.exports = {
  purge: {
    content: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx', './src/**/*.hbs']
  },
  theme: {
    extend: {
      colors: {
        shark: {
          50: '#F4F4F4',
          100: '#EAEAEA',
          200: '#CACACA',
          300: '#AAAAAB',
          400: '#6A6B6B',
          500: '#2A2B2C',
          600: '#262728',
          700: '#191A1A',
          800: '#131314',
          900: '#0D0D0D'
        },
        'smalt-blue': {
          50: '#F7F9FA',
          100: '#EEF2F4',
          200: '#D5E0E4',
          300: '#BCCDD3',
          400: '#8AA7B2',
          500: '#588191',
          600: '#4F7483',
          700: '#354D57',
          800: '#283A41',
          900: '#1A272C'
        }
      },
      opacity: {
        10: '0.1',
        20: '0.2',
        30: '0.3',
        40: '0.4',
        50: '0.5',
        60: '0.6',
        70: '0.7',
        80: '0.8',
        90: '0.9'
      },
      fontFamily: {
        sans: [
          'Rubik',
          '"Source Sans Pro"',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"'
        ],
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        mono: ['Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace']
      },
      zIndex: {
        '-10': '-10',
        0: 0,
        10: 10,
        20: 20,
        25: 25,
        30: 30,
        40: 40,
        50: 50,
        75: 75,
        100: 100,
        1000: 1000,
        auto: 'auto'
      },
      minHeight: {
        '25vh': '25vh',
        '50vh': '50vh',
        '75vh': '75vh'
      }
    },
    aspectRatio: {
      none: 0,
      square: [1, 1],
      '16/9': [16, 9],
      '4/3': [4, 3],
      '21/9': [21, 9]
    },
    container: {
      screens: {
        sm: '100%',
        md: '100%',
        lg: '1024px',
        xl: '1280px'
      }
    }
  },
  variants: {
    aspectRatio: ['responsive']
  },
  plugins: [
    require('tailwindcss-aspect-ratio'),
    require('@tailwindcss/typography')
  ],
  future: {
    removeDeprecatedGapUtilities: true
  }
}
