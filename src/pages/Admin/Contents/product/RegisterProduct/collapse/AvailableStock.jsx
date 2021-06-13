import React from 'react';
import styled from 'styled-components';
import { InputNumber } from 'antd';

import CustomCollapse from 'pages/Admin/components/Collapse';

const Input = styled(InputNumber)`
  max-width: 300px;
`;

const AvailableStock = ({ availableStock, setAvailableStock }) => {
  return (
    <CustomCollapse header="재고 수량" extra={''}>
      <InputNumber
        defaultValue={0}
        min={0}
        value={availableStock}
        onChange={setAvailableStock}
      />
    </CustomCollapse>
  );
};

export default AvailableStock;
