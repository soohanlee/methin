import { useEffect, useState, useRef } from 'react';
import { Modal } from 'antd';
import 'antd/dist/antd.css';
import BasicTextInputBox from 'pages/Admin/components/Form/BasicTextInputBox';
import BasicButton from 'pages/Admin/components/Form/BasicButton';
import styled from 'styled-components';
import DaumPostcodeModal from './DaumPostcodeModal';

import { patchAdress } from 'apis/payment';

const BasicButtonStyled = styled(BasicButton)`
  margin-left: 1rem;
`;

const BasicTextInputBoxStyled = styled(BasicTextInputBox)`
  width: ${(props) => props.WidthSize};
  margin-bottom: 1rem;
`;
const BasicDivStyled = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 1.5rem;
  height: 4.4rem;
  padding-right: 8.4rem;
`;

const FlexStyled = styled.div`
  display: flex;
`;

const AddressModifyModal = (property) => {
  const nameRef = useRef(null); //수취인명
  const [nameState, setNameState] = useState('');

  const phonNumRef = useRef(null); //수취인 연락처1
  const [phonNumState, setPhonNumState] = useState('');

  const phonNum2Ref = useRef(null); //수취인 연락처2
  const [phonNum2State, setPhonNum2State] = useState('');

  const deliveryaddressRef = useRef(null); //배송지 주소
  const [deliveryaddressState, setDeliveryaddressState] = useState('');

  const postalCodeRef = useRef(null); //우편번호
  const [postalCodeState, setPostalCodeState] = useState('');

  const addressRef = useRef(null); //주소
  const [addressState, setaddressState] = useState('');

  const detailaddressRef = useRef(null); //상세주소
  const [detailaddressState, setDetailaddressState] = useState('');

  const [postCodeVisibleState, setPostCodeVisibleState] = useState(false);

  useEffect(() => {
    initInfoData();
  }, [property.visible]);

  const initInfoData = () => {
    if (property.visible === false) return;
    if (property.selectedTableRowsState.length > 0) {
      setNameState(property.selectedTableRowsState[0].recipient_name);
      setPhonNumState(property.selectedTableRowsState[0].recipient_phone);
      setPhonNum2State(property.selectedTableRowsState[0].recipient_phone);
      setDeliveryaddressState(
        property.selectedTableRowsState[0].ship_address_main,
      );
      setPostalCodeState(property.selectedTableRowsState[0].released_zip_code);
      setaddressState(property.selectedTableRowsState[0].ship_address_main);
      setDetailaddressState(
        property.selectedTableRowsState[0].ship_address_sub,
      );
    }
  };

  const handleOkClick = () => {
    const data = {
      recipient_name: nameState,
      recipient_phone: phonNumState,
      recipient_phone2: phonNum2State,
      ship_zip_code: postalCodeState,
      ship_address_main: deliveryaddressState,
      ship_address_sub: detailaddressState,
      ship_message: property.selectedTableRowsState[0].ship_message,
      ship_company_id: 0, //<-택배사ID가뭐지??
      ship_number: property.selectedTableRowsState[0].ship_zip_code,
    };

    patchAdress(property.selectedTableRowsState[0].id, data);

    property.onCancel();
  };

  const handleInputBoxOnChange = (value, setState) => {
    setState(value.target.value);
  };

  const handlePostCodeClick = (value) => {
    setPostCodeVisibleState(value);
  };

  const inputPostCode = (code, address) => {
    setPostalCodeState(code);
    setaddressState(address);
  };

  return (
    <>
      <Modal
        title={property.title}
        centered
        visible={property.visible}
        onOk={handleOkClick}
        onCancel={property.onCancel}
        width={600}
        okText="변경"
        cancelText="닫기"
      >
        <div>
          <BasicTextInputBoxStyled
            WidthSize="20rem"
            textSize="16rem"
            label="수취인명"
            ref={nameRef}
            value={nameState}
            onChange={(value) => {
              handleInputBoxOnChange(value, setNameState);
            }}
          />
          <BasicTextInputBoxStyled
            WidthSize="20rem"
            textSize="16rem"
            label="수취인 연락처1"
            ref={phonNumRef}
            value={phonNumState}
            onChange={(value) => {
              handleInputBoxOnChange(value, setPhonNumState);
            }}
          />
          <BasicTextInputBoxStyled
            WidthSize="20rem"
            textSize="16rem"
            label="수취인 연락처2"
            ref={phonNum2Ref}
            value={phonNum2State}
            onChange={(value) => {
              handleInputBoxOnChange(value, setPhonNum2State);
            }}
          />
          <FlexStyled>
            <BasicDivStyled>배송지주소</BasicDivStyled>
            <BasicButtonStyled
              onClick={() => {
                handlePostCodeClick(true);
              }}
              size="samll"
              label="우편번호 찾기"
            />
          </FlexStyled>
        </div>
        <div>
          <BasicTextInputBoxStyled
            WidthSize="30rem"
            textSize="16rem"
            label="우편번호"
            disabled
            ref={postalCodeRef}
            value={postalCodeState}
          />
          <BasicTextInputBoxStyled
            WidthSize="30rem"
            textSize="16rem"
            label="주소"
            disabled
            ref={addressRef}
            value={addressState}
          />
          <BasicTextInputBoxStyled
            WidthSize="20rem"
            textSize="16rem"
            label="상세주소"
            ref={detailaddressRef}
            value={detailaddressState}
            onChange={(value) => {
              handleInputBoxOnChange(value, setDetailaddressState);
            }}
          />
        </div>
      </Modal>

      <DaumPostcodeModal
        onVisible={handlePostCodeClick}
        visible={postCodeVisibleState}
        inputPostCode={inputPostCode}
      />
    </>
  );
};
export default AddressModifyModal;
