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
      <BorderTitleContainer
        title="공지사항"
        titleComponent={<div>전체 필터</div>}
      >
        <CollapseList description={'공지사항이 없습니다.'} list={noticeList} />
      </BorderTitleContainer>
    </Container>
  );
};

export default ServiceCenter;

const list = [
  {
    productName: '맛있는 상품',
    date: '2029.20.20',
    desc: '존나 맛잇은 상품',
  },
];
