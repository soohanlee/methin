import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Button, Radio, Input as OriginInput } from 'antd';

import LabelContents from 'pages/Admin/components/Label/LabelContents';
import BasicSelectBox from 'pages/Admin/components/Form/BasicSelectBox';
import BasicDatePicker from 'pages/Admin/components/Form/BasicDatePicker';
import moment, { defaultFormat } from 'moment';

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
  const [searchTypeState, setSearchTypeState] = useState(''); //조회기간 타입
  const [datePeriodState, setdatePeriodState] = useState('today'); //조회기간 기간
  const [startDateState, setStartDateState] = useState(moment()); //시작날짜
  const [endDateState, setEndDateState] = useState(moment()); //종료날짜
  const [detailTypeState, setDetailTypeState] = useState(''); //상세조건 타입
  const detailInputRef = useRef(); //상세조건 인풋
  const [orderState, setOrderState] = useState(''); //주문상태타입
  const [order2State, setOrder2State] = useState(''); //주문상태타입2
  const [deliveryTypeState, setDeliveryTypeState] = useState(''); //배송방법타입
  const [paymentLocalState, setPaymentLocalState] = useState(''); //결제위치타입

  const handleSearchPeriodChange = (value) => {
    setSearchTypeState(value);
  };

  const handleDatePeriodBtn = (e) => {
    setdatePeriodState(e.target.value);
  };

  const handledetailChange = (value) => {
    setDetailTypeState(value);
  };

  const handleOrderStateChange = (e) => {
    setOrderState(e);
  };

  const handleWaitingForShipmentChange = (e) => {
    setOrder2State(e);
  };

  const handleOrderWayChange = (value) => {
    setDeliveryTypeState(value);
  };

  const handleOrderAreaChange = (value) => {
    setPaymentLocalState(value);
  };

  const handleStartDateChange = (value) => {
    setStartDateState(value);
  };

  const handleEndDateChange = (value) => {
    setEndDateState(value);
  };

  const handleSearchOnClick = () => {
    console.log(searchTypeState);
    console.log(datePeriodState);
    console.log(startDateState._d);
    console.log(endDateState._d);
    console.log(orderState);
    console.log(order2State);
    console.log(detailTypeState);
    console.log(deliveryTypeState);
    console.log(paymentLocalState);
    console.log(detailInputRef.current.state.value);
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
          <Radio.Group value={datePeriodState} onChange={handleDatePeriodBtn}>
            <Radio.Button value="today">오늘</Radio.Button>
            <Radio.Button value="1week">1주일</Radio.Button>
            <Radio.Button value="1month">1개월</Radio.Button>
            <Radio.Button value="3month">3개월</Radio.Button>
          </Radio.Group>
        </RadioGroupContainer>

        <BasicDatePicker
          value={startDateState}
          onChange={handleStartDateChange}
        />
        {`　~　`}
        <BasicDatePicker value={endDateState} onChange={handleEndDateChange} />
      </LabelContents>
      <LabelContents title="상세조건">
        <SelectBox list={detailList} onChange={handledetailChange} />
        <Input ref={detailInputRef} />
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
        <Button onClick={handleSearchOnClick}>검색</Button>
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
