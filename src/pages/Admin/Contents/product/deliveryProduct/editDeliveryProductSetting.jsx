import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import BasicSelectBox from 'pages/Admin/components/Form/BasicSelectBox';
import BasicTextInputBox from 'pages/Admin/components/Form/BasicTextInputBox';
import BasicButton from 'pages/Admin/components/Form/BasicButton';
import { notification } from 'utils/notification';

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



const EditDeliveryProductSetting = ({getAllDeliveryData,getSearchDeliveryData}) => {
  const [searchValue, setSearchValue] = useState('deliveryPriceNames');
  const groupNameInputBox = useRef(null); //배송비 묶음그룹 명 인풋박스
  const searchBtn = useRef(null); //검색

  const handleSelectChange = (value) => {
    console.log(value);
    setSearchValue(value);
  };

  useEffect(async() => {
    console.log(12312)
      await getAllDeliveryData();
  }, []);

  const RenderSetMenu = () => {
    return (
      <>
        <SelectBoxStyled
          label="배송비 묶음그룹명"
          width="20rem"
          marginleft="20rem"
          onChange={handleSelectChange}
          value = {searchValue}
          list={[
            { value: 'deliveryPriceNames', label: '배송비 묶음그룹명' },
            { value: 'deliveryPriceNumbers', label: '배송비 묶음그룹번호' },
          ]}
        />
        <BasicTextInputBoxStyled label="" ref={groupNameInputBox} />
      </>
    );
  };

  const RenderSetSelect = () => {
    const setSearchBtn = () => {
      getSearchDeliveryData(1);
    };

    const setResetBtn = () => {
      notification.success('초기화 완료');
      handleSelectChange("deliveryPriceNames");
    };

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

  return (
    <EditDeliveryTitles>
      <TitleTexts>
        <TitleText>배송비 묶음그룹 관리 </TitleText>
      </TitleTexts>
      <TitleTexts backColor="#F8F9FD">
        <SubText>검색어 </SubText>
        {RenderSetMenu()}
      </TitleTexts>
      {RenderSetSelect()}
    </EditDeliveryTitles>
  );
};

export default EditDeliveryProductSetting;
