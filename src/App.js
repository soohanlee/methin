import * as React from 'react';
import { ThemeProvider, withTheme } from 'styled-components';
import { Route, Switch, useLocation } from 'react-router-dom';

import { LightTheme } from 'configs/theme';
import { ROUTE_PATH } from 'configs/config';
import GlobalStyle from 'configs/globalStyle';

import Container from './compononets/container/Container';
import Main from 'pages/Main';
import Navigation from 'compononets/Navigation';
import Footer from 'compononets/Footer';
import Admin from 'pages/Admin';

function App() {
  // 처음 페이지 들어왔을때 로딩
  // const [isLoading, setIsLoading] = React.useState(true);

  // 테마 같은 경우 다크테마 라이트테마 변경이 가능하게 확장하기 위해 아래같이 설정.
  const location = useLocation();
  console.log(location)

  return (
    <ThemeProvider theme={LightTheme}>
      <GlobalStyle theme={LightTheme} />
      <Container>
        {
          location.pathname.includes(ROUTE_PATH.admin.main) ? 
          <Switch>
            <Route path={ROUTE_PATH.admin.main} component={Admin} />
          </Switch>
          : 
          <>
            <Navigation />
            <Switch>
              {/* 라우트 예시 */}
              <Route exact path={ROUTE_PATH.main} component={Main} />
            </Switch>
            <Footer /> 
          </>
        }
      </Container>
    </ThemeProvider>
  );
}

export default withTheme(App);
