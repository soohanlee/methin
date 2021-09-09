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

const Agreement = () => {
  return (
    <Container>
      {/* 이용약관 */}
      <Title>총칙</Title>
      <Label>
        이 약관은 주식회사 컬리 회사(전자상거래 사업자)가 운영하는 인터넷사이트
        마켓컬리(이하 "컬리"라 한다)에서 제공하는 전자상거래 관련 서비스(이하
        "서비스"라 한다)를 이용함에 있어 컬리와 이용자의 권리, 의무 및
        책임사항을 규정함을 목적으로 합니다.
      </Label>
      <Label></Label>
    </Container>
  );
};

export default Agreement;
