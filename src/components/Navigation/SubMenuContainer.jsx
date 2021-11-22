import { Space } from 'antd';
import React from 'react';

const SubMenuContainer = ({ menuList }) => {
  const [hoverMenuId, setHoverMenuId] = React.useState(null);

  function findItemById(id) {
    return menuList.find((item) => {
      return item.id === id;
    });
  }

  function renderSubMenu() {
    console.log(menuList, 'id : ' + hoverMenuId);

    if (hoverMenuId) {
      const item = findItemById(hoverMenuId);
      if (item) {
        return (
          <SubMenuContainer
            key={hoverMenuId}
            menuList={item.children}
          ></SubMenuContainer>
        );
      }
    }
  }
  return (
    <Space direction="horizontal" align="start">
      <div>
        {menuList &&
          menuList.map((item) => {
            return (
              <div key={item.id} onMouseEnter={() => setHoverMenuId(item.id)}>
                {item.short_name}
              </div>
            );
          })}
      </div>

      {renderSubMenu()}
    </Space>
  );
};

export default SubMenuContainer;
