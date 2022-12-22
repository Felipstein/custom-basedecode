import { Button } from '../../components/Button';
import { TextInputRoot, TextInputLabel, TextInputArea } from '../../components/TextInput';

import * as S from './styles';

export function Code() {
  return (
    <S.Container>
      <div className="inputs">
        <div className="input-group">
          <TextInputRoot>
            <TextInputLabel>
              Coloque seu texto aqui
            </TextInputLabel>
            <TextInputArea placeholder='...' />
          </TextInputRoot>

          <div className="actions">
            <Button type="button" variant='secondary'>
              Limpar
            </Button>

            <Button type="button">
              Codificar
            </Button>
          </div>
        </div>

        <div className="input-group">
          <TextInputRoot>
            <TextInputLabel>
              Texto codificado
            </TextInputLabel>
            <TextInputArea readOnly />
          </TextInputRoot>

          <div className="actions">
            <Button type="button">
              Copiar
            </Button>
          </div>
        </div>
      </div>
    </S.Container>
  );
}
