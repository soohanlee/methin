import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Input } from 'antd';

const BasicTextInputBox = ({ label }) => {
  return <Input placeholder={label} />;
};
export default BasicTextInputBox;
