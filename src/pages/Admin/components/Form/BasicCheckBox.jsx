import React, { forwardRef } from 'react';
import 'antd/dist/antd.css';
import { Checkbox } from 'antd';

// function onChange(e) {
//   console.log(`checked = ${e.target.checked}`);
// }

const BasicCheckBox = (
  { checked, defaultChecked, onChange, className, label },
  ref,
) => {
  return (
    <Checkbox
      checked={checked}
      defaultChecked={defaultChecked}
      ref={ref}
      onChange={onChange}
      className={className}
    >
      {label}
    </Checkbox>
  );
};

export default forwardRef(BasicCheckBox);
