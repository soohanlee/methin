import React, { forwardRef } from 'react';

import 'antd/dist/antd.css';
import { DatePicker } from 'antd';

const BasicDatePicker = ({ onChange, picker, className }, ref) => {
  return (
    <DatePicker
      onChange={onChange}
      ref={ref}
      className={className}
      picker={picker}
    />
  );
};

export default forwardRef(BasicDatePicker);
