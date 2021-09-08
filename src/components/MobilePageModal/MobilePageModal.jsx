import React from 'react';
import styled from 'styled-components';
import ModalPortal from '../ModalPortal';
import { useHistory } from 'react-router';
import {
  MobileHeaderContainer,
  FrontContainer,
} from 'components/styled/Container';

import { ROUTE_PATH } from 'configs/config';
import { BackIcon, CartIcon } from 'components/styled/Icon';

const Container = styled.div``;

const MobilePageModal = ({ isOpen, setIsOpen, children, title }) => {
  const history = useHistory();

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleCartClick = () => {
    history.push(ROUTE_PATH.cart);
  };

  if (isOpen) {
    return (
      <ModalPortal>
        <FrontContainer>
          <MobileHeaderContainer>
            <BackIcon onClick={handleClose} />
            {title}
            <CartIcon white onClick={handleCartClick} />
          </MobileHeaderContainer>
          <Container>{children}</Container>
        </FrontContainer>
      </ModalPortal>
    );
  } else {
    return null;
  }
};

export default MobilePageModal;
