import * as React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import { ROUTE_PATH } from 'configs/config';

import RegisterProduct from 'pages/Admin/Contents/product/RegisterProduct';
import EditProduct from 'pages/Admin/Contents/product/EditProduct/EditProduct';
import DeliveryProduct from 'pages/Admin/Contents/product/DeliveryProduct/DeliveryProduct';
import RegisterProductOnce from 'pages/Admin/Contents/product/RegisterProductOnce';
import NoticeManage from 'pages/Admin/Contents/product/NoticeManage/Index';
import OrderSerach from 'pages/Admin/Contents/sale/OrderSerach';
import CheckOutStandingPayment from 'pages/Admin/Contents/sale/CheckOutStandingPayment';
import OrderConfirm from 'pages/Admin/Contents/sale/OrderConfirm';
import OrderManage from 'pages/Admin/Contents/sale/OrderManage';
import OrderCancel from 'pages/Admin/Contents/sale/OrderCancel';
import SaleDisturb from 'pages/Admin/Contents/sale/SaleDisturb';
import DeliveryStatusManage from 'pages/Admin/Contents/sale/DeliveryStatusManage';
import ReviewManage from 'pages/Admin/Contents/review/ReviewManage';
import RegisterNotice from 'pages/Admin/Contents/product/RegisterNotice/Index';

const Container = styled.div`
  width: 100%;
  min-width: 150rem;
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
          path={`${prePath}${ROUTE_PATH.admin.registerNotice}`}
          component={RegisterNotice}
        />
        <Route
          exact
          path={`${prePath}${ROUTE_PATH.admin.manageSale}`}
          component={OrderSerach}
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
          path={`${prePath}${ROUTE_PATH.admin.orderManage}`}
          component={OrderManage}
        />
        <Route
          exact
          path={`${prePath}${ROUTE_PATH.admin.orderCancel}`}
          component={OrderCancel}
        />
        <Route
          exact
          path={`${prePath}${ROUTE_PATH.admin.orderDisturb}`}
          component={SaleDisturb}
        />
        <Route
          exact
          path={`${prePath}${ROUTE_PATH.admin.deliveryStatusManage}`}
          component={DeliveryStatusManage}
        />
        <Route
          exact
          path={`${prePath}${ROUTE_PATH.admin.reviewManage}`}
          component={ReviewManage}
        />
      </Switch>
    </Container>
  );
};

export default Contents;
