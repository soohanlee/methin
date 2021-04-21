import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Checkbox } from 'antd';
import styled from 'styled-components';

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

const CheckBoxLabel = ({ label, className }) => {
  return (
    <Checkbox className={className} onChange={onChange}>
      {label}
    </Checkbox>
  );
};

export default CheckBoxLabel;
