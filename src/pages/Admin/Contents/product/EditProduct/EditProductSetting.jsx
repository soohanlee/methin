import { useRef, useState } from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { css } from 'styled-components';
import CheckBoxLabel from 'pages/Admin/components/Form/CheckBoxLabel';
import TextAreaBox from 'pages/Admin/components/Form/TextAreaBox';
import BasicTextInputBox from 'pages/Admin/components/Form/BasicTextInputBox';
import BasicBasicSelectBox from 'pages/Admin/components/Form/BasicSelectBox';
import BasicButton from 'pages/Admin/components/Form/BasicButton';
import BasicDatePicker from 'pages/Admin/components/Form/BasicDatePicker';

const EditProductSettings = styled.div`
  width: 100%;
  height: 50rem;
  background-color: #ffffff;
  border: 1px solid #f0f0f0;
  padding-left: 5rem;
  padding-right: 5rem;
`;

const TapTerm = css`
  width: 100%;
  height: 7rem;
  background-color: #ffffff;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justify};
`;

const Propertys = styled.div`
  display: flex;
  padding-left: 8rem;
  align-items: center;
  justify-content: space-between;
  width: ${(props) => props.width};
`;

const Line = styled.div`
  display: flex;
  padding-left: 40rem;
`;

const Search = styled.div`
  ${TapTerm};
  height: 15rem;
`;

const CheckBoxLabelStyled = styled(CheckBoxLabel)`
  margin: 0px;
  padding: 1rem;
  padding-bottom: 0px;
  padding-top: 0px;
  width: 20rem;
`;

const TextAndInput = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: center;
  width: 30rem;
`;

const TextAreaBoxStyled = styled(TextAreaBox)`
  width: 20rem;
`;

const BasicTextInputBoxStyled = styled(BasicTextInputBox)``;

const Title = styled.div`
  width: 10rem;
  margin-top: 1rem;
`;

const SalesStatus = styled.div`
  ${TapTerm};
`;

const Category = styled.div`
  ${TapTerm};
`;

const BasicSelectBoxStyled = styled(BasicBasicSelectBox)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding-left: ${(props) => props.paddingleft};
  margin-left: ${(props) => props.marginleft};
  margin-right: 5rem;
`;

const DateTerm = styled.div`
  ${TapTerm};
  padding-top: 3rem;
  border-bottom: 0px;
`;

const BasicButtonStyled = styled(BasicButton)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-left: ${(props) => props.marginleft};
  margin-top: ${(props) => props.margintop};
`;

const BasicDatePickerStyled = styled(BasicDatePicker)`
  margin-left: 2rem;
  margin-right: 2rem;

  width: 20rem;
  height: 4rem;
`;

const Select = styled.div`
  ${TapTerm};
  border-bottom: 0px;
