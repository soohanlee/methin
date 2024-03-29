import React from 'react';
import {
  Radio,
  Select as OriginSelect,
  Input as OriginInput,
  Button,
} from 'antd';
import styled from 'styled-components';

import { changeNumberDigits, removeRest } from 'utils/common';

import LabelContents from 'pages/Admin/components/Label/LabelContents';
import CustomCollapse from 'pages/Admin/components/Collapse';

const Select = styled(OriginSelect)`
  width: 200px;
`;
const Input = styled(OriginInput)`
  display: flex;
  max-width: 300px;
`;

const { Option } = Select;

const Delivery = ({
  isDelivery,
  deliveryType,
  deliveryAttrs,
  deliveryFee,
  sectionFeeComent,
  defaultFee,
  deliveryFeeCondition,
  payType,
  sectionFeeCondition,
  sectionFeeCount,
  addFee,
  sectionExtraFeeCount,
  sectionExtraFee,
  shipment,
  setIsDelivery,
  setDeliveryType,
  setDeliveryAttrs,
  setDeliveryFee,
  setSectionFeeComent,
  setDefaultFee,
  setDeliveryFeeCondition,
  setPayType,
  setSectionFeeCondition,
  setSectionFeeCount,
  setAddFee,
  setSectionExtraFeeCount,
  setSectionExtraFee,
  setShipment,
}) => {
  const handleDefaultFeeChange = (e) => {
    setDefaultFee(e.target.value);
  };

  const handleDeliveryFeeConditionChange = (e) => {
    setDeliveryFeeCondition(e.target.value);
  };

  const handleDefaultFeeBlur = () => {
    const changeValue = changeNumberDigits(defaultFee);
    setDefaultFee(changeValue);
  };

  const handleDefaultFeeFocus = () => {
    const changeValue = removeRest(defaultFee);
    setDefaultFee(changeValue);
  };

  const handleDeliveryFeeConditionBlur = () => {
    const changeValue = changeNumberDigits(deliveryFeeCondition);
    setDeliveryFeeCondition(changeValue);
  };

  const handleDeliveryFeeConditionFocus = () => {
    const changeValue = removeRest(deliveryFeeCondition);
    setDeliveryFeeCondition(changeValue);
  };

  const renderDefaultFee = () => {
    return (
      <LabelContents title="기본 배송비">
        <Input
          value={defaultFee}
          onChange={handleDefaultFeeChange}
          addonAfter="원"
          onBlur={handleDefaultFeeBlur}
          onFocus={handleDefaultFeeFocus}
        />
      </LabelContents>
    );
  };

  const renderPayType = () => {
    return (
      <LabelContents title="결제방식">
        <Radio.Group
          value={payType}
          onChange={(e) => setPayType(e.target.value)}
        >
          <Radio value={0}>선불</Radio>
          <Radio value={1}>착불</Radio>
        </Radio.Group>
      </LabelContents>
    );
  };

  const renderDeliveryFeeCondition = () => {
    return (
      <LabelContents title="배송비 조건">
        <Input
          value={deliveryFeeCondition}
          onChange={handleDeliveryFeeConditionChange}
          addonAfter="원 이상 무료"
          onBlur={handleDeliveryFeeConditionBlur}
          onFocus={handleDeliveryFeeConditionFocus}
        />
      </LabelContents>
    );
  };

  const renderSectionFeeComent = () => {
    return (
      <LabelContents title="지역별 차등 배송비">
        <Input
          value={sectionFeeComent}
          onChange={(e) => setSectionFeeComent(e.target.value)}
          placeholder="제주/도서산간 제외 입력"
        />
      </LabelContents>
    );
  };

  const handleShipmentSaveButtonClick = () => {
    alert(`${shipment}를 저장합니다.`);
    localStorage.setItem('shipment', shipment);
  };

  return (
    <CustomCollapse header="배송" extra={''}>
      <LabelContents title="배송여부">
        <Radio.Group
          value={isDelivery}
          onChange={(e) => setIsDelivery(e.target.value)}
        >
          <Radio.Button value="yes">배송</Radio.Button>
          <Radio.Button value="no">배송없음</Radio.Button>
        </Radio.Group>
      </LabelContents>

      <LabelContents title="배송방법">
        <Radio.Group
          value={deliveryType}
          onChange={(e) => setDeliveryType(e.target.value)}
        >
          <Radio.Button value={0}>택배,소포,등기</Radio.Button>
          <Radio.Button value={1}>직접배송(화물배달)</Radio.Button>
        </Radio.Group>
      </LabelContents>

      <LabelContents title="배송속성">
        <Radio.Group
          value={deliveryAttrs}
          onChange={(e) => setDeliveryAttrs(e.target.value)}
        >
          <Radio.Button value={0}>일반배송</Radio.Button>
          <Radio.Button value={1}>오늘출발</Radio.Button>
        </Radio.Group>
      </LabelContents>

      <LabelContents title="상품별 배송비">
        <Select value={deliveryFee} onChange={(value) => setDeliveryFee(value)}>
          <Option value={0}>무료</Option>
          <Option value={1}>조건무 무료</Option>
          <Option value={2}>유료</Option>
        </Select>
        <Button>배송비 묶음 그룹 선택</Button>
      </LabelContents>
      {deliveryFee === 0 && renderSectionFeeComent()}

      {deliveryFee === 1 && (
        <>
          {renderDefaultFee()}
          {renderDeliveryFeeCondition()}
          {renderPayType()}
          {renderSectionFeeComent()}
        </>
      )}
      {deliveryFee === 2 && (
        <>
          {renderDefaultFee()}
          {renderPayType()}
          {renderSectionFeeComent()}
        </>
      )}

      <LabelContents title="출고지">
        <Input
          value={shipment}
          onChange={(e) => setShipment(e.target.value)}
          addonAfter={<div onClick={handleShipmentSaveButtonClick}>저장</div>}
          placeholder="출고지 입력"
        />
      </LabelContents>
    </CustomCollapse>
  );
};

export default Delivery;
