import React, {forwardRef} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Input } from 'antd';
import styled from 'styled-components';

const BasicTextInputBox = ({ label, className, ref }) => {
  const Label = styled.div`
    margin-left: 1rem;
    width: 20rem;
  `;

  return (
    <>
      <Label>{label}</Label>
      <Input className={className} ref={ref} ></Input>
    </>
  );
};
export default BasicTextInputBox;