import styled from 'styled-components';
import Filter from './Filter';
import List from './List';
import React, { useState, useEffect } from 'react';
import { notification } from 'utils/notification';
import { getNotice } from 'apis/notice';

const Container = styled.div``;

const NoticeManage = () => {
  const [tableDataState, setTableDataState] = useState([]);
  const limite = 16;
  useEffect(() => {
    async function fetchAndSetUser() {
      await getApiNoticeData();
    }
    fetchAndSetUser();
  }, []);

  const getApiNoticeData = async () => {
    try {
      const result = await getNotice(0);
      const maxOffset = Math.floor(result.data.data.count / limite) + 1;
      let customList = [];
      for (let i = 0; i < maxOffset; i++) {
        const _result = await getNotice(i);
        customList = customList.concat(_result.data.data.list);
      }
      setTableDataState(customList);
      console.log(customList)
    } catch (e) {
      notification.error('공지 정보를 가져오지 못했습니다.');
    }
  };

  return (
    <Container>
      <Filter getApiNoticeData={getApiNoticeData} />
      <List tableData={tableDataState} getApiNoticeData={getApiNoticeData} />
    </Container>
  );
};

export default NoticeManage;
