import { NavLinkProps } from 'react-router-dom';

import * as S from './styles';

type TabButton = NavLinkProps;

export function TabButton({ to, children }: NavLinkProps) {
  return (
    <S.NavLinkStyled to={to} className={({ isActive }) => isActive ? 'active' : undefined}>
      {children}
    </S.NavLinkStyled>
  );
}
