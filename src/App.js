import React, { useEffect, useState, useCallback, useRef } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { Layout } from 'antd';
import axios from 'axios';

import { addCartItem } from 'apis/cart';
import { LightTheme } from 'configs/theme';
import { ROUTE_PATH, BreakPoint } from 'configs/config';
import GlobalStyle from 'configs/globalStyle';
import { reissueJwt } from 'apis/auth';
import { Scrollbars, scrollTop } from 'react-custom-scrollbars-2';

import {
  getIsAvalidAccessToken,
  getAccessToken,
  getRefreshToken,
  setCartCookies,
  getCartCookies,
  removeCartCookies,
  // getNewAccessToken,
  // getIsRememberToken,
  cleanToken,
} from 'utils/tokenManager';

import {
  UserContext,
  userState,
  LOGGED_IN,
  NOT_LOGGED_IN,
} from 'store/user-context';

import { ModalContainer } from 'components/styled/Container';

import Container from './components/container/Container';
import Main from 'pages/Main';
import Navigation from 'components/Navigation';
import MainFooter from 'components/Footer';
import Admin from 'pages/Admin';
import Login from 'pages/auths/Login';
import SignUp from 'pages/auths/sign-up';
import Product from 'pages/Product';
import ProductDetail from 'pages/product-detail';
import MyPage from 'pages/my-page';
import ServiceCenter from 'pages/service-center';
import Order from 'pages/Order';
import Cart from 'pages/Cart';
import Category from 'pages/Category';
import Agreement from 'pages/Agreement';

import ResponsiveTemplateForRoot from 'template/ResponsiveTemplateForRoot';
import { useWindowSize } from 'hooks/useWindowSize';
import MobileMenu from 'pages/my-page/MobileMenu';
import DeliveryTrackingPage from 'pages/DeliveryTracking/DeliveryTrackingPage';
import MobileMyPageMain from 'pages/my-page/MobileMyPageMain/MobileMyPageMain';
import Private from 'pages/Private';
import InformationGuide from 'pages/information-guide/InformationGuide';
import NoticeDetail from 'pages/service-center/Notice/NoticeDetail/NoticeDetail';

const { Content } = Layout;

const UserContainer = styled(Layout).attrs({ id: 'UserContainer' })`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 100%;
  min-width: 105rem;
  &&& {
    background: ${(props) => props.theme.BACKGROUND};
  }
  @media screen and (max-width: ${BreakPoint.s}px) {
    min-width: unset;
    width: 100vw;
  }
`;

const CustomContent = styled(Content)`
  display: flex;
  flex-direction: column;
  flex: 1;
  background: inherit;
`;

