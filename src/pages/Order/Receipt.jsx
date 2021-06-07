import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import OriginCheckboxLabel from 'components/Form/CheckboxLabel';
import { MainButton as OrginMainButton } from 'components/styled/Button';

const Container = styled.div`
  width: 275px;
  min-width: 275px;
  padding: 4rem 2rem;
  border: 0.2rem solid ${(props) => props.theme.TEXT_MAIN};
  margin-left: 3rem;
`;

const Title = styled.div`
  font-size: 1.9rem;
  padding-bottom: 3rem;
  border-bottom: 0.1rem solid ${(props) => props.theme.TEXT_MAIN};
`;
const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InfoWrap = styled.div`
  border-top: 0.1rem solid ${(props) => props.theme.TEXT_DISABLE};
  border-bottom: 0.1rem solid ${(props) => props.theme.TEXT_DISABLE};
  padding: 3rem 0;
  ${InfoContainer}:nth-child(even) {
    margin: 1rem 0;
  }
`;

const InfoTitle = styled.div`
  color: ${(props) =>
    props.grey ? props.theme.TEXT_INFORMATION : props.theme.TEXT_MAIN};
  font-size: 1.5rem;

  ${(props) =>
    props.highlight &&
    css`
      font-size: 2.3rem;
      color: ${(props) => props.theme.SIGNITURE_MAIN};
    `}

  ${(props) =>
    props.bold &&
    css`
      font-weight: 500;
    `}
`;

const AgreeInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainButton = styled(OrginMainButton)`
  line-height: 4.5rem;
  margin-top: 3rem;
`;

const CheckboxLabel = styled(OriginCheckboxLabel)`
  margin-top: 2rem;
`;

const Receipt = () => {
  const [isAgree, setIsAgree] = useState(false);
  const handleAgreeChange = (e) => {
    setIsAgree(e.target.checked);
  };

  return (
    <Container>
      <Title>주문정보</Title>
      <InfoWrap>
        <InfoContainer>
          <InfoTitle grey>상품금액</InfoTitle>
          <InfoTitle bold>39,800원</InfoTitle>
        </InfoContainer>
        <InfoContainer>
          <InfoTitle grey>할인금액</InfoTitle>
          <InfoTitle bold>(-) 5,800원</InfoTitle>
        </InfoContainer>
        <InfoContainer>
          <InfoTitle grey>배송비</InfoTitle>
          <InfoTitle bold>(-) 0원</InfoTitle>
        </InfoContainer>
      </InfoWrap>
      <InfoWrap>
        <InfoContainer>
          <InfoTitle grey>총 결제금액</InfoTitle>
          <InfoTitle highlight bold>
            39,800원
          </InfoTitle>
        </InfoContainer>
      </InfoWrap>

      <InfoWrap>
        <AgreeInfoContainer>
          <InfoContainer>
            <InfoTitle>개인정보 제 3자 제공고지</InfoTitle>
            <InfoTitle>{'>'}</InfoTitle>
          </InfoContainer>
          <InfoContainer>
            <InfoTitle>전자상거래 구매안전 서비스 안내</InfoTitle>
            <InfoTitle>{'>'}</InfoTitle>
          </InfoContainer>
        </AgreeInfoContainer>
      </InfoWrap>
      <InfoContainer>
        <CheckboxLabel
          id={'agree'}
          value={isAgree}
          onChange={handleAgreeChange}
        >
          결제 진행 동의
        </CheckboxLabel>
      </InfoContainer>
      <MainButton>구매하기</MainButton>
    </Container>
  );
};

export default Receipt;
