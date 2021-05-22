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
    dataIndex: 'productOrderNumber',
  },
  {
    title: '주문날짜',
    dataIndex: 'orderNumber',
  },
  {
    title: '구매자명',
    dataIndex: 'orderDate',
  },
  {
    title: '구매자ID',
    dataIndex: 'buyerName',
  },
  {
    title: '수취인명',
    dataIndex: 'buyerID',
  },
  {
    title: '결제',
    dataIndex: 'saleChanel',
  },
  {
    title: '입금기한',
    dataIndex: 'saleChanel',
  },
  {
    title: '상품번호',
    dataIndex: 'saleChanel',
  },
  {
    title: '상품명',
    dataIndex: 'saleChanel',
  },
  {
    title: '옵션',
    dataIndex: 'saleChanel',
  },
  {
    title: '수량',
    dataIndex: 'saleChanel',
  },
  {
    title: '상품가격',
    dataIndex: 'saleChanel',
  },
  {
    title: '옵션가격',
    dataIndex: 'saleChanel',
  },
  {
    title: '총 주문금액',
    dataIndex: 'saleChanel',
  },
  {
    title: '배송비 형태',
    dataIndex: 'saleChanel',
  },
  {
    title: '배송비 묶음번호',
    dataIndex: 'saleChanel',
  },
  {
    title: '배송비 유형',
    dataIndex: 'saleChanel',
  },
  {
    title: '배송비 합계',
    dataIndex: 'saleChanel',
  },
  {
    title: '배송비 할인액',
    dataIndex: 'saleChanel',
  },
  {
    title: '결제수단',
    dataIndex: 'saleChanel',
  },
];

const data = [
  {
    key: '0',
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
