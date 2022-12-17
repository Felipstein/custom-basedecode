import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    height: 100vh;

    ${({ theme }) => css`
      font-family: ${theme.font.family};
      font-size: ${theme.font.size};
      background: ${theme.background};
      color: ${theme.colors.white};
      font-size: ${theme.font.size.md};
    `};
  }

`;
