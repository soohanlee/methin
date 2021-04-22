import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { css } from 'styled-components';
import CheckBoxLabel from 'compononets/Form/CheckBoxLabel';
import TextAreaBox from 'compononets/Form/TextAreaBox';
import BasicTextInputBox from 'compononets/Form/BasicTextInputBox';
import BasicDropBox from 'compononets/Form/BasicDropBox';
import BasicButton from 'compononets/Form/BasicButton';
import BasicDatePicker from 'compononets/Form/BasicDatePicker';

const EditProductSettings = styled.div`
  width: 100%;
  height: 77rem;
  background-color: #ffffff;
  border: 1px solid gray;
  padding-left: 5rem;
  padding-right: 5rem;
`;

const TapTerm = css`
  width: 100%;
  height: 10rem;
  background-color: #ffffff;
  border-bottom: 1px solid gray;
  display: flex;
  padding-top: 1.5rem;
  justify-content: ${(props) => props.justify};

`;

const Propertys = styled.div`
  display: flex;
  padding-left: 8rem;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  width : ${(props) => props.width};
  
`;

const Line = styled.div`
  display: flex;
padding-left : 35%;
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
  margin-bottom: 3rem;
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
  width: 10rem;
  margin-top: 1rem;
`;

const SalesStatus = styled.div`
  ${TapTerm};
`;

const Category = styled.div`
  ${TapTerm};
`;

const BasicDropBoxStyled = styled(BasicDropBox)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding-left: ${(props) => props.paddingleft};
  margin-left: ${(props) => props.marginleft};
  margin-right: 5rem;
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

