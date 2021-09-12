import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
`;
const Label = styled.div`
  padding-bottom: 2rem;
`;
const Title = styled.div`
  width: 100%;
  padding-bottom: 2rem;
  border-bottom: 0.2rem solid black;
  margin-bottom: 2rem;
  font-weight: bold;
`;

const SubLabel = styled.div`
  font-size: 1.2rem;
  color: ${(props) => props.theme.TEXT_INFORMATION};
  padding-bottom: 1rem;
`;

const ExtraAsk = () => {
  return (
    <Container>
      <Title>고객센터</Title>
      <SubLabel>전화문의</SubLabel>
      <Label>1234-7890</Label>
      <SubLabel>이메일 문의</SubLabel>
      <Label>meThin@gmail.com</Label>
      <SubLabel>평일 pm 10:00 - 17:00p[점심시간 12:00 - 14:00]</SubLabel>
      <SubLabel>
        상담사 연결이 지연될 경우, 1:1 문의하기로 문의해주시면 신속히
        답변드리도록 하겠습니다.
      </SubLabel>
    </Container>
  );
};

export default ExtraAsk;
