import * as React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import { ROUTE_PATH } from 'configs/config';

import RegisterProduct from 'pages/Admin/Contents/product/RegisterProduct';
import ProductSearch from 'pages/Admin/Contents/product/ProductSearch/ProductSearch';
import DeliveryProduct from 'pages/Admin/Contents/product/DeliveryProduct/DeliveryProduct';
import RegisterProductAll from 'pages/Admin/Contents/product/RegisterProductAll/RegisterProductAll';
import NoticeManage from 'pages/Admin/Contents/product/NoticeManage/NoticeManage';
import OrderSerach from 'pages/Admin/Contents/sale/OrderSerach/OrderSerach';
import CheckOutStandingPayment from 'pages/Admin/Contents/sale/CheckOutStandingPayment/CheckOutStandingPayment';
import OrderConfirm from 'pages/Admin/Contents/sale/OrderConfirm';
import OrderManage from 'pages/Admin/Contents/sale/OrderManage';
import OrderCancel from 'pages/Admin/Contents/sale/OrderCancel';
import SaleDisturb from 'pages/Admin/Contents/sale/SaleDisturb';
import DeliveryStatusManage from 'pages/Admin/Contents/sale/DeliveryStatusManage';
import QNAManager from 'pages/Admin/Contents/Review/ReviewManage/QNAManager';
import ReviewManager from 'pages/Admin/Contents/Review/ReviewManage/ReviewManager';
import RegisterNotice from 'pages/Admin/Contents/product/RegisterNotice/RegisterNotice';

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
          path={`${prePath}${ROUTE_PATH.admin.productSearch}`}
          component={ProductSearch}
        />
        <Route
          exact
          path={`${prePath}${ROUTE_PATH.admin.registerProduct}`}
          component={RegisterProduct}
        />
        <Route
          exact
          path={`${prePath}${ROUTE_PATH.admin.registerProductAll}`}
          component={RegisterProductAll}
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
          path={`${prePath}${ROUTE_PATH.admin.orderSearch}`}
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
          path={`${prePath}${ROUTE_PATH.admin.qnaManage}`}
          component={QNAManager}
        />
        <Route
          exact
          path={`${prePath}${ROUTE_PATH.admin.reviewManage}`}
          component={ReviewManager}
        />
      </Switch>
    </Container>
  );
};

export default Contents;
