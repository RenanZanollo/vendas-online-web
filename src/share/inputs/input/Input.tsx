import type { InputProps as AntdInputProps } from 'antd/es/input';

import { CustomInput } from './input.styles.ts';

interface InputProps extends AntdInputProps {}

const InputLogin = ({ ...props }: InputProps) => {
  return <CustomInput {...props} />;
};

export default InputLogin;
