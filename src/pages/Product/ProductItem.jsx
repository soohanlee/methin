import React from 'react';
import styled from 'styled-components';
import { Label } from 'components/styled/Form';

const Container = styled.div`
  display: flex;
`;

const ImgContainer = styled.div`
  position: relative;
`;

const Img = styled.img``;

const CartContainer = styled.div`
  width: 5rem;
  height: 5rem;
  position: absolute;
  bottom: 0;
  right: 0;
`;

const CategoryLabel = styled(Label)``;

const DescripitonLabel = styled(Label)``;

const PriceContainer = styled.div``;

const PriceWrap = styled.div``;

const BeforePrice = styled.div``;

const AfterPrice = styled.div``;

const SalePercentage = styled.div``;

const ProductItem = ({
  id,
  img,
  catergory,
  description,
  beforePrice,
  afterPrice,
  salePercentage,
}) => {
  return (
    <Container>
      <ImgContainer>
        <Img src={process.env.PUBLIC_URL + img} />
        <CartContainer>장바구니</CartContainer>
      </ImgContainer>

      <CategoryLabel>{catergory}</CategoryLabel>
      <DescripitonLabel>{description}</DescripitonLabel>
      <PriceContainer>
        <PriceWrap>
          <BeforePrice>{beforePrice}</BeforePrice>
          <AfterPrice>{afterPrice}</AfterPrice>
        </PriceWrap>
        <SalePercentage>{salePercentage}</SalePercentage>
      </PriceContainer>
    </Container>
  );
};

export default ProductItem;
