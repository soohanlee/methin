import React from 'react';
import 'antd/dist/antd.css';
import { Menu, Dropdown, Button, message } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';

const BasicDropBox = ({ label, className, ref }) => {
  function handleMenuClick(e) {
    message.info('Click on menu item.');
    console.log('click', e);
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" icon={<UserOutlined />}>
        1st menu item
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
        2nd menu item
      </Menu.Item>
      <Menu.Item key="3" icon={<UserOutlined />}>
        3rd menu item
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Dropdown className={className} ref={ref} overlay={menu}>
        <Button>
          {label} <DownOutlined />
        </Button>
      </Dropdown>
    </>
  );
};
export default BasicDropBox;
