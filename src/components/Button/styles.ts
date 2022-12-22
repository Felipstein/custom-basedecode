import { Slot } from '@radix-ui/react-slot';
import styled from 'styled-components';

export type ButtonStyledProps = {
  variant: 'default' | 'secondary';
}

export const Container = styled(Slot)<ButtonStyledProps>`
  color: ${({ theme }) => theme.colors.gray[900]};
  background-color: ${({ theme }) => theme.colors.orange[500]};

  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 600;
  font-family: ${({ theme }) => theme.font.family};
  font-size: ${({ theme }) => theme.font.size.sm};

  min-width: 46.6rem;
  padding: 1.2rem 1.6rem;

  border: none;
  border-radius: 8px;

  outline: transparent 2px solid;
  cursor: pointer;

  &:hover, &:focus {
    background-color: ${({ theme }) => theme.colors.orange[400]};

    &:focus {
      outline-color: ${({ theme }) => theme.colors.orange[100]};
    }
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.orange[100]};
  }
`;
