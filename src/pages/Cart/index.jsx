import React from 'react';
import styled, { css } from 'styled-components';
import { PaddingContainer } from 'components/styled/Container';
import { PageTitle as OriginPageTitle } from 'components/styled/Form';
import OriginBorderTitleContainer from 'components/container/BorderTitleContainer';
import Receipt from 'pages/Order/Receipt';
import { SubButton as OriginSubButton } from 'components/styled/Button';

const PageTitle = styled(OriginPageTitle)`
  text-align: center;
  margin-bottom: 10rem;
`;

const CartContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

const Contents = styled.div`
  width: 100%;
`;

const BorderTitleContainer = styled(OriginBorderTitleContainer)`
  margin-bottom: 10rem;
`;

const ProductItemLine = styled.div`
  display: flex;
  padding: 2rem 1.5rem;
  justify-content: space-between;
  border-bottom: 0.1rem solid ${(props) => props.theme.BORDER};
  width: 100%;
`;

const Label = styled.div`
  font-size: 1.55rem;
  font-weight: ${(props) => (props.bold ? 500 : 300)};
  color: ${(props) =>
    props.grey ? props.theme.TEXT_INFORMATION : props.theme.TEXT_MAIN};

  ${(props) =>
    props.highlight &&
    css`
      color: ${props.theme.SIGNITURE_MAIN};
    `}
`;

const ProductItemContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const ProductItemImgContainer = styled.div`
  width: 60px;
  height: 70px;
  background: black;
  margin-right: 2rem;
`;

const ProductItemTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60%;

  > div:nth-child(2) {
    margin: 1rem 0;
  }
`;

const CountContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CountButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  border: 0.1rem solid ${(props) => props.theme.TEXT_DISABLE};
`;

const CountDiv = styled(CountButton)`
  font-size: 1.8rem;
  border-left: 0;
  border-right: 0;
`;

const Price = styled.div`
  color: ${(props) => props.theme.TEXT_MAIN};
  font-size: 2.3rem;
  min-width: 11rem;
  margin-left: 2rem;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })``;

const SubButton = styled(OriginSubButton)`
  width: 12.2rem;
  line-height: 4rem;
`;

const Cart = () => {
  return (
    <PaddingContainer>
      {/* 장바구니 */}
      <PageTitle>장바구니</PageTitle>
      <CartContainer>
        <Contents>
          <BorderTitleContainer title="냉장 식품">
            <ProductItemLine>
              <ProductItemContainer>
                <Checkbox />
                <ProductItemImgContainer></ProductItemImgContainer>

                <ProductItemTextContainer>
                  <Label bold>인기 샐러드 도시락</Label>
                  <Label grey>옵션: 리코타 치즈 샐러드/1개</Label>
                  <Label bold>39,800원</Label>
                </ProductItemTextContainer>

                <CountContainer>
                  <CountButton>-</CountButton>
                  <CountDiv>1</CountDiv>
                  <CountButton>+</CountButton>
                </CountContainer>
                <Price>39,800원</Price>
              </ProductItemContainer>
            </ProductItemLine>
          </BorderTitleContainer>
        </Contents>
        <Receipt isCart />
      </CartContainer>
      <SubButton>선택 삭제</SubButton>
    </PaddingContainer>
  );
};

export default Cart;
