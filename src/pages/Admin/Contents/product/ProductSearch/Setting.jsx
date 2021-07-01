import { useRef, useState } from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { css } from 'styled-components';
import BasicCheckBox from 'pages/Admin/components/Form/BasicCheckBox';
import BasicTextArea from 'pages/Admin/components/Form/BasicTextArea';
import BasicTextInputBox from 'pages/Admin/components/Form/BasicTextInputBox';
import BasicBasicSelectBox from 'pages/Admin/components/Form/BasicSelectBox';
import BasicButton from 'pages/Admin/components/Form/BasicButton';
import BasicDatePicker from 'pages/Admin/components/Form/BasicDatePicker';

const SettingsStyled = styled.div`
  width: 100%;
  height: 50rem;
  background-color: #ffffff;
  border: 1px solid #f0f0f0;
  padding-left: 5rem;
  padding-right: 5rem;
`;

const TapTermStyled = css`
  height: 7rem;
  background-color: #ffffff;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justify};
`;
const SearchTapInputContainerStyled = styled.div`
  ${TapTermStyled};
  height: 15rem;
`;
const SalesStatusTapContainerStyled = styled.div`
  ${TapTermStyled};
`;
const CategoryTapContainerStyled = styled.div`
  ${TapTermStyled};
`;
const DateTermTapContainerStyled = styled.div`
  ${TapTermStyled};
  padding-top: 3rem;
  border-bottom: 0px;
`;
const SearchTapContainerStyled = styled.div`
  ${TapTermStyled};
  border-bottom: 0px;
`;

const TitleTextStyled = styled.div`
  width: 10rem;
  margin-top: 1rem;
`;

const SubContainerStyled = styled.div`
  display: flex;
  padding-left: 8rem;
  align-items: center;
  justify-content: space-between;
  width: ${(props) => props.width};
`;

const LineStyled = styled.div`
  display: flex;
  padding-left: 40rem;
`;

const BasicCheckBoxStyled = styled(BasicCheckBox)`
  margin: 0px;
  padding: 1rem;
  padding-bottom: 0px;
  padding-top: 0px;
  width: 20rem;
`;

const BasicTextAreaStyled = styled(BasicTextArea)`
  width: 20rem;
`;

const BasicTextInputBoxStyled = styled(BasicTextInputBox)``;

const BasicSelectBoxStyled = styled(BasicBasicSelectBox)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding-left: ${(props) => props.paddingleft};
  margin-left: ${(props) => props.marginleft};
  margin-right: 5rem;
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

const Setting = ({ getApiProductData, getSearchProductData }) => {
  const productNumberRef = useRef(null); //상품 번호
  const productMultiSearchRef = useRef(null); //상품 복수 검색
  const productNameRef = useRef(null); //상품명

  const renderSearchInputBox = () => {
    return (
      <SearchTapInputContainerStyled>
        <TitleTextStyled>검색어</TitleTextStyled>
        <SubContainerStyled>
          <BasicCheckBoxStyled label="상품번호" ref={productNumberRef} />
          <BasicTextAreaStyled
            label="복수 검색
          (enter 또는 &#34;,&#34;로 구분)"
            ref={productMultiSearchRef}
          />
          <BasicTextInputBoxStyled
            textSize="10rem"
            label="상품명"
            ref={productNameRef}
          />
        </SubContainerStyled>
      </SearchTapInputContainerStyled>
    );
  };

  const allCheckRef = useRef(null); //전체체크
  const saleNowCheckRef = useRef(null); //판매중 체크
  const soldOutCheckRef = useRef(null); //품절 체크
  const stopSaleCheckRef = useRef(null); //판매중지 체크
  const endSaleCheckRef = useRef(null); //판매종료 체크

  const renderSalesStatus = () => {
    return (
      <SalesStatusTapContainerStyled>
        <TitleTextStyled>판매상태</TitleTextStyled>
        <SubContainerStyled>
          <BasicCheckBoxStyled label="전체" ref={allCheckRef} />
          <BasicCheckBoxStyled label="판매중" ref={saleNowCheckRef} />
          <BasicCheckBoxStyled label="품절" ref={soldOutCheckRef} />
          <BasicCheckBoxStyled label="판매중지" ref={stopSaleCheckRef} />
          <BasicCheckBoxStyled label="판매종료" ref={endSaleCheckRef} />
        </SubContainerStyled>
      </SalesStatusTapContainerStyled>
    );
  };

  const [largeGroupState, setLargeGroupState] = useState(''); //대분류
  const [middleGroupState, setMiddleGroupState] = useState(''); //중분류

  const renderCategory = () => {
    return (
      <CategoryTapContainerStyled>
        <TitleTextStyled>카테고리</TitleTextStyled>
        <SubContainerStyled>
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
        </SubContainerStyled>
      </CategoryTapContainerStyled>
    );
  };

  const [periodCategorySelectState, setPeriodCategorySelectState] = useState(
    '',
  ); //상품등록일
  const [periodBtnState, setPeriodBtnState] = useState(''); //상품 기간 버튼
  const [startDateState, setStartDateState] = useState(''); //상품 등록 시작일
  const [endDateState, setEndDateState] = useState(''); //상품 등록 정지일
  const renderDateTerm = () => {
    const periodBtnClick = (value) => {
      setPeriodBtnState(value);
    };

    return (
      <DateTermTapContainerStyled>
        <TitleTextStyled>기간</TitleTextStyled>
        <SubContainerStyled>
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
        </SubContainerStyled>
      </DateTermTapContainerStyled>
    );
  };

  const searchBtn = useRef(null); //검색
  const renderSearchButton = () => {
    //검색 값들어가야함
    const setSearchBtn = (value) => {
      if (value != undefined) {
        getSearchProductData();
      } else {
        getApiProductData();
      }
    };

    const setResetBtn = () => {
      getApiProductData();
    };

    return (
      <SearchTapContainerStyled justify="center">
        <SubContainerStyled width="150rem">
          <LineStyled>
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
          </LineStyled>
        </SubContainerStyled>
      </SearchTapContainerStyled>
    );
  };

  return (
    <>
      <SettingsStyled>
        {renderSearchInputBox()}
        {renderSalesStatus()}
        {renderCategory()}
        {renderDateTerm()}
        {renderSearchButton()}
      </SettingsStyled>
    </>
  );
};

export default Setting;
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