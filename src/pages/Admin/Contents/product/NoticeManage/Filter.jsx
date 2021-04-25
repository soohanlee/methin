import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Radio, Button } from 'antd';

import BasicSelectBox from 'compononets/Form/BasicSelectBox';
import LabelContents from 'compononets/Label/LabelContents';
import { Input as OriginInput } from 'compononets/styled/Input';

import BasicDatePicker from 'compononets/Form/BasicDatePicker';

const Container = styled.div`
  padding: 2rem;
  background: #fff;
  margin-bottom: 2rem;
`;

const Input = styled(OriginInput)`
  margin-left: 1rem;
`;

const DisplaySelectBox = styled(BasicSelectBox)`
  margin-left: 1rem;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  > button {
    &:first-child {
      margin-right: 1rem;
    }
  }
`;

const ItemWrap = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const searchNameList = [
  { label: '제목', value: 'title' },
  { label: '번호', value: 'number' },
];

const typeList = [
  { label: '분류 전체', value: 'all' },
  { label: '일반', value: 'normal' },
  { label: '이벤트', value: 'event' },
  { label: '배송지연', value: 'delivery' },
  { label: '상품', value: 'product' },
];

const displayList = [
  { label: '전시상태 전체', value: 'all' },
  { label: '전시대기', value: 'wait' },
  { label: '전시중', value: 'ing' },
  { label: '전시중지', value: 'stop' },
];

const Filter = () => {
  const titleRef = useRef(null);

  const [dateRange, setDateRange] = useState('today');

  const handleSearchNameChange = (value) => {
    console.log('value', value);
  };

  const handleTypeListChange = (value) => {
    console.log('value', value);
  };

  const handleDisplayChange = (value) => {
    console.log('value', value);
  };

  const handleStartDateChange = (value) => {
    console.log(value);
  };

  const handleEndDateChange = (value) => {
    console.log(value);
  };

  return (
    <Container>
      <LabelContents title="검색어">
        <BasicSelectBox
          list={searchNameList}
          onChange={handleSearchNameChange}
        />
        <Input ref={titleRef} placeholder={'제목을 입력하세요'} />
      </LabelContents>
      <LabelContents title="상세검색">
        <ItemContainer>
          <ItemWrap>
            <BasicSelectBox list={typeList} onChange={handleTypeListChange} />
            <DisplaySelectBox
              list={displayList}
              onChange={handleDisplayChange}
            />
          </ItemWrap>
          <ItemWrap>
            <Radio.Group
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
            >
              <Radio.Button value="today">오늘</Radio.Button>
              <Radio.Button value="week">1주일</Radio.Button>
              <Radio.Button value="month">1개월</Radio.Button>
              <Radio.Button value="3month">3개월</Radio.Button>
              <Radio.Button value="6month">6개월</Radio.Button>
              <Radio.Button value="year">1년</Radio.Button>
            </Radio.Group>
          </ItemWrap>
          <ItemWrap>
            <BasicDatePicker onChange={handleStartDateChange} />
            {`　~　`}
            <BasicDatePicker onChange={handleEndDateChange} />
          </ItemWrap>
        </ItemContainer>
      </LabelContents>
      <ButtonContainer>
        <Button>검색</Button>
        <Button>초기화</Button>
      </ButtonContainer>
    </Container>
  );
};

export default Filter;
