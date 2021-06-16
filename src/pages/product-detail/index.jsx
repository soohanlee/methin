import React from 'react';
import styled, { css } from 'styled-components';
import { ROUTE_PATH } from 'configs/config';
import { useHistory } from 'react-router';

import OriginDescriptions from 'components/Descriptions';
import { PaddingContainer } from 'components/styled/Container';
import { MainButton } from 'components/styled/Button';
import RelatedProducts from 'pages/product-detail/RelatedProducts';
import ReviewContainer from 'components/review/ReviewContainer';

const Container = styled(PaddingContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 105rem;
`;

const MainImgContainer = styled.div`
  max-width: 42rem;
  margin-right: 5rem;
`;

const MainImg = styled.img`
  width: 100%;
`;

const TextInfoContainer = styled.div`
  width: 100%;
  text-align: left;
`;

const ProductCategory = styled.div`
  color: ${(props) => props.theme.TEXT_INFORMATION};
  font-size: 1.3rem;
  margin-bottom: 1.4rem;
`;

const ProductName = styled.div`
  color: ${(props) => props.theme.TEXT_MAIN};
  font-size: 2rem;
  margin-bottom: 4.5rem;
`;

const PriceContainer = styled.div`
  display: flex;
`;

const SalePercentage = styled.div`
  color: ${(props) => props.theme.SIGNITURE_MAIN};
  font-size: 2.5rem;
`;

const BeforePrice = styled.div`
  text-decoration: line-through;
  font-size: 1.4rem;
`;
const AfterPrice = styled.div`
  font-size: 2.5rem;
`;

const Border = styled.div`
  width: 100%;
  border-bottom: 0.1rem solid ${(props) => props.theme.TEXT_DISABLE};
  margin: 3rem 0;
`;

const ProductInfoTitle = styled.div`
  font-size: 1.55rem;
  margin-bottom: 1.6rem;
`;

const ProductSubInfoContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;

const ProductSubTitle = styled.div`
  font-size: 1.5rem;
  color: ${(props) =>
    props.info ? props.theme.TEXT_INFORMATION : props.theme.TEXT_MAIN};
  ${(props) =>
    props.info &&
    css`
      min-width: 13rem;
    `};
`;

const CountContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  > button {
    padding: 1.4rem;
    width: 98%;
    &:first-child {
      margin-right: 1rem;
    }
  }
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

const Descriptions = styled(OriginDescriptions)`
  margin-bottom: 5rem;
`;

// const RedStarIcon = styled.img``
// const GreyStarIcon = styled.img``

const ProductDetail = () => {
  const history = useHistory();

  const handleMovePage = (path) => {
    history.push(`${path}`);
  };

  return (
    <Container>
      <ProductInfoContainer>
        <MainImgContainer>
          <MainImg
            src={process.env.PUBLIC_URL + '/assets/images/detailspage.jpg'}
          />
        </MainImgContainer>

        <TextInfoContainer>
          <ProductCategory>샐러드-채식</ProductCategory>
          <ProductName>
            인기 샐러드 간편식 도시락 모음전 [닭가슴살 / 그릭미스]
          </ProductName>
          <PriceContainer>
            <SalePercentage>15%</SalePercentage>
            <AfterPrice>12800</AfterPrice>
            <BeforePrice>19000</BeforePrice>
          </PriceContainer>
          <Border />
          <ProductInfoTitle>상품 정보</ProductInfoTitle>
          <ProductSubInfoContainer>
            <ProductSubTitle info>포장타입</ProductSubTitle>
            <ProductSubTitle>냉장 종이포장</ProductSubTitle>
          </ProductSubInfoContainer>
          <ProductSubInfoContainer>
            <ProductSubTitle info>알레르기 정보</ProductSubTitle>
            <ProductSubTitle>달고기 토마토 난류 대두 잣 함유</ProductSubTitle>
          </ProductSubInfoContainer>
          <ProductSubInfoContainer>
            <ProductSubTitle info>유통기한</ProductSubTitle>
            <ProductSubTitle>수령일 포함 최소 3일</ProductSubTitle>
          </ProductSubInfoContainer>
          <Border />
          <ProductInfoTitle>배송 정보</ProductInfoTitle>
          <ProductSubInfoContainer>
            <ProductSubTitle info>배송 예정</ProductSubTitle>
            <ProductSubTitle>
              오후 17시 이전 주문시 3일이내 도착예정
            </ProductSubTitle>
          </ProductSubInfoContainer>
          <ProductSubInfoContainer>
            <ProductSubTitle info>배송비</ProductSubTitle>
            <ProductSubTitle>
              30,000원 이상 구매시 무료배송/ 미만시 배송비 2,500원
            </ProductSubTitle>
          </ProductSubInfoContainer>
          <Border />
          <ProductSubInfoContainer>
            <ProductSubTitle info>상품선택</ProductSubTitle>
            상품선택 옵션 필요
          </ProductSubInfoContainer>
          <CountContainer>
            <CountButton>-</CountButton>
            <CountDiv>1</CountDiv>
            <CountButton>+</CountButton>
          </CountContainer>
          <ButtonContainer>
            <MainButton reverse onClick={() => handleMovePage(ROUTE_PATH.cart)}>
              장바구니
            </MainButton>
            <MainButton onClick={() => handleMovePage(ROUTE_PATH.order)}>
              구매하기
            </MainButton>
          </ButtonContainer>
        </TextInfoContainer>
      </ProductInfoContainer>
      <Border />
      <RelatedProducts list={[{}, {}]} />
      <Descriptions />
      <ReviewContainer count={224} />
    </Container>
  );
};

export default ProductDetail;
