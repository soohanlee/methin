import React, { useContext, useEffect, useState, useCallback } from 'react';
import styled, { css } from 'styled-components';
import { ROUTE_PATH } from 'configs/config';
import { useHistory, useParams } from 'react-router';

import { addCartItem } from 'apis/cart';
import {
  getUserProductDetail,
  getProductReviewDetail,
  getProductDetailQNA,
} from 'apis/product';
import { addCartListToCookies } from 'utils/common';
import { notification } from 'utils/notification';

import { UserContext, LOGGED_IN } from 'store/user-context';

import ResponsiveTemplate from 'template/ResponsiveTemplate';
import { PaddingContainer } from 'components/styled/Container';
import { MainButton } from 'components/styled/Button';
// import RelatedProducts from 'pages/product-detail/RelatedProducts';
import OriginDescriptions from 'components/Descriptions';
import ReviewContainer from 'components/review/ReviewContainer';
import MobileProductDetail from './mobile';
import QNAContainer from 'components/QNA/QNAContainer';
import QnaModal from './Modal/QnaModal';

const Container = styled(PaddingContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 105rem;
`;

const MainImgContainer = styled.div`
  max-width: 42rem;
  min-width: 42rem;
  margin-right: 5rem;
`;

const MainImg = styled.img`
  width: 100%;
`;

const TextInfoContainer = styled.div`
  width: 100%;
  text-align: left;
`;

const ProductCategory = styled.div`
  color: ${(props) => props.theme.TEXT_INFORMATION};
  font-size: 1.3rem;
  margin-bottom: 1.4rem;
`;

const ProductName = styled.div`
  color: ${(props) => props.theme.TEXT_MAIN};
  font-size: 2rem;
  margin-bottom: 4.5rem;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: flex-end;
  > div {
    font-weight: 500;
  }
`;

const SalePercentage = styled.div`
  color: ${(props) => props.theme.SIGNITURE_MAIN};
  font-size: 2.5rem;
`;

const BeforePrice = styled.div`
  text-decoration: line-through;
  font-size: 1.4rem;
`;
const AfterPrice = styled.div`
  font-size: 2.5rem;
  margin: 0 1rem;
`;

const Border = styled.div`
  width: 100%;
  border-bottom: 0.1rem solid ${(props) => props.theme.TEXT_DISABLE};
  margin: 3rem 0;
`;

const ProductInfoTitle = styled.div`
  font-size: 1.55rem;
  margin-bottom: 1.6rem;
`;

const ProductSubInfoContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;

const ProductSubTitle = styled.div`
  font-size: 1.5rem;
  color: ${(props) =>
    props.info ? props.theme.TEXT_INFORMATION : props.theme.TEXT_MAIN};
  ${(props) =>
    props.info &&
    css`
      min-width: 13rem;
    `};
`;

const CountContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  > button {
    padding: 1.4rem;
    width: 98%;
    &:first-child {
      margin-right: 1rem;
    }
  }
`;

const CountButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  border: 0.1rem solid ${(props) => props.theme.TEXT_DISABLE};
`;

const CountDiv = styled(CountButton)`
  font-size: 1.8rem;
  border-left: 0;
  border-right: 0;
`;

const Descriptions = styled(OriginDescriptions)`
  margin-bottom: 5rem;
`;

// const RedStarIcon = styled.img``
// const GreyStarIcon = styled.img``

const ProductDetail = () => {
  const history = useHistory();
  const login = useContext(UserContext);

  const params = useParams();
  const numberProductId = parseInt(params?.id);
  const [productCount, setProductCount] = useState(1);
  const [productDetail, setProdcutDetail] = useState({});
  const [productReview, setProductReview] = useState({ list: [], count: 0 });
  const [productQna, setProductQna] = useState({ list: [], count: 0 });

  const [isOpenQnaModal, setIsOpenQnaModal] = useState(false);

  const getProductDetatil = useCallback(async () => {
    const result = await getUserProductDetail(numberProductId);

    if (result && result.data && result.status === 200) {
      setProdcutDetail(result.data.data);
    } else {
      notification.error('통신 성공');
    }
  }, [numberProductId]);

  const getProductReview = useCallback(async () => {
    const result = await getProductReviewDetail(numberProductId);

    if (result.message === 'success') {
      setProductReview(result.data.data);
    }
  }, [numberProductId]);

  const getProductQna = useCallback(async () => {
    const result = await getProductDetailQNA(numberProductId);

    if (result.status === 200) {
      setProductQna(result.data.data);
    }
  }, [numberProductId]);

  useEffect(() => {
    if (numberProductId) {
      getProductDetatil();
    }
  }, [getProductDetatil, numberProductId]);

  useEffect(() => {
    if (numberProductId) {
      getProductReview();
    }
  }, [getProductReview, numberProductId]);

  useEffect(() => {
    if (numberProductId) {
      getProductQna();
    }
  }, [getProductQna, numberProductId]);

  const handleMovePage = (path) => {
    if (path === ROUTE_PATH.order) {
      if (login.loginState === LOGGED_IN) {
        history.push({
          pathname: path,
          state: {
            purchase: true,
            productId: numberProductId,
            from: history.location.pathname,
            to: ROUTE_PATH.order,
          },
        });
      } else {
        history.push({
          pathname: ROUTE_PATH.login,
          state: {
            purchase: true,
            productId: numberProductId,
            from: history.location.pathname,
            to: ROUTE_PATH.order,
          },
        });
      }
    }
  };

  const handleAddCartList = async () => {
    const data = {
      product_id: numberProductId,
      count: productCount,
    };
    if (login.loginState === LOGGED_IN) {
      try {
        const result = addCartItem(data);
        if (result && result.data.message === 'success') {
          notification.success('장바구니에 상품을 담았습니다.');
        }
      } catch (e) {}
    } else {
      const result = addCartListToCookies(data);
      if (result === 'isExist') {
        alert('이미 장바구니에 포함된 상품입니다');
      }
    }
  };

  const handleClickQnaButtonClick = () => {
    if (login.loginState !== LOGGED_IN) {
      if (!alert('로그인 후 이용가능합니다.')) {
        history.push({
          pathname: ROUTE_PATH.login,
          state: {
            from: history.location.pathname,
          },
        });
      }
    } else {
      setIsOpenQnaModal(true);
    }
  };

  const handleCancelQnaButton = () => {
    setIsOpenQnaModal(false);
  };

  const handleMinus = () => {
    if (productCount === 0 || productCount < 1) {
      return;
    } else {
      setProductCount((prev) => prev - 1);
    }
  };

  const handleButtonPurchaseButtonClick = () => {
    console.log('구매하기');
    handleMovePage(ROUTE_PATH.order);
  };

  const handleClickReviewButtonClick = () => {
    console.log('Asdf');
  };

  if (!productDetail && !productDetail.id) {
    return '로딩중';
  } else {
    return (
      <ResponsiveTemplate
        NonPCContents={
          <MobileProductDetail
            productReview={productReview}
            productDetail={productDetail}
            productQna={productQna}
            onClickQnaButtonClick={handleClickQnaButtonClick}
            isOpenQnaModal={isOpenQnaModal}
            onCancelQnaButton={handleCancelQnaButton}
          />
        }
      >
        <Container key={productDetail.id}>
          <ProductInfoContainer>
            <MainImgContainer>
              <MainImg src={productDetail.main_image_url} />
            </MainImgContainer>

            <TextInfoContainer>
              <ProductCategory>샐러드-채식</ProductCategory>
              <ProductName>{productDetail.name}</ProductName>
              <PriceContainer>
                {productDetail.discount_amount && (
                  <SalePercentage>
                    {productDetail.discount_amount}%
                  </SalePercentage>
                )}

                <AfterPrice>{productDetail.actual_price}원</AfterPrice>
                <BeforePrice>{productDetail.price}</BeforePrice>
              </PriceContainer>
              <Border />
              <ProductInfoTitle>상품 정보</ProductInfoTitle>
              <ProductSubInfoContainer>
                <ProductSubTitle info>중량/용량</ProductSubTitle>
                <ProductSubTitle>200g</ProductSubTitle>
              </ProductSubInfoContainer>

              <ProductSubInfoContainer>
                <ProductSubTitle info>알레르기 정보</ProductSubTitle>
                <ProductSubTitle>
                  달고기 토마토 난류 대두 잣 함유
                </ProductSubTitle>
              </ProductSubInfoContainer>
              <ProductSubInfoContainer>
                <ProductSubTitle info>유통기한</ProductSubTitle>
                <ProductSubTitle>수령일 포함 최소 3일</ProductSubTitle>
              </ProductSubInfoContainer>
              <Border />
              <ProductInfoTitle>배송 정보</ProductInfoTitle>

              <ProductSubInfoContainer>
                <ProductSubTitle info>배송구분</ProductSubTitle>
                <ProductSubTitle>
                  {productDetail.ship_attr === 0 ? '일반배송' : '오늘출발'}
                </ProductSubTitle>
              </ProductSubInfoContainer>
              <ProductSubInfoContainer>
                <ProductSubTitle info>포장타입</ProductSubTitle>
                <ProductSubTitle>냉장 종이포장</ProductSubTitle>
              </ProductSubInfoContainer>
              <Border />
              <ProductSubInfoContainer>
                <ProductSubTitle info>상품선택</ProductSubTitle>
                상품선택 옵션 필요
              </ProductSubInfoContainer>
              <CountContainer>
                <CountButton onClick={handleMinus}>-</CountButton>
                <CountDiv>{productCount}</CountDiv>
                <CountButton
                  onClick={() => setProductCount((prev) => prev + 1)}
                >
                  +
                </CountButton>
              </CountContainer>
              <ButtonContainer>
                <MainButton reverse onClick={handleAddCartList}>
                  장바구니
                </MainButton>
                <MainButton onClick={handleButtonPurchaseButtonClick}>
                  구매하기
                </MainButton>
              </ButtonContainer>
            </TextInfoContainer>
          </ProductInfoContainer>
          <Border />

          {/* <RelatedProducts list={[{}, {}]} /> */}
          <Descriptions />

          <ReviewContainer
            onClickReviewButtonClick={handleClickReviewButtonClick}
            count={productReview.count}
            list={productReview.list}
          />
          <QNAContainer
            onClickQnaButtonClick={handleClickQnaButtonClick}
            count={productQna.count}
            list={productQna.list}
          />
          <QnaModal
            productId={productDetail.id}
            categoryTitle={productDetail.name | '제목입니다.'}
            isOpen={isOpenQnaModal}
            onCancel={handleCancelQnaButton}
            isSecret
          />
        </Container>
      </ResponsiveTemplate>
    );
  }
};

export default ProductDetail;
