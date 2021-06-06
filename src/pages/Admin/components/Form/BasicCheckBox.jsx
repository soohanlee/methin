import React, { forwardRef } from 'react';
import 'antd/dist/antd.css';
import { Checkbox } from 'antd';

// function onChange(e) {
//   console.log(`checked = ${e.target.checked}`);
// }

const BasicCheckBox = ({ onChange, className, label }, ref) => {
  return (
    <Checkbox ref={ref} onChange={onChange} className={className}>
      {label}
    </Checkbox>
  );
};

export default forwardRef(BasicCheckBox);
