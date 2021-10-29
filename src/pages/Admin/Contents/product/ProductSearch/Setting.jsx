import { useRef, useState } from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Radio } from 'antd';
import { css } from 'styled-components';
import BasicCheckBox from 'pages/Admin/components/Form/BasicCheckBox';
import BasicTextArea from 'pages/Admin/components/Form/BasicTextArea';
import BasicTextInputBox from 'pages/Admin/components/Form/BasicTextInputBox';
import BasicBasicSelectBox from 'pages/Admin/components/Form/BasicSelectBox';
import BasicButton from 'pages/Admin/components/Form/BasicButton';
import BasicDatePicker from 'pages/Admin/components/Form/BasicDatePicker';
import moment from 'moment';

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
  margin-right: 10rem;
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
  const [productNumCheckBox, setProductNumCheckBox] = useState(true);
  const [productNumTextArea, setProductNumTextArea] = useState();
  const [productNameInput, setProductNameInput] = useState();
  const [largeGroupState, setLargeGroupState] = useState(0); //대분류
  const [middleGroupState, setMiddleGroupState] = useState(0); //중분류
  const [saleTypeCheckState, setSaleTypeCheckState] = useState(1);

  const renderSearchInputBox = () => {
    return (
      <SearchTapInputContainerStyled>
        <TitleTextStyled>검색어</TitleTextStyled>
        <SubContainerStyled>
          <BasicCheckBoxStyled
            defaultChecked={true}
            checked={productNumCheckBox}
            onChange={(value) => {
              setProductNumCheckBox(value.target.checked);
            }}
            label="상품번호"
            ref={productNumberRef}
          />
          <BasicTextAreaStyled
            value={productNumTextArea}
            onChange={(value) => {
              setProductNumTextArea(value.target.value);
            }}
            label="복수 검색
          (enter 또는 &#34;,&#34;로 구분)"
            ref={productMultiSearchRef}
          />
          <BasicTextInputBoxStyled
            value={productNameInput}
            onChange={(value) => {
              setProductNameInput(value.target.value);
            }}
            textSize="10rem"
            label="상품명"
            ref={productNameRef}
          />
        </SubContainerStyled>
      </SearchTapInputContainerStyled>
    );
  };

  const handleSaleStatus = (e) => {
    setSaleTypeCheckState(e.target.value);
  };

  const renderSalesStatus = () => {
    return (
      <SalesStatusTapContainerStyled>
        <TitleTextStyled>판매상태</TitleTextStyled>
        <SubContainerStyled>
          <Radio.Group
            defaultValue={1}
            onChange={handleSaleStatus}
            value={saleTypeCheckState}
          >
            <Radio value={1}>전체</Radio>
            <Radio value={2}>판매중</Radio>
            <Radio value={3}>품절</Radio>
            <Radio value={4}>판매중지</Radio>
            <Radio value={5}>판매종료</Radio>
          </Radio.Group>
        </SubContainerStyled>
      </SalesStatusTapContainerStyled>
    );
  };

  const renderCategory = () => {
    return (
      <CategoryTapContainerStyled>
        <TitleTextStyled>카테고리</TitleTextStyled>
        <SubContainerStyled>
          <BasicSelectBoxStyled
            value={largeGroupState}
            list={largeCategory}
            width="20rem"
            onChange={(e) => {
              setLargeGroupState(e);
            }}
          />
          <BasicSelectBoxStyled
            value={middleGroupState}
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
    periodCategory[0].value,
  ); //상품등록일
  const [periodBtnState, setPeriodBtnState] = useState(0); //상품 기간 버튼
  const [startDateState, setStartDateState] = useState(moment()); //상품 등록 시작일
  const [endDateState, setEndDateState] = useState(moment()); //상품 등록 정지일
  const renderDateTerm = () => {
    return (
      <DateTermTapContainerStyled>
        <TitleTextStyled>기간</TitleTextStyled>
        <SubContainerStyled>
          <BasicSelectBoxStyled
            value={periodCategorySelectState}
            list={periodCategory}
            width="13rem"
            onChange={(e) => {
              setPeriodCategorySelectState(e);
            }}
          />
          <Radio.Group
            defaultValue={0}
            onChange={(e) => setPeriodBtnState(e.target.value)}
            value={periodBtnState}
          >
            <Radio.Button value={0}>오늘</Radio.Button>
            <Radio.Button value={1}>1주일</Radio.Button>
            <Radio.Button value={2}>1개월</Radio.Button>
            <Radio.Button value={3}>3개월</Radio.Button>
            <Radio.Button value={4}>6개월</Radio.Button>
            <Radio.Button value={5}>1년</Radio.Button>
          </Radio.Group>
          <BasicDatePickerStyled
            defaultValue={moment()}
            format={'YYYY/MM/DD'}
            value={startDateState}
            onChange={(value) => {
              setStartDateState(value);
            }}
          />
          ~
          <BasicDatePickerStyled
            defaultValue={moment()}
            format={'YYYY/MM/DD'}
            value={endDateState}
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
    const handleSearchBtn = (value) => {
      //검색 값들어가야함

      console.log('------ProductSearch--------');
      console.log(productNumberRef.current.state.checked); //상품번호체크박스
      console.log(productMultiSearchRef.current.resizableTextArea.props.value); //TextArea
      console.log(productNameRef.current.state.value); //상품명
      console.log(saleTypeCheckState); //판매상태
      console.log(largeGroupState); //카테고리 드랍박스
      console.log(middleGroupState); //카테고리 드랍박스
      console.log(periodCategorySelectState); //기간 드랍박스
      console.log(periodBtnState); //기간버튼
      console.log(startDateState._d); //
      console.log(endDateState._d);
      console.log('------ProductSearch--------');

      if (value !== undefined) {
        getSearchProductData();
      } else {
        getApiProductData();
      }
    };

    const handleResetBtn = () => {
      setProductNumCheckBox(true);
      setProductNumTextArea('');
      setProductNameInput('');
      setSaleTypeCheckState(1);
      setLargeGroupState(largeCategory[0].value);
      setMiddleGroupState(middleCategory[0].value);
      setPeriodCategorySelectState(periodCategory[0].value);
      setPeriodBtnState(0);
      var nowDate = moment();
      setStartDateState(nowDate);
      setEndDateState(nowDate);
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
              onClick={handleSearchBtn}
            />
            <BasicButtonStyled
              label="초기화"
              width="13rem"
              height="5rem"
              marginleft="2rem"
              margintop="5rem"
              onClick={handleResetBtn}
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
  { value: 0, label: '대분류' },
  { value: 1, label: '식품' },
];

const middleCategory = [
  { value: 0, label: '중분류' },
  { value: 1, label: '가공식품' },
  { value: 2, label: '냉동/간편조리식품' },
  { value: 3, label: '다이어트식품' },
];

const periodCategory = [
  { value: 0, label: '상품등록일' },
  { value: 1, label: '판매시작일' },
  { value: 2, label: '판매종료일' },
  { value: 3, label: '최종수정일' },
];
