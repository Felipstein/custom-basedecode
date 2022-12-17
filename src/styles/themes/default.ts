import { DefaultTheme } from 'styled-components';

export default {
  font: {
    family: 'Inter, sans-serif',

    size: {
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
      900: '#121214',
    },
    orange: {
      100: '#ffe5ad',
      400: '#ffc24b',
      500: '#ffa800',
    },
  },

  background: 'radial-gradient(69.29% 69.29% at 29.51% 30.71%, #3F2900 0%, #121214 100%)',
} as DefaultTheme;
