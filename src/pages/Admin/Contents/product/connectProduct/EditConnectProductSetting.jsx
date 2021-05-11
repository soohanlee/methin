import React, { useRef } from 'react';
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
  height: 55rem;
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

const SetSearch = (
  productNumberRef,
  connectProductIDRef,
  productSearchDescRef,
  titleProductNmaeRef,
) => {
  const productNumberOnChange = () => {
    console.log(productNumberRef.current.state.checked);
  };
  const connectProductIDOnChange = () => {
    console.log(connectProductIDRef.current.state.checked);
  };
  const constproductSearchDescOnChange = () => {
    console.log(productSearchDescRef.current.state.checked);
  };
  const titleProductNmaeOnChange = () => {
    console.log(titleProductNmaeRef.current.state.checked);
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
          ref={productSearchDescRef}
        />
        <TextAndInput>
          <BasicTextInputBoxStyled
            onChange={titleProductNmaeOnChange}
            textSize="17rem"
            label="대표 상품명"
            ref={titleProductNmaeRef}
          />
        </TextAndInput>
      </Propertys>
    </Search>
  );
};

const SetStatus = (
  allExhibitCheckRef,
  exhibitStandbyCheckRef,
  exhibitingCheckRef,
  stopExhibitCheckRef,
) => {
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
        <CheckBoxLabelStyled label="전체" ref={allExhibitCheckRef} />
        <CheckBoxLabelStyled label="전시대기" ref={exhibitStandbyCheckRef} />
        <CheckBoxLabelStyled label="전시중" ref={exhibitingCheckRef} />
        <CheckBoxLabelStyled label="전시중지" ref={stopExhibitCheckRef} />
      </Propertys>
    </SalesStatus>
  );
};

const SetChannel = (allChannelCheckRef) => {
  const allChannelCheckRefOnChange = () => {
    console.log(allChannelCheckRef.current.state.checked);
  };

  return (
    <Channel>
      <Title>연관상품 노출채널</Title>
      <Propertys>
        <CheckBoxLabelStyled
          onChange={allChannelCheckRefOnChange}
          label="전체"
          ref={allChannelCheckRef}
        />
      </Propertys>
    </Channel>
  );
};

const SetType = (
  allTypeCheckRef,
  stylistProductCheckRef,
  bestWidthProductCheckRef,
  discountWidthProductCheckRef,
  similarProductCheckRef,
) => {
  const allTypeCheckRefOnChange = () => {
    console.log(allTypeCheckRef.current.state.checked);
  };
  const stylistProductCheckRefOnChange = () => {
    console.log(stylistProductCheckRef.current.state.checked);
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
          onChange={stylistProductCheckRefOnChange}
          label="코디 상품"
          ref={stylistProductCheckRef}
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

const SetDateTerm = () => {
  const dayBtnRef = useRef(null); //오늘
  const weekBtnRef = useRef(null); //1주일
  const monthBtnRef = useRef(null); //1개월
  const threeMonthBtnRef = useRef(null); //3개월
  const sixMonthBtnRef = useRef(null); //6개월
  const yearBtnRef = useRef(null); //1년
  const startDateRef = useRef(null); //상품 등록 시작일
  const endDateRef = useRef(null); //상품 등록 정지일

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
  //////////////SetSearch/////////////////////////////////////
  const productNumberRef = useRef(null); //상품 번호
  const connectProductIDRef = useRef(null); //연관상품 ID
  const productSearchDescRef = useRef(null); //상품 복수 검색
  const titleProductNmaeRef = useRef(null); //대표 상품명
  //////////////SetSearch/////////////////////////////////////
  /////////////////////SetStatus/////////////////////////////////
  const allExhibitCheckRef = useRef(null); //전체체크
  const exhibitStandbyCheckRef = useRef(null); //전시대기 체크
  const exhibitingCheckRef = useRef(null); //전시중 체크
  const stopExhibitCheckRef = useRef(null); //전시중지 체크
  /////////////////////SetStatus/////////////////////////////////
  ///////////////////////////SetChannel//////////////////////////
  const allChannelCheckRef = useRef(null); //전체
  ///////////////////////////SetChannel//////////////////////////
  ///////////////////////////SetType//////////////////////////////
  const allTypeCheckRef = useRef(null); //전체
  const stylistProductCheckRef = useRef(null); //코디 상품
  const bestWidthProductCheckRef = useRef(null); //함께 사면 좋은 상품
  const discountWidthProductCheckRef = useRef(null); //함께 사면 할인 상품
  const similarProductCheckRef = useRef(null); //유사한 상품
  ///////////////////////////SetType//////////////////////////////

  return (
    <>
      <EditProductSettings>
        {SetSearch(
          productNumberRef,
          connectProductIDRef,
          productSearchDescRef,
          titleProductNmaeRef,
        )}
        {SetStatus(
          allExhibitCheckRef,
          exhibitStandbyCheckRef,
          exhibitingCheckRef,
          stopExhibitCheckRef,
        )}
        {SetChannel(allChannelCheckRef)}
        {SetType()}
        {SetDateTerm()}
        {SetSelect()}
      </EditProductSettings>
    </>
  );
};

export default EditConnectProductSetting;