`;

const EditProductSetting = () => {
  const productNumberRef = useRef(null); //상품 번호
  const productSearchDescRef = useRef(null); //상품 복수 검색
  const productNameRef = useRef(null); //상품명

  const renderSetSearch = () => {
    return (
      <Search>
        <Title>검색어</Title>
        <Propertys>
          <CheckBoxLabelStyled label="상품번호" ref={productNumberRef} />
          <TextAreaBoxStyled
            label="복수 검색
          (enter 또는 &#34;,&#34;로 구분)"
            ref={productSearchDescRef}
          />
          <TextAndInput>
            <BasicTextInputBoxStyled
              textSize="10rem"
              label="상품명"
              ref={productNameRef}
            />
          </TextAndInput>
        </Propertys>
      </Search>
    );
  };
  const allSalesCheckRef = useRef(null); //전체체크
  const saleNowCheckRef = useRef(null); //판매중 체크
  const soldOutCheckRef = useRef(null); //품절 체크
  const stopSaleCheckRef = useRef(null); //판매중지 체크
  const endSaleCheckRef = useRef(null); //판매종료 체크

  const renderSetSalesStatus = () => {
    return (
      <SalesStatus>
        <Title>판매상태</Title>
        <Propertys>
          <CheckBoxLabelStyled label="전체" ref={allSalesCheckRef} />
          <CheckBoxLabelStyled label="판매중" ref={saleNowCheckRef} />
          <CheckBoxLabelStyled label="품절" ref={soldOutCheckRef} />
          <CheckBoxLabelStyled label="판매중지" ref={stopSaleCheckRef} />
          <CheckBoxLabelStyled label="판매종료" ref={endSaleCheckRef} />
        </Propertys>
      </SalesStatus>
    );
  };

  const [largeGroupState, setLargeGroupState] = useState(''); //대분류
  const [middleGroupState, setMiddleGroupState] = useState(''); //중분류

  const renderSetCategory = () => {
    return (
      <Category>
        <Title>카테고리</Title>
        <Propertys>
          <BasicSelectBoxStyled
            list={largeCategory}
            width="20rem"
            onChange={(e) => {
              setLargeGroupState(e);
            }}
          />
          <BasicSelectBoxStyled
            list={middleCategory}
            width="20rem"
            onChange={(e) => {
              setMiddleGroupState(e);
            }}
          />
        </Propertys>
      </Category>
    );
  };

  const periodBtnClick = (value) => {
    SetPeriodBtnState(value);
  };

  const [periodCategorySelectState, setPeriodCategorySelectState] = useState(
    '',
  ); //상품등록일
  const [periodBtnState, SetPeriodBtnState] = useState('');
  const [startDateState, setStartDateState] = useState(''); //상품 등록 시작일
  const [endDateState, setEndDateState] = useState(''); //상품 등록 정지일
  const renderSetDateTerm = () => {
    return (
      <DateTerm>
        <Title>기간</Title>
        <Propertys>
          <BasicSelectBoxStyled
            list={periodCategory}
            width="13rem"
            onChange={(e) => {
              setPeriodCategorySelectState(e);
            }}
          />
          <BasicButtonStyled
            label="오늘"
            width="8rem"
            height="4rem"
            onClick={() => {
              periodBtnClick('day');
            }}
          />
          <BasicButtonStyled
            label="1주일"
            width="8rem"
            height="4rem"
            onClick={() => {
              periodBtnClick('week');
            }}
          />
          <BasicButtonStyled
            label="1개월"
            width="8rem"
            height="4rem"
            onClick={() => {
              periodBtnClick('month');
            }}
          />
          <BasicButtonStyled
            label="3개월"
            width="8rem"
            height="4rem"
            onClick={() => {
              periodBtnClick('threeMonth');
            }}
          />
          <BasicButtonStyled
            label="6개월"
            width="8rem"
            height="4rem"
            onClick={() => {
              periodBtnClick('sixMonth');
            }}
          />
          <BasicButtonStyled
            label="1년"
            width="8rem"
            height="4rem"
            onClick={() => {
              periodBtnClick('year');
            }}
          />
          <BasicDatePickerStyled
            onChange={(value) => {
              setStartDateState(value);
            }}
          />
          ~
          <BasicDatePickerStyled
            onChange={(value) => {
              setEndDateState(value);
            }}
          />
        </Propertys>
      </DateTerm>
    );
  };
  const searchBtn = useRef(null); //검색

  const renderSetSelect = () => {
    const setSearchBtn = () => {
      alert('검색 버튼 클릭');
    };

    const setResetBtn = () => {
      alert('초기화 버튼 클릭');
    };

    return (
      <Select justify="center">
        <Propertys width="150rem">
          <Line>
            <BasicButtonStyled
              label="검색"
              width="13rem"
              height="5rem"
              type="primary"
              ref={searchBtn}
              margintop="5rem"
              onClick={setSearchBtn}
            />
            <BasicButtonStyled
              label="초기화"
              width="13rem"
              height="5rem"
              marginleft="2rem"
              margintop="5rem"
              onClick={setResetBtn}
            />
          </Line>
        </Propertys>
      </Select>
    );
  };

  return (
    <>
      <EditProductSettings>
        {renderSetSearch()}
        {renderSetSalesStatus()}
        {renderSetCategory()}
        {renderSetDateTerm()}
        {renderSetSelect()}
      </EditProductSettings>
    </>
  );
};

export default EditProductSetting;
const largeCategory = [
  { value: '0', label: '대분류' },
  { value: '1', label: '뭐들어가지' },
  { value: '2', label: '뭐들어가지2' },
  { value: '3', label: '뭐들어가지3' },
];

const middleCategory = [
  { value: '0', label: '중분류' },
  { value: '1', label: '뭐들어가지' },
  { value: '2', label: '뭐들어가지2' },
  { value: '3', label: '뭐들어가지3' },
];

const periodCategory = [
  { value: '0', label: '상품등록일' },
  { value: '1', label: '판매시작일' },
  { value: '2', label: '판매종료일' },
  { value: '3', label: '최종수정일' },
];
