import styled from 'styled-components';
import Filter from 'pages/Admin/Contents/product/NoticeManage/Filter';
import List from './List';
import React, { useState, useEffect } from 'react';
import { notification } from 'utils/notification';
import { getNotice } from 'apis/notice';

const Container = styled.div``;

const NoticeManage = () => {
  const [tableData, setTableData] = useState([]);
  const limite = 16;
  useEffect(() => {
    updateTableData();
  }, []);

  const updateTableData = () => {
    async function fetchAndSetUser() {
      try {
        const result = await getNotice(0);
        const maxOffset = Math.floor(result.data.data.count / limite) + 1;
      let customList = [];
      for (let i = 0; i < maxOffset; i++) {
        const _result = await getProductList(i);
        customList = customList.concat(_result.data.data.list);
      }
        setTableData(customList);
      } catch (e) {
        notification.error('상품 정보를 가져오지 못했습니다.');
      }
    }
    fetchAndSetUser();
  };

  return (
    <Container>
      <Filter />
      <List tableData={tableData} updateTableData={updateTableData} />
    </Container>
  );
};

export default NoticeManage;
