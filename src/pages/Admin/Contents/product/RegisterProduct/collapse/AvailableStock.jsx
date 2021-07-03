import React from 'react';
import { InputNumber } from 'antd';

import CustomCollapse from 'pages/Admin/components/Collapse';

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
