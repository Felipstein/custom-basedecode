import { Slot } from '@radix-ui/react-slot';

import * as S from './styles';

type FloatingButtonProps = {
  href?: string;
  to?: string;
  target?: string;
  icon: React.ReactNode;
  asChild?: boolean;
  children: string;
};

export function FloatingButton({ icon, asChild, children, ...props }: FloatingButtonProps) {
  const Comp = asChild ? Slot : 'a';

  return (
    <S.Container {...props}>
      <Comp>
        <div className="abstract-container">
          <div className="icon-container">
            {icon}
          </div>
          <div className="label-container">
            {children}
          </div>
        </div>
      </Comp>
    </S.Container>
  );
}
