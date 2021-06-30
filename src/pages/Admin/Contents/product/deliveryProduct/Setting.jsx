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
  const [searchValueState, setSearchValueState] = useState(
    'deliveryPriceNames',
  );
  const groupNameInputBoxRef = useRef(null); //배송비 묶음그룹 명 인풋박스
  const searchBtnRef = useRef(null); //검색

  const handleSelectChange = (value) => {
    setSearchValueState(value);
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
            { value: 'deliveryPriceNames', label: '배송비 묶음그룹명' },
            { value: 'deliveryPriceNumbers', label: '배송비 묶음그룹번호' },
          ]}
        />
        <BasicTextInputBoxStyled label="" ref={groupNameInputBoxRef} />
      </>
    );
  };

  const RenderSetSelect = () => {
    const handleSearchBtn = () => {
      let value = groupNameInputBoxRef.current.state.value;
      if (!value) {
        getApiDeliveryData();
      } else {
        getSearchDeliveryData(value);
      }
    };

    const handleResetBtn = () => {
      getApiDeliveryData();
      handleSelectChange('deliveryPriceNames');
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
