import type { InputHTMLAttributes } from 'react';
import { CustomInput } from './input.styles.ts';

interface InputProps {
  placeholder?: string;
}

const InputLogin = ({ placeholder, ...props }: InputProps) => {
  return placeholder && <CustomInput placeholder={placeholder} />;
};

export default InputLogin;
