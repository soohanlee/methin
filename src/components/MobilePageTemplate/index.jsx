import React from 'react';
import styled from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars-2';
import ModalPortal from '../ModalPortal';

import {
  MobileHeaderContainer,
  MobileFooterContainer,
} from 'components/styled/Container';

const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background: ${(props) => props.theme.BACKGROUDN};
`;
const HeaderContainer = styled(MobileHeaderContainer)`
  z-index: 1000;
  width: 100%;
`;
const FooterContainer = styled(MobileFooterContainer)`
  width: 100%;
  z-index: 1000;
`;
const BodyContainer = styled.div`
  flex: 1;
`;

const MobilePageTemplate = ({
  header,
  children,
  footer,
  isOpen,
  setIsOpen,
}) => {
  return (
    <ModalPortal>
      <Container>
        <HeaderContainer>{header}</HeaderContainer>
        <BodyContainer>
          <Scrollbars autoHide style={{ heigth: '100%' }}>
            {children}
          </Scrollbars>
        </BodyContainer>
        <FooterContainer>{footer}</FooterContainer>
      </Container>
    </ModalPortal>
  );
};

export default MobilePageTemplate;
