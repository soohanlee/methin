import React, { forwardRef } from 'react';
import 'antd/dist/antd.css';
import { Input } from 'antd';
import styled from 'styled-components';

const Label = styled.div`
  margin-top: 0.7rem;
  width: ${(props) => props.textSize};
  clear: both;
  float: left;
  margin-right: 0.7rem;
`;

const TextInput = styled.div`
  display: flex;
`;

const BasicTextInputBox = (
  {
    onChange,
    value,
    placeholder,
    onBlur,
    textSize,
    label,
    className,
    disabled,
  },
  ref,
) => {
  return (
    <TextInput>
      <Label textSize={textSize}>{label}</Label>
      <Input
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onBlur={onBlur}
        className={className}
        ref={ref}
        onChange={onChange}
      ></Input>
    </TextInput>
  );
};
export default forwardRef(BasicTextInputBox);
