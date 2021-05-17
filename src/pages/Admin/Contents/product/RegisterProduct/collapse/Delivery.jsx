import React, { useState } from 'react';
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

import DeliveryPriceGroupModal from 'pages/Admin/Contents/product/RegisterProduct/collapse/deliveryPriceGroupModal';

const Select = styled(OriginSelect)`
  width: 200px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Input = styled(OriginInput)`
  display: flex;
  max-width: 300px;
`;

const ItemContainer = styled.div`
  width: 100%;
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
  const [deriveryPriceGroupVisible, setDeriveryPriceGroupVisible] = useState(
    false,
  );
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

  const handleAddFeeBlur = () => {
    const changeValue = changeNumberDigits(addFee);
    setAddFee(changeValue);
  };

  const handleAddFeeFocus = () => {
    const changeValue = removeRest(addFee);
    setAddFee(changeValue);
  };

  const handleSectionExtraFeeBlur = () => {
    const changeValue = changeNumberDigits(sectionExtraFee);
    setSectionExtraFee(changeValue);
  };

  const handleSectionExtraFeeFocus = () => {
    const changeValue = removeRest(sectionExtraFee);
    setSectionExtraFee(changeValue);
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
          <Radio value="cashOnDelivery">착불</Radio>
          <Radio value="prePay">선결제</Radio>
          <Radio value="cashOrPre">착불 또는 선결제</Radio>
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
    <>
      <DeliveryPriceGroupModal
        centered
        visible={deriveryPriceGroupVisible}
        onCancel={() => {
          setDeriveryPriceGroupVisible(false);
        }}
        width={700}
        deliveryTableColumns={deliveryTableColumns}
        deliveryData={deliveryData}
      ></DeliveryPriceGroupModal>

      <CustomCollapse header="배송" extra={'뭔가옴'}>
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
            <Radio.Button value="package">택배,소포,등기</Radio.Button>
            <Radio.Button value="directly">직접배송(화물배달)</Radio.Button>
          </Radio.Group>
        </LabelContents>

        <LabelContents title="배송속성">
          <Radio.Group
            value={deliveryAttrs}
            onChange={(e) => setDeliveryAttrs(e.target.value)}
          >
            <Radio.Button value="normal">일반배송</Radio.Button>
            <Radio.Button value="today">오늘출발</Radio.Button>
          </Radio.Group>
        </LabelContents>

        <LabelContents title="상품별 배송비">
          <Select
            value={deliveryFee}
            onChange={(value) => setDeliveryFee(value)}
          >
            <Option value="free">무료</Option>
            <Option value="conditionallyFree">조건무 무료</Option>
            <Option value="pay">유료</Option>
            <Option value="quantity">수량별</Option>
            <Option value="section">구간별</Option>
          </Select>
          <Button
            onClick={() => {
              setDeriveryPriceGroupVisible(true);
            }}
          >
            배송비 묶음 그룹 선택
          </Button>
        </LabelContents>
        {deliveryFee === 'free' && renderSectionFeeComent()}

        {deliveryFee === 'conditionallyFree' && (
          <>
            {renderDefaultFee()}
            {renderDeliveryFeeCondition()}
            {renderPayType()}
            {renderSectionFeeComent()}
          </>
        )}
        {deliveryFee === 'pay' && (
          <>
            {renderDefaultFee()}
            {renderPayType()}
            {renderSectionFeeComent()}
          </>
        )}
        {deliveryFee === 'quantity' && (
          <>
            {renderDefaultFee()}
            {renderDeliveryFeeCondition()}
            {renderPayType()}
            {renderSectionFeeComent()}
          </>
        )}
        {deliveryFee === 'section' && (
          <>
            {renderDefaultFee()}
            <LabelContents title="배송지 조건">
              <ItemContainer>
                <Radio.Group
                  value={sectionFeeCondition}
                  onChange={(e) => setSectionFeeCondition(e.target.value)}
                >
                  <Radio value="2">2구간</Radio>
                  <Radio value="3">3구간</Radio>
                </Radio.Group>
                <InputContainer>
                  <Input
                    value={sectionFeeCount}
                    onChange={(e) => setSectionFeeCount(e.target.value)}
                    addonAfter="개"
                    placeholder="숫자만 입력"
                  />
                  까지 추가 배송비 없음
                </InputContainer>

                {sectionFeeCondition === '3' && (
                  <>
                    <InputContainer>
                      <Input
                        value={sectionExtraFeeCount}
                        onChange={(e) =>
                          setSectionExtraFeeCount(e.target.value)
                        }
                        addonAfter="개"
                        placeholder="숫자만 입력"
                      />
                      까지 추가 배송비
                    </InputContainer>

                    <Input
                      value={sectionExtraFee}
                      onChange={(e) => setSectionExtraFee(e.target.value)}
                      addonAfter="원"
                      placeholder="숫자만 입력"
                      onBlur={handleSectionExtraFeeBlur}
                      onFocus={handleSectionExtraFeeFocus}
                    />
                  </>
                )}

                <div>초과 구매시 추가배송비</div>
                <Input
                  value={addFee}
                  onChange={(e) => setAddFee(e.target.value)}
                  addonAfter="원"
                  placeholder="숫자만 입력"
                  onBlur={handleAddFeeBlur}
                  onFocus={handleAddFeeFocus}
                />
              </ItemContainer>
            </LabelContents>
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
    </>
  );
};

export default Delivery;

const deliveryTableColumns = [
  {
    title: '묶음그룹번호',
    dataIndex: 'GroupNum',
  },
  {
    title: '그룹명',
    dataIndex: 'GroupName',
  },
  {
    title: '배송비 계산방식',
    dataIndex: 'PriceCalculator',
  },
  {
    title: '선택',
    dataIndex: 'Select',
  },
];

const deliveryData = [
  {
    GroupNum: '52691388',
    GroupName: '기본 배송비 묶음그룹',
    PriceCalculator: '최소부과',
    Select: '선택',
  },
];
