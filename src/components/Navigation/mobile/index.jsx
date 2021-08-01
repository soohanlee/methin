import React, { useEffect, useState, useCallback } from 'react';
import styled, { css } from 'styled-components';
import { ROUTE_PATH } from 'configs/config';
import { useLocation, useHistory } from 'react-router-dom';

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

const CartIcon = styled.img.attrs((props) => ({
  src: props.white
    ? '/assets/images/mobile/black-cart-icon.svg'
    : '/assets/images/top-white-cart-icon.svg',
}))`
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
  background: ${(props) =>
    props.background ? props.theme.BACKGROUND : props.theme.MAIN};
`;

const Title = styled.div`
  font-size: 1.6rem;
`;

const BackIcon = styled.img.attrs({
  src: '/assets/images/mobile/black-back-icon.svg',
})`
  width: 2.5rem;
  height: 2.5rem;
`;

const MobileNavigation = ({ title, isLogo, isShowBackButton, white }) => {
  const [pageData, setPageData] = useState({
    title: '',
    isLogo: false,
    isShowBackButton: false,
    white: false,
  });
  const history = useHistory();

  useEffect(() => {
    setPageNavigationState();
  }, [history, history.location, history.location.pathname]);

  const handleMoveMainPage = () => {
    history.push(`${ROUTE_PATH.main}`);
  };

  const handleBackButtonClick = () => {
    history.go(-1);
  };

  const handleCartClick = () => {
    history.push(ROUTE_PATH.cart);
  };

  const setPageNavigationState = useCallback(() => {
    const { pathname } = history.location;
    if (pathname.includes('mypage')) {
      setPageData({
        title: '',
        isLogo: false,
        isShowBackButton: true,
        white: true,
      });
    } else if (pathname.includes('main')) {
      setPageData({
        title: '',
        isLogo: true,
        isShowBackButton: false,
        white: false,
      });
    } else {
      setPageData({
        title: '',
        isLogo: true,
        isShowBackButton: false,
        white: false,
      });
    }
  }, [history]);

  return (
    <Container>
      <LogoWithIconContainer background={pageData.white}>
        {pageData.isShowBackButton && (
          <BackIcon onClick={handleBackButtonClick} />
        )}
        {pageData.title && <Title>pageData.title</Title>}
        {pageData.isLogo && <Logo onClick={handleMoveMainPage} />}

        <IconContainer>
          <CartIcon white={pageData.white} onClick={handleCartClick} />
        </IconContainer>
      </LogoWithIconContainer>
    </Container>
  );
};

export default MobileNavigation;
