import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Button, Radio, Input as OriginInput } from 'antd';

import LabelContents from 'pages/Admin/components/Label/LabelContents';
import BasicSelectBox from 'pages/Admin/components/Form/BasicSelectBox';
import BasicDatePicker from 'pages/Admin/components/Form/BasicDatePicker';

const SelectBox = styled(BasicSelectBox)`
  margin-right: 1rem;
`;

const Container = styled.div`
  background: #fff;
  padding: 3rem;
  margin-bottom: 2rem;
`;

const RadioGroupContainer = styled.div`
  margin-right: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
`;

const Input = styled(OriginInput)`
  width: 200px;
`;

const Filter = ({ getApiDeliveryData }) => {
  const [datePeriod, setDatePeriod] = useState('');

  const detailRef = useRef(null);

  const handleSearchPeriodChange = (value) => {
    console.log(value);
  };

  const handledetailChange = (value) => {
    console.log(value);
  };

  const handleOrderStateChange = (value) => {
    console.log(value);
  };

  const handleStartDateChange = (value) => {
    console.log(value);
  };

  const handleEndDateChange = (value) => {
    console.log(value);
  };

  const handleSearchOnClick = () => {
    getApiDeliveryData();
  };

  return (
    <Container>
      <LabelContents title="조회기간">
        <SelectBox
          list={searchPeriodList}
          onChange={handleSearchPeriodChange}
        />
        <RadioGroupContainer>
          <Radio.Group
            value={datePeriod}
            onChange={(e) => setDatePeriod(e.target.value)}
          >
            <Radio.Button value="today">오늘</Radio.Button>
            <Radio.Button value="1week">1주일</Radio.Button>
            <Radio.Button value="1month">1개월</Radio.Button>
            <Radio.Button value="3month">3개월</Radio.Button>
          </Radio.Group>
        </RadioGroupContainer>

        <BasicDatePicker onChange={handleStartDateChange} />
        {`　~　`}
        <BasicDatePicker onChange={handleEndDateChange} />
      </LabelContents>

      <LabelContents title="상세조건">
        <SelectBox list={detailList} onChange={handledetailChange} />
        <Input ref={detailRef} />
      </LabelContents>

      <LabelContents title="처리상태">
        <SelectBox list={orderStateList} onChange={handleOrderStateChange} />
      </LabelContents>

      <ButtonContainer>
        <Button onClick={handleSearchOnClick}>검색</Button>
      </ButtonContainer>
    </Container>
  );
};

export default Filter;

const searchPeriodList = [
  { label: '클레임 요청일', value: 'cancelDate' },
  { label: '결제일', value: 'settlementDay' },
];

const detailList = [
  { label: '전체', value: 'all' },
  { label: '수취인명', value: 'nameOfRecipient' },
  { label: '구매자명', value: 'buyerName' },
  { label: '구매자ID', value: 'buyerID' },
  { label: '주문번호', value: 'orderNumber' },
  { label: '상품주문번호', value: 'productOrderNumber' },
  { label: '상품번호', value: 'productNumber' },
];

const orderStateList = [
  { label: '전체', value: 'all' },
  { label: '취소요청', value: 'orderCancelRequest' },
  { label: '취소중', value: 'orderCancelling' },
  { label: '취소완료', value: 'orderCancelSuccess' },
  { label: '취소철회', value: 'orderCancelWithdrawal' },
];
