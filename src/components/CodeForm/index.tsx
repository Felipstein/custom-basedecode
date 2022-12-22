import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { TextInputRoot, TextInputLabel, TextInputArea } from '../../components/TextInput';
import { Text } from '../Text';

import * as S from './styles';
import { useCodeForm } from './useCodeForm';

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
  onSubmit: (inputText: string, setOutputText: (outputText: string) => void) => void;
  type: 'code' | 'decode';
}

export function CodeForm({ type, onSubmit }: CodeFormProps) {
  const {
    inputText,
    outputText,
    handleChangeInputText,
    setOutputText,
    handleClear,
    copyToClipboard,
    isInputFilled,
    isOuputFilled
  } = useCodeForm();

  return (
    <S.Container>
      <div className="inputs">
        <div className="input-group">
          <TextInputRoot>
            <TextInputLabel>
              {type === 'code' && <Text>Coloque seu texto aqui</Text>}
              {type === 'decode' && <Text>Coloque seu texto <strong id='codified-tip'>codificado</strong> aqui</Text>}
            </TextInputLabel>
            <TextInputArea
              value={inputText}
              onChange={handleChangeInputText}
              placeholder='...'
            />
          </TextInputRoot>

          <div className="actions">
            <Button
              type="button"
              variant='secondary'
              onClick={handleClear}
              disabled={!isInputFilled}
            >
              Limpar
            </Button>

            <Button
              type="button"
              onClick={() => onSubmit(inputText, (outputText: string) => setOutputText(outputText))}
              disabled={!isInputFilled}
            >
              {flexibleLabels.codeBtn[type]}
            </Button>
          </div>
        </div>

        <div className="input-group">
          <TextInputRoot>
            <TextInputLabel>
              {flexibleLabels.labelOutputText[type]}
            </TextInputLabel>
            <TextInputArea
              value={outputText}
              readOnly
            />
          </TextInputRoot>

          <div className="actions">
            <Button
              type="button" onClick={() => copyToClipboard(outputText)}
              disabled={!isOuputFilled}
            >
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
