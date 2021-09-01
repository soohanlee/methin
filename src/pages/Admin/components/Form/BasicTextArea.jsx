import React, { forwardRef } from 'react';
import 'antd/dist/antd.css';
import { Input } from 'antd';

const { TextArea } = Input;

const BasicTextArea = (
  { value, disabled, onChange, label, className },
  ref,
) => {
  return (
    <TextArea
      value={value}
      onChange={onChange}
      className={className}
      ref={ref}
      rows={4}
      placeholder={label}
      disabled={disabled}
    />
  );
};
export default forwardRef(BasicTextArea);
