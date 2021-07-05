import { useRef } from 'react';
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
  const phonNumRef = useRef(null); //수취인 연락처1
  const phonNum2Ref = useRef(null); //수취인 연락처2
  const deliveryadressRef = useRef(null); //배송지 주소
  const postalCodeRef = useRef(null); //우편번호
  const adressRef = useRef(null); //주소
  const detailAdressRef = useRef(null); //상세주소

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
          />
          <BasicTextInputBoxStyled
            WidthSize="20rem"
            textSize="16rem"
            label="수취인 연락처1"
            ref={phonNumRef}
          />
          <BasicTextInputBoxStyled
            WidthSize="20rem"
            textSize="16rem"
            label="수취인 연락처2"
            ref={phonNum2Ref}
          />
          <FlexStyled>
            <BasicTextInputBoxStyled
              WidthSize="10rem"
              textSize="16rem"
              label="배송지 주소"
              ref={deliveryadressRef}
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
          />
          <BasicTextInputBoxStyled
            WidthSize="20rem"
            textSize="16rem"
            label="주소"
            disabled
            ref={adressRef}
          />
          <BasicTextInputBoxStyled
            WidthSize="20rem"
            textSize="16rem"
            label="상세주소"
            ref={detailAdressRef}
          />
        </div>
      </Modal>
    </>
  );
};
export default AdressModifyModal;
