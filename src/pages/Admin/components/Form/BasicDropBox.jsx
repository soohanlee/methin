import React, { forwardRef } from 'react';
import 'antd/dist/antd.css';
import { Menu, Dropdown, Button, message } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';

const BasicDropBox = ({ label, className }, ref) => {
  return (
    <>
      <Dropdown className={className} ref={ref}>
        <Button>
          {label} <DownOutlined />
        </Button>
      </Dropdown>
    </>
  );
};
export default forwardRef(BasicDropBox);
