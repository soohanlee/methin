import React, { useState } from 'react';
import { Button, PageHeader, Space, Tree, Form, Typography, List } from 'antd';
import MenuListItem from './menuListItem';
import TableTransfer from './TableTransfer';

const TreeMockup = {
    title: '신상품'
}

const MenuMockup = [
    {
        id: 0,
        displayName: '모두보기'
    },
    {
        id: 11,
        displayName: '신상품'
    },
    {
        id: 222,
        displayName: '육류'
    }
]


function DisplayManagementPage(props) {
    const [selectedMenu, setSelectedMenu] = useState(-1)

    const renderMenuItems = () => {
        return MenuMockup.map((menu) => {
            return (
            <List.Item>
                <MenuListItem 
                displayName={menu.displayName}
                selected={selectedMenu === menu.id}
                onClick={()=>{setSelectedMenu(menu.id)}}>                    
                </MenuListItem>
            </List.Item>)
        })
    }
    return (
        <>
            <PageHeader title="진열 관리" subTitle="메뉴 별 진열 상품을 관리합니다." />
            <Space>
                <div style={{ width: 200, height: 500, border: '1px solid #f0f0f0', padding: 20, overflow: 'auto' }}>
                    <List>
                        {renderMenuItems()}
                    </List>
                </div>
                <TableTransfer>

                </TableTransfer>
            </Space>
        </>
    );
}

export default DisplayManagementPage;