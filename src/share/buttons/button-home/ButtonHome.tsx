import type { ButtonProps } from 'antd';

import { ButtonHomeStyle } from './buttonHome.styles';

const ButtonHome = (props: ButtonProps) => {
  return <ButtonHomeStyle {...props}>{props.children}</ButtonHomeStyle>;
};

export default ButtonHome;
