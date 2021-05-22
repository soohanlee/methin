import React from 'react';
import styled, { css } from 'styled-components';
import BoardHeader from 'pages/Admin/components/BoardHeader';
import Filter from './Filter';
import Table from './Table';
import AppstoreTwoTone from '@ant-design/icons/AppstoreTwoTone';

const Icon = css`
  font-size: 4rem;
  margin-right: 1rem;
`;

const AppstoreTwoToneIcon = styled(AppstoreTwoTone)`
  ${Icon}
`;

const Container = styled.div``;

// 배송 현황 관리
const DeliveryStatusManage = () => {
  const categoryBtn = (e) => {
    console.log(e);
    alert(e);
  };

  return (
    <Container>
      <BoardHeader onClick={categoryBtn} list={list} />
      <Filter />
      <Table data={data} />
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
    ],
  },
  {
    title: '배송중, 배송완료 주문건을 확인해 주세요!',
    itemList: [
      { label: '배송중', value: 'todayStart', img: <AppstoreTwoToneIcon /> },
      { label: '배송완료', value: 'prePurchase', img: <AppstoreTwoToneIcon /> },
    ],
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
  },
];
