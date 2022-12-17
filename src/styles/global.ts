import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html: {
    font-size: 62.5%;
  }

  body {
    height: 100vh;
    font-family: ${({ theme }) => theme.font.family};
    font-size: ${({ theme }) => theme.font.size};
    background: ${({ theme }) => theme.background};
  }

`;
