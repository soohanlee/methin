import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Route, useHistory, useRouteMatch } from 'react-router';
import { BreakPoint, ROUTE_PATH } from 'configs/config';
import { getAccessToken } from 'utils/tokenManager';

import LeftNavigation from 'pages/my-page/LeftNavigation';
import UserInfomation from 'pages/my-page/UserInfomation';
import Destination from 'pages/my-page/Destination';
import DestinationManage from 'pages/my-page/DestinationManage/DestinationManage';

import Review from 'pages/my-page/Review';
import CancelOrderList from 'pages/my-page/CancelOrderList';
import Myinfo from 'pages/my-page/MyInfomation';
import ProductQNA from 'pages/my-page/ProductQNA';
import ResponsiveTemplate from 'template/ResponsiveTemplate';
import { UserContext } from 'store/user-context';

const Container = styled.div`
  display: flex;
  padding: 10rem 10%;
  @media screen and (max-width: ${BreakPoint.xl}px) {
    padding: 4rem 5%;
  }
  @media screen and (max-width: ${BreakPoint.s}px) {
    padding: 0;
  }
`;

const Contents = styled.div`
  padding: 0 10rem;
  flex: 1;
  @media screen and (max-width: ${BreakPoint.s}px) {
    padding: 0;
  }
`;

const MyPage = () => {
  const match = useRouteMatch();
  const history = useHistory();
  const userState = useContext(UserContext);

  useEffect(() => {
    const accessToken = getAccessToken();
    if (!accessToken) {
      history.push(ROUTE_PATH.login);
    }
  }, [history]);

  return (
    <Container>
      {userState.viewType === 'MOBILE' ? null : <LeftNavigation />}

      <Contents>
        {userState.viewType === 'MOBILE' ? null : <UserInfomation />}

        {/* <Route exact path={`${ROUTE_PATH.mypage}`} component={MyPage} /> */}
        <Route
          exact
          path={`${match.path}${ROUTE_PATH.mypage.destination}`}
          component={Destination}
        />
        <Route
          exact
          path={`${match.path}${ROUTE_PATH.mypage.destinationManage}`}
          component={DestinationManage}
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
