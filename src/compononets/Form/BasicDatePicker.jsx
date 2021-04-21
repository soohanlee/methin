import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { DatePicker, Space } from 'antd';

function onChange(date, dateString) {
  console.log(date, dateString);
}

const BasicDatePicker = ({ picker, className }) => {
  return (
    <DatePicker className={className} onChange={onChange} picker={picker} />
  );
};
export default BasicDatePicker;
