import { CodeForm } from '../../components/CodeForm';

export function Code() {
  function handleCode(inputText: string, setOutputText: (outputText: string) => void) {
    console.log(inputText);
    setOutputText('fds');
  }

  return (
    <CodeForm type='code' onSubmit={handleCode} />
  );
}
