import React from 'react';
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
  return (
    <Search>
      <Title>검색어</Title>
      <Propertys>
        <TwoLine>
          <CheckBoxLabelStyled label="상품번호" />
          <CheckBoxLabelStyled label="판매자 상품 코드" />
        </TwoLine>
        <TextAreaBoxStyled
          label="복수 검색
          (enter 또는 &#34;,&#34;로 구분)"
        />
        <TwoLine>
          <TextAndInput>
            <BasicTextInputBoxStyled label="상품명" />
          </TextAndInput>
          <TextAndInput>
            <BasicTextInputBoxStyled label="모델명" />
          </TextAndInput>
        </TwoLine>

        <TwoLine>
          <TextAndInput>
            <BasicTextInputBoxStyled label="제조사명" />
          </TextAndInput>
          <TextAndInput>
            <BasicTextInputBoxStyled label="브랜드명" />
          </TextAndInput>
        </TwoLine>
      </Propertys>
    </Search>
  );
};

const SetSalesStatus = () => {
  return (
    <SalesStatus>
      <Title>판매상태</Title>
      <Propertys>
        <CheckBoxLabelStyled label="전체" />
        <CheckBoxLabelStyled label="판매중" />
        <CheckBoxLabelStyled label="품절" />
        <CheckBoxLabelStyled label="판매중지" />
        <CheckBoxLabelStyled label="판매종료" />
      </Propertys>
    </SalesStatus>
  );
};

const SetCategory = () => {
  return (
    <Category>
      <Title>카테고리</Title>
      <Propertys>
        <BasicDropBoxStyled label="대분류" width="20rem" />
        <BasicDropBoxStyled label="중분류" width="20rem" />
        <BasicDropBoxStyled label="소분류" width="20rem" />
        <BasicDropBoxStyled label="세분류" width="20rem" />
      </Propertys>
    </Category>
  );
};

const SetChannel = () => {
  return (
    <Channel>
      <Title>채널</Title>
      <Propertys>
        <CheckBoxLabelStyled label="전체" />
        <CheckBoxLabelStyled label="스마트 스토어" />
        <CheckBoxLabelStyled label="쇼핑윈도" />
      </Propertys>
    </Channel>
  );
};

const SetPayment = () => {
  return (
    <Payment>
      <Title>결제여부</Title>
      <Propertys>
        <CheckBoxLabelStyled label="전체" />
        <CheckBoxLabelStyled label="결제가능 상품" />
        <CheckBoxLabelStyled label="결제불가능 상품" />
      </Propertys>
    </Payment>
  );
};

const SetDateTerm = () => {
  return (
    <DateTerm>
      <Title>카테고리</Title>
      <Propertys>
        <BasicDropBoxStyled label="상품등록일" width="13rem" height="7rem" />
        <BasicButtonStyled label="오늘" width="8rem" height="4rem" />
        <BasicButtonStyled label="1주일" width="8rem" height="4rem" />
        <BasicButtonStyled label="1개월" width="8rem" height="4rem" />
        <BasicButtonStyled label="3개월" width="8rem" height="4rem" />
        <BasicButtonStyled label="6개월" width="8rem" height="4rem" />
        <BasicButtonStyled label="1년" width="8rem" height="4rem" />
        <BasicDatePickerStyled />
        ~
        <BasicDatePickerStyled />
      </Propertys>
    </DateTerm>
  );
};

const SetSelect = () => {
  return (
    <Select justify = "center" >
      <Propertys width = "150rem">
        <Line>
        <BasicButtonStyled
          label="검색"
          width="13rem"
          height="5rem"
          type="primary"
        />
        <BasicButtonStyled
          label="초기화"
          width="13rem"
          height="5rem"
          marginleft="2rem"
        />
        </Line>
        
        <BasicDropBoxStyled
          label="상세검색"
          width="13rem"
          height="5rem"
          
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
