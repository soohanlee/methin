import React from 'react';
import 'antd/dist/antd.css';
import { Input } from 'antd';

const { TextArea } = Input;

const TextAreaBox = ({ label, className, ref }) => {
  return (
    <TextArea className={className} ref={ref} rows={4} placeholder={label} />
  );
};
export default TextAreaBox;
