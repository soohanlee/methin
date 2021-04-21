import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Input } from 'antd';
import styled from 'styled-components';

const BasicTextInputBox = ({ label, className }) => {
  const Label = styled.div`
    margin-left: 1rem;
    width: 20rem;
  `;

  return (
    <>
      <Label>{label}</Label>
      <Input className={className}></Input>
    </>
  );
};
export default BasicTextInputBox;
