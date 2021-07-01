import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import BoardHeader from 'pages/Admin/components/BoardHeader';
import Filter from './Filter';
import Table from './Table';
import AppstoreTwoTone from '@ant-design/icons/AppstoreTwoTone';
import { notification } from 'utils/notification';
import { getCanceledPaymentList } from 'apis/payment';

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
  const limite = 16;
  const [tableData, setTableData] = useState([]);
  const [tableCount, setTableCount] = useState(0);

  useEffect(() => {
    async function fetchAndSetUser() {
      await getApiDeliveryData();
    }
    fetchAndSetUser();
  }, []);

  const getApiDeliveryData = async () => {
    try {
      const result = await getCanceledPaymentList(0);
      const count = result.data.data.count;
      const maxOffset = Math.floor(result.data.data.count / limite) + 1;
      let customList = [];
      for (let i = 0; i < maxOffset; i++) {
        const _result = await getCanceledPaymentList(i);
        customList = customList.concat(_result.data.data.list);
      }

      setTableData(customList);
      setTableCount(customList.length);
    } catch (e) {
      notification.error('배송취소 정보를 가져오지 못했습니다.');
    }
  };

  return (
    <Container>
      <BoardHeader onClick={categoryTypeClick} list={list} />
      <Filter getApiDeliveryData={getApiDeliveryData} />
      <Table tableData={tableData} count={tableCount} />
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
