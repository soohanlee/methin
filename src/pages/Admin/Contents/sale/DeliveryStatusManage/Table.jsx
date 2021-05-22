import React, { useState } from 'react';
import styled from 'styled-components';
import { Button as OriginButton } from 'antd';

import LabelContents from 'pages/Admin/components/Label/LabelContents';
import OriginTable from 'pages/Admin/components/Table/Table';
import QueryItemModal from 'pages/Admin/Contents/sale/CheckOutStandingPayment/QueryItemModal';

const Container = styled.div`
  background: #fff;
  padding: 3rem;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2rem;
`;

const Title = styled.div``;

const ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled(OriginButton)`
  margin-right: 0.5rem;
`;

const ButtomContainer = styled.div`
  margin-top: 4rem;
`;

const Table = ({ data }) => {
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

      <HeaderContainer>
        <Title>목록(총 0개)</Title>
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
      </HeaderContainer>

      <OriginTable data={data} columns={columns} selectionType="checkbox" />

      <ButtomContainer>
        <LabelContents title="구매확정 관리">
          <Button>구매확정 요청</Button>
          <Button>구매확정 연장</Button>
        </LabelContents>

        <LabelContents title="교환/반품">
          <Button>판매자 직접 반품</Button>
          <Button>판매자 직접 교환</Button>
        </LabelContents>

        <LabelContents title="정보 수정">
          <Button>송장수정</Button>
        </LabelContents>
      </ButtomContainer>
    </Container>
  );
};

export default Table;

const columns = [
  {
    title: '주문번호',
    dataIndex: 'orderNumber',
    render: (Text) => <a href="https://www.naver.com">{Text}</a>,
  },
  {
    title: '발송처리일',
    dataIndex: 'deliveryDate',
  },
  {
    title: '주문상태',
    dataIndex: 'orderStatus',
  },
  {
    title: '배송방법',
    dataIndex: 'deliveryForm',
  },
  {
    title: '택배사',
    dataIndex: 'Courier',
  },
  {
    title: '송장번호',
    dataIndex: 'invoiceNumber',
  },
  {
    title: '배송추적',
    dataIndex: 'trackingShipping',
  },
  {
    title: '발송일',
    dataIndex: 'shipmentDate',
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
    title: '상품번호',
    dataIndex: 'productNumber',
    render: (Text) => <a href="https://www.naver.com">{Text}</a>,
  },
  {
    title: '상품명',
    dataIndex: 'productName',
  },
  {
    title: '옵션정보',
    dataIndex: 'optionInfo',
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
    title: '결제일',
    dataIndex: 'paymentDate',
  },
  {
    title: '배송비 묶음번호',
    dataIndex: 'deliveryGroupNumber',
  },
  {
    title: '배송비 형태',
    dataIndex: 'deliveryForm',
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
    title: '제주/도서 추가배송비',
    dataIndex: 'deliveryPriceAdd',
  },
  {
    title: '배송비 할인액',
    dataIndex: 'deliveryPriceDiscount',
  },
  {
    title: '수취인 연락처',
    dataIndex: 'recipientPhone',
  },
  {
    title: '배송지',
    dataIndex: 'address',
  },
  {
    title: '구매자 연락처',
    dataIndex: 'buyerPhone',
  },
  {
    title: '우편번호',
    dataIndex: 'postalCode',
  },
];
