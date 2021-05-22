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

const Table = ({ data }) => {
  const setSelectRelease = () => {
    alert('선택건 해제하기');
  };

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
