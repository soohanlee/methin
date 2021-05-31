import React, { forwardRef } from 'react';

import 'antd/dist/antd.css';
import { Button } from 'antd';

const BasicButton = ({ size, type, label, className, onClick }, ref) => {
  return (
    <Button
      size={size}
      type={type}
      ref={ref}
      onClick={onClick}
      className={className}
    >
      {label}
    </Button>
  );
};
export default forwardRef(BasicButton);
