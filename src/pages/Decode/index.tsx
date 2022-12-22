import { CodeForm } from '../../components/CodeForm';

export function Decode() {
  function handleDecode(inputText: string, setOutputText: (outputText: string) => void) {
    console.log(inputText);
    setOutputText('fds');
  }

  return (
    <CodeForm type='decode' onSubmit={handleDecode} />
  );
}
