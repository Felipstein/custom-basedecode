import styled from 'styled-components';
import { NavLink, NavLinkProps } from 'react-router-dom';

export const NavLinkStyled = styled(NavLink)<NavLinkProps>`
  color: ${({ theme }) => theme.colors.white};

  text-align: center;

  padding: 0.6rem 1.2rem;
  border-radius: 128px;

  font-size: ${({ theme }) => theme.font.size.lg};
  font-weight: 600;
  text-decoration: none;
  text-transform: uppercase;

  min-width: 16.4rem;

  &.active {
    background-color: ${({ theme }) => theme.colors.orange[500]};

    pointer-events: none;
  }
`;
