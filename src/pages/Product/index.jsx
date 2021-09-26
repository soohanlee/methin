import React, { useState, useContext, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { Row as OriginRow } from 'antd';
import { useHistory } from 'react-router';

import { ROUTE_PATH, BreakPoint } from 'configs/config';
import { addCartItem } from 'apis/cart';
import { addCartListToCookies } from 'utils/common';
import { notification } from 'utils/notification';
import { UserContext, LOGGED_IN } from 'store/user-context';

import ProductItem from 'pages/Product/ProductItem';
import Pagination from 'components/Pagination';
import { PageTitle, Label } from 'components/styled/Form';
import Selectbox from 'components/Form/Selectbox';
import { PaddingContainer } from 'components/styled/Container';

import CartModal from './modal/CartModal';
import { getUserProductList } from 'apis/product';
import EmptyContainer from 'components/EmptyContainer';

const Container = styled(PaddingContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: ${BreakPoint.s}px) {
    padding: 0;
    height: 100%;
  }
`;

const FilterHeader = styled.div`
  margin-bottom: 7rem;
  @media screen and (max-width: ${BreakPoint.s}px) {
    display: none;
  }
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
  cursor: pointer;
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
  @media screen and (max-width: ${BreakPoint.s}px) {
    margin-bottom: 3rem;
    height: 100%;
  }
`;

const ContentsHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 3rem;
  @media screen and (max-width: ${BreakPoint.s}px) {
    display: none;
  }
`;

const ContentsBody = styled.div`
  height: 100%;
`;

const Row = styled(OriginRow)`
  row-gap: 1rem;
  height: 100%;
`;

const selectList = [
  { key: 'sale', value: '판매순' },
  { key: 'view', value: '조회순' },
  { key: 'date', value: '등록순' },
];

const Product = () => {
  const login = useContext(UserContext);
  const history = useHistory();

  const menuId = history.location?.state;
  const [productList, setProductList] = useState([]);
  const [selectedItem, setSelectedItem] = useState(selectList[0]);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [productId, setProductId] = useState('');

  const getList = useCallback(async () => {
    try {
      const result = await getUserProductList(menuId);
      setProductList(result.data.data.list);
    } catch (e) {
      if (e.response && e.response.status === 404) {
        console.log('통신 실패');
      }
    }
  }, [menuId]);

  useEffect(() => {
    if (menuId) {
      getList();
    }
  }, [menuId, getList]);

  const renderFilterList = () => {
    return filterList.map(({ key, value, length }) => {
      return (
        <FilterItemContainer key={key}>
          <FilterLabel>{value}</FilterLabel>
          <FilterLength>{length}</FilterLength>
        </FilterItemContainer>
      );
    });
  };

  const handleSelectedItem = (value) => {
    setSelectedItem(value);
  };

  const handleProductDetailClick = (id) => {
    history.push(`${ROUTE_PATH.product}${id}`);
  };

  const handleCartClick = (e, id) => {
    e.stopPropagation();
    setProductId(id);
    setIsCartModalOpen(true);
  };

  const handleCancel = () => {
    setIsCartModalOpen(false);
  };

  const handleClickCartButton = async (productId, productCount) => {
    const numberProductId = parseInt(productId);
    const data = {
      product_id: numberProductId,
      count: productCount,
    };
    if (login.loginState === LOGGED_IN) {
      try {
        const result = await addCartItem(data);
        if (result && result.data.message === 'success') {
          notification.success('장바구니에 상품을 담았습니다.');
        }
      } catch (e) {}
    } else {
      const result = addCartListToCookies(data);

      if (result === 'isExist') {
        notification.success(
          '이미 장바구니에 포함된 상품입니다. 상품 개수를 추가하였습니다.',
        );
      } else {
        notification.success('장바구니에 담았습니다.');
      }
    }
    setIsCartModalOpen(false);
  };

  const renderProductList = () => {
    if (mocuupProductList.length === 0) {
      return <EmptyContainer />;
    } else {
      return mocuupProductList.map(
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
              onCartClick={handleCartClick}
              onClick={() => handleProductDetailClick(id)}
              isShowImg
              won={false}
            />
          );
        },
      );
    }
  };

  return (
    <Container>
      <FilterHeader>
        <PageTitle>닭가슴살</PageTitle>
        <FilterContainer>{renderFilterList()}</FilterContainer>
      </FilterHeader>
      <ContentsContainer>
        <ContentsHeader>
          <Label>총 {productList.length}개</Label>
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
      <Pagination total={productList.length} />
      <CartModal
        isOpen={isCartModalOpen}
        onCancel={handleCancel}
        price={12000}
        onClickCartButton={handleClickCartButton}
        productId={productId}
      />
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

const mocuupProductList = [
  {
    id: 13,
    img: process.env.PUBLIC_URL + '/assets/images/치카 로고.png',
    catergory: '식품',
    description: '마시썽',
    beforePrice: '6000',
    afterPrice: 19800,
    salePercentage: '-15',
  },
  {
    id: 14,
    img: process.env.PUBLIC_URL + '/assets/images/치카 로고.png',
    catergory: '식품',
    description: '마시썽',
    beforePrice: '6000',
    afterPrice: '19800',
    salePercentage: '-15',
  },
  {
    id: 15,
    img: process.env.PUBLIC_URL + '/assets/images/치카 로고.png',
    catergory: '식품',
    description: '마시썽',
    beforePrice: '6000',
    afterPrice: '19800',
    salePercentage: '-15',
  },
  {
    id: 16,
    img: process.env.PUBLIC_URL + '/assets/images/치카 로고.png',
    catergory: '식품',
    description: '마시썽',
    beforePrice: '6000',
    afterPrice: '19800',
    salePercentage: '-15',
  },
  {
    id: 17,
    img: process.env.PUBLIC_URL + '/assets/images/치카 로고.png',
    catergory: '식품',
    description: '마시썽',
    beforePrice: '6000',
    afterPrice: '19800',
    salePercentage: '-15',
  },
];
