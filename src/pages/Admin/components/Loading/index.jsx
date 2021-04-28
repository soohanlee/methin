import React from 'react';
import styled from 'styled-components';

import { Spin, Space as OriginSpace } from 'antd';

const Space = styled(OriginSpace)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Loading = ({ className }) => {
  return (
    <Space size="middle" className={className}>
      <Spin tip="Loading..." />
    </Space>
  );
};

export default Loading;
