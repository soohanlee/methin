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

  // 배송
  const [isDelivery, setIsDelivery] = useState('yes');
  const [deliveryType, setDeliveryType] = useState('package'); //package, directly
  const [deliveryAttrs, setDeliveryAttrs] = useState('normal'); //normal, today
  const [deliveryFee, setDeliveryFee] = useState('free'); //free ,conditionallyFree,pay,quantity,section
  const [sectionFeeComent, setSectionFeeComent] = useState(''); // 지역별 차등배송비
  const [defaultFee, setDefaultFee] = useState(''); //기본 배송비
  const [deliveryFeeCondition, setDeliveryFeeCondition] = useState(''); //배송비 조건
  const [payType, setPayType] = useState('cashOnDelivery'); // 결제방식 // cashOnDelivery, prePay, cashOrPre
  const [sectionFeeCondition, setSectionFeeCondition] = useState('2'); // 2구간, 3구간
  const [sectionFeeCount, setSectionFeeCount] = useState(''); // 개수
  const [addFee, setAddFee] = useState(''); // 초과배송비
  const [sectionExtraFeeCount, setSectionExtraFeeCount] = useState(''); // 3 구간개수
  const [sectionExtraFee, setSectionExtraFee] = useState(''); //3구간 가격

  const [shipment, setShipment] = useState(
    localStorage.getItem('shipment') ? localStorage.getItem('shipment') : '',
  ); //출고지

  const handleRegisterProductButtonClick = () => {
    if (productName === '') {
      notification.error('필수 입력사항을 입력해주세요.');
      return;
    }
    try {
      const data = {
        name: productName, //상품이름
        stauts: 0, //상품 판매상태
        description: 'df', //특이사항
        status: 0,
        count: availableStockRef.current.state.value, // 상품재고수량
        main_image_id: null, // 이미지 ID
        ship_info_id: 123,
        price: sale === 'setting' ? removeRest(salePrice) : removeRest(price), // 상품 가격
        preview_status: 0, // 전시상태 0 : no, 1yes
        discount_amount: 1000, // 할인값,
        min_quantity: 3, // 최소구매수량
        max_quantity: 5, // 최대구매수량
        tax_type: 0, // 0: 과세, 1:면세 ,2:영세 부가세 유형
        ship_type: 0, //0,택배, 1:직접 배송
        ship_attr: 0, // 0 무료, 1:유료 배송속성
        ship_category: 0, // 배송비 유형 0무료 1유료
        ship_pay_type: 0, // 배송비 결제 유형 0선불 1착불
        ship_amount1: 0, // 기본 배송비 default 0
        ship_amount2: 0, // 제주 /산간지역 배송비
        ship_free_cond_amount: 0, // 배송비 조건 n원이상 무료
        jsondata: { '': '' }, //stringified json data
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
      <Delivery
        isDelivery={isDelivery}
        deliveryType={deliveryType}
        deliveryAttrs={deliveryAttrs}
        deliveryFee={deliveryFee}
        sectionFeeComent={sectionFeeComent}
        defaultFee={defaultFee}
        deliveryFeeCondition={deliveryFeeCondition}
        payType={payType}
        sectionFeeCondition={sectionFeeCondition}
        sectionFeeCount={sectionFeeCount}
        addFee={addFee}
        sectionExtraFeeCount={sectionExtraFeeCount}
        sectionExtraFee={sectionExtraFee}
        shipment={shipment}
        setIsDelivery={setIsDelivery}
        setDeliveryType={setDeliveryType}
        setDeliveryAttrs={setDeliveryAttrs}
        setDeliveryFee={setDeliveryFee}
        setSectionFeeComent={setSectionFeeComent}
        setDefaultFee={setDefaultFee}
        setPayType={setPayType}
        setDeliveryFeeCondition={setDeliveryFeeCondition}
        setSectionFeeCondition={setSectionFeeCondition}
        setSectionFeeCount={setSectionFeeCount}
        setAddFee={setAddFee}
        setSectionExtraFeeCount={setSectionExtraFeeCount}
        setSectionExtraFee={setSectionExtraFee}
        setShipment={setShipment}
      />
      <ReturnExchange />
      <AS />
      <Button onClick={handleRegisterProductButtonClick}>저장</Button>
    </Container>
  );
};

export default RegisterProduct;
