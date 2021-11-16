import { DeleteFilled, EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import {  Space, Typography  } from 'antd';

function menuItem({id, title, isDisplay, setVisibility}) {

    return (
            <Space >
                <Typography.Text>
                    {title}
                </Typography.Text>
                <Space align='end'>
                    {isDisplay?
                        <EyeOutlined style={{color:'green'}} onClick={()=>{setVisibility(id, false)}}></EyeOutlined>:
                        <EyeInvisibleOutlined style={{color:'gray'}} onClick={()=>{setVisibility(id, true)}}></EyeInvisibleOutlined>}
                    <DeleteFilled style={{color:'red'}}></DeleteFilled>
                </Space>
            </Space>
    );
}

export default menuItem;