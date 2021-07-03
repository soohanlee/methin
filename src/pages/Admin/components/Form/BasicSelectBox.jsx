import React from 'react';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { Select as OriginSelectBox } from 'antd';

const { Option } = OriginSelectBox;

const Select = styled(OriginSelectBox)`
  width: 15rem;
`;
const BasicSelectBox = ({
  value,
  className,
  list,
  onChange,
  disabled,
  ...props
}) => {
  const renderOption = (list) => {
    return (
      list &&
      list.map(({ value, label }) => {
        return (
          <Option key={value} value={value}>
            {label}
          </Option>
        );
      })
    );
  };

  return (
    <>
      <Select
        className={className}
        defaultValue={list ? list[0].value : '선택'}
        onChange={onChange}
        disabled={disabled}
        props={props}
        value={value}
      >
        {renderOption(list)}
      </Select>
    </>
  );
};
export default BasicSelectBox;
