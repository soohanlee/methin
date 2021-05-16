import React, { useEffect, useState } from 'react';
import { ThemeProvider, withTheme } from 'styled-components';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { LightTheme } from 'configs/theme';
import { ROUTE_PATH } from 'configs/config';
import GlobalStyle from 'configs/globalStyle';
// import { jwtVerify } from 'apis/auth';
import {
  getIsAvalidAccessToken,
  getAccessToken,
  getRefreshToken,
  getNewAccessToken,
  getIsRememberToken,
  cleanAllToken,
} from 'utils/tokenManager';

import {
  UserContext,
  userState,
  LOGGED_IN,
  NOT_LOGGED_IN,
} from 'store/user-context';

import Container from './components/container/Container';
import Main from 'pages/Main';
import Navigation from 'components/Navigation';
import Footer from 'components/Footer';
import Admin from 'pages/Admin';
import Login from 'pages/auths/Login';
import SignUp from 'pages/auths/sign-up';

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Contents = styled.div`
  flex: 1;
  overflow-y: auto;
`;

function App() {
  // 처음 페이지 들어왔을때 로딩 const [isLoading, setIs Loading] = React.useState(true); 테마
  // 같은 경우 다크테마 라이트테마 변경이 가능하게 확장하기 위해 아래같이 설정.

  const THEME = LightTheme;
  const location = useLocation();
  const history = useHistory();
  const [isLogin, setIsLogin] = useState(userState.loginState);

  // useEffect(async () => {
  //   // 아이디 저장누르지 않으면 토큰제거
  //   if (!(await getIsRememberToken())) {
  //     await cleanAllToken();
  //   }
  // }, []);

  useEffect(async () => {
    if (await getIsValidUser()) {
      changeUserState(LOGGED_IN);
    } else {
      changeUserState(NOT_LOGGED_IN);
    }
  }, []);

  const changeUserState = (data) => {
    setIsLogin(data);
  };

  const getIsValidUser = async () => {
    const accessToken = await getAccessToken();
    const refreshToken = await getRefreshToken();
    console.log('accessToken', accessToken);
    console.log('refreshToken', refreshToken);
    if (accessToken && refreshToken) {
      if ((await getIsAvalidAccessToken()) || (await getNewAccessToken())) {
        return true;
      }
    }

    return false;
  };

  const state = {
    loginState: isLogin,
    changeUserState: changeUserState,
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
            <UserContainer>
              <Navigation />
              <Contents>
                <Switch>
                  {/* 라우트 예시 */}
                  <Route exact path={ROUTE_PATH.main} component={Main} />
                  <Route exact path={ROUTE_PATH.login} component={Login} />
                  <Route exact path={ROUTE_PATH.signup} component={SignUp} />
                </Switch>
              </Contents>

              <Footer />
            </UserContainer>
          )}
        </UserContext.Provider>
      </Container>
    </ThemeProvider>
  );
}

export default withTheme(App);
