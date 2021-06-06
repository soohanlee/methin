import React from 'react';
import styled from 'styled-components';
import { Route, useRouteMatch } from 'react-router';
import { ROUTE_PATH } from 'configs/config';
import LeftNavigation from 'pages/service-center/LeftNavigation';
import Notice from 'pages/service-center/Notice';

const Container = styled.div`
  display: flex;
  padding: 10rem 10%;
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
          path={`${match.path}${ROUTE_PATH.serviceCenter.ask}`}
          component={Notice}
        />
      </Contents>
    </Container>
  );
};

export default ServiceCenter;
