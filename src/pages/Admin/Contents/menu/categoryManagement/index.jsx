import React, { useEffect, useState, useRef, useMemo } from 'react';
import { Button, PageHeader, Space, List, Form, Input, Select, Typography, Tree } from 'antd';
import { DeleteFilled, EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { getCategoryAsTreeArray } from 'apis/category';
import MenuItem from './menuItem';
import { makeTreeToLinear, compareMenuItem } from './categoryController.js';

function CategoryManagementPage(props) {
    const [menuList, setMenuList] = useState([]);
    const [expandedKey, setExpandedKey] = useState(['test']);

    let initData = useRef([]); //for compare changing of menu
    let initLinearData = useMemo(() => { return makeTreeToLinear(initData.current) }, [initData.current]);

    const [treeItems, setTreeItems] = useState([]);

    useEffect(() => {
        const currentData = [...menuList];
        setTreeDataloop(currentData)
        setTreeItems(currentData);

    }, [menuList]);

    useEffect(async () => {
        let menu = await getCategoryAsTreeArray();
        console.log(menu);

        initData.current = menu;
        setMenuList(menu);
    }, []);


    function checkDiff(target) {
        var l = makeTreeToLinear(target);
        var r = initLinearData;

        var comp = [];

        var isChanged = false;
        if (l && r) {
            var longer = l.length > r.length ? l : r;
            for (var i = 0; i < longer.length; i++) {
                comp[i] = compareMenuItem(l[i], r[i]);
                if (comp[i] === false) isChanged = true;
            }

        }
        return { isChanged, diffDetails: comp };
    }



    function setTreeDataloop(root) {
        root.forEach(item => {
            if (item.children) setTreeDataloop(item.children);
            setMenuItemTitle(item);
        });
    }


    function setMenuItemTitle(item) {
        item.title = (
            <MenuItem
                id={item.key}
                title={item.name}>
            </MenuItem>);
    }

    const findObjectById = (root, id) => {
        let result = null;
        for (let i = 0; i < root.length; i++) {
            if (root[i].key === id) {
                result = root[i];
            }

            const obj = findObjectById(root[i].children, id);
            if (obj !== null) result = obj;
        }
        return result;
    }

    const addMenu = (values) => {
        const item = {
            key: values.name + menuList.length, //temporary key;
            name: values.name,
            option: values.option,
            children: []
        };

        var newMenuList = [
            ...menuList,
            item
        ]

        setMenuList(newMenuList);
    }

    const onDrop = info => {
        const dropKey = info.node.key;
        const dragKey = info.dragNode.key;
        const dropPos = info.node.pos.split('-');
        if (dropPos.length > 2) {
            alert('하위 메뉴는 최대 2개까지만 가능합니다.');
            return;
        }
        const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);

        const loop = (data, key, callback) => {
            for (let i = 0; i < data.length; i++) {
                if (data[i].key === key) {
                    return callback(data[i], i, data);
                }
                if (data[i].children) {
                    loop(data[i].children, key, callback);
                }
            }
        };
        const data = [...menuList];

        // Find dragObject
        let dragObj;
        loop(data, dragKey, (item, index, arr) => {
            arr.splice(index, 1);
            dragObj = item;
        });

        if (!info.dropToGap) {
            loop(data, dropKey, item => {
                item.children = item.children || [];
                item.children.unshift(dragObj);
            });
        } else if (
            (info.node.props.children || []).length > 0 &&
            info.node.props.expanded && // Is expanded
            dropPosition === 1 // On the bottom gap
        ) {
            loop(data, dropKey, item => {
                item.children = item.children || [];
                item.children.unshift(dragObj);
            });
        } else {
            let ar;
            let i;
            loop(data, dropKey, (item, index, arr) => {
                ar = arr;
                i = index;
            });
            if (dropPosition === -1) {
                ar.splice(i, 0, dragObj);
            } else {
                ar.splice(i + 1, 0, dragObj);
            }
        }
        setMenuList(data);
    }

    return (
        <div>
            <PageHeader title="카테고리 관리" subTitle="상품 카테고리를 관리합니다." />
            <Space direction='vertical' align='end'>
                <Space>
                    <div style={{ width: 500, height: 500, border: '1px solid #f0f0f0', padding: 20, overflow: 'auto' }}>
                        <Tree
                            draggable
                            blockNode
                            treeData={treeItems}
                            onDrop={onDrop}
                            defaultExpandedKeys={expandedKey}>
                        </Tree>
                    </div>
                </Space>
                <Space>
                    <Form name="menu" onFinish={addMenu} layout='inline'>
                        <Form.Item label="카테고리 명" name="name" rules={[{ required: true, message: '메뉴 이름은 필수입니다!' }, { max: 20, message: '최대 길이는 20자입니다.' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item>
                            <Button type='primary' htmlType='submit'>추가</Button>
                        </Form.Item>
                    </Form>
                </Space>

                {
                    checkDiff(menuList).isChanged === true && (
                        <Space>
                            <Button type='primary' onClick={()=>{}}> 저장 </Button>
                            <Button type='ghost'> 취소 </Button>
                        </Space>
                    )

                }
            </Space>

        </div>
    );
}

export default CategoryManagementPage;