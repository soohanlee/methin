import React from 'react';
import styled from 'styled-components';
import ProductItem from 'pages/Product/ProductItem';

import { Row as OriginRow } from 'antd';

const Row = styled(OriginRow)`
  row-gap: 1rem;
`;

const Container = styled.div``;

const MobileMain = ({ onProductDetailClick }) => {
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
            span={12}
            onClick={() => onProductDetailClick(id)}
          />
        );
      },
    );
  };
  return (
    <Container>
      <Row justify="space-between" style={{ rowGap: '1.6rem' }}>
        {renderProductList()}
      </Row>
    </Container>
  );
};

export default MobileMain;
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
    id: '1234',
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
];
