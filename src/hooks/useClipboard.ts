export function useClipboard() {
  return (textToCopy: string) => {
    navigator.clipboard.writeText(textToCopy);
  };
}
