import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Route, useHistory, useRouteMatch } from 'react-router';
import { BreakPoint, ROUTE_PATH } from 'configs/config';
import { getAccessToken } from 'utils/tokenManager';

import LeftNavigation from 'pages/my-page/LeftNavigation';
import UserInfomation from 'pages/my-page/UserInfomation';
import Destination from 'pages/my-page/Destination';
import Review from 'pages/my-page/Review';
import CancelOrderList from 'pages/my-page/CancelOrderList';
import Myinfo from 'pages/my-page/MyInfomation';
import ProductQNA from 'pages/my-page/ProductQNA';

const Container = styled.div`
  display: flex;
  padding: 10rem 10%;
  @media screen and (max-width: ${BreakPoint.xl}px) {
    padding: 4rem 5%;
  }
`;

const Contents = styled.div`
  padding: 0 10rem;
  flex: 1;
`;

const MyPage = () => {
  const match = useRouteMatch();
  const history = useHistory();
  useEffect(() => {
    const accessToken = getAccessToken();
    if (!accessToken) {
      history.push(ROUTE_PATH.login);
    }
  }, [history]);

  return (
    <Container>
      <LeftNavigation />
      <Contents>
        <UserInfomation />
        {/* <Route exact path={`${ROUTE_PATH.mypage}`} component={MyPage} /> */}
        <Route
          exact
          path={`${match.path}${ROUTE_PATH.mypage.destination}`}
          component={Destination}
        />
        <Route
          exact
          path={`${match.path}${ROUTE_PATH.mypage.cancel}`}
          component={CancelOrderList}
        />

        <Route
          exact
          path={`${match.path}${ROUTE_PATH.mypage.review}`}
          component={Review}
        />

        <Route
          exact
          path={`${match.path}${ROUTE_PATH.mypage.myInformation}`}
          component={Myinfo}
        />
        <Route
          exact
          path={`${match.path}${ROUTE_PATH.mypage.qna}`}
          component={ProductQNA}
        />
      </Contents>
    </Container>
  );
};

export default MyPage;
