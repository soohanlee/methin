import React, { forwardRef } from 'react';
import 'antd/dist/antd.css';
import { Cascader } from 'antd';
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

const BasicCascader = (
  { onChange, value, placeholder, textSize, label, disabled, options },
  ref,
) => {
  return (
    <TextInput>
      <Label textSize={textSize}>{label}</Label>
      <Cascader
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        options={options}
      ></Cascader>
    </TextInput>
  );
};
export default forwardRef(BasicCascader);
