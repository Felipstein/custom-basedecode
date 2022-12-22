import { Slot } from '@radix-ui/react-slot';
import { ButtonHTMLAttributes } from 'react';

import * as S from './styles';

type ButtonProps = {
  asChild?: boolean;
} & S.ButtonStyledProps & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ variant = 'default', asChild, children }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <S.Container variant={variant} className="app-button">
      <Comp>
        {children}
      </Comp>
    </S.Container>
  );
}
