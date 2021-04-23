import React, { useState } from 'react';
import { Input as OriginInput, Radio, Select, Checkbox } from 'antd';
import styled from 'styled-components';

import { changeNumberDigits, removeRest } from 'utils/common';

import CustomCollapse from 'compononets/Collapse';
import LabelContents from 'compononets/Label/LabelContents';

const { Option } = Select;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CheckContainer = styled.div`
  margin-top: 1rem;
`;

const Input = styled(OriginInput)`
  max-width: 300px;
`;

const Price = () => {
  const [price, setPrice] = useState('');
  const [sale, setSale] = useState('setting'); //setting, noSetting

  const [isAllSale, setIsAllSale] = useState(false);
  const [isPCSale, setIsPCSale] = useState(false);
  const [isMobileSale, setIsMobileSale] = useState(false);

  const [saleType, setSaleType] = useState('won'); // won, percentage
  const [saleTypePrice, setSaleTypePrice] = useState(''); //할인 얼마 할 건지 가격
  const [salePrice, setSalePrice] = useState(''); //할인된 가격

  const [mobileSaleType, setMobileSaleType] = useState('won'); // won, percentage
  const [mobileSaleTypePrice, setMobileSaleTypePrice] = useState(''); //할인 얼마 할 건지 가격
  const [mobileSalePrice, setMobileSalePrice] = useState(''); //할인된 가격

  const [salesPeriod, setSalesPeriod] = useState('setting');
  const [selectedDate, setSelectedDate] = useState('3');

  const [VAT, setVAT] = useState('taxable'); //taxable, dutyFree, small

  const handleBlur = () => {
    const changeValue = changeNumberDigits(price);
    setPrice(changeValue);
    calcPcPrice();
    calcMobilePrice();
  };

  const handleFocus = () => {
    const changeValue = removeRest(price);
    setPrice(changeValue);
  };

  const calcPcPrice = () => {
    const purePrice = removeRest(price);
    const pureSaleTypePrice = removeRest(saleTypePrice);

    if (saleType === 'won') {
      const result = purePrice - pureSaleTypePrice;
      setSalePrice(changeNumberDigits(result.toString()));
    } else {
      const result = purePrice - purePrice * (pureSaleTypePrice / 100);
      setSalePrice(changeNumberDigits(result.toString()));
    }
  };

  const calcMobilePrice = () => {
    const purePrice = removeRest(price);
    const pureMobileSaleTypePrice = removeRest(mobileSaleTypePrice);

    if (mobileSaleType === 'won') {
      const result = purePrice - pureMobileSaleTypePrice;
      setMobileSalePrice(changeNumberDigits(result.toString()));
    } else {
      const result = purePrice - purePrice * (pureMobileSaleTypePrice / 100);
      setMobileSalePrice(changeNumberDigits(result.toString()));
    }
  };

  const handleSaleTypeBlur = () => {
    calcPcPrice();
    setSaleTypePrice(changeNumberDigits(saleTypePrice));
  };

  const handleSaleTypeFocus = () => {
    setSaleTypePrice(removeRest(saleTypePrice));
  };

  const handleSaleTypePriceChange = (e) => {
    if (saleType === 'percentage') {
      if (Number(removeRest(saleTypePrice)) <= 100) {
        setSaleTypePrice(e.target.value);
      } else {
        setSaleTypePrice('');
      }
    } else {
      setSaleTypePrice(e.target.value);
    }
  };

  const handleMobileSaleTypePriceChange = (e) => {
    if (mobileSaleType === 'percentage') {
      if (Number(removeRest(mobileSaleTypePrice)) <= 100) {
        setMobileSaleTypePrice(e.target.value);
      } else {
        setMobileSaleTypePrice('');
      }
    } else {
      setMobileSaleTypePrice(e.target.value);
    }
  };

  const handleMobileSaleTypeBlur = () => {
    calcMobilePrice();
    setMobileSaleTypePrice(changeNumberDigits(mobileSaleTypePrice));
  };

  const handleMobileSaleTypeFocus = () => {
    setMobileSaleTypePrice(removeRest(mobileSaleTypePrice));
  };

  const handleAllSaleChange = (e) => {
    setIsAllSale(e.target.checked);
    setIsPCSale(false);
    setIsMobileSale(false);
  };

  const handlePCSaleChange = (e) => {
    setIsPCSale(e.target.checked);
    setIsAllSale(false);
  };

  const handleMobileSaleChange = (e) => {
    setIsMobileSale(e.target.checked);
    setIsAllSale(false);
  };

  const selectAfter = (
    <Select value={saleType} onChange={(value) => setSaleType(value)}>
      <Option value="won">원</Option>
      <Option value="percentage">%</Option>
    </Select>
  );

  const mobileSelectAfter = (
    <Select
      value={mobileSaleType}
      onChange={(value) => setMobileSaleType(value)}
    >
      <Option value="won">원</Option>
      <Option value="percentage">%</Option>
    </Select>
  );

  return (
    <CustomCollapse header="판매가" extra={'뭔가옴'}>
      <LabelContents title="판매가">
        <Input
          onChange={(e) => setPrice(e.target.value)}
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
          {sale === 'setting' && (
            <CheckContainer>
              <Checkbox
                onChange={(e) => handleAllSaleChange(e)}
                value={'all'}
                checked={isAllSale}
              >
                전체 할인
              </Checkbox>
              <Checkbox
                onChange={(e) => handlePCSaleChange(e)}
                value={'pc'}
                checked={isPCSale}
              >
                PC만 할인
              </Checkbox>
              <Checkbox
                onChange={(e) => handleMobileSaleChange(e)}
                value={'mobile'}
                checked={isMobileSale}
              >
                모바일만 할인
              </Checkbox>
            </CheckContainer>
          )}
        </ItemContainer>
      </LabelContents>

      {sale === 'setting' && isAllSale && !isPCSale && !isMobileSale && (
        <>
          <LabelContents title="전체 할인">
            <Input
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

      {sale === 'setting' && isPCSale && (
        <>
          <LabelContents title="pc 할인">
            <Input
              onChange={handleSaleTypePriceChange}
              addonAfter={selectAfter}
              value={saleTypePrice}
              onBlur={handleSaleTypeBlur}
              onFocus={handleSaleTypeFocus}
            />
          </LabelContents>
          <LabelContents title="pc 할인가">{salePrice}원</LabelContents>
        </>
      )}

      {sale === 'setting' && isMobileSale && (
        <>
          <LabelContents title="모바일 할인">
            <Input
              onChange={handleMobileSaleTypePriceChange}
              addonAfter={mobileSelectAfter}
              value={mobileSaleTypePrice}
              onBlur={handleMobileSaleTypeBlur}
              onFocus={handleMobileSaleTypeFocus}
            />
          </LabelContents>
          <LabelContents title="모바일 할인가">
            {mobileSalePrice}원
          </LabelContents>
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
          <Radio.Button value="taxable">과세상품</Radio.Button>
          <Radio.Button value="dutyFree">면세상품</Radio.Button>
          <Radio.Button value="small">영세상품</Radio.Button>
        </Radio.Group>
      </LabelContents>
    </CustomCollapse>
  );
};

export default Price;
