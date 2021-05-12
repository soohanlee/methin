import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { css } from 'styled-components';
import CheckBoxLabel from 'pages/Admin/components/Form/CheckBoxLabel';
import TextAreaBox from 'pages/Admin/components/Form/TextAreaBox';
import BasicTextInputBox from 'pages/Admin/components/Form/BasicTextInputBox';
import BasicButton from 'pages/Admin/components/Form/BasicButton';
import BasicDatePicker from 'pages/Admin/components/Form/BasicDatePicker';

const EditProductSettings = styled.div`
  width: 100%;
  height: 46rem;
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
  padding-top: 1.5rem;
  justify-content: ${(props) => props.justify};
`;

const Propertys = styled.div`
  display: flex;
  padding-left: 4rem;
  align-items: center;
  justify-content: space-between;
  width: ${(props) => props.width};
`;

const Line = styled.div`
  display: flex;
  padding-left: 35%;
`;

const TwoLine = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Search = styled.div`
  ${TapTerm};
  height: 15rem;
`;

const CheckBoxLabelStyled = styled(CheckBoxLabel)`
  margin: 0px;
  padding: 1rem;
  width: 20rem;
  margin-bottom: 2rem;
`;

const TextAndInput = styled.div`
  margin-left: 20px;
  margin-bottom: 8rem;

  display: flex;
  align-items: center;
  width: 30rem;
`;

const TextAreaBoxStyled = styled(TextAreaBox)`
  width: 20rem;
`;

const BasicTextInputBoxStyled = styled(BasicTextInputBox)`
  padding-left: 2rem;
`;

const Title = styled.div`
  width: 15rem;
  margin-top: 1rem;
`;

const SalesStatus = styled.div`
  ${TapTerm};
`;

const Channel = styled.div`
  ${TapTerm};
`;

const Payment = styled.div`
  ${TapTerm};
`;

const DateTerm = styled.div`
  ${TapTerm};
  border-bottom: 0px;
`;

const BasicButtonStyled = styled(BasicButton)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-left: ${(props) => props.marginleft};
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

