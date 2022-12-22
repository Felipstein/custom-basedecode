import { CodeForm } from '../../components/CodeForm';
import { useBaseDecode } from '../../hooks/useBaseDecode';

export function Decode() {
  const { encode } = useBaseDecode('decode');

  function handleDecode(inputText: string, setOutputText: (outputText: string) => void) {
    const decoded = encode(inputText);
    setOutputText(decoded);
  }

  return (
    <CodeForm type='decode' onSubmit={handleDecode} />
  );
}
