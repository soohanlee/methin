import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
`;

const Logo = styled.img.attrs({ src: '/assets/images/logo-icon.svg' })``;

const SearchIcon = styled.img.attrs({
  src: '/assets/images/top-white-search-icon.svg',
})`
  width: 3rem;
  height: 3rem;
`;

const CartIcon = styled.img.attrs({
  src: '/assets/images/top-white-cart-icon.svg',
})`
  width: 3rem;
  height: 3rem;
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

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  background: ${(props) => props.theme.BACKGROUND};
`;

const MenuItem = styled.div`
  color: ${(props) => props.theme.TEXT_INFORMATION};
  font-size: 1.55rem;
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

      <MenuContainer>
        <MenuItem>신상품</MenuItem>
        <MenuItem>베스트</MenuItem>
        <MenuItem>알뜰쇼핑</MenuItem>
        <MenuItem>금주혜택</MenuItem>
        <MenuItem>브랜드스토리</MenuItem>
      </MenuContainer>
    </Container>
  );
};

export default MobileNavigation;
