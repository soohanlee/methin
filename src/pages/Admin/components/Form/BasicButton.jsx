import React from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';

const BasicButton = ({ type, label, className, ref, onClick }) => {
  return (
    <Button type={type} ref={ref} onClick={onClick} className={className}>
      {label}
    </Button>
  );
};
export default BasicButton;
