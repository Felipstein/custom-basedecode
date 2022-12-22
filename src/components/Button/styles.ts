import styled, { css } from 'styled-components';
import { Slot } from '@radix-ui/react-slot';

const variants = {
  default: css`
    background-color: ${({ theme }) => theme.colors.orange[500]};

    &:hover {
      background-color: ${({ theme }) => theme.colors.orange[400]};
    }

    &:active {
      background-color: ${({ theme }) => theme.colors.orange[100]};
    }
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.colors.white};

    &:hover {
      background-color: ${({ theme }) => theme.colors.orange[100]};
    }
  `,
};

export type ButtonStyledProps = {
  variant?: 'default' | 'secondary';
}

export const Container = styled(Slot)<ButtonStyledProps>`
  color: ${({ theme }) => theme.colors.gray[900]};

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

  box-shadow: ${({ theme }) => theme.shadow};

  ${({ variant }) => variants[variant || 'default']};

  &:disabled {
    opacity: 0.55;
    pointer-events: none;
  }
`;
