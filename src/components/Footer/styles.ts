import styled from 'styled-components';
import { Text } from '../Text';

export const TextStyled = styled(Text)`
  color: ${({ theme }) => theme.colors.gray[600]};
`;
