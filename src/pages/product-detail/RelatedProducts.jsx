import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 7rem 0;
  width: 100%;
`;

const Title = styled.div`
  font-size: 2.4rem;
  margin-bottom: 5rem;
`;

const ListContainer = styled.div`
  display: flex;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 23%;
  margin-right: 2rem;
`;

const ImgContainer = styled.div`
  display: flex;
  width: 100%;
`;

const ProductCategory = styled.div`
  color: ${(props) =>
    props.title ? props.theme.TEXT_MAIN : props.theme.TEXT_INFORMATION};
`;

const Price = styled.div`
  font-size: 2.3rem;
  color: ${(props) => props.theme.TEXT_MAIN};
`;

const RelatedProducts = ({ list }) => {
  const renderRelatedProductList = () => {
    return list.map(() => {
      return (
        <ItemContainer>
          <ImgContainer>이미지</ImgContainer>
          <ProductCategory>샐러드 채식</ProductCategory>
          <ProductCategory>
            인기 샐러드 간편식 도시락 모음전 [닭가슴살 / 그릭믹스]
          </ProductCategory>
          <Price>19,800</Price>
        </ItemContainer>
      );
    });
  };
  return (
    <Container>
      <Title>또 다른 상품</Title>
      <ListContainer>{renderRelatedProductList()}</ListContainer>
    </Container>
  );
};

export default RelatedProducts;
