import * as React from 'react';
import { Menu } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
// import styled from "styled-components";
import { useHistory } from 'react-router-dom';
import {
  leftNavigationMenu,
  leftNavigationMenuTitle,
  adminLeftNavigationSize,
} from 'configs/constants';

const { SubMenu } = Menu;

const rootSubmenuKeys = [leftNavigationMenuTitle.manageProduct];

const LeftNavigation = () => {
  const history = useHistory();

  const [openKeys, setOpenKeys] = React.useState([
    leftNavigationMenuTitle.manageProduct,
  ]);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const handleMoveLink = (path) => {
    history.push(path);
  };

  const renderMenu = () => {
    return leftNavigationMenu.map(({ title, submenuList }) => {
      const subMenuItem = submenuList.map(({ title, path }) => {
        return (
          <Menu.Item key={path} onClick={() => handleMoveLink(`/admin${path}`)}>
            {title}
          </Menu.Item>
        );
      });
      return (
        <SubMenu key={title} icon={<MailOutlined />} title={title}>
          {subMenuItem}
        </SubMenu>
      );
    });
  };

  return (
    <Menu
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      style={{ width: adminLeftNavigationSize }}
    >
      {renderMenu()}
    </Menu>
  );
};

export default LeftNavigation;
