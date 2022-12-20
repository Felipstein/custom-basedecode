import styled from 'styled-components';

export interface TextContainerProps {
  size: 'md' | 'sm' | 'xsm';
}

export const Container = styled.div<TextContainerProps>`
  font-size: ${({ theme, size }) => theme.font.size[size]};
`;
