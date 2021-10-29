import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 1.6rem;
`;

const Img = styled.img``;

const EmptyContainer = ({ children }) => {
  return (
    <Container>
      <Img src={'/assets/images/mobile/black-report-icon.svg'} />
      <Title>현재 준비된 상품이 없습니다.</Title>
      <Title>빠른 시일 내에 찾아뵙도록 하겠습니다.</Title>
      {children}
    </Container>
  );
};

export default EmptyContainer;
