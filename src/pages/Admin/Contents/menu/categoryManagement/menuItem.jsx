import { DeleteFilled, EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import {  Space, Typography  } from 'antd';

function menuItem({id, title}) {

    return (
            <Space >
                <Typography.Text>
                    {title}
                </Typography.Text>
                <Space align='end'>
                    <DeleteFilled style={{color:'red'}}></DeleteFilled>
                </Space>
            </Space>
    );
}

export default menuItem;