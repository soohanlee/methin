import { useState } from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Modal, Radio } from 'antd';
import BasicTextInputBox from 'pages/Admin/components/Form/BasicTextInputBox';
import BasicButton from 'pages/Admin/components/Form/BasicButton';
import BasicSelectBox from 'pages/Admin/components/Form/BasicSelectBox';

const ContainerStyled = styled.div`
  padding: 2rem;
  padding-bottom: 0px;
  border: 1px solid #f0f0f0;
`;

const SubContainerStyled = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 2rem;
  align-items: center;
`;

const TitleTextStyled = styled.div`
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
        <ContainerStyled>
          <SubContainerStyled>
            <TitleTextStyled>원산지</TitleTextStyled>
            <Radio.Group onChange={onCountryBtnClick}>
              <Radio value="korea">국산</Radio>
              <Radio value="oceanic">원양산</Radio>
              <Radio value="Income">수입산</Radio>
              <Radio value="etc">기타</Radio>
            </Radio.Group>
          </SubContainerStyled>

          <SubContainerStyled>
            <TitleTextStyled>상세지역</TitleTextStyled>
            <BasicSelectBox list={list} onChange={onAdressBtnClick} />
            <BasicSelectBox />
          </SubContainerStyled>

          <SubContainerStyled>
            <TitleTextStyled>원산지 코드</TitleTextStyled>
            <BasicTextInputBoxStyled ref={property.countryRef} />
          </SubContainerStyled>
        </ContainerStyled>
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
