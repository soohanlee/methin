import React, { forwardRef } from 'react';

import 'antd/dist/antd.css';
import { DatePicker } from 'antd';

const BasicDatePicker = (
  { value, defaultValue, onChange, picker, className },
  ref,
) => {
  return (
    <DatePicker
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      ref={ref}
      className={className}
      picker={picker}
    />
  );
};

export default forwardRef(BasicDatePicker);
