import { Checkbox } from 'antd';
import styled from 'styled-components';

export const CustomCheckbox = styled(Checkbox)`
  .ant-checkbox-inner {
    width: 17px;
    height: 17px;
    background-color: #fff;
    border: 1px solid #a8a8a8;
  }

  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #1890ff;
    border-color: #1890ff;
  }

  .ant-checkbox-inner::after {
    transform: rotate(45deg) scale(1) translate(-50%, -50%);
    border-color: white;
  }
`;
