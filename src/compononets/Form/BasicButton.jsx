import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Button } from 'antd';

const BasicButton = ({ type, label, className }) => {
  return (
    <Button type={type} className={className}>
      {label}
    </Button>
  );
};
export default BasicButton;
