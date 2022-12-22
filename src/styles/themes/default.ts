import { DefaultTheme } from 'styled-components';

export default {
  font: {
    family: 'Inter, sans-serif',

    size: {
      lg: '2.0rem',
      md: '1.8rem',
      sm: '1.6rem',
      xsm: '1.4rem',
    },
  },

  colors: {
    white: '#fff',
    gray: {
      600: '#6a6a78',
      700: '#3d3d3d',
      800: '#242424',
      900: '#121214',
    },
    orange: {
      100: '#ffe5ad',
      400: '#ffc24b',
      500: '#ffa800',
    },
  },

  background: 'radial-gradient(69.29% 69.29% at 29.51% 30.71%, #3F2900 0%, #121214 100%)',

  shadow: '2px 2px 10px rgba(0, 0, 0, 0.2)',
} as DefaultTheme;
