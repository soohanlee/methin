import React, { forwardRef } from 'react';
import 'antd/dist/antd.css';
import { Input } from 'antd';
import styled from 'styled-components';

const BasicTextInputBox = ({ onBlur, textSize, label, className }, ref) => {
  const Label = styled.div`
    margin-top: 0.7rem;
    margin-left: 1rem;
    width: ${(props) => props.textSize};
    clear: both;
    float: left;
  `;

  const TextInput = styled.div`
    display: flex;
  `;
  // <Label>{label}</Label>

  return (
    <TextInput>
      <Label textSize={textSize}>{label}</Label>
      <Input onBlur={onBlur} className={className} ref={ref}></Input>
    </TextInput>
  );
};
export default forwardRef(BasicTextInputBox);
