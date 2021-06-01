import React from 'react';
import styled from 'styled-components';
import Filter from 'pages/Admin/Contents/product/NoticeManage/Filter';
import List from './List';

const Container = styled.div``;

const NoticeManage = () => {
  return (
    <Container>
      <Filter />
      <List data={data} />
    </Container>
  );
};

export default NoticeManage;
const data = [
  {
    key: '1',
    number: '1',
    classification: '분류',
    status: '그럭저럭',
    title: 'testTitle',
    registerDate: '2021',
    deleteDate: '2021',
  },
  {
    key: '2',
    number: '2',
    classification: '분류',
    status: '그럭저럭',
    title: 'testTitle',
    registerDate: '2021',
    deleteDate: '2021',
  },
  {
    key: '3',
    number: '3',
    classification: '분류',
    status: '그럭저럭',
    title: 'testTitle',
    registerDate: '2021',
    deleteDate: '2021',
  },
  {
    key: '4',
    number: '4',
    classification: '분류',
    status: '그럭저럭',
    title: 'testTitle',
    registerDate: '2021',
    deleteDate: '2021',
  },
];
