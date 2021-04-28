import * as React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import { ROUTE_PATH } from 'configs/config';

import RegisterProduct from 'pages/Admin/Contents/product/RegisterProduct';
import EditProduct from 'pages/Admin/Contents/product/EditProduct/EditProduct';
import EditConnectProduct from 'pages/Admin/Contents/product/connectProduct/EditConnectProduct';
import DeliveryProduct from 'pages/Admin/Contents/product/deliveryProduct/deliveryProduct';
import TemplateProduct from 'pages/Admin/Contents/product/templateProduct/templateProduct';
import RegisterProductOnce from 'pages/Admin/Contents/product/RegisterProductOnce';
import NoticeManage from 'pages/Admin/Contents/product/NoticeManage/Index';
import OrderManage from 'pages/Admin/Contents/sale/OrderManage';
import CheckOutStandingPayment from 'pages/Admin/Contents/sale/CheckOutStandingPayment';
import OrderConfirm from 'pages/Admin/Contents/sale/OrderConfirm';
import OrderCancel from 'pages/Admin/Contents/sale/OrderCancel';
import DeliveryStatusManage from 'pages/Admin/Contents/sale/DeliveryStatusManage';

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
          path={`${prePath}${ROUTE_PATH.admin.templateProduct}`}
          component={TemplateProduct}
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
        <Route
          exact
          path={`${prePath}${ROUTE_PATH.admin.checkOutstanding}`}
          component={CheckOutStandingPayment}
        />
        <Route
          exact
          path={`${prePath}${ROUTE_PATH.admin.orderConfirm}`}
          component={OrderConfirm}
        />
        <Route
          exact
          path={`${prePath}${ROUTE_PATH.admin.orderCancel}`}
          component={OrderCancel}
        />
        <Route
          exact
          path={`${prePath}${ROUTE_PATH.admin.deliveryStatusManage}`}
          component={DeliveryStatusManage}
        />
      </Switch>
    </Container>
  );
};

export default Contents;
