import styled, { css } from 'styled-components';

import { Text } from '../Text';

export const LabelText = styled(Text)`
  display: block;
  font-weight: 600;
  margin-bottom: 0.4rem;
`;

export const TextAreaStyled = styled.textarea`
  font-family: ${({ theme }) => theme.font.family};
  font-size: ${({ theme }) => theme.font.size.sm};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
  border: none;
  outline: transparent 2px solid;
  border-radius: 8px;
  padding: 1.2rem 2.0rem;
  resize: none;
  box-shadow: ${({ theme }) => theme.shadow};

  width: 60rem;
  height: 27.4rem;

  ${({ readOnly, theme }) => !readOnly && css`
    background-color: ${theme.colors.gray[700]};

    &:focus {
      outline-color: ${({ theme }) => theme.colors.orange[500]};
    }
  `};

  ${({ readOnly, theme }) => readOnly && css`
    background-color: ${theme.colors.gray[800]};
  `};

`;
