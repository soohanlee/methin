import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Radio, Input } from 'antd';

import LabelContents from 'compononets/Label/LabelContents';
import BasicSelectBox from 'compononets/Form/BasicSelectBox';
import BasicDatePicker from 'compononets/Form/BasicDatePicker';
import Table from 'compononets/Table/Table';

const SelectBox = styled(BasicSelectBox)`
  width: 300px;
`;

const PeirodSelectBox = styled(SelectBox)`
  margin-bottom: 1rem;
`;

const SearhSelectBox = styled(SelectBox)`
  margin-right: 1rem;
`;

const Container = styled.div``;

const HeaderContainer = styled.div`
  background: #fff;
  padding: 3rem;
  margin-bottom: 2rem;
`;

const BodyContainer = styled.div`
  background: #fff;
  padding: 3rem;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemWrap = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const BodyHeaderContainer = styled.div`
  padding: 2rem;
`;

const Title = styled.div`
  font-size: 2rem;
`;

const OrderManage = () => {
  const [datePeriod, setDatePeriod] = useState('');

  const handleStartDateChange = (value) => {
    console.log(value);
  };

  const handleEndDateChange = (value) => {
    console.log(value);
  };

  const periodRef = useRef(null);

  return (
    <Container>
      <HeaderContainer>
        <LabelContents title="조회기간">
          <ItemContainer>
            <ItemWrap>
              <PeirodSelectBox list={peirodList} />
            </ItemWrap>
            <ItemWrap>
              <ButtonContainer>
                <Radio.Group
                  value={datePeriod}
                  onChange={(e) => setDatePeriod(e.target.value)}
                >
                  <Radio.Button value="today">오늘</Radio.Button>
                  <Radio.Button value="1week">1주일</Radio.Button>
                  <Radio.Button value="1month">1개월</Radio.Button>
                  <Radio.Button value="3month">3개월</Radio.Button>
                </Radio.Group>
              </ButtonContainer>
            </ItemWrap>
            <ItemWrap>
              <BasicDatePicker onChange={handleStartDateChange} />
              {`　~　`}
              <BasicDatePicker onChange={handleEndDateChange} />
            </ItemWrap>
          </ItemContainer>
        </LabelContents>
        <LabelContents title="조회기간">
          <ItemWrap>
            <SearhSelectBox list={detailList} />
            <Input ref={periodRef} />
          </ItemWrap>
        </LabelContents>
      </HeaderContainer>

      <BodyContainer>
        <BodyHeaderContainer>
          <Title>목록 (총{data.length}개)</Title>
        </BodyHeaderContainer>
        <Table selectionType="checkbox" data={data} columns={columns} />
      </BodyContainer>
    </Container>
  );
};

export default OrderManage;

const peirodList = [
  { label: '결제일', value: 'pament' },
  { label: '발주 확인일', value: 'orderConfirm' },
  { label: '발송처리일', value: 'orderProcess' },
];

const detailList = [
  { label: '전체', value: 'all' },
  { label: '수취인명', value: 'nameOfRecipient' },
  { label: '구매자명', value: 'buyerName' },
  { label: '구매자연락처', value: 'buyerContact' },
  { label: '구매자ID', value: 'buyerID' },
  { label: '주문번호', value: 'orderNumber' },
  { label: '상품주문번호', value: 'productOrderNumber' },
  { label: '상품번호', value: 'productNumber' },
  { label: '송장번호', value: 'invoiceNumber' },
];

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
    title: '주문상태',
    dataIndex: 'orderState',
  },
  {
    title: '클레임상태',
    dataIndex: 'claimState',
  },
  {
    title: '상품번호',
    dataIndex: 'productNumber',
  },
];

const data = [
  {
    key: '1',
    productOrderNumber: '판매완료',
    orderNumber: '',
    orderDate: '123124125',
    orderState: '판매완료',
    claimState: '소고기',
    productNumber: '소고기 안심',
  },
  {
    key: '2',
    productOrderNumber: '판매완료',
    orderNumber: '',
    orderDate: '123124125',
    orderState: '판매완료',
    claimState: '소고기',
    productNumber: '소고기 안심',
  },
];
