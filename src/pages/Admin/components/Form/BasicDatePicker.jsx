import React from 'react';
import 'antd/dist/antd.css';
import { DatePicker } from 'antd';

const BasicDatePicker = ({ picker, className, onChange }) => {
  return (
    <DatePicker className={className} onChange={onChange} picker={picker} />
  );
};

export default BasicDatePicker;
