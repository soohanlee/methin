import React from 'react';
import LeftNavigation from 'pages/my-page/LeftNavigation';
import styled from 'styled-components';
import UserInfomation from 'pages/my-page/UserInfomation';
import { Route, useRouteMatch } from 'react-router';
import Destination from 'pages/my-page/Destination';
import { ROUTE_PATH } from 'configs/config';
import Review from 'pages/my-page/Review';
import CancelOrderList from 'pages/my-page/CancelOrderList';

const Container = styled.div`
  display: flex;
  padding: 10rem 10%;
`;

const Contents = styled.div`
  padding: 0 10rem;
  flex: 1;
`;

const MyPage = () => {
  const match = useRouteMatch();

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
      </Contents>
    </Container>
  );
};

export default MyPage;
