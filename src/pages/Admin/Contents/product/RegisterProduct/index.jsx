import React, { useState, useEffect } from 'react';
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
  PruchaseBenefitConditions,
} from './collapse';

import {
  registerProduct,
  getProductDetail,
  updateProductDetail,
} from 'apis/product';
import { removeRest } from 'utils/common';
import { notification } from 'utils/notification';

const Container = styled.div`
width:70vw
`;

const RegisterProduct = ({ history }) => {
  // 재고 수량
  const [availableStock, setAvailableStock] = useState(0);

  // 상품명
  const [productName, setProductName] = useState('');
  // 카테고리
  const [category, setCategory] = useState({});

  // 판매가
  const [price, setPrice] = useState(0);
  const [salePrice, setSalePrice] = useState(0); //할인된 가격
  const [sale, setSale] = useState('setting'); //setting, noSetting
  const [saleType, setSaleType] = useState('won'); // won, percentage
  const [saleTypePrice, setSaleTypePrice] = useState(''); //할인 얼마 할 건지 가격
  const [VAT, setVAT] = useState(0); //0과세 1 면세 2 영세
  const [stauts, setStatus] = useState(0); //0 미설정 1판매중 2 판매종료
  
  // 배송
  const [isDelivery, setIsDelivery] = useState('yes');
  const [deliveryType, setDeliveryType] = useState(0); //package, directly
  const [deliveryAttrs, setDeliveryAttrs] = useState(0); //normal, today
  const [deliveryFee, setDeliveryFee] = useState(0); //ship category 배송비 유형
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

  // 구매혜택조건
  const [minPurchase, setMinPurchase] = useState(0);
  const [maxPurchase, setMaxPurchase] = useState(0);

  //특이사항
  const [specialMatters, setSpecialMatters] = useState();

  // 옵션
  const [option, setOption] = useState();

  const initState = () => {
    setPrice('');
    setSalePrice('');
    setSale('setting');
    setSaleType('won');
    setSaleTypePrice('');
    setVAT(0);
    setIsDelivery('yes');
    setDeliveryType(0);
    setDeliveryAttrs(0);
    setDeliveryFee(0);
    setSectionFeeComent('');
    setDefaultFee('');
    setDeliveryFeeCondition('');
    setPayType('cashOnDelivery');
    setSectionFeeCondition('2');
    setSectionFeeCount('');
    setAddFee('');
    setSectionExtraFeeCount('');
    setSectionExtraFee('');
    setShipment('');
    setMinPurchase(0);
    setMaxPurchase(0);
  };

  useEffect(() => {
    async function fetchData() {
      if (history.location.state) {
        const result = await getProductDetail(history.location.state);
        if (result.status === 200) {
          const {
            actual_price,
            count,
            discount_amount,
            max_quantity,
            min_quantity,
            name,
            price,
            ship_amount1,
            ship_amount2,
            ship_attr,
            ship_category,
            ship_free_cond_amount,
            ship_pay_type,
            ship_type,
            tax_type,
          } = result.data.data;
          setPrice(actual_price);
          setAvailableStock(count);
          setMinPurchase(min_quantity);
          setMaxPurchase(max_quantity);
          setProductName(name);
          setSalePrice(price);
          setPayType(ship_pay_type);
          setDeliveryFeeCondition(ship_free_cond_amount);
          setVAT(tax_type);
          setDeliveryType(ship_type);
          setDeliveryAttrs(ship_attr);
          setDeliveryFee(ship_category);
          setDefaultFee(ship_amount1);
          setSectionFeeComent(ship_amount2);
          setSaleTypePrice(discount_amount);
        }
      }
    }

    fetchData();
  }, []);
  const addCategory = (primary, secondary) => { 
    if(!primary) return;
    if(!secondary) //set only primary category
    {
      var newData = {...category};
      newData[primary] = []
      setCategory(newData); 
    }    
    else
    {
      let newData = {...category};
      if(newData[primary])
      {
        newData[primary] = newData[primary].concat(secondary);
        setCategory(newData);
      }
    }
  }
  const handleRegisterProductButtonClick = async () => {
    if (productName === '' || price === '') {
      notification.error('필수 입력사항을 입력해주세요.');
      return;
    }
    try {
      const data = {
        name: productName, //상품이름
        status: stauts, // 0 미설정, 1: 판매중 , 2 판매종료 상품 판매상태
        count: availableStock, // 상품재고수량
        main_image_id: null, // 이미지 ID
        // ship_info_id: 123,
        price:
          sale === 'setting'
            ? removeRest(salePrice.toString())
            : removeRest(price.toString()), // 상품 가격
        discount_amount: saleTypePrice, // 할인값,
        min_quantity: minPurchase, // 최소구매수량
        max_quantity: maxPurchase, // 최대구매수량
        tax_type: VAT, // 0: 과세, 1:면세 ,2:영세 부가세 유형
        ship_type: deliveryType, //0,택배, 1:직접 배송
        ship_attr: deliveryAttrs, // 0 일반배송, 1:오늘출발
        ship_category: deliveryFee, // 배송비 유형 0무료 1유료
        ship_pay_type: payType, // 배송비 결제 유형 0선불 1착불
        ship_amount1: defaultFee, // 기본 배송비 default 0
        ship_amount2: sectionFeeComent, // 제주 /산간지역 배송비
        ship_free_cond_amount: deliveryFeeCondition, // 배송비 조건 n원이상 무료
        preview_status: 0, //전시상태 0 : no, 1yes
        jsondata: null, //stringified json data
        description: specialMatters, //특이사항
        option: option,
      };
      if (history.location.state) {
        const result = await updateProductDetail(history.location.state, data);
        if (result.status === 200) {
          notification.success('상품수정을 완료했습니다.');
          history.push('/admin/edit-product');
        } else if (result.status === 400) {
          notification.error('상품명 혹은 가격을 입력해주세요.');
        } else {
          notification.error('서버 에러입니다. 잠시 후 시도해주세요.');
        }
      } else {
        const result = await registerProduct(data);
        if (result.status === 200) {
          notification.success('상품등록을 완료했습니다.');
          initState();
        } else if (result.status === 400) {
          notification.error('상품명 혹은 가격을 입력해주세요.');
        } else {
          notification.error('서버 에러입니다. 잠시 후 시도해주세요.');
        }
      }
    } catch (e) {
      notification.error('상품등록을 실패했습니다.');
    }
  };

  return (
    <Container>
      <Category category={category} addCategory={addCategory}/>
      <ProductName value={productName} setValue={setProductName} />
      <Price
        price={price}
        salePrice={salePrice}
        sale={sale}
        setPrice={setPrice}
        setSalePrice={setSalePrice}
        setSale={setSale}
        saleTypePrice={saleTypePrice}
        saleType={saleType}
        VAT={VAT}
        stauts={stauts}
        setSaleTypePrice={setSaleTypePrice}
        setSaleType={setSaleType}
        setVAT={setVAT}
        setStatus={setStatus}
      />
      <AvailableStock
        setAvailableStock={setAvailableStock}
        availableStock={availableStock}
      />
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
      <AS
        specialMatters={specialMatters}
        setSpecialMatters={setSpecialMatters}
      />
      <PruchaseBenefitConditions
        minPurchase={minPurchase}
        maxPurchase={maxPurchase}
        setMinPurchase={setMinPurchase}
        setMaxPurchase={setMaxPurchase}
      />
      <Button onClick={handleRegisterProductButtonClick}>저장</Button>
    </Container>
  );
};

export default RegisterProduct;
