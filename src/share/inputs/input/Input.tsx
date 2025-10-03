import { CustomInput } from './input.styles.ts';
import type { InputProps as AntdInputProps } from 'antd/es/input';

interface InputProps extends AntdInputProps {}

const InputLogin = ({ ...props }: InputProps) => {
  return <CustomInput {...props} />;
};

export default InputLogin;
