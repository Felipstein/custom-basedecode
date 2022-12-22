import { FigmaIcon } from '../../assets/icons/FigmaIcon';
import { GitHubIcon } from '../../assets/icons/GitHubIcon';
import Button from '../../components/Button';
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
        <LabelButton>
          <GitHubIcon />
        </LabelButton>
        <LabelButton>
          <FigmaIcon />
        </LabelButton>
      </div>
    </S.Container>
  );
}
