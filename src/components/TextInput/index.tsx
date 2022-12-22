import { TextareaHTMLAttributes } from 'react';

import * as S from './styles';

type TextInputRoot = {
  children: React.ReactNode;
};

export function TextInputRoot({ children }: TextInputRoot) {
  return (
    <>
      {children}
    </>
  );
}

type TextInputLabel = {
  children: React.ReactNode;
}

export function TextInputLabel({ children }: TextInputLabel) {
  return (
    <S.LabelText>
      {children}
    </S.LabelText>
  );
}

type TextInputArea = {
  placeholder?: string;
  readOnly?: boolean;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export function TextInputArea({ readOnly, placeholder, ...props }: TextInputArea) {
  return (
    <S.TextAreaStyled placeholder={placeholder} readOnly={readOnly} {...props} />
  );
}