const SetSearch = () => {
  // const [productNumber, setProductNumber] = useState("")
  const productNumberRef = useRef(null); //상품 번호
  const sellerProductCode = useRef(null); //판매자 상품 코드

  const productSearchDesc = useRef(null); //상품 복수 검색

  const productName = useRef(null); //상품명
  const modelName = useRef(null); //모델명
  const makeName = useRef(null); //제조사명
  const brandeName = useRef(null); //브랜드명

  console.log(productNumberRef)

  const testClick = () => {
    console.log(productNumberRef.current.state.checked)
  }

  return (
    <Search>
      <Title>검색어</Title>
      <Propertys>
        {/* <div onClick={testClick}>asdfasdf</div> */}
        <TwoLine>
          <CheckBoxLabelStyled label="상품번호" ref={productNumberRef} />
          <CheckBoxLabelStyled label="판매자 상품 코드" ref={sellerProductCode}/>
        </TwoLine>
        <TextAreaBoxStyled
          label="복수 검색
          (enter 또는 &#34;,&#34;로 구분)"
          ref={productSearchDesc}
        />
        <TwoLine>
          <TextAndInput>
            <BasicTextInputBoxStyled label="상품명"  ref={productName}/>
          </TextAndInput>
          <TextAndInput>
            <BasicTextInputBoxStyled label="모델명" ref={modelName} />
          </TextAndInput>
        </TwoLine>

        <TwoLine>
          <TextAndInput>
            <BasicTextInputBoxStyled label="제조사명" ref={makeName}/>
          </TextAndInput>
          <TextAndInput>
            <BasicTextInputBoxStyled label="브랜드명" ref={brandeName}/>
          </TextAndInput>
        </TwoLine>
      </Propertys>
    </Search>
  );
};

const SetSalesStatus = () => {

  const allSalesCheck = useRef(null); //전체체크
  const saleNowCheck = useRef(null); //판매중 체크
  const soldOutCheck = useRef(null); //품절 체크
  const stopSaleCheck = useRef(null); //판매중지 체크
  const endSaleCheck = useRef(null); //판매종료 체크

  return (
    <SalesStatus>
      <Title>판매상태</Title>
      <Propertys>
        <CheckBoxLabelStyled label="전체" ref={allSalesCheck}/>
        <CheckBoxLabelStyled label="판매중" ref={saleNowCheck}/>
        <CheckBoxLabelStyled label="품절" ref={soldOutCheck}/>
        <CheckBoxLabelStyled label="판매중지" ref={stopSaleCheck}/>
        <CheckBoxLabelStyled label="판매종료" ref={endSaleCheck}/>
      </Propertys>
    </SalesStatus>
  );
};

const SetCategory = () => {
  const bigGroup = useRef(null); //대분류
  const middleGroup = useRef(null); //중분류
  const smallGroup = useRef(null); //소분류
  const attributeGroup = useRef(null); //세분류
  return (
    <Category>
      <Title>카테고리</Title>
      <Propertys>
        <BasicDropBoxStyled label="대분류" width="20rem" ref={bigGroup} />
        <BasicDropBoxStyled label="중분류" width="20rem" ref={middleGroup}/>
        <BasicDropBoxStyled label="소분류" width="20rem" ref={smallGroup}/>
        <BasicDropBoxStyled label="세분류" width="20rem" ref={attributeGroup}/>

      </Propertys>
    </Category>
  );
};

const SetChannel = () => {

  const allChannelCheck = useRef(null); //전체
  const smartstoreCheck = useRef(null); //스마트스토어
  const shopingCheck = useRef(null); //쇼핑윈도

  return (
    <Channel>
      <Title>채널</Title>
      <Propertys>
        <CheckBoxLabelStyled label="전체" ref={allChannelCheck}/>
        <CheckBoxLabelStyled label="스마트 스토어" ref={smartstoreCheck}/>
        <CheckBoxLabelStyled label="쇼핑윈도" ref={shopingCheck}/>
      </Propertys>
    </Channel>
  );
};

const SetPayment = () => {

  const allPaymentCheck = useRef(null); //전체
  const possibleProductCheck = useRef(null); //결제가능상품
  const impossibleProductCheck = useRef(null); //결제불가능 상품

  return (
    <Payment>
      <Title>결제여부</Title>
      <Propertys>
        <CheckBoxLabelStyled label="전체" ref={allPaymentCheck}/>
        <CheckBoxLabelStyled label="결제가능 상품" ref={possibleProductCheck}/>
        <CheckBoxLabelStyled label="결제불가능 상품" ref={impossibleProductCheck}/>
      </Propertys>
    </Payment>
  );
};

const SetDateTerm = () => {

  const productRegistDropbox = useRef(null); //상품등록일
  const dayBtn = useRef(null); //오늘
  const weekBtn = useRef(null); //1주일
  const monthBtn = useRef(null); //1개월
  const threeMonthBtn = useRef(null); //3개월
  const sixMonthBtn = useRef(null); //6개월
  const yearBtn = useRef(null); //1년
  const startDate = useRef(null); //상품 등록 시작일
  const endDate = useRef(null); //상품 등록 정지일

  return (
    <DateTerm>
      <Title>카테고리</Title>
      <Propertys>
        <BasicDropBoxStyled label="상품등록일" width="13rem" height="7rem" ref={productRegistDropbox}/>
        <BasicButtonStyled label="오늘" width="8rem" height="4rem" ref={dayBtn}/>
        <BasicButtonStyled label="1주일" width="8rem" height="4rem" ref={weekBtn}/>
        <BasicButtonStyled label="1개월" width="8rem" height="4rem" ref={monthBtn}/>
        <BasicButtonStyled label="3개월" width="8rem" height="4rem" ref={threeMonthBtn}/>
        <BasicButtonStyled label="6개월" width="8rem" height="4rem" ref={sixMonthBtn}/>
        <BasicButtonStyled label="1년" width="8rem" height="4rem" ref={yearBtn}/>
        <BasicDatePickerStyled ref={startDate}/>
        ~
        <BasicDatePickerStyled ref={endDate}/>
      </Propertys>
    </DateTerm>
  );
};

const SetSelect = () => {

  const setSearchBtn = () => {
    alert("검색 버튼 클릭")
  }

  const setResetBtn = () => {
    alert("초기화 버튼 클릭")
  }

  const searchBtn = useRef(null); //검색
  const detailSearchBtn = useRef(null); //상세검색

  return (
    <Select justify = "center" >
      <Propertys width = "150rem">
        <Line>
        <BasicButtonStyled
          label="검색"
          width="13rem"
          height="5rem"
          type="primary"
          ref={searchBtn}
          onClick = {setSearchBtn}
        />
        <BasicButtonStyled
          label="초기화"
          width="13rem"
          height="5rem"
          marginleft="2rem"
          onClick = {setResetBtn}
        />
        </Line>
        <BasicDropBoxStyled
          label="상세검색"
          width="13rem"
          height="5rem"
          ref={detailSearchBtn}
        />
      </Propertys>
    </Select>
  );
};

const EditProductSetting = () => {
  return (
    <>
      <EditProductSettings>
        {SetSearch()}
        {SetSalesStatus()}
        {SetCategory()}
        {SetChannel()}
        {SetPayment()}
        {SetDateTerm()}
        {SetSelect()}
      </EditProductSettings>
    </>
  );
};

export default EditProductSetting;