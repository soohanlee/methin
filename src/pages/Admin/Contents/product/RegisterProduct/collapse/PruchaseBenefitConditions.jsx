import React from 'react';
import styled from 'styled-components';

import CustomCollapse from 'pages/Admin/components/Collapse';
import LabelContents from 'pages/Admin/components/Label/LabelContents';
import { Input as OriginInput } from 'antd';

const Input = styled(OriginInput)`
  max-width: 300px;
`;

const PruchaseBenefitConditions = ({
  minPurchase,
  maxPurchase,
  setMinPurchase,
  setMaxPurchase,
}) => {
  return (
    <CustomCollapse header="구매/혜택 조건">
      <LabelContents title="최소구매수량">
        <Input
          onChange={(e) => setMinPurchase(e.target.value)}
          addonAfter={`개`}
          value={minPurchase}
          type={'number'}
        />
      </LabelContents>
      <LabelContents title="최대구매수량">
        <Input
          onChange={(e) => setMaxPurchase(e.target.value)}
          addonAfter={`개`}
          value={maxPurchase}
          type={'number'}
        />
      </LabelContents>
    </CustomCollapse>
  );
};

export default PruchaseBenefitConditions;
