import React, { useState } from 'react';
import styled from 'styled-components';
import { Input as OriginInput, Select } from 'antd';

import CustomCollapse from 'pages/Admin/components/Collapse';
import LabelContents from 'pages/Admin/components/Label/LabelContents';

import { changeNumberDigits, removeRest } from 'utils/common';

const Input = styled(OriginInput)`
  max-width: 300px;
`;

const { Option } = Select;
const ReturnExchange = () => {
  const [deliveryCompany, setDeliveryCompany] = useState('');
  const [oneway, setOneway] = useState('');
  const [exchange, setExchange] = useState('');
  const [shipment, setShipment] = useState(
    localStorage.getItem('returnShipment')
      ? localStorage.getItem('returnShipment')
      : '',
  );

  const handleOnewayBlur = () => {
    const changeValue = changeNumberDigits(oneway);
    setOneway(changeValue);
  };

  const handleOnewayFocus = () => {
    const changeValue = removeRest(oneway);
    setOneway(changeValue);
  };

  const handleExchangeBlur = () => {
    const changeValue = changeNumberDigits(exchange);
    setExchange(changeValue);
  };

  const handleExchangeFocus = () => {
    const changeValue = removeRest(exchange);
    setExchange(changeValue);
  };

  const handleShipmentSaveButtonClick = () => {
    alert(`${shipment}를 저장합니다.`);
    localStorage.setItem('returnShipment', shipment);
  };

  return (
    <CustomCollapse header="반품/교환" extra={'뭔가옴'}>
      <LabelContents title="반품/교환 택배사">
        <Select
          value={deliveryCompany}
          onChange={(value) => setDeliveryCompany(value)}
        >
          <Option value="default">우체국 택배</Option>
        </Select>
      </LabelContents>
      <LabelContents title="반품배송비(편도)">
        <Input
          onChange={(e) => setOneway(e.target.value)}
          addonAfter={'원'}
          value={oneway}
          onBlur={handleOnewayBlur}
          onFocus={handleOnewayFocus}
        />
      </LabelContents>
      <LabelContents title="교환배송비(왕복)">
        <Input
          onChange={(e) => setExchange(e.target.value)}
          addonAfter={'원'}
          value={exchange}
          onBlur={handleExchangeBlur}
          onFocus={handleExchangeFocus}
        />
      </LabelContents>
      <LabelContents title="반품/교환지">
        <Input
          value={shipment}
          onChange={(e) => setShipment(e.target.value)}
          addonAfter={<div onClick={handleShipmentSaveButtonClick}>저장</div>}
          placeholder="반품/교환지 입력"
        />
      </LabelContents>
    </CustomCollapse>
  );
};

export default ReturnExchange;
