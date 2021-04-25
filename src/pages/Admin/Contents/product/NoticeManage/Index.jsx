import React from 'react';
import styled from 'styled-components';
import Filter from 'pages/Admin/Contents/product/NoticeManage/Filter';
import List from './List';

const Container = styled.div``;

const NoticeManage = () => {
  return (
    <Container>
      <Filter />
      <List />
    </Container>
  );
};

export default NoticeManage;
