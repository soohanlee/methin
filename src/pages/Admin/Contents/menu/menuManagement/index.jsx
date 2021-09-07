import React, { useState } from 'react';
import { Button, PageHeader, Space, List,Form,Input,Select, Typography } from 'antd';
import { DeleteFilled, DownOutlined, UpOutlined } from '@ant-design/icons';

function MenuManagementPage(props) {
    const [menu, setMenu] = useState([]);

    const addMenu = (values)=>{
        var newMenuList = [
            ...menu,
            {
                title:values.name,
                option:values.option
            }
        ]

        setMenu(newMenuList);
    }
    const removeMenu = (idx)=>{
        var removedMenu = [...menu];
        removedMenu.splice(idx,1);
        setMenu(removedMenu);
    }
    const moveMenu = (idx, direction) => {
        var orderedMenu = [...menu];
        var newPos = idx + direction;
        var element = orderedMenu.splice(idx,1);
        orderedMenu.splice(newPos, 0, element[0]);
        setMenu(orderedMenu);
    }
    const renderMenu = () => {
        return menu.map((item, idx)=>
            <List.Item>
                <Typography.Text style={{marginRight:5}}>{item.title} ({item.option})</Typography.Text>
                <Space>
                    <Button size='small' shape='circle' icon={<UpOutlined/>} onClick={()=>{moveMenu(idx,-1)}} disabled={idx===0}></Button>
                    <Button size='small' shape='circle' icon={<DownOutlined/>} onClick={()=>{moveMenu(idx,1)}} disabled={idx===(menu.length-1)}></Button>
                    <Button size='small' shape='circle' icon={<DeleteFilled/>} type='primary' danger onClick={()=>{removeMenu(idx)}}></Button>
                </Space>
            </List.Item>)
    }
    return (
        <div>
            <PageHeader title="메뉴 관리" subTitle="상품 판매 메뉴를 관리합니다." />
            <Space>
                <div  style={{height:500, border:'1px solid #f0f0f0', padding:20}}>
                    <Form name="menu" onFinish={addMenu}>
                        <Form.Item label="메뉴명" name="name" rules={[{required:true, message:'메뉴 이름은 필수입니다!'}, {max:20, message:'최대 길이는 20자입니다.'}]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item label="속성" name="option" rules={[{required:true, message:'메뉴 속성은 필수입니다.'}]}>
                            <Select>
                                <Select.Option value='product'>상품</Select.Option>
                                <Select.Option value='event'>이벤트</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item>
                            <Button type='primary' htmlType='submit'>추가</Button>
                        </Form.Item>
                    </Form>
                </div>
                <div style={{width : 500, height:500, border:'1px solid #f0f0f0', padding:20}}>
                    <List>
                        {menu.length !== 0 && renderMenu()}
                    </List>
                </div>
            </Space>

        </div>
    );
}

export default MenuManagementPage;