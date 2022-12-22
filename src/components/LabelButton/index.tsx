import { Slot } from '@radix-ui/react-slot';
import { HTMLAttributes } from 'react';

import * as S from './styles';

type LabelButtonProps = {
  asChild?: boolean;
} & HTMLAttributes<HTMLElement>;

export function LabelButton({ asChild, children }: LabelButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <S.Container>
      <Comp>
        {children}
      </Comp>
    </S.Container>
  );
}
