import { useState } from 'react';
import { InputNumber, Radio, Select } from 'antd';
import styled from 'styled-components';

import {} from 'utils/common';

import CustomCollapse from 'pages/Admin/components/Collapse';
import LabelContents from 'pages/Admin/components/Label/LabelContents';

const { Option } = Select;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Price = ({
  price,
  setPrice,
  salePrice,
  setSalePrice,
  sale,
  setSale,
  saleTypePrice,
  saleType,
  VAT,
  setSaleTypePrice,
  setSaleType,
  setVAT,
}) => {
  const [mobileSaleType, setMobileSaleType] = useState('won'); // won, percentage
  const [mobileSaleTypePrice, setMobileSaleTypePrice] = useState(''); //할인 얼마 할 건지 가격
  const [mobileSalePrice, setMobileSalePrice] = useState(''); //할인된 가격

  const [salesPeriod, setSalesPeriod] = useState('setting');
  const [selectedDate, setSelectedDate] = useState('3');

  const handleBlur = () => {
    if (typeof price === 'string') {
      const changeValue = price;
      setPrice(changeValue);
      calcPcPrice();
      calcMobilePrice();
    }
  };

  const handleFocus = () => {
    if (typeof price === 'string') {
      const changeValue = price;
      setPrice(changeValue);
    }
  };

  const calcPcPrice = () => {
    if (typeof price === 'string') {
      const purePrice = price;
      const pureSaleTypePrice = saleTypePrice;
      if (saleType === 'won') {
        const result = purePrice - pureSaleTypePrice;
        setSalePrice(result.toString());
      } else {
        const result = purePrice - purePrice * (pureSaleTypePrice / 100);
        setSalePrice(result.toString());
      }
    }
  };

  const calcMobilePrice = () => {
    const purePrice = price;
    const pureMobileSaleTypePrice = mobileSaleTypePrice;

    if (mobileSaleType === 'won') {
      const result = purePrice - pureMobileSaleTypePrice;
      setMobileSalePrice(result.toString());
    } else {
      const result = purePrice - purePrice * (pureMobileSaleTypePrice / 100);
      setMobileSalePrice(result.toString());
    }
  };

  const handleSaleTypeBlur = () => {
    if (typeof saleTypePrice === 'string') {
      calcPcPrice();
      setSaleTypePrice(saleTypePrice);
    }
  };

  const handleSaleTypeFocus = () => {
    if (typeof saleTypePrice === 'string') {
      setSaleTypePrice(saleTypePrice);
    }
  };

  const handleSaleTypePriceChange = (value) => {
    if (saleType === 'percentage') {
      if (Number(saleTypePrice) <= 100) {
        setSaleTypePrice(value);
      } else {
        setSaleTypePrice('');
      }
    } else {
      setSaleTypePrice(value);
    }
  };

  const selectAfter = (
    <Select value={saleType} onChange={(value) => setSaleType(value)}>
      <Option value="won">원</Option>
      <Option value="percentage">%</Option>
    </Select>
  );

  return (
    <CustomCollapse header="판매가" extra={''}>
      <LabelContents title="판매가">
        <InputNumber
          onChange={setPrice}
          addonAfter={`원`}
          value={price}
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
      </LabelContents>

      <LabelContents title="할인">
        <ItemContainer>
          <Radio.Group value={sale} onChange={(e) => setSale(e.target.value)}>
            <Radio.Button value="setting">설정함</Radio.Button>
            <Radio.Button value="noSetting">설정안함</Radio.Button>
          </Radio.Group>
        </ItemContainer>
      </LabelContents>

      {sale === 'setting' && (
        <>
          <LabelContents title="할인">
            <InputNumber
              onChange={handleSaleTypePriceChange}
              addonAfter={selectAfter}
              value={saleTypePrice}
              onBlur={handleSaleTypeBlur}
              onFocus={handleSaleTypeFocus}
            />
          </LabelContents>
          <LabelContents title="할인가">{salePrice}원</LabelContents>
        </>
      )}

      <LabelContents title="판매기간">
        <Radio.Group
          value={salesPeriod}
          onChange={(e) => setSalesPeriod(e.target.value)}
        >
          <Radio.Button value="setting">설정함</Radio.Button>
          <Radio.Button value="noSetting">설정안함</Radio.Button>
        </Radio.Group>
      </LabelContents>
      {salesPeriod === 'setting' && (
        <LabelContents title="기간설정">
          <Radio.Group
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          >
            <Radio.Button value="3">3일</Radio.Button>
            <Radio.Button value="5">5일</Radio.Button>
            <Radio.Button value="7">7일</Radio.Button>
            <Radio.Button value="15">15일</Radio.Button>
            <Radio.Button value="30">30일</Radio.Button>
            <Radio.Button value="60">60일</Radio.Button>
            <Radio.Button value="90">90일</Radio.Button>
            <Radio.Button value="120">120일</Radio.Button>
          </Radio.Group>
        </LabelContents>
      )}

      <LabelContents title="부가세">
        <Radio.Group value={VAT} onChange={(e) => setVAT(e.target.value)}>
          <Radio.Button value={0}>과세상품</Radio.Button>
          <Radio.Button value={1}>면세상품</Radio.Button>
          <Radio.Button value={2}>영세상품</Radio.Button>
        </Radio.Group>
      </LabelContents>
    </CustomCollapse>
  );
};

export default Price;
