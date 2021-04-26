import React, { useRef } from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import BasicSelectBox from 'compononets/Form/BasicSelectBox';
import BasicTextInputBox from 'compononets/Form/BasicTextInputBox';
import BasicButton from 'compononets/Form/BasicButton';

const EditDeliveryTitles = styled.div`
  width: 100%;
  height: 23rem;
  background-color: #ffffff;
  border: 1px solid #f0f0f0;
  margin-bottom: 1.5rem;
`;

const TitleTexts = styled.div`
  display: flex;
  height: 7rem;
  border-bottom: 1px solid #f0f0f0;
  align-items: center;
  background-color: ${(props) => props.backColor};
`;

const TitleText = styled.div`
  padding-left: 9rem;
  font-size: 2rem;
`;

const SubText = styled.div`
  padding-left: 9rem;
  font-size: 1.8rem;
`;

const SelectBoxStyled = styled(BasicSelectBox)`
  width: ${(props) => props.width};
  margin-left: ${(props) => props.marginleft};
`;
const BasicTextInputBoxStyled = styled(BasicTextInputBox)`
  width: 30rem;
`;
const SetMenu = () => {
  const groupNameSelectBox = useRef(null); //배송비 묶음그룹 명 셀렉트박스
  const groupNameInputBox = useRef(null); //배송비 묶음그룹 명 인풋박스
  return (
    <>
      <SelectBoxStyled
        label="배송비 묶음그룹 명"
        ref={groupNameSelectBox}
        width="20rem"
        marginleft="20rem"
      />
      <BasicTextInputBoxStyled label="" ref={groupNameInputBox} />
    </>
  );
};
const Line = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;
const BasicButtonStyled = styled(BasicButton)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-left: ${(props) => props.marginleft};
`;

const SetSelect = () => {
  const setSearchBtn = () => {
    alert('검색 버튼 클릭');
  };

  const setResetBtn = () => {
    alert('초기화 버튼 클릭');
  };

  const searchBtn = useRef(null); //검색

  return (
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
  );
};

const editDeliveryProductSetting = () => {
  return (
    <EditDeliveryTitles>
      <TitleTexts>
        <TitleText>배송비 묶음그룹 관리 </TitleText>
      </TitleTexts>
      <TitleTexts backColor="#F8F9FD">
        <SubText>검색어 </SubText>
        {SetMenu()}
      </TitleTexts>
      {SetSelect()}
    </EditDeliveryTitles>
  );
};

export default editDeliveryProductSetting;