import React from 'react';
import 'antd/dist/antd.css';
import { Select } from 'antd';

const { Option } = Select;

const BasicSelectBox = ({ className, list, onChange, ...props }) => {
  const renderOption = (list) => {
    return (
      list &&
      list.map(({ value, label }) => {
        return <Option value={value}>{label}</Option>;
      })
    );
  };

  return (
    <>
      <Select
        className={className}
        defaultValue={list ? list[0].value : '선택'}
        onChange={onChange}
        props={props}
      >
        {renderOption(list)}
      </Select>
    </>
  );
};
export default BasicSelectBox;
