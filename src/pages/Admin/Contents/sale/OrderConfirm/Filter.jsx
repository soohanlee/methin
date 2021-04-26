import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Button, Radio, Input as OriginInput } from 'antd';

import LabelContents from 'compononets/Label/LabelContents';
import BasicSelectBox from 'compononets/Form/BasicSelectBox';
import BasicDatePicker from 'compononets/Form/BasicDatePicker';

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

const Filter = () => {
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

  const handleWaitingForShipmentChange = (value) => {
    console.log(value);
  };

  const handleOrderWayChange = (value) => {
    console.log(value);
  };

  const handleOrderAreaChange = (value) => {
    console.log(value);
  };

  const handleStartDateChange = (value) => {
    console.log(value);
  };

  const handleEndDateChange = (value) => {
    console.log(value);
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

      <LabelContents title="주문상태">
        <SelectBox list={orderStateList} onChange={handleOrderStateChange} />
        <SelectBox
          list={waitingForShipmentList}
          onChange={handleWaitingForShipmentChange}
        />
      </LabelContents>

      <LabelContents title="배송방법">
        <SelectBox list={orderWayList} onChange={handleOrderWayChange} />
      </LabelContents>

      <LabelContents title="결제위치">
        <SelectBox list={orderAreaList} onChange={handleOrderAreaChange} />
      </LabelContents>

      <ButtonContainer>
        <Button>검색</Button>
      </ButtonContainer>
    </Container>
  );
};

export default Filter;

const searchPeriodList = [
  { label: '결제일', value: 'paymentDate' },
  { label: '발주확인일', value: 'orderConfirmationDate' },
  { label: '발송처리일', value: 'shipmentProcessingDate' },
];

const detailList = [
  { label: '전체', value: 'all' },
  { label: '수취인명', value: 'nameOfRecipient' },
  { label: '구매자명', value: 'buyerName' },
  { label: '구매자연락처', value: 'buyerPhone' },
  { label: '구매자ID', value: 'buyerID' },
  { label: '주문번호', value: 'orderNumber' },
  { label: '상품주문번호', value: 'productOrderNumber' },
  { label: '상품번호', value: 'productNumber' },
  { label: '송장번호', value: 'invoiceNumber' },
];

const orderStateList = [
  { label: '전체', value: 'all' },
  { label: '발송대기', value: 'waitingForShipment' },
  { label: '배송중', value: 'shipping' },
  { label: '배송완료', value: 'deliveryCompleted' },
];

const waitingForShipmentList = [
  { label: '전체', value: 'all' },
  { label: '신규주문', value: 'newOrder' },
  { label: '발주확인', value: 'confirmOfOrder' },
  { label: '발주확인 해제', value: 'cancelOrderConfirm' },
];

const orderWayList = [
  { label: '전체', value: 'all' },
  { label: '택배,등기,소포', value: 'delivery' },
  { label: '굿스플로 송장출력', value: 'goodsflow' },
  { label: '직접전달', value: 'direct' },
  { label: '방문수령', value: 'visit' },
  { label: '퀵서비스', value: 'quick' },
  { label: '배송없음', value: 'noDelivery' },
];

const orderAreaList = [
  { label: '전체', value: 'all' },
  { label: '신규주문', value: 'PC' },
  { label: '발주확인', value: 'Mobile' },
];
