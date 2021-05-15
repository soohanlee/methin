import 'antd/dist/antd.css';
import { Modal } from 'antd';
import styled from 'styled-components';
import BasicTextInputBox from 'pages/Admin/components/Form/BasicTextInputBox';
import CheckBoxLabel from 'pages/Admin/components/Form/CheckBoxLabel';
import 'antd/dist/antd.css';
import { Radio } from 'antd';

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

const DeliveryUpdateModal = (property) => {
  const okClick = () => {
    property.setVisible(false);
    property.onClick();
  };

  const onUseBtnClick = (e) => {
    property.setUseStatusState(e.target.value);
  };

  const onCalculationWayBtnClick = (e) => {
    property.setCalculationWayState(e.target.value);
  };

  const onAddPriceBtnClick = (e) => {
    property.setAddPriceState(e.target.value);
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
        okText="저장"
        cancelText="닫기"
      >
        <DeliveryModalBox>
          <DeliveryModalContent>
            <ContentTitle>묶음그룹명</ContentTitle>
            <BasicTextInputBox ref={property.groupNamesRef}></BasicTextInputBox>
          </DeliveryModalContent>

          <DeliveryModalContent>
            <ContentTitle>사용여부</ContentTitle>
            <Radio.Group onChange={onUseBtnClick}>
              <Radio value="use">사용</Radio>
              <Radio value="notuse">사용안함</Radio>
              <Radio value="default">기본 그룹으로 설정</Radio>
            </Radio.Group>
          </DeliveryModalContent>

          <DeliveryModalContent>
            <ContentTitle>계산방식</ContentTitle>
            <Radio.Group onChange={onCalculationWayBtnClick}>
              <Radio value="min">묶음 그룹에서 가장 작은 배송비로 부가</Radio>
              <Radio value="max">묶음 그룹에서 가장 큰 배송비로 부가</Radio>
            </Radio.Group>
          </DeliveryModalContent>

          <DeliveryModalContent>
            <ContentTitle>제주/도서산간 추가배송비</ContentTitle>
            <Radio.Group onChange={onAddPriceBtnClick}>
              <Radio value="use">설정함</Radio>
              <Radio value="notuse">설정안함</Radio>
            </Radio.Group>
          </DeliveryModalContent>
        </DeliveryModalBox>
      </Modal>
    </>
  );
};
export default DeliveryUpdateModal;
