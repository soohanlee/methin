import React from 'react';
import ModalPortal from '../ModalPortal';
import DaumPostcode from 'react-daum-postcode';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  top: 20rem;
  left: 20rem;
  width: 50rem;
`;

const CloseBar = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 0.7rem;
  width: 100%;
  background: ${(props) => props.theme.BACKGROUND};
`;

const postCodeStyle = {
  width: '100%',
  height: '45rem',
};

const Postcode = ({ isOpen, setIsOpen, setAddress, ...props }) => {
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    console.log(data.zonecode); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    setAddress(fullAddress);
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  if (isOpen) {
    return (
      <ModalPortal>
        <Container>
          <CloseBar onClick={handleClose}>X</CloseBar>
          <DaumPostcode
            style={postCodeStyle}
            onComplete={handleComplete}
            {...props}
          />
        </Container>
      </ModalPortal>
    );
  } else {
    return null;
  }
};
export default Postcode;
