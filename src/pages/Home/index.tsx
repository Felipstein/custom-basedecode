import { FigmaIcon } from '../../assets/icons/FigmaIcon';
import { GitHubIcon } from '../../assets/icons/GitHubIcon';
import Button from '../../components/Button';
import { Footer } from '../../components/Footer';
import { LabelButton } from '../../components/LabelButton';
import { Logo } from '../../components/Logo';
import { Text } from '../../components/Text';

import * as S from './styles';

export function Home() {
  return (
    <S.Container>
      <Logo />

      <Text align='center'>
        Codifique ou decodifique qualquer texto na linguagem chagasnês! É simples, fácil, rápido e gratuíto!
      </Text>

      <Button variant='default'>
        Vamos lá!
      </Button>

      <div className="social-links">
        <LabelButton asChild>
          <a href="https://github.com/Felipstein/custom-basedecode" target="_blank" rel="noreferrer">
            <GitHubIcon />
          </a>
        </LabelButton>
        <LabelButton asChild>
          <a href='https://www.figma.com/file/FNLG1HMP1Ybjn24tXFqMXV/Chagasn%C3%AAs?t=78hZatPjsNftdazU-1' target="_blank" rel="noreferrer">
            <FigmaIcon />
          </a>
        </LabelButton>
      </div>

      <div className="footer-container">
        <Footer />
      </div>
    </S.Container>
  );
}
