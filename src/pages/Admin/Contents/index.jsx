import * as React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import { ROUTE_PATH } from 'configs/config';

import RegisterProduct from 'pages/Admin/Contents/product/RegisterProduct';
import EditProduct from 'pages/Admin/Contents/product/EditProduct/EditProduct';
import EditConnectProduct from 'pages/Admin/Contents/product/connectProduct/EditConnectProduct';
import DeliveryProduct from 'pages/Admin/Contents/product/deliveryProduct/deliveryProduct';
import RegisterProductOnce from 'pages/Admin/Contents/product/RegisterProductOnce';
import NoticeManage from 'pages/Admin/Contents/product/NoticeManage/Index';
import OrderManage from 'pages/Admin/Contents/sale/OrderManage';

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
          path={`${prePath}${ROUTE_PATH.admin.registerAllProduct}`}
          component={RegisterProductOnce}
        />
        <Route
          exact
          path={`${prePath}${ROUTE_PATH.admin.connectProduct}`}
          component={EditConnectProduct}
        />
        <Route
          exact
          path={`${prePath}${ROUTE_PATH.admin.deliveryProduct}`}
          component={DeliveryProduct}
        />
        <Route
          exact
          path={`${prePath}${ROUTE_PATH.admin.noticeManage}`}
          component={NoticeManage}
        />
        <Route
          exact
          path={`${prePath}${ROUTE_PATH.admin.manageSale}`}
          component={OrderManage}
        />
      </Switch>
    </Container>
  );
};

export default Contents;
