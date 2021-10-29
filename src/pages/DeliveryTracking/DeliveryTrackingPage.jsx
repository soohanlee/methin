import React from 'react';
import { Input as OriginInput } from 'components/styled/Form';
import styled from 'styled-components';
import { AuthContainer } from 'pages/auths/styled';
import { BreakPoint } from 'configs/config';
import { MainButton as OriginButton } from 'components/styled/Button';

const Container = styled(AuthContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 44rem;
  margin: auto;
  @media screen and (max-width: ${BreakPoint.s}px) {
    padding: 4rem;
  }
`;

const Input = styled(OriginInput)`
  margin-bottom: 1rem;
  padding: 1rem;
`;

const MainButton = styled(OriginButton)`
  margin-top: 5rem;
  line-height: 3.5rem;
`;

const DeliveryTrackingPage = () => {
  return (
    <Container>
      <Input placeholder={'상품번호를 입력해주세요.'} />
      <Input placeholder={'전화번호를 입력해주세요.'} />
      <MainButton>조회</MainButton>
    </Container>
  );
};

export default DeliveryTrackingPage;
