import { useRef, useState } from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import BasicSelectBox from 'pages/Admin/components/Form/BasicSelectBox';
import BasicTextInputBox from 'pages/Admin/components/Form/BasicTextInputBox';
import BasicButton from 'pages/Admin/components/Form/BasicButton';

const DeliveryTitles = styled.div`
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

const Setting = ({
  getSearchDeliveryData,
  getApiDeliveryData,
  initDeliveryData,
}) => {
  const [searchValueState, setSearchValueState] = useState(0);
  const [groupNameInputBoxState, setGroupNameInputBoxState] = useState('');
  const groupNameInputBoxRef = useRef(null); //배송비 묶음그룹 명 인풋박스
  const searchBtnRef = useRef(null); //검색

  const handleSelectChange = (value) => {
    setSearchValueState(value);
    setGroupNameInputBoxState('');
  };

  const handleInputbox = (value) => {
    setGroupNameInputBoxState(value.target.value);
  };

  const RenderSetMenu = () => {
    return (
      <>
        <SelectBoxStyled
          label="배송비 묶음그룹명"
          width="20rem"
          marginleft="20rem"
          onChange={handleSelectChange}
          value={searchValueState}
          list={[
            { value: 0, label: '배송비 묶음그룹명' },
            { value: 1, label: '배송비 묶음그룹번호' },
          ]}
        />
        <BasicTextInputBoxStyled
          label=""
          ref={groupNameInputBoxRef}
          onChange={handleInputbox}
          value={groupNameInputBoxState}
        />
      </>
    );
  };

  const RenderSetSelect = () => {
    const handleSearchBtn = () => {
      console.log(searchValueState); //배송비 드랍박스
      console.log(groupNameInputBoxRef.current.state.value); //배송비 인풋

      let value = groupNameInputBoxRef.current.state.value;
      if (!value) {
        getApiDeliveryData();
      } else {
        getSearchDeliveryData(value);
      }
    };

    const handleResetBtn = () => {
      handleSelectChange(0);
    };

    return (
      <Line>
        <BasicButtonStyled
          label="검색"
          width="13rem"
          height="5rem"
          type="primary"
          ref={searchBtnRef}
          onClick={handleSearchBtn}
        />
        <BasicButtonStyled
          label="초기화"
          width="13rem"
          height="5rem"
          marginleft="2rem"
          onClick={handleResetBtn}
        />
      </Line>
    );
  };

  return (
    <DeliveryTitles>
      <TitleTexts>
        <TitleText>배송비 묶음그룹 관리 </TitleText>
      </TitleTexts>
      <TitleTexts backColor="#F8F9FD">
        <SubText>검색어 </SubText>
        {RenderSetMenu()}
      </TitleTexts>
      {RenderSetSelect()}
    </DeliveryTitles>
  );
};

export default Setting;
