import React from 'react';
import styled from 'styled-components';

import { Descriptions, Badge } from 'antd';

const list = [
  { label: '상품정보', value: '나도 몰랑.' },
  { label: '상품정보', value: '나도 몰랑.' },
  { label: '상품정보', value: '나도 몰랑.' },
  { label: '상품정보', value: '나도 몰랑.' },
  { label: '상품정보', value: '나도 몰랑.' },
  { label: '상품정보', value: '나도 몰랑.' },
];

const Descriptions = () => {
  const renderItemList = () => {
    return list.map(({ label, value }, index) => {
      return (
        <Descriptions.Item key={index} label={label}>
          {value}
        </Descriptions.Item>
      );
    });
  };

  return (
    <Descriptions title="User Info" bordered column={2}>
      {renderItemList()}
    </Descriptions>
  );
};

export default Descriptions;
