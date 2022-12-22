import { CodeForm } from '../../components/CodeForm';
import { useBaseDecode } from '../../hooks/useBaseDecode';

export function Code() {
  const { encode }= useBaseDecode('code');

  function handleCode(inputText: string, setOutputText: (outputText: string) => void) {
    const encoded = encode(inputText);
    setOutputText(encoded);
  }

  return (
    <CodeForm type='code' onSubmit={handleCode} />
  );
}
