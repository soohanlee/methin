import React, { useContext } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';

import { UserContext, LOGGED_IN, NOT_LOGGED_IN } from 'store/user-context';
import { ROUTE_PATH } from 'configs/config';
import { cleanToken } from 'utils/tokenManager';

import SearchInput from 'components/Form/SearchInput';
import { notification } from 'utils/notification';
import { ListContainer as OriginListContainer } from 'components/styled/Container';
import { Label } from 'components/styled/Form';

import ResponsiveTemplate from 'template/ResponsiveTemplate';
import MobileNavigation from 'components/Navigation/mobile';

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.SIGNITURE_MAIN};
  padding: 2rem 6rem;
`;

const Logo = styled.div`
  color: ${(props) => props.theme.TEXT_HYPERLINK};
  cursor: pointer;
`;

const UserContainer = styled.div``;

const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ListContainer = styled(OriginListContainer)`
  width: 150px;
  right: 0;
  display: none;
  top: 5.5rem;
  flex-direction: column;
`;

const Icon = styled.div`
  position: relative;
  cursor: pointer;
`;

const InfoContainer = styled.div`
  position: relative;
  padding: 2rem;
  &:hover > ${ListContainer} {
    display: flex;
  }
`;

const ItemLabel = styled(Label)`
  margin: 1rem 0;
  cursor: pointer;
  border-bottom: 0.1rem solid transparent;

  &:first-child {
    margin-top: 0;
    margin-bottom: 0;
  }
  &:last-child {
    margin-top: 0;
    margin-bottom: 0;
  }

  &:hover {
    color: ${(props) => props.theme.SIGNITURE_MAIN};
    border-bottom: 0.1rem solid ${(props) => props.theme.SIGNITURE_MAIN};
  }
`;

const MenuContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.BACKGROUND};
  padding: 3rem 6rem;
  border-bottom: 0.1rem solid ${(props) => props.theme.TEXT_DISABLE};
`;

const MenuItem = styled.div`
  padding: 0 2rem;
  cursor: pointer;
`;

const LogoImg = styled.img`
  width: 110px;
`;

const Img = styled.img`
  width: 25px;
  height: 25px;
`;

const LoginButton = styled.div`
  color: ${(props) => props.theme.BACKGROUND};
  font-weight: 500;
  cursor: pointer;
`;

const Navigation = () => {
  const history = useHistory();
  const userState = useContext(UserContext);

  const handleSearchClick = () => {
    console.log('클릭');
  };

  const handleMoveLoginPage = () => {
    history.push(`${ROUTE_PATH.login}`);
  };

  const handleMoveMainPage = () => {
    history.push(`${ROUTE_PATH.main}`);
  };

  const handleMovePage = (path) => {
    history.push(`${path}`);
  };

  const handleLogout = async () => {
    try {
      cleanToken();
      userState.changeUserState(NOT_LOGGED_IN);
    } catch (e) {
      notification.error('로그아웃 실패입니다.');
    }
  };

  const handleMoveMyPage = () => {
    history.push(`${ROUTE_PATH.mypage.main}${ROUTE_PATH.mypage.destination}`);
  };

  const handleMoveServiceCenter = () => {
    history.push(
      `${ROUTE_PATH.serviceCenter.main}${ROUTE_PATH.serviceCenter.notice}`,
    );
  };

  const handleMoveCartPage = () => {
    history.push(`${ROUTE_PATH.cart}`);
  };

  return (
    <ResponsiveTemplate
      NonPCContents={
        <MobileNavigation
          onClickMovePage={handleMovePage}
          onSearchClick={handleSearchClick}
          onLogoClick={handleMoveMainPage}
          onCartClick={handleMoveCartPage}
        />
      }
    >
      <>
        <Container>
          <Logo onClick={handleMoveMainPage}>
            <LogoImg
              src={process.env.PUBLIC_URL + '/assets/images/logo-icon.svg'}
            />
          </Logo>
          <SearchInput
            onClick={handleSearchClick}
            placeholder={'이 달의 베스트! 프로 다이어터를 위한 식품 대전'}
          />
          <UserContainer>
            {userState.loginState === LOGGED_IN ? (
              <UserContainer>
                <IconContainer>
                  <InfoContainer>
                    <Icon>
                      <Img
                        src={
                          process.env.PUBLIC_URL +
                          '/assets/images/top-white-like-icon.svg'
                        }
                      />
                    </Icon>
                  </InfoContainer>

                  <InfoContainer>
                    <Icon onClick={handleMoveCartPage}>
                      <Img
                        src={
                          process.env.PUBLIC_URL +
                          '/assets/images/top-white-cart-icon.svg'
                        }
                      />
                    </Icon>
                  </InfoContainer>

                  <InfoContainer>
                    <Icon>
                      <Img
                        src={
                          process.env.PUBLIC_URL +
                          '/assets/images/top-white-mypage-icon.svg'
                        }
                      />
                    </Icon>

                    <ListContainer>
                      <ItemLabel onClick={handleMoveMyPage}>
                        마이페이지
                      </ItemLabel>
                      <ItemLabel onClick={handleMoveServiceCenter}>
                        고객센터
                      </ItemLabel>
                      <ItemLabel onClick={handleLogout}>로그아웃</ItemLabel>
                    </ListContainer>
                  </InfoContainer>
                </IconContainer>
              </UserContainer>
            ) : (
              <LoginButton onClick={handleMoveLoginPage}>로그인</LoginButton>
            )}
          </UserContainer>
        </Container>
        <MenuContainer>
          <MenuItem>전체보기</MenuItem>
          <MenuItem onClick={() => handleMovePage(ROUTE_PATH.product)}>
            신상품
          </MenuItem>
          <MenuItem>베스트</MenuItem>
          <MenuItem>알뜰쇼핑</MenuItem>
          <MenuItem>금주혜택</MenuItem>
          <MenuItem>브랜드스토리</MenuItem>
        </MenuContainer>
      </>
    </ResponsiveTemplate>
  );
};

export default Navigation;
