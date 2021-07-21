import React, { useState } from 'react';
import styled from 'styled-components';

import { Input as OriginInput } from 'antd';
import CustomCollapse from 'pages/Admin/components/Collapse';
import LabelContents from 'pages/Admin/components/Label/LabelContents';

const Input = styled(OriginInput)`
  max-width: 300px;
`;

const { TextArea } = Input;

const AS = ({ specialMatters, setSpecialMatters }) => {
  return (
    <CustomCollapse header="특이사항">
      <LabelContents title="판매자 특이사항">
        <TextArea
          value={specialMatters}
          onChange={(e) => setSpecialMatters(e.target.value)}
          placeholder="청약철회, 배송기간 및 방법, 교환/반품의 보증 및 추가비용, 판매일시/판매지역/판매수량/인도지역 등과 관련해서 특이사항이 있는 경우, 해외배송상품인 경우 입력"
          autoSize={{ minRows: 3, maxRows: 5 }}
        />
      </LabelContents>
    </CustomCollapse>
  );
};

export default AS;
