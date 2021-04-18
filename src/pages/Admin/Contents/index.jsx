import * as React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import { ROUTE_PATH } from 'configs/config';

import EditProduct from 'pages/Admin/Contents/product/EditProduct';

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
      </Switch>
    </Container>
  );
};

export default Contents;
