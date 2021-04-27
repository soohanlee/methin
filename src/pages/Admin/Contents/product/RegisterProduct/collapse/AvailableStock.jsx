import React, { useState } from 'react';
import styled from 'styled-components';
import { Input as OriginInput } from 'antd';

import CustomCollapse from 'pages/Admin/components/Collapse';

const Input = styled(OriginInput)`
  max-width: 300px;
`;

const AvailableStock = () => {
  const [value, setValue] = useState('');

  return (
    <CustomCollapse header="재고 수량" extra={'뭔가옴'}>
      <Input
        type={'number'}
        onChange={(e) => setValue(e.target.value)}
        addonAfter={`개`}
        value={value}
      />
    </CustomCollapse>
  );
};

export default AvailableStock;
