import * as React from 'react';
import 'antd/dist/antd.css';
import styled from 'styled-components';

import {
  AS,
  AvailableStock,
  Category,
  Delivery,
  DetailedDescription,
  Option,
  ProductImage,
  ProductInformationProvisionNotice,
  ProductMainInformation,
  ProductName,
  ReturnExchange,
  Price,
} from './collapse';

const Container = styled.div``;

const RegisterProduct = () => {
  return (
    <Container>
      <Category />
      <ProductName />
      <Price />
      <AvailableStock />
      <Option />
      <ProductImage />
      <DetailedDescription />
      <ProductMainInformation />
      <ProductInformationProvisionNotice />
      <Delivery />
      <ReturnExchange />
      <AS />
    </Container>
  );
};

export default RegisterProduct;
