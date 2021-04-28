import * as React from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';
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
  const handleRegisterProductButtonClick = () => {
    console.log('저장 클릭');
  };

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
      <Button onClick={handleRegisterProductButtonClick}>저장</Button>
    </Container>
  );
};

export default RegisterProduct;
