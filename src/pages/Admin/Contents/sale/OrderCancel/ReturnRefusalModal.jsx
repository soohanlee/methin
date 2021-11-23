import { useRef, useState, useEffect } from 'react';
import { Modal } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import BasicSelectBox from 'pages/Admin/components/Form/BasicSelectBox';
import BasicTextInputBox from 'pages/Admin/components/Form/BasicTextInputBox';
import BasicDatePicker from 'pages/Admin/components/Form/BasicDatePicker';
import moment from 'moment';
import { patchCancelReject } from 'apis/payment';

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

  const [shipTypeState, setShipTypeState] = useState(0); //배송방법
  const [shipCompanyState, setShipCompanyState] = useState(0); //택배사
  const [invoiceNumberState, setInvoiceNumberState] = useState([]); //송장번호

  const productShipInfoInputRef = useRef();

  useEffect(() => {
    resetData();
  }, [property.visible === true]);

  const handleproductShipDate = (value) => {
    setProductShipDateState(value);
  };

  const handleShipTypeSelectOnChange = (value) => {
    setShipTypeState(value);
  };

  const handleShipCompanySelectOnChange = (value) => {
    setShipCompanyState(value);
  };

  const handleInvoiceNumChange = (value) => {
    setInvoiceNumberState(value.target.value);
  };

  const handleOkClick = () => {
    patchCancelReject(property.selectedTableRowsState[0].id);
    property.onOk();
  };

  const resetData = () => {
    setProductShipDateState(moment());
    setShipTypeState(0);
    setShipCompanyState(0);
    setInvoiceNumberState('');
  };

  const deliveryCompanyList =
    property.shipCompanyDataState.length > 0
      ? property.shipCompanyDataState.map((item) => {
          return { label: item.name, value: item.id };
        })
      : [
          { label: '선택', value: 0 },
          { label: 'CJ 대한통운', value: 1 },
        ];

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
            value={shipTypeState}
            onChange={handleShipTypeSelectOnChange}
            left="8rem"
            list={deliveryTypeList}
          />
        </SelectBoxLabelContainer>

        <SelectBoxLabelContainer>
          <div>배송정보 입력</div>
          <BasicSelectBoxStyled
            value={shipCompanyState}
            onChange={handleShipCompanySelectOnChange}
            left="8rem"
            list={deliveryCompanyList}
            disabled={shipTypeState === 1 ? '' : 'disabled'}
          />
          <BasicTextInputBoxStyled
            value={invoiceNumberState}
            onChange={handleInvoiceNumChange}
            ref={productShipInfoInputRef}
            disabled={
              shipTypeState !== 1 ||
              shipCompanyState === 0 ||
              shipCompanyState === undefined
                ? 'disabled'
                : ''
            }
          />
        </SelectBoxLabelContainer>
      </Modal>
    </>
  );
};
export default ReturnRefusalModal;

const deliveryTypeList = [
  { label: '선택', value: 0 },
  { label: '택배,등기,소포', value: 1 },
  { label: '퀵서비스', value: 2 },
  { label: '방문수령', value: 3 },
  { label: '직접전달', value: 4 },
];
