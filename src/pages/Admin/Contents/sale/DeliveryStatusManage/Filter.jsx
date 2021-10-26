import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Radio, Input as OriginInput } from 'antd';

import LabelContents from 'pages/Admin/components/Label/LabelContents';
import BasicSelectBox from 'pages/Admin/components/Form/BasicSelectBox';
import BasicDatePicker from 'pages/Admin/components/Form/BasicDatePicker';
import moment from 'moment';

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
  const [searchTypeState, setSearchTypeState] = useState(0); //조회기간 타입
  const [datePeriodState, setDatePeriodState] = useState(0); //조회기간 기간
  const [startDateState, setStartDateState] = useState(moment()); //시작날짜
  const [endDateState, setEndDateState] = useState(moment()); //종료날짜
  const [orderState, setOrderState] = useState(0); //주문상태타입
  const [order2State, setOrder2State] = useState(0); //주문상태타입2
  const [detailTypeState, setDetailTypeState] = useState(0); //상세조건 타입
  const [detailInputState, setDetailInputState] = useState(''); //상세조건 인풋

  const handleSearchPeriodChange = (value) => {
    setSearchTypeState(value);
  };

  const handleDatePeriodBtn = (e) => {
    setDatePeriodState(e.target.value);
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

  const handleDetailInputChange = (value) => {
    setDetailInputState(value.target.value);
  };

  const handleSearchOnClick = () => {
    console.log(searchTypeState);
    console.log(datePeriodState);
    console.log(startDateState._d);
    console.log(endDateState._d);
    console.log(orderState);
    console.log(order2State);
    getApiDeliveryStatusData();
  };

  return (
    <Container>
      <LabelContents title="조회기간">
        <SelectBox
          value={searchTypeState}
          list={searchPeriodList}
          onChange={handleSearchPeriodChange}
        />
        <RadioGroupContainer>
          <Radio.Group value={datePeriodState} onChange={handleDatePeriodBtn}>
            <Radio.Button value={0}>오늘</Radio.Button>
            <Radio.Button value={1}>1주일</Radio.Button>
            <Radio.Button value={2}>1개월</Radio.Button>
            <Radio.Button value={3}>3개월</Radio.Button>
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
        <SelectBox
          value={detailTypeState}
          list={detailList}
          onChange={handledetailChange}
        />
        <Input value={detailInputState} onChange={handleDetailInputChange} />
      </LabelContents>

      <LabelContents title="주문상태">
        <SelectBox
          value={orderState}
          list={orderStateList}
          onChange={handleOrderStateChange}
        />
        <SelectBox
          value={order2State}
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
  { label: '결제일', value: 0 },
  { label: '발주확인일', value: 1 },
  { label: '발송처리일', value: 2 },
];

const detailList = [
  { label: '전체', value: 0 },
  { label: '수취인명', value: 1 },
  { label: '구매자명', value: 2 },
  { label: '구매자연락처', value: 3 },
  { label: '구매자ID', value: 4 },
  { label: '주문번호', value: 5 },
  { label: '상품주문번호', value: 6 },
  { label: '상품번호', value: 7 },
  { label: '송장번호', value: 8 },
];

const orderStateList = [
  { label: '전체', value: 0 },
  { label: '발송대기', value: 1 },
  { label: '배송중', value: 2 },
  { label: '배송완료', value: 3 },
];

const waitingForShipmentList = [
  { label: '전체', value: 0 },
  { label: '신규주문', value: 1 },
  { label: '발주확인', value: 2 },
  { label: '발주확인 해제', value: 3 },
];
