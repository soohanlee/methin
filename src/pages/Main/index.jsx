import React, { useState } from 'react';
import styled from 'styled-components';

import { useHistory } from 'react-router-dom';
import Selectbox from 'components/Form/Selectbox';
import MainCarousel from 'pages/Main/Carousel';
import ProductItem from 'pages/Product/ProductItem';
import { Row as OriginRow } from 'antd';
import { ROUTE_PATH } from 'configs/config';
import { PaddingContainer } from 'components/styled/Container';
import ResponsiveTemplate from 'template/ResponsiveTemplate';
import MobileMain from 'pages/Main/mobile';

const Container = styled.div``;

const Row = styled(OriginRow)`
  row-gap: 1rem;
`;

const Main = () => {
  const [selectedItem, setSelectedItem] = useState({
    key: 1,
    value: '신상품순',
  });
  const history = useHistory();

  const handleProductDetailClick = (id) => {
    history.push(`${ROUTE_PATH.product}:${id}`);
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
          />
        );
      },
    );
  };

  return (
    <ResponsiveTemplate
      NonPCContents={
        <Container>
          <MainCarousel />
          <MobileMain onProductDetailClick={handleProductDetailClick} />
        </Container>
      }
    >
      <Container>
        <MainCarousel />
        <PaddingContainer>
          <Row justify="space-between" style={{ rowGap: '1.6rem' }}>
            {renderProductList()}
          </Row>
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
    description: '마시썽',
    beforePrice: '6000',
    afterPrice: '5000',
    salePercentage: '-1000',
  },
  {
    id: '1234',
    img: process.env.PUBLIC_URL + '/assets/images/치카 로고.png',
    catergory: '식품',
    description: '마시썽',
    beforePrice: '6000',
    afterPrice: '5000',
    salePercentage: '-1000',
  },
  {
    id: '1235',
    img: process.env.PUBLIC_URL + '/assets/images/치카 로고.png',
    catergory: '식품',
    description: '마시썽',
    beforePrice: '6000',
    afterPrice: '5000',
    salePercentage: '-1000',
  },
  {
    id: '1236',
    img: process.env.PUBLIC_URL + '/assets/images/치카 로고.png',
    catergory: '식품',
    description: '마시썽',
    beforePrice: '6000',
    afterPrice: '5000',
    salePercentage: '-1000',
  },
  {
    id: '1237',
    img: process.env.PUBLIC_URL + '/assets/images/치카 로고.png',
    catergory: '식품',
    description: '마시썽',
    beforePrice: '6000',
    afterPrice: '5000',
    salePercentage: '-1000',
  },
];
