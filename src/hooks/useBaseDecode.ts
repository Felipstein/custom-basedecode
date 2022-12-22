export function useBaseDecode(type: 'code' | 'decode') {
  function encode(str: string) {
    if(type === 'code') {
      return codify(str);
    } else if(type === 'decode') {
      return decodify(str);
    }

    throw new Error('Invalid method code.');
  }

  function codify(decodified: string) {
    return decodified
      .split(' ')
      .map(word => {
        const char = word.split('');
        return char.map(char => {
          const charCode = char.charCodeAt(0);
          const binary = charCode.toString(2).padStart(8);
          const encoded = binary
            .replace(/0/g, 'chagas, ')
            .replace(/1/g, 'chagas chagas, ')
            .replace(/, $/, '');

          return encoded;
        }).join('-');
      }).join('~');
  }

  function decodify(codified: string) {
    return codified
      .split('~')
      .map(word => {
        const char = word.split('-');
        return char.map(char => {
          const binary = char.replace(/chagas chagas(, )*/g, '1').replace(/chagas(, )*/g, '0');

          return String.fromCharCode(parseInt(binary, 2));
        }).join('');
      }).join(' ');
  }

  return { encode, encodingType: type };
}
