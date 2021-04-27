import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import Table from 'pages/Admin/components/Table/Table';

const Container = styled.div`
  background: #fff;
`;

const TitleContainer = styled.div`
  color: 2rem;
  padding: 2rem;
  border-bottom: 1px solid #f0f0f0;
  margin-bottom: 1rem;
`;

const Title = styled.div`
  font-size: inherit;
`;

const ButtonContainer = styled.div`
  margin-bottom: 1rem;
`;

const BodyContainer = styled.div`
  padding: 2rem;
`;

const columns = [
  {
    title: '수정',
    dataIndex: 'edit',
  },
  {
    title: '번호',
    dataIndex: 'number',
  },
  {
    title: '분류',
    dataIndex: 'devide',
  },
  {
    title: 'state',
    dataIndex: 'address',
  },
  {
    title: '제목',
    dataIndex: 'title',
  },
];

const data = [
  {
    key: '1',
    name: 'edit',
    age: 32,
    address: 'number',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'devide',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'address',
  },
  {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'title',
  },
];

const List = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>상품 공지사항 목록 (총 {data.length}개)</Title>
      </TitleContainer>
      <BodyContainer>
        <ButtonContainer>
          <Button>선택삭제</Button>
        </ButtonContainer>
        <Table columns={columns} data={data} selectionType={'checkbox'} />
      </BodyContainer>
    </Container>
  );
};

export default List;
