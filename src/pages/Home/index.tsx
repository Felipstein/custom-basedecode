import Button from '../../components/Button';
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
        Botão
      </Button>
    </S.Container>
  );
}
