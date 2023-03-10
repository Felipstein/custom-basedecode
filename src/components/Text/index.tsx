import { Slot } from '@radix-ui/react-slot';
import { HTMLAttributes } from 'react';

import * as S from './styles';

type TextProps = {
  asChild: boolean;
  children: React.ReactNode;
} & S.TextContainerProps & HTMLAttributes<HTMLElement>

export function Text({ size, align, asChild, children, ...props }: TextProps) {
  const Comp = asChild ? Slot : 'span';

  return (
    <S.Container size={size} align={align} {...props}>
      <Comp className='app-text'>
        {children}
      </Comp>
    </S.Container>
  );
}

Text.defaultProps = {
  size: 'md',
  align: 'start',
  asChild: false,
};
