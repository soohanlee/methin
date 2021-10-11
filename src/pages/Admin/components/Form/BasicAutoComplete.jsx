import React, { forwardRef } from 'react';
import 'antd/dist/antd.css';
import { AutoComplete } from 'antd';
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

const BasicAutoComplete = (
  {
    onChange,
    value,
    placeholder,
    onBlur,
    textSize,
    label,
    className,
    disabled,
    options,
  },
  ref,
) => {
  return (
    <TextInput>
      <Label textSize={textSize}>{label}</Label>
      <AutoComplete
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onBlur={onBlur}
        className={className}
        ref={ref}
        onChange={onChange}
        options={options}
      ></AutoComplete>
    </TextInput>
  );
};
export default forwardRef(BasicAutoComplete);
