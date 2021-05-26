import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import BoardHeader from 'pages/Admin/components/BoardHeader';
import Filter from './Filter';
import Table from './Table';
import AppstoreTwoTone from '@ant-design/icons/AppstoreTwoTone';
import { notification } from 'utils/notification';
import { getRefundedPaymentList } from 'apis/payment';

const Icon = css`
  font-size: 4rem;
  margin-right: 1rem;
`;

const AppstoreTwoToneIcon = styled(AppstoreTwoTone)`
  ${Icon}
`;

const Container = styled.div``;

// 배송 현황 관리
const OrderReturn = () => {
  const [table, setTable] = useState([]);
  const [tableCount, setTableCount] = useState(0);

  useEffect(() => {
    async function fetchAndSetUser() {
      try {
        const result = await getRefundedPaymentList();
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

  const categoryTypeClick = (value) => {
    alert(value);
  };

  return (
    <Container>
      <BoardHeader onClick={categoryTypeClick} list={list} />
      <Filter />
      <Table data={table} count={tableCount} />
    </Container>
  );
};

export default OrderReturn;

const list = [
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
