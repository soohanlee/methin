import React from 'react';
import styled, { css } from 'styled-components';
import { ROUTE_PATH } from 'configs/config';
import { useLocation } from 'react-router-dom';

const Container = styled.div`
  width: 100vw;
`;

const Logo = styled.img.attrs({ src: '/assets/images/logo-icon.svg' })`
  width: 6rem;
`;

const SearchIcon = styled.img.attrs({
  src: '/assets/images/top-white-search-icon.svg',
})`
  width: 2rem;
  height: 2rem;
`;

const CartIcon = styled.img.attrs({
  src: '/assets/images/top-white-cart-icon.svg',
})`
  width: 2rem;
  height: 2rem;
  margin-left: 2rem;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoWithIconContainer = styled.div`
  padding: 1rem 2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: ${(props) => props.theme.SIGNITURE_MAIN};
`;

const MobileNavigation = ({ onCartClick, onSearchClick, onLogoClick }) => {
  return (
    <Container>
      <LogoWithIconContainer>
        <Logo onClick={onLogoClick} />
        <IconContainer>
          <SearchIcon onClick={onSearchClick} />
          <CartIcon onClick={onCartClick} />
        </IconContainer>
      </LogoWithIconContainer>
    </Container>
  );
};

export default MobileNavigation;
