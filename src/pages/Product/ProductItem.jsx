import React from 'react';
import styled from 'styled-components';
import { Label } from 'components/styled/Form';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 35rem;
`;

const ImgContainer = styled.div`
  position: relative;
`;

const Img = styled.img`
  width: 100%;
`;

const CartContainer = styled.div`
  width: 5rem;
  height: 5rem;
  position: absolute;
  bottom: 0;
  right: 0;
  background: ${(props) => props.theme.SIGNITURE_MAIN};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CartImg = styled.img.attrs({
  src: process.env.PUBLIC_URL + '/assets/images/top-white-cart-icon.svg',
})``;

const CategoryLabel = styled(Label)`
  font-size: 1.4rem;
`;

const DescripitonLabel = styled(Label)`
  color: ${(props) => props.theme.TEXT_INFORMATION};
  font-size: 1.4rem;
  margin-bottom: 2rem;
`;

const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PriceWrap = styled.div`
  display: flex;
`;

const BeforePrice = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  text-decoration: line-through;
`;

const AfterPrice = styled.div`
  font-size: 2rem;
  font-weight: 500;
`;

const SalePercentage = styled.div`
  font-size: 2rem;
  color: ${(props) => props.theme.SIGNITURE_MAIN};
`;

const ProductItem = ({
  id,
  img,
  catergory,
  description,
  beforePrice,
  afterPrice,
  salePercentage,
  className,
  span,
  onClick,
}) => {
  return (
    <Container className={className} key={id} span={span} onClick={onClick}>
      <ImgContainer>
        <Img src={process.env.PUBLIC_URL + img} />
        <CartContainer>
          <CartImg />
        </CartContainer>
      </ImgContainer>

      <CategoryLabel>{catergory}</CategoryLabel>
      <DescripitonLabel>{description}</DescripitonLabel>
      <PriceContainer>
        <PriceWrap>
          <AfterPrice>{afterPrice}</AfterPrice>
          <BeforePrice>{beforePrice}</BeforePrice>
        </PriceWrap>
        <SalePercentage>{salePercentage}</SalePercentage>
      </PriceContainer>
    </Container>
  );
};

export default ProductItem;
