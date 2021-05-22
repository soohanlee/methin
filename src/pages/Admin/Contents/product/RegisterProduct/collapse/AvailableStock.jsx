import React from 'react';
import styled from 'styled-components';
import { Input as OriginInput } from 'antd';

import CustomCollapse from 'pages/Admin/components/Collapse';

const Input = styled(OriginInput)`
  max-width: 300px;
`;

const AvailableStock = ({ availableStock, setAvailableStock }) => {
  return (
    <CustomCollapse header="재고 수량" extra={'뭔가옴'}>
      <Input
        value={availableStock}
        onChange={setAvailableStock}
        type={'number'}
        addonAfter={`개`}
      />
    </CustomCollapse>
  );
};

export default AvailableStock;
