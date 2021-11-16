import * as React from 'react';
import { useEffect, useState } from 'react';
import { notification } from 'utils/notification';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import { ROUTE_PATH } from 'configs/config';
import { getShipCompanyList } from 'apis/payment';

import RegisterProduct from 'pages/Admin/Contents/product/RegisterProduct';
import ProductSearch from 'pages/Admin/Contents/product/ProductSearch';
import DeliveryProduct from 'pages/Admin/Contents/product/DeliveryProduct';
import RegisterProductAll from 'pages/Admin/Contents/product/RegisterProductAll';
import NoticeManage from 'pages/Admin/Contents/product/NoticeManage';
import OrderSerach from 'pages/Admin/Contents/sale/OrderSerach';
import CheckOutStandingPayment from 'pages/Admin/Contents/sale/CheckOutStandingPayment';
import OrderConfirm from 'pages/Admin/Contents/sale/OrderConfirm';
import OrderManage from 'pages/Admin/Contents/sale/OrderManage';
import OrderCancel from 'pages/Admin/Contents/sale/OrderCancel';
import OrderDisturb from 'pages/Admin/Contents/sale/OrderDisturb';
import DeliveryStatusManage from 'pages/Admin/Contents/sale/DeliveryStatusManage';
import QNAManager from 'pages/Admin/Contents/Review/ReviewManage/QNAManager';
import ReviewManager from 'pages/Admin/Contents/Review/ReviewManage/ReviewManager';
import RegisterNotice from 'pages/Admin/Contents/product/RegisterNotice';
import MenuManager from 'pages/Admin/Contents/menu/menuManagement';
import CategoryManager from 'pages/Admin/Contents/menu/categoryManagement';

import DisplayManager from 'pages/Admin/Contents/menu/displayManagement';

const Container = styled.div`
  width: 88%;
  min-width: 150rem;
  padding: 3rem;
  overflow-y: scroll;
  position: absolute;
  left: 256px;
  border-left: 1px solid #f0f0f0;
  height: 100%;
`;
const Contents = () => {
  const [shipCompanyDataState, setShipCompanyDataState] = useState([]);

  useEffect(() => {
    async function fetchAndSetUser() {
      await getShipCompanyData();
    }
    fetchAndSetUser();
  }, []);

  const getShipCompanyData = async (offset = 0) => {
    try {
      const result = await getShipCompanyList(offset);
      const list = result.data.data.list;
      setShipCompanyDataState(list);
      notification.success('택배 정보를 가져왔습니다.');
    } catch (e) {
      console.log('e', e);
      notification.error('택배 정보를 가져오지 못했습니다.');
    }
  };

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
          // component={OrderConfirm}
          render={() => (
            <OrderConfirm shipCompanyDataState={shipCompanyDataState} />
          )}
        />
        <Route
          exact
          path={`${prePath}${ROUTE_PATH.admin.orderManage}`}
          // component={OrderManage}
          render={() => (
            <OrderManage shipCompanyDataState={shipCompanyDataState} />
          )}
        />
        <Route
          exact
          path={`${prePath}${ROUTE_PATH.admin.orderCancel}`}
          // component={OrderCancel}
          render={() => (
            <OrderCancel shipCompanyDataState={shipCompanyDataState} />
          )}
        />
        <Route
          exact
          path={`${prePath}${ROUTE_PATH.admin.orderDisturb}`}
          component={OrderDisturb}
        />
        <Route
          exact
          path={`${prePath}${ROUTE_PATH.admin.deliveryStatusManage}`}
          // component={DeliveryStatusManage}
          render={() => (
            <DeliveryStatusManage shipCompanyDataState={shipCompanyDataState} />
          )}
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
        <Route
          exact
          path={`${prePath}${ROUTE_PATH.admin.menuManage}`}
          component={MenuManager}
        />
        <Route
          exact
          path={`${prePath}${ROUTE_PATH.admin.categoryManage}`}
          component={CategoryManager}
        />
        
        <Route
          exact
          path={`${prePath}${ROUTE_PATH.admin.displayManage}`}
          component={DisplayManager}
        />
      </Switch>
    </Container>
  );
};

export default Contents;
