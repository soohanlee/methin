import { Modal } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import BasicSelectBox from 'pages/Admin/components/Form/BasicSelectBox';
import BasicTextInputBox from 'pages/Admin/components/Form/BasicTextInputBox';

const ReturnRefusalModal = (property) => {
  const BasicTextInputBoxStyled = styled(BasicTextInputBox)`
    margin-left: ${(props) => props.left};
    width: 20rem;
  `;
  const BasicSelectBoxStyled = styled(BasicSelectBox)`
    margin-left: ${(props) => props.left};
    width: 20rem;
  `;

  const SelectBoxLabelContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: ${(props) => props.left};
    margin-top: 1rem;
  `;

  const okClick = () => {
    property.onOk();
  };

  return (
    <>
      <Modal
        title={property.title}
        centered
        visible={property.visible}
        onOk={okClick}
        onCancel={property.onCancel}
        width={700}
        okText="발송처리"
        cancelText="취소"
      >
        <SelectBoxLabelContainer>
          <div>상품 발송일</div>
          <BasicTextInputBoxStyled left="8.5rem" />
        </SelectBoxLabelContainer>

        <SelectBoxLabelContainer>
          <div>배송방법 선택</div>
          <BasicSelectBoxStyled left="8rem" list={WaySelect} />
        </SelectBoxLabelContainer>

        <SelectBoxLabelContainer>
          <div>배송정보 입력</div>
          <BasicSelectBoxStyled left="8rem" list={companySelect} />
          <BasicTextInputBoxStyled />
        </SelectBoxLabelContainer>
      </Modal>
    </>
  );
};
export default ReturnRefusalModal;

const WaySelect = [
  { value: '0', label: '택배,등기,소포' },
  { value: '1', label: '뭐들어가지' },
  { value: '2', label: '뭐들어가지2' },
  { value: '3', label: '뭐들어가지3' },
];

const companySelect = [
  { value: '0', label: '택배사 선택' },
  { value: '1', label: '뭐들어가지' },
  { value: '2', label: '뭐들어가지2' },
  { value: '3', label: '뭐들어가지3' },
];
