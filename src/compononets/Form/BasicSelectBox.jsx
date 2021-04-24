import React from 'react';
import 'antd/dist/antd.css';
import { Select } from 'antd';

const { Option } = Select;

const BasicSelectBox = ({ label, className, ref }) => {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <>
      <Select
        className={className}
        ref={ref}
        defaultValue={label}
        onChange={handleChange}
      >
        <Option value={label}>{label}</Option>
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="disabled" disabled>
          Disabled
        </Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>
    </>
  );
};
export default BasicSelectBox;
