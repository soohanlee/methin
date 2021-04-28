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
const OrderCancel = () => {
  return (
    <Container>
      <BoardHeader list={list} />
      <Filter />
      <Table />
    </Container>
  );
};

export default OrderCancel;

const list = [
  {
    title: '먼저 확인해주세요!',
    itemList: [
      {
        label: '취소지연 (자동 환불대기)',
        value: 'cancelDelay',
        img: <AppstoreTwoToneIcon />,
      },
    ],
  },
  {
    title: '취소진행중, 완료 주문건을 확인해 주세요!',
    itemList: [
      {
        label: '취소요청',
        value: 'cancelRequest',
        img: <AppstoreTwoToneIcon />,
      },
      {
        label: '취소완료(최근 3일)',
        value: 'cancelSuccess',
        img: <AppstoreTwoToneIcon />,
      },
    ],
  },
];
