import React, { useRef } from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { css } from 'styled-components';
import CheckBoxLabel from 'compononets/Form/CheckBoxLabel';
import TextAreaBox from 'compononets/Form/TextAreaBox';
import BasicTextInputBox from 'compononets/Form/BasicTextInputBox';
import BasicButton from 'compononets/Form/BasicButton';
import BasicDatePicker from 'compononets/Form/BasicDatePicker';

const EditProductSettings = styled.div`
  width: 100%;
  height: 67rem;
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

const SetSearch = () => {
  // const [productNumber, setProductNumber] = useState("")
  const productNumberRef = useRef(null); //상품 번호
  const connectProductID = useRef(null); //연관상품 ID

  const productSearchDesc = useRef(null); //상품 복수 검색

  const titleProductNmae = useRef(null); //대표 상품명

  return (
    <Search>
      <Title>검색어</Title>
      <Propertys>
        {/* <div onClick={testClick}>asdfasdf</div> */}
        <TwoLine>
          <CheckBoxLabelStyled label="상품번호" ref={productNumberRef} />
          <CheckBoxLabelStyled label="연관상품 ID" ref={connectProductID} />
        </TwoLine>
        <TextAreaBoxStyled
          label="복수 검색
          (enter 또는 &#34;,&#34;로 구분)"
          ref={productSearchDesc}
        />
        <TextAndInput>
          <BasicTextInputBoxStyled
            textSize="10rem"
            label="대표 상품명"
            ref={titleProductNmae}
          />
        </TextAndInput>
      </Propertys>
    </Search>
  );
};

const SetStatus = () => {
  const allExhibitCheck = useRef(null); //전체체크
  const exhibitStandbyCheck = useRef(null); //전시대기 체크
  const exhibitingCheck = useRef(null); //전시중 체크
  const stopExhibitCheck = useRef(null); //전시중지 체크

  return (
    <SalesStatus>
      <Title>연관상품 전시상태</Title>
      <Propertys>
        <CheckBoxLabelStyled label="전체" ref={allExhibitCheck} />
        <CheckBoxLabelStyled label="전시대기" ref={exhibitStandbyCheck} />
        <CheckBoxLabelStyled label="전시중" ref={exhibitingCheck} />
        <CheckBoxLabelStyled label="전시중지" ref={stopExhibitCheck} />
      </Propertys>
    </SalesStatus>
  );
};

const SetChannel = () => {
  const allChannelCheck = useRef(null); //전체

  return (
    <Channel>
      <Title>연관상품 노출채널</Title>
      <Propertys>
        <CheckBoxLabelStyled label="전체" ref={allChannelCheck} />
      </Propertys>
    </Channel>
  );
};

const SetType = () => {
  const allTypeCheck = useRef(null); //전체
  const stylistProductCheck = useRef(null); //코디 상품
  const bestWidthProductCheck = useRef(null); //함께 사면 좋은 상품
  const discountWidthProductCheck = useRef(null); //함께 사면 할인 상품
  const similarProductCheck = useRef(null); //유사한 상품

  return (
    <Payment>
      <Title>연관상품 유형</Title>
      <Propertys>
        <CheckBoxLabelStyled label="전체" ref={allTypeCheck} />
        <CheckBoxLabelStyled label="코디 상품" ref={stylistProductCheck} />
        <CheckBoxLabelStyled
          label="함께 사면 좋은 상품"
          ref={bestWidthProductCheck}
        />
        <CheckBoxLabelStyled
          label="함께 사면 할인 상품"
          ref={discountWidthProductCheck}
        />
        <CheckBoxLabelStyled label="유사한 상품" ref={similarProductCheck} />
      </Propertys>
    </Payment>
  );
};

const SetDateTerm = () => {
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
      <Title>연관상품 등록일</Title>
      <Propertys>
        <BasicButtonStyled
          label="오늘"
          width="8rem"
          height="4rem"
          ref={dayBtn}
        />
        <BasicButtonStyled
          label="1주일"
          width="8rem"
          height="4rem"
          ref={weekBtn}
        />
        <BasicButtonStyled
          label="1개월"
          width="8rem"
          height="4rem"
          ref={monthBtn}
        />
        <BasicButtonStyled
          label="3개월"
          width="8rem"
          height="4rem"
          ref={threeMonthBtn}
        />
        <BasicButtonStyled
          label="6개월"
          width="8rem"
          height="4rem"
          ref={sixMonthBtn}
        />
        <BasicButtonStyled
          label="1년"
          width="8rem"
          height="4rem"
          ref={yearBtn}
        />
        <BasicDatePickerStyled ref={startDate} />
        ~
        <BasicDatePickerStyled ref={endDate} />
      </Propertys>
    </DateTerm>
  );
};

const SetSelect = () => {
  const setSearchBtn = () => {
    alert('검색 버튼 클릭');
  };

  const setResetBtn = () => {
    alert('초기화 버튼 클릭');
  };

  const searchBtn = useRef(null); //검색

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

const EditConnectProductSetting = () => {
  return (
    <>
      <EditProductSettings>
        {SetSearch()}
        {SetStatus()}
        {SetChannel()}
        {SetType()}
        {SetDateTerm()}
        {SetSelect()}
      </EditProductSettings>
    </>
  );
};

export default EditConnectProductSetting;
