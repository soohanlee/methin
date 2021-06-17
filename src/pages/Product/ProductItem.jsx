import React from 'react';
import styled from 'styled-components';
import { Label } from 'components/styled/Form';
import { BreakPoint } from 'configs/config';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 24%;
  margin-bottom: 10rem;

  @media screen and (max-width: ${BreakPoint.s}px) {
    width: unset;
  }
`;

const ImgContainer = styled.div`
  position: relative;
  margin-bottom: 3rem;
  width: 100%;
  height: 0;
  background: grey;
  padding-bottom: 120%;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
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
  margin-bottom: 1.4rem;
`;

const DescripitonLabel = styled(Label)`
  color: ${(props) => props.theme.TEXT_INFORMATION};
  font-size: 1.4rem;
  margin-bottom: 1rem;
`;

const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 2rem;
`;

const PriceWrap = styled.div`
  display: flex;
  align-items: flex-end;
`;

const BeforePrice = styled.div`
  font-size: 1.55rem;
  font-weight: 500;
  text-decoration: line-through;
`;

const AfterPrice = styled.div`
  font-size: 3.1rem;
  font-weight: 600;
  margin-right: 0.5rem;
`;

const SalePercentage = styled.div`
  font-size: 3.1rem;
  color: ${(props) => props.theme.SIGNITURE_MAIN};
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Tag = styled.div`
  border: 0.1rem solid ${(props) => props.theme.TEXT_INFORMATION};
  border-radius: 0.2rem;
  padding: 0.2rem;
  text-align: center;
  line-height: 1.4rem;
  font-size: 1rem;
  margin-right: 0.3rem;
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
      <TagContainer>
        <Tag>무료배송</Tag>
      </TagContainer>
    </Container>
  );
};

export default ProductItem;
