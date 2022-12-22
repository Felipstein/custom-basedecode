import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { FigmaIcon } from '../../assets/icons/FigmaIcon';
import { GitHubIcon } from '../../assets/icons/GitHubIcon';
import { FloatingButton } from '../../components/FloatingButton';

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

      <div className="floating-buttons">
        <FloatingButton
          href='https://github.com/Felipstein/custom-basedecode'
          target="_blank"
          icon={<GitHubIcon />}
        >
          GitHub
        </FloatingButton>
        <FloatingButton
          href='ttps://www.figma.com/file/FNLG1HMP1Ybjn24tXFqMXV/Chagasn%C3%AAs?t=78hZatPjsNftdazU-1'
          target="_blank"
          icon={<FigmaIcon />}
        >
          Figma
        </FloatingButton>
      </div>

      <Outlet />
    </S.Container>
  );
}
