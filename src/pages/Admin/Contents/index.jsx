import * as React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import { ROUTE_PATH } from 'configs/config';

import RegisterProduct from 'pages/Admin/Contents/product/RegisterProduct';
import EditProduct from 'pages/Admin/Contents/product/EditProduct/EditProduct';
import EditConnectProduct from 'pages/Admin/Contents/product/connectProduct/EditConnectProduct';
import deliveryProduct from 'pages/Admin/Contents/product/deliveryProduct/deliveryProduct';

const Container = styled.div`
  flex: 1;
  padding: 3rem;
  overflow-y: scroll;
`;

const Contents = () => {
  const prePath = ROUTE_PATH.admin.main;

  return (
    <Container>
      <Switch>
        <Route
          exact
          path={`${prePath}${ROUTE_PATH.admin.editProduct}`}
          component={EditProduct}
        />
        <Route
          exact
          path={`${prePath}${ROUTE_PATH.admin.registerProduct}`}
          component={RegisterProduct}
        />
        <Route
          exact
          path={`${prePath}${ROUTE_PATH.admin.connectProduct}`}
          component={EditConnectProduct}
        />
        <Route
          exact
          path={`${prePath}${ROUTE_PATH.admin.deliveryProduct}`}
          component={deliveryProduct}
        />
      </Switch>
    </Container>
  );
};

export default Contents;
