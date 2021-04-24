import React from 'react';
import 'antd/dist/antd.css';
import { DatePicker } from 'antd';

function onChange(date, dateString) {
  console.log(date, dateString);
}

const BasicDatePicker = ({ picker, className, ref }) => {
  return (
    <DatePicker
      className={className}
      ref={ref}
      onChange={onChange}
      picker={picker}
    />
  );
};

export default BasicDatePicker;
