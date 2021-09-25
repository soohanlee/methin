import { useRef, useState, useEffect } from 'react';
import { Modal } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import BasicSelectBox from 'pages/Admin/components/Form/BasicSelectBox';
import BasicTextInputBox from 'pages/Admin/components/Form/BasicTextInputBox';
import BasicDatePicker from 'pages/Admin/components/Form/BasicDatePicker';
import moment from 'moment';

const BasicTextInputBoxStyled = styled(BasicTextInputBox)`
  margin-left: ${(props) => props.left};
  width: 20rem;
`;
const BasicDatePickerStyled = styled(BasicDatePicker)`
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
const ReturnRefusalModal = (property) => {
  const [productShipDateState, setProductShipDateState] = useState();
  const productShipDateInputRef = useRef();
  const [deliveryTypeState, setDeliveryTypeState] = useState();
  const [productShipInfoState, setproductInfoDateState] = useState();
  const [productShipInfoInputState, setProductShipInfoInputState] = useState();
  const productShipInfoInputRef = useRef();

  useEffect(() => {
    resetData();
  }, [property.visible === true]);

  const handleproductShipDate = (value) => {
    setProductShipDateState(value);
  };

  const handleDeliveryType = (value) => {
    setDeliveryTypeState(value);
  };

  const handleProductShipInfo = (value) => {
    setproductInfoDateState(value);
  };

  const handleProductShipInfoInput = (value) => {
    setProductShipInfoInputState(value.target.value);
  };
  const handleOkClick = () => {
    property.onOk();
  };

  const resetData = () => {
    setProductShipDateState(moment());
    setDeliveryTypeState('선택');
    setproductInfoDateState('선택');
    setProductShipInfoInputState('');
  };

  return (
    <>
      <Modal
        title={property.title}
        centered
        visible={property.visible}
        onOk={handleOkClick}
        onCancel={property.onCancel}
        width={700}
        okText="발송처리"
        cancelText="취소"
      >
        <SelectBoxLabelContainer>
          <div>상품 발송일</div>
          <BasicDatePickerStyled
            value={productShipDateState}
            onChange={handleproductShipDate}
            ref={productShipDateInputRef}
            left="9.3rem"
          />
        </SelectBoxLabelContainer>

        <SelectBoxLabelContainer>
          <div>배송방법 선택</div>
          <BasicSelectBoxStyled
            value={deliveryTypeState}
            onChange={handleDeliveryType}
            left="8rem"
            list={WaySelect}
          />
        </SelectBoxLabelContainer>

        <SelectBoxLabelContainer>
          <div>배송정보 입력</div>
          <BasicSelectBoxStyled
            value={productShipInfoState}
            onChange={handleProductShipInfo}
            left="8rem"
            list={companySelect}
          />
          <BasicTextInputBoxStyled
            value={productShipInfoInputState}
            onChange={handleProductShipInfoInput}
            ref={productShipInfoInputRef}
          />
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
