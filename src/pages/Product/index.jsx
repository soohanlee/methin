import React, { useState } from 'react';
import styled from 'styled-components';
import { Row as OriginRow } from 'antd';

import ProductItem from 'pages/Product/ProductItem';
import { PageTitle, Label } from 'components/styled/Form';
import Selectbox from 'components/Form/Selectbox';

import { PaddingContainer } from 'components/styled/Container';
import { ROUTE_PATH } from 'configs/config';
import { useHistory } from 'react-router';
import Pagination from 'components/Pagination';

const Container = styled(PaddingContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FilterHeader = styled.div`
  margin-bottom: 7rem;
`;

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 3rem 0rem 3rem 4rem;
  border-top: 0.1rem solid ${(props) => props.theme.TEXT_MAIN};
  border-bottom: 0.1rem solid ${(props) => props.theme.TEXT_MAIN};
`;

const FilterItemContainer = styled.div`
  display: flex;
  height: 4rem;
  align-items: center;
  margin-right: 5rem;
`;

const FilterLabel = styled.div`
  margin-right: 0.5rem;
`;
const FilterLength = styled.div`
  color: ${(props) => props.theme.TEXT_DISABLE};
`;

const ContentsContainer = styled.div`
  width: 100%;
  margin-bottom: 8rem;
`;

const ContentsHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 3rem;
`;

const ContentsBody = styled.div``;

const Row = styled(OriginRow)`
  row-gap: 1rem;
`;

const selectList = [
  { key: 'sale', value: '판매순' },
  { key: 'view', value: '조회순' },
  { key: 'date', value: '등록순' },
];

const Product = () => {
  const history = useHistory();
  const [selectedItem, setSelectedItem] = useState(selectList[0]);

  const renderFilterList = () => {
    return filterList.map(({ key, value, length }) => {
      return (
        <FilterItemContainer>
          <FilterLabel key={key}>{value}</FilterLabel>
          <FilterLength>{length}</FilterLength>
        </FilterItemContainer>
      );
    });
  };

  const handleSelectedItem = (value) => {
    setSelectedItem(value);
  };

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
    <Container>
      <FilterHeader>
        <PageTitle>닭가슴살</PageTitle>
        <FilterContainer>{renderFilterList()}</FilterContainer>
      </FilterHeader>
      <ContentsContainer>
        <ContentsHeader>
          <Label>총 41개</Label>
          <Selectbox
            list={selectList}
            selectedItem={selectedItem}
            onSelectedItem={handleSelectedItem}
          />
        </ContentsHeader>
        <ContentsBody>
          <Row justify="space-between" style={{ rowGap: '1.6rem' }}>
            {renderProductList()}
          </Row>
        </ContentsBody>
      </ContentsContainer>
      <Pagination />
    </Container>
  );
};

export default Product;

const filterList = [
  { key: 'test', value: '저염수비드 무항생제', length: 21 },
  { key: 'test1', value: '저염수비드 무항생제', length: 21 },
  { key: 'test2', value: '저염수비드 무항생제', length: 21 },
  { key: 'test3', value: '저염수비드 무항생제', length: 21 },
  { key: 'test4', value: '저염수비드 무항생제', length: 21 },
  { key: 'test5', value: '저염수비드 무항생제', length: 21 },
  { key: 'test6', value: '저염수비드 무항생제', length: 21 },
];

const productList = [
  {
    id: '123',
    img: process.env.PUBLIC_URL + '/assets/images/치카 로고.png',
    catergory: '식품',
    description: '마시썽',
    beforePrice: '6000',
    afterPrice: 19800,
    salePercentage: '-15',
  },
  {
    id: '1234',
    img: process.env.PUBLIC_URL + '/assets/images/치카 로고.png',
    catergory: '식품',
    description: '마시썽',
    beforePrice: '6000',
    afterPrice: '19800',
    salePercentage: '-15',
  },
  {
    id: '1235',
    img: process.env.PUBLIC_URL + '/assets/images/치카 로고.png',
    catergory: '식품',
    description: '마시썽',
    beforePrice: '6000',
    afterPrice: '19800',
    salePercentage: '-15',
  },
  {
    id: '1236',
    img: process.env.PUBLIC_URL + '/assets/images/치카 로고.png',
    catergory: '식품',
    description: '마시썽',
    beforePrice: '6000',
    afterPrice: '19800',
    salePercentage: '-15',
  },
  {
    id: '1237',
    img: process.env.PUBLIC_URL + '/assets/images/치카 로고.png',
    catergory: '식품',
    description: '마시썽',
    beforePrice: '6000',
    afterPrice: '19800',
    salePercentage: '-15',
  },
];
