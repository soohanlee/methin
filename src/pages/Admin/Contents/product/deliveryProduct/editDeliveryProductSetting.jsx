import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import BasicSelectBox from 'pages/Admin/components/Form/BasicSelectBox';
import BasicTextInputBox from 'pages/Admin/components/Form/BasicTextInputBox';
import BasicButton from 'pages/Admin/components/Form/BasicButton';
import { allDeliveryProduct, searchDeliveryProduct } from 'apis/delivery';

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

const getAllDeliveryData = () => {
  const result = allDeliveryProduct();
};

const EditDeliveryProductSetting = () => {
  const [searchValue, setSearchValue] = useState('');
  let groupNameSelectBox = useRef(null); //배송비 묶음그룹 명 셀렉트박스
  const groupNameInputBox = useRef(null); //배송비 묶음그룹 명 인풋박스
  const searchBtn = useRef(null); //검색

  const handleSelectChange = (value) => {
    console.log(value);
    setSearchValue(value);
  };

  useEffect(() => {
    if (searchValue === '') {
      getAllDeliveryData();
      setSearchValue('deliveryPriceNames');
    }

    return () => {
      setSearchValue('deliveryPriceNames');
    }
  }, []);

  const RenderSetMenu = () => {
    return (
      <>
        <SelectBoxStyled
          label="배송비 묶음그룹명"
          width="20rem"
          marginleft="20rem"
          onChange={handleSelectChange}
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
      const result = searchDeliveryProduct(searchValue);
    };

    const setResetBtn = () => {
      alert('초기화 버튼 클릭');
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
