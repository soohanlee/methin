import React from 'react';
import styled from 'styled-components';

import Table from 'compononets/Table/Table';
import { Button } from 'antd';

const Container = styled.div`
  background: #fff;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
`;

const ButtonContainer = styled.div`
  > button {
    &:last-child {
      margin-left: 1rem;
    }
  }
`;

const Title = styled.div`
  font-size: 2rem;
`;

const CheckOutStandingPayment = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>목록 (총 {data.length}개)</Title>
        <ButtonContainer>
          <Button>조회항목 설정</Button>
          <Button>엑셀다운</Button>
        </ButtonContainer>
      </TitleContainer>

      <Table data={data} columns={columns} />
    </Container>
  );
};

export default CheckOutStandingPayment;

const columns = [
  {
    title: '상품주문번호',
    dataIndex: 'productOrderNumber',
    render: (text) => <a href={'www.naver.com'}>{text}</a>,
  },
  {
    title: '주문번호',
    dataIndex: 'orderNumber',
  },
  {
    title: '주문일시',
    dataIndex: 'orderDate',
  },
  {
    title: '구매자명',
    dataIndex: 'buyerName',
  },
  {
    title: '구매자ID',
    dataIndex: 'buyerID',
  },
  {
    title: '판매채널',
    dataIndex: 'saleChanel',
  },
];

const data = [
  {
    key: '1',
    productOrderNumber: '판매완료',
    orderNumber: '',
    orderDate: '123124125',
    buyerName: '판매완료',
    buyerID: '소고기',
    saleChanel: '소고기 안심',
  },
  {
    key: '1',
    productOrderNumber: '판매완료',
    orderNumber: '',
    orderDate: '123124125',
    buyerName: '판매완료',
    buyerID: '소고기',
    saleChanel: '소고기 안심',
  },
];
