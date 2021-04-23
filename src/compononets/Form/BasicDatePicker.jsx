import React, {forwardRef} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { DatePicker, Space } from 'antd';

function onChange(date, dateString) {
  console.log(date, dateString);
}

const BasicDatePicker = ({ picker, className ,ref}) => {
  return (
    <DatePicker className={className} ref={ref} onChange={onChange} picker={picker} />
  );
};

export default BasicDatePicker;
