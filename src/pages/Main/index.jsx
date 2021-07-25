import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import { useHistory } from 'react-router-dom';
import Selectbox from 'components/Form/Selectbox';
import MainCarousel from 'pages/Main/Carousel';
import ProductItem from 'pages/Product/ProductItem';
import { Row as OriginRow } from 'antd';
import { ROUTE_PATH } from 'configs/config';
import { PaddingContainer } from 'components/styled/Container';
import ResponsiveTemplate from 'template/ResponsiveTemplate';
import MobileMain from 'pages/Main/mobile';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { useLocation } from 'react-router-dom';

const Container = styled.div``;

const Row = styled(OriginRow)`
  row-gap: 1rem;
`;

const Title = styled.div`
  font-size: 4.65rem;
  font-weight: 300;
  line-height: 1;
  letter-spacing: normal;
  margin-bottom: 3rem;
`;

const SubTitle = styled.div`
  font-size: 1.5rem;
  margin-bottom: 5rem;
`;

const ViewMoreButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${(props) => props.theme.BACKGROUND};
`;

const MenuItem = styled.div`
  color: ${(props) => props.theme.TEXT_INFORMATION};
  font-size: 1.55rem;
  border-bottom: 0.2rem transparent;
  font-weight: 500;
  width: 100%;
  text-align: center;
  position: relative;
  line-height: 4.6rem;
  padding: 0 0.5rem;
  ${(props) =>
    props.selected &&
    css`
      color: ${(props) => props.theme.SIGNITURE_MAIN};
    `}
`;

const Border = styled.div`
  border-bottom: 0.2rem transparent;
  width: 100%;
  ${(props) =>
    props.selected &&
    css`
      border-bottom: 0.2rem solid ${(props) => props.theme.SIGNITURE_MAIN};
    `}
`;

const ViewMoreImg = styled.img.attrs({
  src: '/assets/images/black-view-more-icon-1.svg',
})`
  margin-left: 2rem;
  width: 3rem;
`;

const Main = () => {
  const { pathname } = useLocation();
  const product = ROUTE_PATH.product;
  const [selectedItem, setSelectedItem] = useState({
    key: 1,
    value: '신상품순',
  });
  const history = useHistory();

  const handleProductDetailClick = (id) => {
    history.push(`${ROUTE_PATH.product}${id}`);
  };

  const handleMovePage = (path) => {
    history.push(path);
  };

  const renderProductList = () => {
    return productList.map(
      ({
        id,
        img,
        catergory,
        description,
        beforePrice,
        afterPrice,
        salePercentage,
      }) => {
        return (
          <ProductItem
            key={id}
            id={id}
            img={img}
            catergory={catergory}
            description={description}
            beforePrice={beforePrice}
            afterPrice={afterPrice}
            salePercentage={salePercentage}
            span={4}
            onClick={() => handleProductDetailClick(id)}
            won
          />
        );
      },
    );
  };

  return (
    <ResponsiveTemplate
      NonPCContents={
        <Container>
          <MenuContainer>
            <MenuItem
              selected={pathname === product}
              onClick={() => handleMovePage(product)}
            >
              신상품
              <Border selected={pathname === product} />
            </MenuItem>
            <MenuItem>베스트</MenuItem>
            <MenuItem>알뜰쇼핑</MenuItem>
          </MenuContainer>
          <MainCarousel />
          <MobileMain onProductDetailClick={handleProductDetailClick} />
        </Container>
      }
    >
      <Container>
        <MainCarousel />
        <PaddingContainer>
          <Title>
            TODAY'S
            <br />
            NEW PRODUCT
          </Title>
          <SubTitle>오늘의 신상품</SubTitle>
          <Row justify="space-between" style={{ rowGap: '1.6rem' }}>
            {renderProductList()}
          </Row>
          <ViewMoreButton onClick={() => handleMovePage(ROUTE_PATH.product)}>
            VIEW MORE
            <ViewMoreImg />
          </ViewMoreButton>
        </PaddingContainer>
      </Container>
    </ResponsiveTemplate>
  );
};

export default Main;

const selectedBoxList = [
  { key: 1, value: '신상품순' },
  { key: 2, value: '판매순' },
  { key: 3, value: '할인율순' },
  { key: 4, value: '낮은가격순' },
];

const productList = [
  {
    id: '123',
    img: process.env.PUBLIC_URL + '/assets/images/치카 로고.png',
    catergory: '식품',
    description:
      '인기 샐러드 간편식 도시락 모음전 [닭가슴살 / 그리믹스 / 베이컨]',
    beforePrice: '6000',
    afterPrice: '5000',
    salePercentage: '-1000',
  },
  {
    id: '1234',
    img: process.env.PUBLIC_URL + '/assets/images/치카 로고.png',
    catergory: '식품',
    description:
      '인기 샐러드 간편식 도시락 모음전 [닭가슴살 / 그리믹스 / 베이컨]',
    beforePrice: '6000',
    afterPrice: '5000',
    salePercentage: '-1000',
  },
  {
    id: '1235',
    img: process.env.PUBLIC_URL + '/assets/images/치카 로고.png',
    catergory: '식품',
    description:
      '인기 샐러드 간편식 도시락 모음전 [닭가슴살 / 그리믹스 / 베이컨]',
    beforePrice: '6000',
    afterPrice: '5000',
    salePercentage: '-1000',
  },
  {
    id: '1236',
    img: process.env.PUBLIC_URL + '/assets/images/치카 로고.png',
    catergory: '식품',
    description:
      '인기 샐러드 간편식 도시락 모음전 [닭가슴살 / 그리믹스 / 베이컨]',
    beforePrice: '6000',
    afterPrice: '5000',
    salePercentage: '-1000',
  },
];
