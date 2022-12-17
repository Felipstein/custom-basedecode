import 'styled-components';

declare module 'styled-components' {

  export interface DefaultTheme {
    font: {
      family: string,

      size: {
        md: string;
        sm: string;
        xsm: string;
      }
    }

    colors: {
      white: string;
      gray: {
        600: string;
        700: string;
        900: string;
      },
      orange: {
        100: string;
        400: string;
        500: string;
      },
    },

    background: string;
  }

}