function App() {
  // 처음 페이지 들어왔을때 로딩 const [isLoading, setIs Loading] = React.useState(true); 테마
  // 같은 경우 다크테마 라이트테마 변경이 가능하게 확장하기 위해 아래같이 설정.
  const windowSize = useWindowSize();
  const accessToken = getAccessToken();

  const [viewType, setViewType] = useState('PC');

  const THEME = LightTheme;
  const location = useLocation();
  const scrollbar = useRef(null);

  useEffect(() => {
    scrollbar.current.scrollTop();
  }, [location]);

  const [isLogin, setIsLogin] = useState(userState.loginState);

  // useEffect(async () => {
  //   // 아이디 저장누르지 않으면 토큰제거
  //   if (!(await getIsRememberToken())) {
  //     await cleanAllToken();
  //   }
  // }, []);

  useEffect(() => {
    if (!getCartCookies()) {
      setCartCookies([]);
    }
  }, []);

  useEffect(() => {
    const layoutDom = document.getElementById('UserContainer');

    layoutDom?.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    if (accessToken) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
      changeUserState(LOGGED_IN);
    } else {
      cleanToken();
      changeUserState(NOT_LOGGED_IN);
    }
  }, [accessToken]);

  useEffect(() => {
    if (windowSize.width < BreakPoint.s) {
      setViewType('MOBILE');
    } else {
      setViewType('PC');
    }
  }, [windowSize]);

  const addCartWhenLogin = useCallback(async () => {
    const cookiesCartList = getCartCookies();
    if (isLogin === LOGGED_IN && cookiesCartList.length > 0) {
      const cartList = [];
      try {
        for (let i = 0; i < cookiesCartList.length; i++) {
          cartList.push(addCartItem(cookiesCartList[i]));
        }
        Promise.all(cartList).then((res) => {
          removeCartCookies();
        });
      } catch (e) {}
    }
  }, [isLogin]);

  useEffect(() => {
    const cookiesCartList = getCartCookies();
    if (isLogin === LOGGED_IN && cookiesCartList.length > 0) {
      addCartWhenLogin();
    }
  }, [isLogin, addCartWhenLogin]);

  const changeUserState = (data) => {
    setIsLogin(data);
  };

  const getIsValidUser = async () => {
    const accessToken = getAccessToken();
    const refreshToken = getRefreshToken();

    if (accessToken) {
      if (await getIsAvalidAccessToken()) {
        return true;
      } else {
        return false;
      }
    } else if (refreshToken) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${refreshToken}`;
      const result = await reissueJwt();
    } else {
      return false;
    }
  };

  const state = {
    loginState: isLogin,
    changeUserState,
    viewType,
  };

  return (
    <ThemeProvider theme={THEME}>
      <GlobalStyle theme={THEME} />

      <Container>
        <UserContext.Provider value={state}>
          {location.pathname.includes(ROUTE_PATH.admin.main) ? (
            <Switch>
              <Route path={ROUTE_PATH.admin.main} component={Admin} />
            </Switch>
          ) : (
            <ResponsiveTemplateForRoot viewType={viewType}>
              <UserContainer>
                <Navigation />

                <CustomContent>
                  <Scrollbars
                    ref={scrollbar}
                    autoHide
                    style={{ width: '100%', heigth: '100%' }}
                  >
                    <Switch>
                      {/* 라우트 예시 */}
                      <Route exact path={'/'} component={Main} />
                      <Route exact path={ROUTE_PATH.main} component={Main} />
                      <Route exact path={ROUTE_PATH.login} component={Login} />
                      <Route
                        path={ROUTE_PATH.agreement}
                        component={Agreement}
                      />
                      <Route path={ROUTE_PATH.private} component={Private} />
                      <Route
                        path={ROUTE_PATH.informationGuide}
                        component={InformationGuide}
                      />
                      <Route
                        exact
                        path={ROUTE_PATH.signup}
                        component={SignUp}
                      />
                      <Route
                        exact
                        path={ROUTE_PATH.product}
                        component={Product}
                      />
                      <Route
                        path={`${ROUTE_PATH.product}:id`}
                        component={ProductDetail}
                      />

                      <Route path={ROUTE_PATH.mypage.main} component={MyPage} />
                      <Route
                        path={ROUTE_PATH.mypage.mobileMenu}
                        component={MobileMenu}
                      />
                      <Route
                        path={ROUTE_PATH.serviceCenter.main}
                        component={ServiceCenter}
                      />
                      <Route
                        path={`${ROUTE_PATH.serviceCenter.notice}/:id`}
                        component={NoticeDetail}
                      />
                      <Route path={ROUTE_PATH.order} component={Order} />
                      <Route path={ROUTE_PATH.cart} component={Cart} />
                      <Route path={ROUTE_PATH.category} component={Category} />
                      <Route
                        path={ROUTE_PATH.deliveryTracking}
                        component={DeliveryTrackingPage}
                      />

                      {/* 모바일 */}
                      <Route
                        path={ROUTE_PATH.mobile.mypage}
                        component={MobileMyPageMain}
                      />
                    </Switch>
                    <MainFooter />
                  </Scrollbars>
                </CustomContent>
              </UserContainer>
            </ResponsiveTemplateForRoot>
          )}
        </UserContext.Provider>
      </Container>
      <ModalContainer />
    </ThemeProvider>
  );
}

export default App;
