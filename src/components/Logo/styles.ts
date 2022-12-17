import styled from 'styled-components';

interface LogoContainerProps {
  white: boolean,
}

export const Container = styled.div<LogoContainerProps>`
  user-select: none;
  cursor: pointer;

  h1 {
    font-weight: 500;
    font-size: 3.6rem;

    strong {
      font-weight: 700;
      color: ${({ theme, white }) => white ? theme.colors.white : theme.colors.orange[500]};
    }
  }
`;
