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

const MediumBannerContainer = styled.div`
  position: relative;
  display: flex;
`;

const MediumBanner = styled.img.attrs({
  src: process.env.PUBLIC_URL + '/assets/images/medium-banner.png',
})`
  width: 100%;
  margin: 4rem 0;
`;

const InfoContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
`;

const TitleContainer = styled.div``;

const BannerTitle = styled.div`
  font-size: 3.8rem;
`;

const BannerSubtitle = styled.div`
  font-size: 1.55rem;
`;

const ViewMoreButton = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.8rem;
`;

const MoreIcon = styled.img.attrs({
  src: process.env.PUBLIC_URL + '/assets/images/black-view-more-icon-1.svg',
})``;

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
          <Price>19800</Price>
        </ItemContainer>
      );
    });
  };
  return (
    <Container>
      <Title>또 다른 상품</Title>
      <ListContainer>{renderRelatedProductList()}</ListContainer>

      <MediumBannerContainer>
        <InfoContainer>
          <TitleContainer>
            <BannerSubtitle>아름답게 다이어트 하자</BannerSubtitle>
            <BannerTitle>드디어 오픈! 미띤에 대해 소개합니다.</BannerTitle>
          </TitleContainer>

          <ViewMoreButton>
            VIEW MORE
            <MoreIcon />
          </ViewMoreButton>
        </InfoContainer>

        <MediumBanner />
      </MediumBannerContainer>
    </Container>
  );
};

export default RelatedProducts;
