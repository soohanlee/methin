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

const Filter = () => {
  const [datePeriodState, setDatePeriodState] = useState(0);
  const [periodTypeState, setPeriodTypeState] = useState(0);
  const [detailTypeState, setDetailTypeState] = useState(0);
  const [otherTypeState, setOtherTypeStateState] = useState(0);

  const detailRef = useRef(null);

  const handleSearchPeriodChange = (value) => {
    setPeriodTypeState(value);
    console.log(value);
  };

  const handledetailChange = (value) => {
    setDetailTypeState(value);
    console.log(value);
  };

  const handleOrderStateChange = (value) => {
    setOtherTypeStateState(value);
    console.log(value);
  };

  const handleStartDateChange = (value) => {
    console.log(value);
  };

  const handleEndDateChange = (value) => {
    console.log(value);
  };

  const search = () => {
    alert('검색');
  };

  return (
    <Container>
      <LabelContents title="조회기간">
        <SelectBox
          list={searchPeriodList}
          onChange={handleSearchPeriodChange}
          value={periodTypeState}
        />
        <RadioGroupContainer>
          <Radio.Group
            value={datePeriodState}
            onChange={(e) => setDatePeriodState(e.target.value)}
          >
            <Radio.Button value={0}>오늘</Radio.Button>
            <Radio.Button value={1}>1주일</Radio.Button>
            <Radio.Button value={2}>1개월</Radio.Button>
            <Radio.Button value={3}>3개월</Radio.Button>
          </Radio.Group>
        </RadioGroupContainer>

        <BasicDatePicker onChange={handleStartDateChange} />
        {`　~　`}
        <BasicDatePicker onChange={handleEndDateChange} />
      </LabelContents>

      <LabelContents title="상세조건">
        <SelectBox
          value={detailTypeState}
          list={detailList}
          onChange={handledetailChange}
        />
        <Input ref={detailRef} />
      </LabelContents>

      <LabelContents title="처리상태">
        <SelectBox
          value={otherTypeState}
          list={orderStateList}
          onChange={handleOrderStateChange}
        />
      </LabelContents>

      <ButtonContainer>
        <Button onClick={search}>검색</Button>
      </ButtonContainer>
    </Container>
  );
};

export default Filter;

const searchPeriodList = [
  { label: '반품 요청일', value: 0 },
  { label: '결제일', value: 1 },
];

const detailList = [
  { label: '전체', value: 0 },
  { label: '수취인명', value: 1 },
  { label: '구매자명', value: 2 },
  { label: '구매자ID', value: 3 },
  { label: '주문번호', value: 4 },
  { label: '상품주문번호', value: 5 },
  { label: '상품번호', value: 6 },
];

const orderStateList = [
  { label: '전체', value: 0 },
  { label: '반품요청', value: 1 },
  { label: '수거중', value: 2 },
  { label: '수거완료', value: 3 },
  { label: '반품완료', value: 4 },
  { label: '반품철회', value: 5 },
];
