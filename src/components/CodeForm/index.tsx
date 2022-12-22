import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { TextInputRoot, TextInputLabel, TextInputArea } from '../../components/TextInput';
import { Text } from '../Text';

import * as S from './styles';

const flexibleLabels = {
  labelOutputText: {
    code: 'Texto codificado',
    decode: 'Texto decodificado/traduzido',
  },
  codeBtn: {
    code: 'Codificar',
    decode: 'Decodificar',
  },
};

type CodeFormProps = {
  type: 'code' | 'decode';
}

export function CodeForm({ type }: CodeFormProps) {
  return (
    <S.Container>
      <div className="inputs">
        <div className="input-group">
          <TextInputRoot>
            <TextInputLabel>
              {type === 'code' && <Text>Coloque seu texto aqui</Text>}
              {type === 'decode' && <Text>Coloque seu texto <strong id='codified-tip'>codificado</strong> aqui</Text>}
            </TextInputLabel>
            <TextInputArea placeholder='...' />
          </TextInputRoot>

          <div className="actions">
            <Button type="button" variant='secondary'>
              Limpar
            </Button>

            <Button type="button">
              {flexibleLabels.codeBtn[type]}
            </Button>
          </div>
        </div>

        <div className="input-group">
          <TextInputRoot>
            <TextInputLabel>
              {flexibleLabels.labelOutputText[type]}
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

      <div className="footer-container">
        <Footer />
      </div>
    </S.Container>
  );
}
