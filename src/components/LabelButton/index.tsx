import { HTMLAttributes } from 'react';

import * as S from './styles';

type LabelButtonProps = HTMLAttributes<HTMLElement>;

export function LabelButton({ children }: LabelButtonProps) {
  return (
    <S.Container>
      {children}
    </S.Container>
  );
}
