import { Slot } from '@radix-ui/react-slot';
import { HTMLAttributes } from 'react';

import * as S from './styles';

type TextProps = {
  asChild: boolean;
  children: React.ReactNode;
} & S.TextContainerProps & HTMLAttributes<HTMLElement>

export function Text({ size, asChild, children }: TextProps) {
  const Comp = asChild ? Slot : 'span';

  return (
    <S.Container size={size}>
      <Comp>
        {children}
      </Comp>
    </S.Container>
  );
}

Text.defaultProps = {
  size: 'md',
  asChild: false,
};
