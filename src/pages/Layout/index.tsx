import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { Logo } from '../../components/Logo';
import { TabButton } from '../../components/TabButton';

import * as S from './styles';

export function Layout() {
  const location = useLocation();

  if(location.pathname.split('/').filter((path) => path).length === 1) {
    return <Navigate to="/app/code" />;
  }

  return (
    <S.Container>
      <div className="logo-container">
        <Logo />
      </div>

      <div className="nav-bar">
        <TabButton to="code">
          Codificar
        </TabButton>

        <TabButton to="decode">
          Decodificar
        </TabButton>
      </div>

      <Outlet />
    </S.Container>
  );
}
