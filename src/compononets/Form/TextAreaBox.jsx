import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Input } from 'antd';

const { TextArea } = Input;

const TextAreaBox = ({ label }) => {
  return <TextArea rows={4} placeholder={label} />;
};
export default TextAreaBox;