const EditConnectProductSetting = () => {
  //////////////SetSearch/////////////////////////////////////
  const productNumberRef = useRef(null); //상품 번호
  const connectProductIDRef = useRef(null); //연관상품 ID
  const [productSearchDescState,setProductSearchDescState] = useState(''); //상품 복수 검색
  const titleProductNameRef = useRef(null); //대표 상품명
  //////////////SetSearch/////////////////////////////////////
  const renderSetSearch = () => {
    const productNumberOnChange = () => {
      console.log(productNumberRef.current.state.checked);
    };
    const connectProductIDOnChange = () => {
      console.log(connectProductIDRef.current.state.checked);
    };
    const constproductSearchDescOnChange = (e) => {
      setProductSearchDescState(e.target.defaultValue)
    };

    return (
      <Search>
        <Title>검색어</Title>
        <Propertys>
          {/* <div onClick={testClick}>asdfasdf</div> */}
          <TwoLine>
            <CheckBoxLabelStyled
              onChange={productNumberOnChange}
              label="상품번호"
              ref={productNumberRef}
            />
            <CheckBoxLabelStyled
              onChange={connectProductIDOnChange}
              label="연관상품 ID"
              ref={connectProductIDRef}
            />
          </TwoLine>
          <TextAreaBoxStyled
            onChange={constproductSearchDescOnChange}
            label="복수 검색
          (enter 또는 &#34;,&#34;로 구분)"
            // ref={productSearchDescRef}
          />
          <TextAndInput>
            <BasicTextInputBoxStyled
              textSize="17rem"
              label="대표 상품명"
              ref={titleProductNameRef}
            />
          </TextAndInput>
        </Propertys>
      </Search>
    );
  };

  /////////////////////SetStatus/////////////////////////////////
  const allExhibitCheckRef = useRef(null); //전체체크
  const exhibitStandbyCheckRef = useRef(null); //전시대기 체크
  const exhibitingCheckRef = useRef(null); //전시중 체크
  const stopExhibitCheckRef = useRef(null); //전시중지 체크
  /////////////////////SetStatus/////////////////////////////////

  const renderSetStatus = () => {
    const allExhibitCheckOnChange = () => {
      console.log(allExhibitCheckRef.current.state.checked);
    };
    const exhibitStandbyCheckOnChange = () => {
      console.log(exhibitStandbyCheckRef.current.state.checked);
    };
    const exhibitingCheckOnChange = () => {
      console.log(exhibitingCheckRef.current.state.checked);
    };
    const stopExhibitCheckOnChange = () => {
      console.log(stopExhibitCheckRef.current.state.checked);
    };

    return (
      <SalesStatus>
        <Title>연관상품 전시상태</Title>
        <Propertys>
          <CheckBoxLabelStyled
            onChange={allExhibitCheckOnChange}
            label="전체"
            ref={allExhibitCheckRef}
          />
          <CheckBoxLabelStyled
            onChange={exhibitStandbyCheckOnChange}
            label="전시대기"
            ref={exhibitStandbyCheckRef}
          />
          <CheckBoxLabelStyled
            onChange={exhibitingCheckOnChange}
            label="전시중"
            ref={exhibitingCheckRef}
          />
          <CheckBoxLabelStyled
            onChange={stopExhibitCheckOnChange}
            label="전시중지"
            ref={stopExhibitCheckRef}
          />
        </Propertys>
      </SalesStatus>
    );
  };

  ///////////////////////////SetType//////////////////////////////
  const allTypeCheckRef = useRef(null); //전체
  const bestWidthProductCheckRef = useRef(null); //함께 사면 좋은 상품
  const discountWidthProductCheckRef = useRef(null); //함께 사면 할인 상품
  const similarProductCheckRef = useRef(null); //유사한 상품
  ///////////////////////////SetType//////////////////////////////
  const renderSetType = () => {
    const allTypeCheckRefOnChange = () => {
      console.log(allTypeCheckRef.current.state.checked);
    };
    const bestWidthProductCheckRefOnChange = () => {
      console.log(bestWidthProductCheckRef.current.state.checked);
    };
    const discountWidthProductCheckRefOnChange = () => {
      console.log(discountWidthProductCheckRef.current.state.checked);
    };
    const similarProductCheckRefOnChange = () => {
      console.log(similarProductCheckRef.current.state.checked);
    };

    return (
      <Payment>
        <Title>연관상품 유형</Title>
        <Propertys>
          <CheckBoxLabelStyled
            onChange={allTypeCheckRefOnChange}
            label="전체"
            ref={allTypeCheckRef}
          />
          <CheckBoxLabelStyled
            onChange={bestWidthProductCheckRefOnChange}
            label="함께 사면 좋은 상품"
            ref={bestWidthProductCheckRef}
          />
          <CheckBoxLabelStyled
            onChange={discountWidthProductCheckRefOnChange}
            label="함께 사면 할인 상품"
            ref={discountWidthProductCheckRef}
          />
          <CheckBoxLabelStyled
            onChange={similarProductCheckRefOnChange}
            label="유사한 상품"
            ref={similarProductCheckRef}
          />
        </Propertys>
      </Payment>
    );
  };

  ///////////////////////////SetDateTerm//////////////////////////////
  const startDateRef = useRef(null); //상품 등록 시작일
  const endDateRef = useRef(null); //상품 등록 정지일
  ///////////////////////////SetDateTerm//////////////////////////////

  const renderSetDateTerm = () => {
    const dayBtnOnChange = () => {
      console.log('오늘');
    };
    const weekBtnOnChange = () => {
      console.log('1년');
    };
    const monthBtnOnChange = () => {
      console.log('1개월');
    };
    const threeMonthBtnOnChange = () => {
      console.log('3개월');
    };
    const sixMonthBtnOnChange = () => {
      console.log('6개월');
    };
    const yearBtnOnChange = () => {
      console.log('1년');
    };
    const startDateOnChange = () => {
      console.log(bestWidthProductCheckRef.current);
    };
    const endDateRefOnChange = () => {
      console.log(discountWidthProductCheckRef.current);
    };

    return (
      <DateTerm>
        <Title>연관상품 등록일</Title>
        <Propertys>
          <BasicButtonStyled
            onClick={dayBtnOnChange}
            label="오늘"
            width="8rem"
            height="4rem"
          />
          <BasicButtonStyled
            onClick={weekBtnOnChange}
            label="1주일"
            width="8rem"
            height="4rem"
          />
          <BasicButtonStyled
            onClick={monthBtnOnChange}
            label="1개월"
            width="8rem"
            height="4rem"
          />
          <BasicButtonStyled
            onClick={threeMonthBtnOnChange}
            label="3개월"
            width="8rem"
            height="4rem"
          />
          <BasicButtonStyled
            onClick={sixMonthBtnOnChange}
            label="6개월"
            width="8rem"
            height="4rem"
          />
          <BasicButtonStyled
            onClick={yearBtnOnChange}
            label="1년"
            width="8rem"
            height="4rem"
          />
          <BasicDatePickerStyled
            onChange={startDateOnChange}
            ref={startDateRef}
          />
          ~
          <BasicDatePickerStyled
            onChange={endDateRefOnChange}
            ref={endDateRef}
          />
        </Propertys>
      </DateTerm>
    );
  };

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
              onClick={setSearchBtn}
            />
            <BasicButtonStyled
              label="초기화"
              width="13rem"
              height="5rem"
              marginleft="2rem"
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
        {renderSetStatus()}
        {renderSetType()}
        {renderSetDateTerm()}
        {renderSetSelect()}
      </EditProductSettings>
    </>
  );
};

export default EditConnectProductSetting;