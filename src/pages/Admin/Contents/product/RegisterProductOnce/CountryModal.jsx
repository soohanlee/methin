import 'antd/dist/antd.css';
import { Modal } from 'antd';
import styled from 'styled-components';
import BasicTextInputBox from 'pages/Admin/components/Form/BasicTextInputBox';
import CheckBoxLabel from 'pages/Admin/components/Form/CheckBoxLabel';
import BasicButton from 'pages/Admin/components/Form/BasicButton';
import 'antd/dist/antd.css';
import { Radio } from 'antd';
import React, { useRef, useState } from 'react';
import BasicSelectBox from 'pages/Admin/components/Form/BasicSelectBox';

const ItemContainer = styled.div`
  display: flex;
`;

const ItemBox = styled.div`
  max-width: 30rem;
  width: 100%;
  border: 1px solid black;
  margin-right: 1rem;
`;

const ItemHeader = styled.div`
  border-bottom: 0.1rem solid black;
`;

const ItemBody = styled.div`
  height: 30rem;
  overflow-y: auto;
`;

const Item = styled.div`
  background: ${(props) => (props.isClicked ? 'lightgrey' : 'white')};
`;

const CategoryModalBox = styled.div`
  padding: 2rem;
  padding-bottom: 0px;
  border: 1px solid #f0f0f0;
`;

const CategoryModalContent = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 2rem;
  align-items: center;
`;

const ContentTitle = styled.div`
  margin-right: 3rem;
`;

const BasicTextInputBoxStyled = styled(BasicTextInputBox)`
  width: 58rem;
  margin-right: 3rem;
`;

const BasicButtonStyled = styled(BasicButton)`
  margin-bottom: 1rem;
`;

const CountryModal = (property) => {
  const [categoryIndex, setCategoryIndex] = useState(0);

  const onCountryBtnClick = (e) => {
    property.setConturySelect(e.target.value);
  };
  const onAdressBtnClick = (e) => {
    property.setAdressSelect(e);
  };

  const okClick = () => {
    property.setVisible(false);
    property.onClick();
  };
  return (
    <>
      <Modal
        title={property.title}
        centered
        visible={property.visible}
        onOk={okClick}
        onCancel={() => {
          property.setVisible(false);
        }}
        width={900}
        okText="확인"
        cancelText="닫기"
      >
        <BasicButtonStyled
          onClick={() => {
            setCategoryIndex(0);
          }}
          label="전체코드 다운로드"
        ></BasicButtonStyled>
        <CategoryModalBox>
          <CategoryModalContent>
            <ContentTitle>원산지</ContentTitle>
            <Radio.Group onChange={onCountryBtnClick}>
              <Radio value="korea">국산</Radio>
              <Radio value="oceanic">원양산</Radio>
              <Radio value="Income">수입산</Radio>
              <Radio value="etc">기타</Radio>
            </Radio.Group>
          </CategoryModalContent>

          <CategoryModalContent>
            <ContentTitle>상세지역</ContentTitle>
            <BasicSelectBox list={list} onChange={onAdressBtnClick} />
            <BasicSelectBox />
          </CategoryModalContent>

          <CategoryModalContent>
            <ContentTitle>원산지 코드</ContentTitle>
            <BasicTextInputBoxStyled ref={property.countryRef} />
          </CategoryModalContent>
        </CategoryModalBox>
      </Modal>
    </>
  );
};
export default CountryModal;

const list = [
  { value: '1', label: '강원도' },
  { value: '2', label: '경기도' },
  { value: '3', label: '경상남도' },
  { value: '4', label: '경상북도' },
];
