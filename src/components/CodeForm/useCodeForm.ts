import { ChangeEvent, useState } from 'react';

import { useClipboard } from '../../hooks/useClipboard';

export function useCodeForm() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const copyToClipboard = useClipboard();

  const isInputFilled = ![null, undefined, ''].includes(inputText);
  const isOuputFilled = ![null, undefined, ''].includes(outputText);

  function handleChangeInputText(event: ChangeEvent<HTMLTextAreaElement>) {
    const value = event.target.value;
    setInputText(value);
  }

  function handleClear() {
    setInputText('');
    setOutputText('');
  }

  return {
    inputText,
    outputText,
    handleChangeInputText,
    setOutputText,
    handleClear,
    copyToClipboard,
    isInputFilled,
    isOuputFilled
  };
}
