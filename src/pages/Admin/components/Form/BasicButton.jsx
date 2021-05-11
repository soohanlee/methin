import React, { forwardRef } from 'react';

import 'antd/dist/antd.css';
import { Button } from 'antd';

const BasicButton = ({ type, label, className, onClick }, ref) => {
  return (
    <Button type={type} ref={ref} onClick={onClick} className={className}>
      {label}
    </Button>
  );
};
export default forwardRef(BasicButton);
