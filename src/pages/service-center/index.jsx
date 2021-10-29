import React from 'react';
import styled from 'styled-components';
import { Route, useRouteMatch } from 'react-router';
import { BreakPoint, ROUTE_PATH } from 'configs/config';

import LeftNavigation from 'pages/service-center/LeftNavigation';
import Notice from 'pages/service-center/Notice';
import FAQ from 'pages/service-center/FAQ';

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

const ServiceCenter = () => {
  const match = useRouteMatch();

  return (
    <Container>
      <LeftNavigation />
      <Contents>
        <Route
          exact
          path={`${match.path}${ROUTE_PATH.serviceCenter.notice}`}
          component={Notice}
        />
        <Route
          exact
          path={`${match.path}${ROUTE_PATH.serviceCenter.faq}`}
          component={FAQ}
        />
      </Contents>
    </Container>
  );
};

export default ServiceCenter;
