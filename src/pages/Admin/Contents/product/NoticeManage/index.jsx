import styled from 'styled-components';
import Filter from './Filter';
import List from './List';
import React, { useState, useEffect } from 'react';
import { notification } from 'utils/notification';
import { getNotice } from 'apis/notice';
import moment, { defaultFormat } from 'moment';
import { DateFormat } from 'configs/config';

const Container = styled.div``;

const NoticeManage = () => {
  const [tableDataState, setTableDataState] = useState([]);
  const [tableCountState, setTableCountState] = useState(0);
  const [loading, setLoading] = useState(false);
  const [productOffset, setProductOffset] = useState(0);
  const limit = 16;

  useEffect(() => {
    async function fetchAndSetUser() {
      await getApiNoticeData();
    }
    fetchAndSetUser();
  }, []);

  const getApiNoticeData = async (offset = 0) => {
    try {
      const result = await getNotice(offset);
      const list = result.data.data.list;
      const count = result.data.data.list.length;

      const newResult = list.map((item) => {
        let { preview_status, created_at } = item;
        return {
          ...item,
          preview_status: preview_status === 0 ? 'NO' : 'Yes',
          created_at: moment(created_at).format(DateFormat.Default),
        };
      });

      setTableDataState(newResult);
      setTableCountState(count);
      console.log(newResult);
      notification.success('공지 정보를 가져왔습니다.');
    } catch (e) {
      notification.error('공지 정보를 가져오지 못했습니다.');
    }
  };

  const handleTableChange = (pagination, filter, sort) => {
    setProductOffset(pagination.current - 1);
  };

  return (
    <Container>
      <Filter getApiNoticeData={getApiNoticeData} />
      <List
        count={tableCountState}
        tableData={tableDataState}
        limit={limit}
        loading={loading}
        handleTableChange={handleTableChange}
        getApiNoticeData={getApiNoticeData}
      />
    </Container>
  );
};

export default NoticeManage;
