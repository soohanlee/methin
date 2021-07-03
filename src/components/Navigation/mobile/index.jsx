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

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${(props) => props.theme.BACKGROUND};
`;

const MenuItem = styled.div`
  color: ${(props) => props.theme.TEXT_INFORMATION};
  font-size: 1.55rem;
  border-bottom: 0.2rem transparent;
  font-weight: 500;
  width: 100%;
  text-align: center;
  position: relative;
  line-height: 4.6rem;
  padding: 0 0.5rem;
  ${(props) =>
    props.selected &&
    css`
      color: ${(props) => props.theme.SIGNITURE_MAIN};
    `}
`;

const Border = styled.div`
  border-bottom: 0.2rem transparent;
  width: 100%;
  ${(props) =>
    props.selected &&
    css`
      border-bottom: 0.2rem solid ${(props) => props.theme.SIGNITURE_MAIN};
    `}
`;

const MobileNavigation = ({
  onCartClick,
  onSearchClick,
  onLogoClick,
  onClickMovePage,
}) => {
  const { pathname } = useLocation();
  const product = ROUTE_PATH.product;
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
        <MenuItem
          selected={pathname === product}
          onClick={() => onClickMovePage(product)}
        >
          신상품
          <Border selected={pathname === product} />
        </MenuItem>
        <MenuItem>베스트</MenuItem>
        <MenuItem>알뜰쇼핑</MenuItem>
      </MenuContainer>
    </Container>
  );
};

export default MobileNavigation;
