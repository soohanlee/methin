import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import BoardHeader from 'pages/Admin/components/BoardHeader';
import Filter from './Filter';
import Table from './Table';
import AppstoreTwoTone from '@ant-design/icons/AppstoreTwoTone';
import { notification } from 'utils/notification';
import { getPaidWithCanceled } from 'apis/payment';

const Icon = css`
  font-size: 4rem;
  margin-right: 1rem;
`;

const AppstoreTwoToneIcon = styled(AppstoreTwoTone)`
  ${Icon}
`;

const Container = styled.div``;

const categoryTypeClick = (value) => {
  alert(value);
};

// 배송 현황 관리
const OrderCancel = () => {
  const [table, setTable] = useState([]);
  const [tableCount, setTableCount] = useState(0);

  useEffect(() => {
    async function fetchAndSetUser() {
      try {
        const result = await getPaidWithCanceled();
        const customList = result.data.data.list.map((item) => {
          return { ...item, key: item.id };
        });
        // antd 에서 선택을 하려면 key라는 이름의 key값이 있어야하여 key를 주입

        setTable(customList);
        setTableCount(result.data.data.count);
      } catch (e) {
        notification.error('상품 정보를 가져오지 못했습니다.');
      }
    }
    fetchAndSetUser();
  }, []);

  return (
    <Container>
      <BoardHeader onClick={categoryTypeClick} list={list} />
      <Filter />
      <Table data={table} count={tableCount} />
    </Container>
  );
};

export default OrderCancel;

const list = [
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
