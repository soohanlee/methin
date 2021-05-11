import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { Input as OriginInput } from 'antd';

import CustomCollapse from 'pages/Admin/components/Collapse';

const Input = styled(OriginInput)`
  max-width: 300px;
`;

const AvailableStock = (_, ref) => {
  return (
    <CustomCollapse header="재고 수량" extra={'뭔가옴'}>
      <Input ref={ref} type={'number'} addonAfter={`개`} />
    </CustomCollapse>
  );
};

export default forwardRef(AvailableStock);
