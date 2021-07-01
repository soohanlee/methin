import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import BoardHeader from 'pages/Admin/components/BoardHeader';
import Filter from './Filter';
import Table from './Table';
import AppstoreTwoTone from '@ant-design/icons/AppstoreTwoTone';
import { notification } from 'utils/notification';
import { getShipConfirmedList } from 'apis/payment';

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
  const limite = 16;
  const [tableData, setTableData] = useState([]);
  const [tableCount, setTableCount] = useState(0);

  useEffect(() => {
    async function fetchAndSetUser() {
      await getApiDeliveryStatusData();
    }
    fetchAndSetUser();
  }, []);

  const getApiDeliveryStatusData = async () => {
    try {
      const result = await getShipConfirmedList(0);
      const count = result.data.data.count;
      const maxOffset = Math.floor(result.data.data.count / limite) + 1;
      let customList = [];
      for (let i = 0; i < maxOffset; i++) {
        const _result = await getShipConfirmedList(i);
        customList = customList.concat(_result.data.data.list);
      }
      setTableData(customList);
      setTableCount(customList.length);
    } catch (e) {
      notification.error('배송현황 정보를 가져오지 못했습니다.');
    }
  };

  const categoryBtn = (e) => {
    console.log(e);
    alert(e);
  };

  return (
    <Container>
      <BoardHeader onClick={categoryBtn} list={list} />
      <Filter getApiDeliveryStatusData={getApiDeliveryStatusData} />
      <Table tableData={tableData} count={tableCount} />
    </Container>
  );
};

export default DeliveryStatusManage;

const list = [
  {
    title: '배송중, 배송완료 주문건을 확인해 주세요!',
    itemList: [
      { label: '배송중', value: 'todayStart', img: <AppstoreTwoToneIcon /> },
      { label: '배송완료', value: 'prePurchase', img: <AppstoreTwoToneIcon /> },
    ],
  },
];
