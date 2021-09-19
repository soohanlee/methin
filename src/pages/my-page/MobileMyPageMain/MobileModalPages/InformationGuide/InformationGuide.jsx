import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
`;

const Title = styled.div`
  width: 100%;
  padding-bottom: 2rem;
  border-bottom: 0.2rem solid black;
  margin-bottom: 2rem;
  font-weight: bold;
`;

const Label = styled.div`
  padding-bottom: 2rem;
  padding-right: 2rem;
`;

const SubLabel = styled.div`
  font-size: 1.2rem;
  color: ${(props) => props.theme.TEXT_INFORMATION};
  padding-bottom: 1rem;
`;

const TextContainer = styled.div`
  padding-bottom: 1rem;
`;

const InformationGuide = () => {
  return (
    <Container>
      <TextContainer>
        <Title>회원 / 혜택</Title>
        <Label>
          미띤에 회원가입을 하시면 가입 즉시 게시판 이용 및 각종 할인 쿠폰과
          적립금, 이벤트 혜택을 받으실 수 있습니다. 쿠폰과 적립금은 로그인 하신
          후 마이페이지에서 확인하실 수 있습니다.
        </Label>
      </TextContainer>

      <TextContainer>
        <Title>주문 / 결제</Title>
        <Label>
          상품 주문은 장바구니에 상품담기 {`>`} 회원 혹은 비회원 주문 {`>`}
          주문서 작성 {`>`}
          결제 방법 선택 및 결제 {`>`} 주문 완료로 이루어집니다.
        </Label>
        <SubLabel>
          비회원 주문인 경우 주문번호를 메모해 두시기 바랍니다.
        </SubLabel>
      </TextContainer>

      <TextContainer>
        <Title>배송</Title>
        <Label>
          미띤은 싱싱한 유기농 상품을 고객님의 식탁까지 빠르고 안전하게 배달하기
          위해 노력합니다.
        </Label>
      </TextContainer>
    </Container>
  );
};

export default InformationGuide;
