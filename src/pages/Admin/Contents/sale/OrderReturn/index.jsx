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
const OrderReturn = () => {
  return (
    <Container>
      <BoardHeader list={list} />
      <Filter />
      <Table />
    </Container>
  );
};

export default OrderReturn;

const list = [
  {
    title: '먼저 확인해주세요!',
    itemList: [
      {
        label: '반품지연',
        value: 'returnDelay',
        img: <AppstoreTwoToneIcon />,
      },
      {
        label: '자동 환불대기',
        value: 'autoReturnWaiting',
        img: <AppstoreTwoToneIcon />,
      },
      {
        label: '환불보류',
        value: 'returnHold',
        img: <AppstoreTwoToneIcon />,
      },
    ],
  },
  {
    title: '반품처리를 진행해주세요!',
    itemList: [
      {
        label: '반품요청',
        value: 'returnRequest',
        img: <AppstoreTwoToneIcon />,
      },
      {
        label: '반품수거중',
        value: 'returnCollecting',
        img: <AppstoreTwoToneIcon />,
      },
      {
        label: '반품수거완료',
        value: 'returnCollectSuccess',
        img: <AppstoreTwoToneIcon />,
      },
      {
        label: '반품완료(최근3일)',
        value: 'returnSuccess',
        img: <AppstoreTwoToneIcon />,
      },
    ],
  },
];
