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

const Table = ({ data, count }) => {
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
        <Title>목록(총 {count}개)</Title>
        <ButtonContainer>
          <Button>엑셀다운</Button>
        </ButtonContainer>
      </HeaderContainer>

      <OriginTable
        scroll={{ x: '300vw', y: 500 }}
        data={data}
        columns={columns}
        selectionType="checkbox"
      />

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
    dataIndex: 'id',
    render: (Text) => <a href="https://www.naver.com">{Text}</a>,
  },
  {
    title: '발송처리일',
    dataIndex: 'ship_confirmed_at',
  },
  {
    title: '주문상태',
    dataIndex: 'status',
  },
  {
    title: '배송방법',
    dataIndex: 'ship_type',
  },
  {
    title: '택배사',
    dataIndex: 'ship_company_name',
  },
  {
    title: '송장번호',
    dataIndex: 'ship_number',
  },
  {
    title: '발송일',
    dataIndex: 'ship_confirmed_at',
  },
  {
    title: '구매자명',
    dataIndex: 'buyer_name',
  },
  {
    title: '구매자ID',
    dataIndex: 'buyer_id',
  },
  {
    title: '수취인명',
    dataIndex: 'recipient_name',
  },
  {
    title: '상품번호',
    dataIndex: 'product_id',
    render: (Text) => <a href="https://www.naver.com">{Text}</a>,
  },
  {
    title: '상품명',
    dataIndex: 'product_name',
  },
  {
    title: '옵션정보',
    dataIndex: 'option_name',
  },
  {
    title: '수량',
    dataIndex: 'count',
  },
  {
    title: '상품가격',
    dataIndex: 'price',
  },
  {
    title: '옵션가격',
    dataIndex: 'option_add_price',
  },
  {
    title: '총 주문금액',
    dataIndex: 'total_price',
  },
  {
    title: '결제일',
    dataIndex: 'paid_at',
  },
  {
    title: '배송비 형태',
    dataIndex: 'ship_pay_type',
  },
  {
    title: '배송비 유형',
    dataIndex: 'ship_category',
  },
  {
    title: '배송비 합계',
    dataIndex: 'total_ship_amount',
  },
  {
    title: '제주/도서 추가배송비',
    dataIndex: 'ship_add_amount',
  },
  {
    title: '수취인 연락처',
    dataIndex: 'recipient_phone',
  },
  {
    title: '배송지',
    dataIndex: 'ship_address_main',
  },
  {
    title: '구매자 연락처',
    dataIndex: 'buyer_phone',
  },
  {
    title: '우편번호',
    dataIndex: 'ship_zip_code',
  },
];
