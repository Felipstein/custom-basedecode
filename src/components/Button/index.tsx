import { ButtonHTMLAttributes } from 'react';

import * as S from './styles';

type ButtonProps = S.ButtonStyledProps & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ variant = 'default', children }: ButtonProps) {
  return (
    <S.ButtonStyled variant={variant}>
      {children}
    </S.ButtonStyled>
  );
}
