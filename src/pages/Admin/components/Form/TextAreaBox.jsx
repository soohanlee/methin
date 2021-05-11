import React, { forwardRef } from 'react';
import 'antd/dist/antd.css';
import { Input } from 'antd';

const { TextArea } = Input;

const TextAreaBox = ({ onChange, label, className }, ref) => {
  return (
    <TextArea
      onChange={onChange}
      className={className}
      ref={ref}
      rows={4}
      placeholder={label}
    />
  );
};
export default forwardRef(TextAreaBox);
