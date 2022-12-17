import * as S from './styles';

export interface LogoProps {
  white: boolean;
}

const defaultProps: LogoProps = {
  white: false,
};

export function Logo({ white }: LogoProps) {
  return (
    <S.Container white={white}>
      <h1>
        <strong>Chagas</strong>
        nês
      </h1>
    </S.Container>
  );
}

Logo.defaultProps = defaultProps;
