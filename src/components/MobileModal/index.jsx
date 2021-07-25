import React from 'react';
import styled from 'styled-components';
import ModalPortal from '../ModalPortal';

const CloseBar = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 0.7rem;
  width: 100%;
  background: ${(props) => props.theme.BACKGROUND};
`;

const MobileModal = ({ isOpen, setIsOpen, children }) => {
  const Container = styled.div`
    position: absolute;
    bottom: 50px;
    left: 0;
    width: 100vw;
    padding: 1rem;
    background: white;
  `;

  const handleClose = () => {
    setIsOpen(false);
  };
  if (isOpen) {
    return (
      <ModalPortal>
        <Container>
          <CloseBar onClick={handleClose}>X</CloseBar>
          {children}
        </Container>
      </ModalPortal>
    );
  } else {
    return null;
  }
};

export default MobileModal;
