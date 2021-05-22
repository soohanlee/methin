import React from 'react';
import styled from 'styled-components';
import { Button as OriginButton } from 'antd';
import OriginTable from 'pages/Admin/components/Table/Table';

const Container = styled.div`
  background: #fff;
  padding: 3rem;
  margin-top: 1rem;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2rem;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled(OriginButton)`
  margin-right: 0.5rem;
`;

const setSelectRelease = () => {
  alert('선택건 해제하기');
};

const setConfirmationCancel = () => {
  alert('선택건 해제하기');
};

const Table = () => {
  return (
    <Container>
      <HeaderContainer>
        <ButtonContainer>
          <Button onClick={setSelectRelease}>선택건 해제하기</Button>
        </ButtonContainer>
      </HeaderContainer>

      <OriginTable data={data} columns={columns} selectionType="checkbox" />
    </Container>
  );
};

export default Table;

const columns = [
  {
    title: '구매자ID',
    dataIndex: 'buyerID',
  },
  {
    title: '상품주문번호',
    dataIndex: 'productOrderNumber',
  },
  {
    title: '등록일자',
    dataIndex: 'registerDate',
  },
  {
    title: '등록사유',
    dataIndex: 'registerWhy',
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
  },
];
