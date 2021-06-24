import styled from 'styled-components';
import Filter from 'pages/Admin/Contents/product/NoticeManage/Filter';
import List from './List';
import React, { useState, useEffect } from 'react';
import { notification } from 'utils/notification';
import { getNotice } from 'apis/notice';

const Container = styled.div``;

const NoticeManage = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    updateTableData();
  }, []);

  const updateTableData = () => {
    async function fetchAndSetUser() {
      try {
        const result = await getNotice();
        const customList = result.data.data.list.map((item) => {
          return { ...item, key: item.id };
        });
        // antd 에서 선택을 하려면 key라는 이름의 key값이 있어야하여 key를 주입

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
