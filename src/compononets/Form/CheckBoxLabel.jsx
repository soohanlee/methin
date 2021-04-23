import React, {forwardRef} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Checkbox } from 'antd';
import styled from 'styled-components';

// function onChange(e) {
//   console.log(`checked = ${e.target.checked}`);
// }

const CheckBoxLabel = ({className, label}, ref) => {
  return (
    <Checkbox  ref={ref} className={className}>
      {label}
    </Checkbox>
  );
};

export default forwardRef(CheckBoxLabel);
