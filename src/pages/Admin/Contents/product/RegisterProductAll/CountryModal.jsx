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

const CountryModal = ({
  title,
  visible,
  setVisible,
  onClick,
  countryRef,
  setConturySelect,
}) => {
  const [categoryIndexState, setCategoryIndexState] = useState(0);

  const handleCountryCheck = (e) => {
    setConturySelect(e.target.value);
  };
  const handleAdressCheck = (e) => {
    setCategoryIndexState(e);
  };

  const handleOkBtn = () => {
    setVisible(false);
    onClick();
  };
  return (
    <>
      <Modal
        title={title}
        centered
        visible={visible}
        onOk={handleOkBtn}
        onCancel={() => {
          setVisible(false);
        }}
        width={900}
        okText="확인"
        cancelText="닫기"
      >
        <BasicButtonStyled
          onClick={() => {
            setCategoryIndexState(0);
          }}
          label="전체코드 다운로드"
        ></BasicButtonStyled>
        <ContainerStyled>
          <SubContainerStyled>
            <TitleTextStyled>원산지</TitleTextStyled>
            <Radio.Group onChange={handleCountryCheck}>
              <Radio value="korea">국산</Radio>
              <Radio value="oceanic">원양산</Radio>
              <Radio value="Income">수입산</Radio>
              <Radio value="etc">기타</Radio>
            </Radio.Group>
          </SubContainerStyled>

          <SubContainerStyled>
            <TitleTextStyled>상세지역</TitleTextStyled>
            <BasicSelectBox list={list} onChange={handleAdressCheck} />
            <BasicSelectBox />
          </SubContainerStyled>

          <SubContainerStyled>
            <TitleTextStyled>원산지 코드</TitleTextStyled>
            <BasicTextInputBoxStyled ref={countryRef} />
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
