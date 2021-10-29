import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BorderTitleContainer from 'components/container/BorderTitleContainer';
import CollapseList from './Collapse/CollapseList';
import { getClientPageNotice } from 'apis/notice';

const Container = styled.div``;
const ServiceCenter = () => {
  const [noticeList, setNoticeList] = useState([]);

  const getNoticeList = async () => {
    const result = await getClientPageNotice();
    setNoticeList(result.data.data.list);
  };

  useEffect(() => {
    getNoticeList();
  }, []);

  return (
    <Container>
      <BorderTitleContainer title="공지사항">
        <CollapseList description={'공지사항이 없습니다.'} list={noticeList} />
      </BorderTitleContainer>
    </Container>
  );
};

export default ServiceCenter;
