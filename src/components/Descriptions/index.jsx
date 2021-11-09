import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Descriptions as OriginDescriptions } from 'antd';

// const list = [
//   { label: '상품정보', value: '나도 몰랑.' },
//   { label: '상품정보', value: '나도 몰랑.' },
//   { label: '상품정보', value: '나도 몰랑.' },
//   { label: '상품정보', value: '나도 몰랑.' },
//   { label: '상품정보', value: '나도 몰랑.' },
//   { label: '상품정보', value: '나도 몰랑.' },
// ];

const tableKey = {
  식픔위생법: '식품위생법에 따른 표시사항',
  '원재료/함량':
    '원재료명 및 함량 (농수산물의 원한지 표시에 관한 법률에 따른 원산지 표시 포함',
  영양성분: '영양성분 (식품위생법에 따른 표시사항)',
};

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

const Descriptions = ({ className, jsondata }) => {
  const [list, setList] = useState([]);
  const changeJsonData = () => {
    if (jsondata) {
      const data = Object.keys(JSON.parse(jsondata)).map((key) => {
        return {
          label: tableKey[key] || key, // tableKey에 정의되어있으면 불러와서 사용, 없으면 그대로 표시
          value: jsondata[key] || '해당없음', // null이면 "해당없음"으로 표시
        };
      });
      console.log('data', data);
      setList(data);
    }
  };

  useEffect(() => {
    changeJsonData();
  }, []);

  const renderItemList = () => {
    return (
      list &&
      list.map(({ label, value }, index) => {
        return (
          <CustomDesc.Item key={index} label={label}>
            {value}
          </CustomDesc.Item>
        );
      })
    );
  };

  return (
    <CustomDesc className={className} title="User Info" bordered column={1}>
      {renderItemList()}
    </CustomDesc>
  );
};

export default Descriptions;
