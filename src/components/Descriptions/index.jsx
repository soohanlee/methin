import React from 'react';
import styled from 'styled-components';

import { Descriptions as OriginDescriptions } from 'antd';

const list = [
  { label: '상품정보', value: '나도 몰랑.' },
  { label: '상품정보', value: '나도 몰랑.' },
  { label: '상품정보', value: '나도 몰랑.' },
  { label: '상품정보', value: '나도 몰랑.' },
  { label: '상품정보', value: '나도 몰랑.' },
  { label: '상품정보', value: '나도 몰랑.' },
];

const CustomDesc = styled(OriginDescriptions)`
  width: 100%;
  .ant-descriptions-view {
    border-left: 0;
    border-right: 0;
    border-top: 0.2rem solid ${(props) => props.theme.TEXT_DISABLE};
    border-bottom: 0.2rem solid ${(props) => props.theme.TEXT_DISABLE};
  }
  .ant-descriptions-item-label {
    width: 25%;
    color: ${(props) => props.theme.TEXT_INFORMATION};
    background: ${(props) => props.theme.BACKGROUND};
  }
`;

const Descriptions = ({ className }) => {
  const renderItemList = () => {
    return list.map(({ label, value }, index) => {
      return (
        <CustomDesc.Item key={index} label={label}>
          {value}
        </CustomDesc.Item>
      );
    });
  };

  return (
    <CustomDesc className={className} title="User Info" bordered column={1}>
      {renderItemList()}
    </CustomDesc>
  );
};

export default Descriptions;
