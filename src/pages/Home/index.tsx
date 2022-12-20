import { Logo } from '../../components/Logo';
import { Text } from '../../components/Text';

import * as S from './styles';

export function Home() {
  return (
    <S.Container>
      <Logo />
      <Text>
        Hello World!
      </Text>
    </S.Container>
  );
}
