import React, { useState, useRef } from 'react';
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

import { registerProduct } from 'apis/product';
import { removeRest } from 'utils/common';
import { notification } from 'utils/notification';

const Container = styled.div``;

const RegisterProduct = () => {
  // 재고 수량
  const availableStockRef = useRef(null);

  // 상품명
  const [productName, setProductName] = useState('');

  // 판매가
  const [price, setPrice] = useState('');
  const [salePrice, setSalePrice] = useState(''); //할인된 가격
  const [sale, setSale] = useState('setting'); //setting, noSetting

  const handleRegisterProductButtonClick = () => {
    if (productName === '') {
      notification.error('필수 입력사항을 입력해주세요.');
      return;
    }
    try {
      const data = {
        name: productName,
        description: 'df',
        status: 0,
        count: availableStockRef.current.state.value,
        main_image_id: null,
        ship_info_id: 123,
        price: sale === 'setting' ? removeRest(salePrice) : removeRest(price),
        preview_status: 0,
      };

      const result = registerProduct(data);
      console.log(result);
    } catch (e) {
      notification.error('상품등록을 실패했습니다.');
    }
  };

  return (
    <Container>
      <Category />
      <ProductName value={productName} setValue={setProductName} />
      <Price
        price={price}
        salePrice={salePrice}
        sale={sale}
        setPrice={setPrice}
        setSalePrice={setSalePrice}
        setSale={setSale}
      />
      <AvailableStock ref={availableStockRef} />
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
