import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Radio, Button } from 'antd';
import { useHistory } from 'react-router';
import { ROUTE_PATH } from 'configs/config';

import BasicSelectBox from 'pages/Admin/components/Form/BasicSelectBox';
import LabelContents from 'pages/Admin/components/Label/LabelContents';
import { Input as OriginInput } from 'pages/Admin/components/styled/Input';

import BasicDatePicker from 'pages/Admin/components/Form/BasicDatePicker';
import moment from 'moment';

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

const Filter = ({ getApiNoticeData }) => {
  const [searchTypeState, setSearchTypeState] = useState(0); //검색어 드랍박스
  const searchRef = useRef(''); //검색어 인풋
  const [searchInputState, setsearchInputState] = useState(''); //검색어 인풋박스
  const [classificationState, setClassificationState] = useState(0); //분류 드랍박스
  const [classification2State, setClassification2State] = useState(0); //전시상태 드랍박스
  const [startDateState, setStarttDateState] = useState(moment()); //시작날짜
  const [endDateState, setEndDateState] = useState(moment()); //끝날짜
  const [dateRangeState, setDateRangeState] = useState(0); //기간버튼
  const history = useHistory();

  const handleSearchNameChange = (value) => {
    setSearchTypeState(value);
  };

  const handleTypeListChange = (value) => {
    setClassificationState(value);
  };

  const handleDisplayChange = (value) => {
    setClassification2State(value);
  };

  const handleStartDateChange = (value) => {
    setStarttDateState(value);
  };

  const handleEndDateChange = (value) => {
    setEndDateState(value);
  };

  const handleSearchInputChange = (value) => {
    setsearchInputState(value.target.value);
  };

  const handleRegisterNotice = () => {
    history.push(`${ROUTE_PATH.admin.main}${ROUTE_PATH.admin.registerNotice}`);
  };

  const handleSearchOnClick = () => {
    console.log(searchTypeState);
    console.log(searchRef.current.state.value);
    console.log(classificationState);
    console.log(classification2State);
    console.log(dateRangeState);
    console.log(startDateState._d);
    console.log(endDateState._d);
    getApiNoticeData();
  };

  const handleResetOnClick = () => {
    setSearchTypeState(0);
    setsearchInputState('');
    setClassificationState(0);
    setClassification2State(0);
    var nowDate = moment();
    setStarttDateState(nowDate);
    setEndDateState(nowDate);
    setDateRangeState(0);
  };

  return (
    <Container>
      <LabelContents title="상품 공지사항 조회">
        <Button onClick={handleRegisterNotice}>새 상품 공지사항 등록</Button>
      </LabelContents>
      <LabelContents title="검색어">
        <BasicSelectBox
          list={searchNameList}
          value={searchTypeState}
          onChange={handleSearchNameChange}
        />
        <Input
          value={searchInputState}
          onChange={handleSearchInputChange}
          ref={searchRef}
          placeholder={'제목을 입력하세요'}
        />
      </LabelContents>
      <LabelContents title="상세검색">
        <ItemContainer>
          <ItemWrap>
            <BasicSelectBox
              value={classificationState}
              list={typeList}
              onChange={handleTypeListChange}
            />
            <DisplaySelectBox
              list={displayList}
              value={classification2State}
              onChange={handleDisplayChange}
            />
          </ItemWrap>
          <ItemWrap>
            <Radio.Group
              value={dateRangeState}
              onChange={(e) => setDateRangeState(e.target.value)}
            >
              <Radio.Button value={0}>오늘</Radio.Button>
              <Radio.Button value={1}>1주일</Radio.Button>
              <Radio.Button value={2}>1개월</Radio.Button>
              <Radio.Button value={3}>3개월</Radio.Button>
              <Radio.Button value={4}>6개월</Radio.Button>
              <Radio.Button value={5}>1년</Radio.Button>
            </Radio.Group>
          </ItemWrap>
          <ItemWrap>
            <BasicDatePicker
              value={startDateState}
              onChange={(value) => {
                handleStartDateChange(value);
              }}
            />
            {`　~　`}
            <BasicDatePicker
              value={endDateState}
              onChange={(value) => {
                handleEndDateChange(value);
              }}
            />
          </ItemWrap>
        </ItemContainer>
      </LabelContents>
      <ButtonContainer>
        <Button onClick={handleSearchOnClick}>검색</Button>
        <Button onClick={handleResetOnClick}>초기화</Button>
      </ButtonContainer>
    </Container>
  );
};

export default Filter;

const searchNameList = [
  { label: '제목', value: 0 },
  { label: '번호', value: 1 },
];

const typeList = [
  { label: '분류 전체', value: 0 },
  { label: '일반', value: 1 },
  { label: '이벤트', value: 2 },
  { label: '배송지연', value: 3 },
  { label: '상품', value: 4 },
];

const displayList = [
  { label: '전시상태 전체', value: 0 },
  { label: '전시대기', value: 1 },
  { label: '전시중', value: 2 },
  { label: '전시중지', value: 3 },
];
