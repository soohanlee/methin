import React from 'react';
import styled, { css } from 'styled-components';
import BoardHeader from 'pages/Admin/components/BoardHeader';
import Filter from './Filter';
import Table from './Table';
import AppstoreTwoTone from '@ant-design/icons/AppstoreTwoTone';
import DollarCircleTwoTone from '@ant-design/icons/DollarCircleTwoTone';

const Icon = css`
  font-size: 4rem;
  margin-right: 1rem;
`;

const AppstoreTwoToneIcon = styled(AppstoreTwoTone)`
  ${Icon}
`;
const DollarCircleTwoToneIcon = styled(DollarCircleTwoTone)`
  ${Icon}
`;

const Container = styled.div``;

// 배송 현황 관리
const DeliveryStatusManage = () => {
  return (
    <Container>
      <BoardHeader list={list} />
      <Filter />
      <Table />
    </Container>
  );
};

export default DeliveryStatusManage;

const list = [
  {
    title: '먼저 확인해주세요!',
    itemList: [
      {
        label: '배송중 문제건',
        value: 'todayDelay',
        img: <AppstoreTwoToneIcon />,
      },
      {
        label: '구매확정연장',
        value: 'preOrderDelay',
        img: <DollarCircleTwoToneIcon />,
      },
    ],
  },
  {
    title: '배송중, 배송완료 주문건을 확인해 주세요!',
    itemList: [
      { label: '배송중', value: 'todayStart', img: <AppstoreTwoToneIcon /> },
      { label: '배송완료', value: 'prePurchase', img: <AppstoreTwoToneIcon /> },
      {
        label: '구매확정요청',
        value: 'newOrder',
        img: <AppstoreTwoToneIcon />,
      },
    ],
  },
];