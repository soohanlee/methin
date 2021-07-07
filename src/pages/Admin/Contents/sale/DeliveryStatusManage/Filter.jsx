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

const Filter = ({ getApiDeliveryStatusData }) => {
  const [searchTypeState, setSearchTypeState] = useState(''); //조회기간 타입
  const [datePeriodState, setdatePeriodState] = useState(''); //조회기간 기간
  const [startDateState, setStartDateState] = useState(''); //시작날짜
  const [endDateState, setEndDateState] = useState(''); //종료날짜
  const [orderState, setOrderState] = useState(''); //주문상태타입
  const [order2State, setOrder2State] = useState(''); //주문상태타입2
  const [detailTypeState, setDetailTypeState] = useState(''); //상세조건 타입
  const detailInputState = useRef(); //상세조건 인풋

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
    console.log(detailInputState.current.state.value);
    getApiDeliveryStatusData();
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

        <BasicDatePicker onChange={handleStartDateChange} />
        {`　~　`}
        <BasicDatePicker onChange={handleEndDateChange} />
      </LabelContents>

      <LabelContents title="상세조건">
        <SelectBox list={detailList} onChange={handledetailChange} />
        <Input ref={detailInputState} />
      </LabelContents>

      <LabelContents title="주문상태">
        <SelectBox list={orderStateList} onChange={handleOrderStateChange} />
        <SelectBox
          list={waitingForShipmentList}
          onChange={handleWaitingForShipmentChange}
        />
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
