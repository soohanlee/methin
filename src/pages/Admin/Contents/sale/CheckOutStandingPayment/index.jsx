import { useState } from 'react';
import styled from 'styled-components';

import Table from 'pages/Admin/components/Table/Table';
import { Button } from 'antd';
import QueryItemModal from 'pages/Admin/Contents/sale/CheckOutStandingPayment/QueryItemModal';

// 미결제 확인

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
  const [QueryItemVisible, setQueryItemVisible] = useState(false);

  return (
    <Container>
      <QueryItemModal
        visible={QueryItemVisible}
        setVisible={() => {
          setQueryItemVisible(false);
        }}
        onClick={() => {
          setQueryItemVisible(false);
        }}
        title="조회항목 설정(미결제확인)"
      />
      <TitleContainer>
        <Title>목록 (총 {data.length}개)</Title>
        <ButtonContainer>
          <Button
            onClick={() => {
              setQueryItemVisible(true);
            }}
          >
            조회항목 설정
          </Button>
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
    title: '주문번호',
    dataIndex: 'orderNumber',
    render: (Text) => <a href="https://www.naver.com">{Text}</a>,
  },
  {
    title: '주문날짜',
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
    title: '수취인명',
    dataIndex: 'recipientName',
  },
  {
    title: '결제',
    dataIndex: 'payment',
  },
  {
    title: '입금기한',
    dataIndex: 'depositDue',
  },
  {
    title: '상품번호',
    dataIndex: 'productNumber',
    render: (Text) => <a href="https://www.naver.com">{Text}</a>,
  },
  {
    title: '상품명',
    dataIndex: 'productName',
  },
  {
    title: '옵션',
    dataIndex: 'option',
  },
  {
    title: '수량',
    dataIndex: 'count',
  },
  {
    title: '상품가격',
    dataIndex: 'productPrice',
  },
  {
    title: '옵션가격',
    dataIndex: 'optionPrice',
  },
  {
    title: '총 주문금액',
    dataIndex: 'allOrderPrice',
  },
  {
    title: '배송비 형태',
    dataIndex: 'deliveryForm',
  },
  {
    title: '배송비 묶음번호',
    dataIndex: 'deliveryGroupNumber',
  },
  {
    title: '배송비 유형',
    dataIndex: 'deliveryType',
  },
  {
    title: '배송비 합계',
    dataIndex: 'deliveryPriceSum',
  },
  {
    title: '배송비 할인액',
    dataIndex: 'deliveryPriceDiscount',
  },
  {
    title: '결제수단',
    dataIndex: 'PaymentMethod',
  },
];

const data = [
  {
    key: '0',
    orderNumber: '0',
    orderDate: '2021',
    buyerName: '범희',
    buyerID: '범희',
    recipientName: '범희',
    payment: '카드',
    depositDue: '범희',
    productNumber: '범희',
    productName: '범희',
    option: '범희',
    count: '범희',
    productPrice: '범희',
    optionPrice: '범희',
    allOrderPrice: '범희',
    deliveryForm: '범희',
    deliveryGroupNumber: '범희',
    deliveryType: '범희',
    deliveryPriceSum: '10000',
    deliveryPriceDiscount: '범희',
    PaymentMethod: '범희',
  },
  {
    key: '1',
    orderNumber: '1',
    orderDate: '2021',
    buyerName: '범희',
    buyerID: '범희',
    recipientName: '범희',
    payment: '카드',
    depositDue: '범희',
    productNumber: '범희',
    productName: '범희',
    option: '범희',
    count: '범희',
    productPrice: '범희',
    optionPrice: '범희',
    allOrderPrice: '범희',
    deliveryForm: '범희',
    deliveryGroupNumber: '범희',
    deliveryType: '범희',
    deliveryPriceSum: '10000',
    deliveryPriceDiscount: '범희',
    PaymentMethod: '범희',
  },
];
