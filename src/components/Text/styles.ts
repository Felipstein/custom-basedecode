import styled from 'styled-components';
import { Slot } from '@radix-ui/react-slot';

export interface TextContainerProps {
  size: 'md' | 'sm' | 'xsm';
  align: 'center' | 'left' | 'right' | 'end' | 'start' | 'justify';
  color?: string;
}

export const Container = styled(Slot)<TextContainerProps>`
  font-size: ${({ theme, size }) => theme.font.size[size]};
  text-align: ${({ align }) => align};
  color: ${({ color, theme }) => color || theme.colors.white};
`;
