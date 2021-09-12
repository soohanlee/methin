import { useEffect, useState, useRef } from 'react';
import { Modal } from 'antd';
import 'antd/dist/antd.css';
import BasicTextInputBox from 'pages/Admin/components/Form/BasicTextInputBox';
import BasicButton from 'pages/Admin/components/Form/BasicButton';
import styled from 'styled-components';

const BasicButtonStyled = styled(BasicButton)`
  margin-left: 1rem;
`;

const BasicTextInputBoxStyled = styled(BasicTextInputBox)`
  width: ${(props) => props.WidthSize};
  margin-bottom: 1rem;
`;

const FlexStyled = styled.div`
  display: flex;
`;

const AdressModifyModal = (property) => {
  const nameRef = useRef(null); //수취인명
  const [nameState, setNameState] = useState('');

  const phonNumRef = useRef(null); //수취인 연락처1
  const [phonNumState, setPhonNumState] = useState('');

  const phonNum2Ref = useRef(null); //수취인 연락처2
  const [phonNum2State, setPhonNum2State] = useState('');

  const deliveryadressRef = useRef(null); //배송지 주소
  const [deliveryadressState, setDeliveryadressState] = useState('');

  const postalCodeRef = useRef(null); //우편번호
  const [postalCodeState, setPostalCodeState] = useState('');

  const adressRef = useRef(null); //주소
  const [adressState, setAdressState] = useState('');

  const detailAdressRef = useRef(null); //상세주소
  const [detailAdressState, setDetailAdressState] = useState('');

  useEffect(() => {
    initInfoData();
  }, [property.visible]);

  const initInfoData = () => {
    if (property.visible === false) return;
    if (property.selectedTableRowsState.length > 0) {
      setNameState(property.selectedTableRowsState[0].recipient_name);
      setPhonNumState(property.selectedTableRowsState[0].recipient_phone);
      setPhonNum2State(property.selectedTableRowsState[0].recipient_phone);
      setDeliveryadressState(
        property.selectedTableRowsState[0].ship_address_main,
      );
      setPostalCodeState(property.selectedTableRowsState[0].released_zip_code);
      setAdressState(property.selectedTableRowsState[0].ship_address_main);
      setDetailAdressState(
        property.selectedTableRowsState[0].ship_address_main,
      );
    }
  };

  const handleOkClick = () => {
    console.log(nameRef.current.state.value);
    console.log(phonNumRef.current.state.value);
    console.log(phonNum2Ref.current.state.value);
    console.log(deliveryadressRef.current.state.value);
    console.log(postalCodeRef.current.state.value);
    console.log(adressRef.current.state.value);
    console.log(detailAdressRef.current.state.value);
    property.onCancel();
  };

  const handleInputBoxOnChange = (value, setState) => {
    console.log(value);
    setState(value.target.value);
  };

  return (
    <>
      <Modal
        title={property.title}
        centered
        visible={property.visible}
        onOk={handleOkClick}
        onCancel={property.onCancel}
        width={500}
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
            <BasicTextInputBoxStyled
              WidthSize="10rem"
              textSize="16rem"
              label="배송지 주소"
              ref={deliveryadressRef}
              value={deliveryadressState}
              onChange={(value) => {
                handleInputBoxOnChange(value, setDeliveryadressState);
              }}
            />
            <BasicButtonStyled size="samll" label="우편번호 찾기" />
          </FlexStyled>
        </div>
        <div>
          <BasicTextInputBoxStyled
            WidthSize="20rem"
            textSize="16rem"
            label="우편번호"
            disabled
            ref={postalCodeRef}
            value={postalCodeState}
            onChange={(value) => {
              handleInputBoxOnChange(value, setPostalCodeState);
            }}
          />
          <BasicTextInputBoxStyled
            WidthSize="20rem"
            textSize="16rem"
            label="주소"
            disabled
            ref={adressRef}
            value={adressState}
            onChange={(value) => {
              handleInputBoxOnChange(value, setAdressState);
            }}
          />
          <BasicTextInputBoxStyled
            WidthSize="20rem"
            textSize="16rem"
            label="상세주소"
            ref={detailAdressRef}
            value={detailAdressState}
            onChange={(value) => {
              handleInputBoxOnChange(value, setDetailAdressState);
            }}
          />
        </div>
      </Modal>
    </>
  );
};
export default AdressModifyModal;
