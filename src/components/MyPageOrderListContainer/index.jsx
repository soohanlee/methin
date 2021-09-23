import { SubButton } from 'components/styled/Button';
import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div``;

const Title = styled.div`
  font-size: 2.3rem;
  margin-bottom: 3rem;
`;

const IdLine = styled.div`
  padding: 3rem 0;
  border-top: 0.1rem solid ${(props) => props.theme.TEXT_MAIN};
  border-bottom: 0.1rem solid ${(props) => props.theme.BORDER};
  display: flex;
  div:first-child {
    margin-right: 2rem;
  }
`;

const ListContainer = styled.div``;

const Label = styled.div`
  font-size: 1.55rem;
  font-weight: ${(props) => (props.bold ? 500 : 300)};
  color: ${(props) =>
    props.grey ? props.theme.TEXT_INFORMATION : props.theme.TEXT_MAIN};

  ${(props) =>
    props.highlight &&
    css`
      color: ${props.theme.MAIN};
    `}
`;

const ProductItemLine = styled.div`
  display: flex;
  padding: 2rem 1.5rem;
  justify-content: space-between;
  border-bottom: 0.1rem solid ${(props) => props.theme.BORDER};
`;

const ProductItemContainer = styled.div`
  display: flex;
`;

const ProductItemTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProductItemImgContainer = styled.div`
  width: 60px;
  height: 70px;
  background: black;
  margin-right: 2rem;
`;

const ProductItemButtonContainer = styled.div`
  width: 25rem;
  display: flex;
  align-items: center;
  line-height: 3rem;
  button:first-child {
    margin-right: 0.5rem;
  }
`;

const OrderMessageContainer = styled.div`
  padding: 2rem 1.5rem;
  display: flex;
  border-bottom: 0.1rem solid ${(props) => props.theme.BORDER};
  div:first-child {
    margin-right: 2rem;
  }
`;

const MyPageOrderListContainer = ({ title }) => {
  return (
    <Container>
      <Title>{title || '주문 배송 조회'}</Title>
      <ListContainer>
        <IdLine>
          <Label bold>2021.04.27</Label>
          <Label>order35415312-532413</Label>
        </IdLine>
        <ProductItemLine>
          <ProductItemContainer>
            <ProductItemImgContainer></ProductItemImgContainer>

            <ProductItemTextContainer>
              <Label bold>인기 샐러드 도시락</Label>
              <Label grey>옵션: 리코타 치즈 샐러드/1개</Label>
              <Label bold>39,800원</Label>
            </ProductItemTextContainer>
          </ProductItemContainer>
          <ProductItemButtonContainer>
            <SubButton>리뷰쓰기</SubButton>
          </ProductItemButtonContainer>
        </ProductItemLine>
        <OrderMessageContainer>
          <Label bold highlight>
            배송완료
          </Label>
          <Label>CJ대한통운 543213121</Label>
        </OrderMessageContainer>
      </ListContainer>
    </Container>
  );
};

export default MyPageOrderListContainer;
