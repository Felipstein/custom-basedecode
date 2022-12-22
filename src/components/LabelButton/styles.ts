import { Slot } from '@radix-ui/react-slot';
import styled from 'styled-components';

export const Container = styled(Slot)`
  color: ${({ theme }) => theme.colors.white};

  background-color: transparent;
  border: none;

  cursor: pointer;

  &:hover, &:focus {
    color: ${({ theme }) => theme.colors.orange[100]};
  }
`;
