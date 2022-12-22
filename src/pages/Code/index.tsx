import { TextInputRoot, TextInputLabel, TextInputArea } from '../../components/TextInput';

export function Code() {
  return (
    <TextInputRoot>
      <TextInputLabel>
        Coloque seu texto aqui
      </TextInputLabel>
      <TextInputArea placeholder='...' />
    </TextInputRoot>
  );
}
