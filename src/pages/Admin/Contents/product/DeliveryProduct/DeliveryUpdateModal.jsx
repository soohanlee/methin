import { useState, useRef, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Checkbox, Modal, Radio } from 'antd';
import styled from 'styled-components';
import BasicTextInputBox from 'pages/Admin/components/Form/BasicTextInputBox';
import BasicSelectBox from 'pages/Admin/components/Form/BasicSelectBox';

const DeliveryModalBox = styled.div`
  padding: 2rem;
  padding-bottom: 0px;
  border: 1px solid #f0f0f0;
`;

const DeliveryModalContent = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 2rem;
  align-items: center;
`;

const ContentTitle = styled.div`
  width: 11rem;
  margin-right: 3rem;
`;

const BlockContent = styled.div`
  float: left;
`;

const BasicSelectBoxStyle = styled(BasicSelectBox)`
  width: 67rem;
  padding-left: 0.7rem;
`;

const BasicInputBoxStyle = styled(BasicTextInputBox)`
  padding-top: 2rem;
  padding-bottom: 2rem;
  height: 1rem;
`;

const TitleText = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const DeliveryUpdateModal = ({
  record,
  type,
  visible,
  setVisible,
  title,
  onClick,
}) => {
  //테이블데이터
  const groupNamesRef = useRef(null);
  const [useStatusState, setUseStatusState] = useState('use');
  const [calculationWayState, setCalculationWayState] = useState('min');
  const [addPriceState, setAddPriceState] = useState('notuse');
  const [groupNameState, setGroupNameState] = useState('');
  const [territoriesInput2State, setTerritoriesInput2State] = useState('');
  const [territoriesInput3State, setTerritoriesInput3State] = useState('');
  const [territoriesSelectState, setTerritoriesSelectState] = useState(
    '배송권역',
  );
  let data;

  useEffect(() => {
    setHistoryData();
  }, [visible]);

  const setHistoryData = () => {
    if (visible === true) {
      if (record) {
        setGroupNameState(record.body);
        setUseStatusState(record.status === '사용' ? 'use' : 'notuse');
        console.log(record);
      }
    }
  };

  const handleOkClick = () => {
    setVisible(false);

    switch (type) {
      case 'modify':
        data = {
          body: groupNamesRef.current.state.value,
          status: useStatusState,
        };
        break;
      case 'add':
        data = {
          body: groupNamesRef.current.state.value,
          amount1: 1000,
          amount2: 2000,
        };
        break;
      default:
        break;
    }
    console.log(groupNamesRef.current.state.value); //묶음그룹명
    console.log(useStatusState); //사용여부
    console.log(calculationWayState); //계산방식
    console.log(addPriceState); //제주 도서산간 비용
    onClick(data);
  };

  const handleUseBtn = (e) => {
    setUseStatusState(e.target.value);
  };

  const handleCalculationWayBtn = (e) => {
    setCalculationWayState(e.target.value);
  };

  const handleGroupNameInput = (e) => {
    setGroupNameState(e.target.value);
  };

  const handleAddPriceBtn = (e) => {
    setAddPriceState(e.target.value);
    setTerritoriesSelectState('배송권역');
    setTerritoriesInput2State('');
    setTerritoriesInput3State('');
  };

  const handleTerritoriesSelectBox = (e) => {
    setTerritoriesSelectState(e);
  };

  const handleTerritoriesInput2Box = (e) => {
    setTerritoriesInput2State(e.target.value);
  };

  const handleTerritoriesInput3Box = (e) => {
    setTerritoriesInput3State(e.target.value);
  };
  const resetData = () => {
    setGroupNameState('');
    setCalculationWayState('min');
    setAddPriceState('notuse');
    setUseStatusState('use');
    setTerritoriesSelectState('배송권역');
    setTerritoriesInput2State('');
    setTerritoriesInput3State('');
  };

  //배송권역
  const deliveryTerritories = () => {
    if (addPriceState === 'use') {
      return (
        <>
          <TitleText>배송권역</TitleText>
          <BasicSelectBoxStyle
            value={territoriesSelectState}
            list={territoriesData}
            onChange={handleTerritoriesSelectBox}
          ></BasicSelectBoxStyle>
        </>
      );
    }
  };

  //제주 추가배송비
  const AddPriceType1 = () => {
    if (territoriesSelectState === '3territories') {
      return (
        <>
          <TitleText>제주 추가배송비</TitleText>
          <BasicInputBoxStyle
            onChange={handleTerritoriesInput2Box}
            value={territoriesInput2State}
          ></BasicInputBoxStyle>
        </>
      );
    }
  };

  //제주 외 도서산간 추가배송비
  const AddPriceType2 = () => {
    if (
      territoriesSelectState === '2territories' ||
      territoriesSelectState === '3territories'
    ) {
      return (
        <>
          {' '}
          <TitleText>제주 외 도서산간 추가배송비</TitleText>
          <BasicInputBoxStyle
            onChange={handleTerritoriesInput3Box}
            value={territoriesInput3State}
          ></BasicInputBoxStyle>
        </>
      );
    }
  };

  return (
    <>
      <Modal
        title={title}
        centered
        visible={visible}
        onOk={() => {
          resetData();
          handleOkClick();
        }}
        onCancel={() => {
          resetData();
          setVisible(false);
        }}
        width={900}
        okText="저장"
        cancelText="닫기"
      >
        <DeliveryModalBox>
          <DeliveryModalContent>
            <ContentTitle>묶음그룹명</ContentTitle>
            <BasicTextInputBox
              value={groupNameState}
              onChange={handleGroupNameInput}
              ref={groupNamesRef}
            ></BasicTextInputBox>
          </DeliveryModalContent>

          <DeliveryModalContent>
            <ContentTitle>사용여부</ContentTitle>
            <Radio.Group value={useStatusState} onChange={handleUseBtn}>
              <Radio value="use">사용</Radio>
              <Radio value="notuse">사용안함</Radio>
            </Radio.Group>
            <Checkbox>기본 그룹으로 설정</Checkbox>
          </DeliveryModalContent>

          <DeliveryModalContent>
            <ContentTitle>계산방식</ContentTitle>
            <Radio.Group
              value={calculationWayState}
              onChange={handleCalculationWayBtn}
            >
              <Radio value="min">묶음 그룹에서 가장 작은 배송비로 부가</Radio>
              <Radio value="max">묶음 그룹에서 가장 큰 배송비로 부가</Radio>
            </Radio.Group>
          </DeliveryModalContent>

          <DeliveryModalContent>
            <ContentTitle>제주/도서산간 추가배송비</ContentTitle>
            <BlockContent>
              <Radio.Group value={addPriceState} onChange={handleAddPriceBtn}>
                <Radio value="use">설정함</Radio>
                <Radio value="notuse">설정안함</Radio>
              </Radio.Group>
              {deliveryTerritories()}
              {AddPriceType1()}
              {AddPriceType2()}
            </BlockContent>
          </DeliveryModalContent>
        </DeliveryModalBox>
      </Modal>
    </>
  );
};
export default DeliveryUpdateModal;

const territoriesData = [
  { value: '2territories', label: '2권역' },
  { value: '3territories', label: '3권역' },
];
