import { Space } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const MenuContainer = styled.div`
  background: white;
`;

const CustomSpace = styled(Space)`
  .ant-space-item {
    margin-right: 0 !important;
    .ant-space-item {
      div {
        background: #eee;
        .ant-space-item {
          div {
            background: #ddd;
          }
        }
      }
    }
  }
`;

const MenuItem = styled.div`
  min-width: 10rem;
  width: 15rem;
  padding: 1rem;
  line-height: 1rem;
`;

const SubMenuContainer = ({ menuList }) => {
  const [hoverMenuId, setHoverMenuId] = React.useState(null);
  const history = useHistory();
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
        return <SubMenuContainer key={hoverMenuId} menuList={item.children} />;
      }
    }
  }

  const handleRouteMenu = (id) => {
    history.push(`/${id}`);
    setHoverMenuId(null);
  };

  return (
    <CustomSpace direction="horizontal" align="start">
      <MenuContainer>
        {menuList &&
          menuList.map((item) => {
            return (
              <MenuItem
                key={item.id}
                onMouseEnter={() => setHoverMenuId(item.id)}
                onClick={() => handleRouteMenu(item.id)}
              >
                {item.short_name}
              </MenuItem>
            );
          })}
      </MenuContainer>

      {renderSubMenu()}
    </CustomSpace>
  );
};

export default SubMenuContainer;
