import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  padding: 5rem;
`;

const Title = styled.h3`
  display: block;
  position: relative;
  height: 44px;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  padding: 10px;
`;

const Label = styled.div`
  margin-bottom: 20px;
  line-height: 24px;
  font-weight: 400;
  letter-spacing: 0;
  font-size: 14px;
`;

const Private = () => {
  return (
    <Container>
      {/* 개인정보 처리방침 */}

      <Label>
        ㈜컬리는(이하 “회사”는) 개인정보 보호 관련 법령에 따라 고객의 개인정보를
        보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기
        위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.
      </Label>
      <Label></Label>
    </Container>
  );
};

export default Private;
