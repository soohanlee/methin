import React, { useEffect, useState, useContext, useCallback } from 'react';
import styled, { css } from 'styled-components';
import { getCartList, updateCartItemCount, deleteCartItem } from 'apis/cart';
import {
  UserContext,
  LOGGED_IN,
  LOGGING_IN,
  NOT_LOGGED_IN,
} from 'store/user-context';
import { notification } from 'utils/notification';
import {
  getCartCookies,
  removeCartCookie,
  setCartCookies,
  removeCartCookies,
} from 'utils/tokenManager';
import { getUserProductDetail } from 'apis/product';

import Receipt from 'pages/Order/Receipt';

import { PaddingContainer } from 'components/styled/Container';
import { PageTitle as OriginPageTitle } from 'components/styled/Form';
import OriginBorderTitleContainer from 'components/container/BorderTitleContainer';
import { SubButton as OriginSubButton } from 'components/styled/Button';
import { ROUTE_PATH } from 'configs/config';
import { useHistory } from 'react-router';

const PageTitle = styled(OriginPageTitle)`
  text-align: center;
  margin-bottom: 10rem;
`;

const CartContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

const Contents = styled.div`
  width: 100%;
`;

const BorderTitleContainer = styled(OriginBorderTitleContainer)`
  margin-bottom: 5rem;
`;

const ProductItemLine = styled.div`
  display: flex;
  padding: 2rem 1.5rem;
  justify-content: space-between;
  border-bottom: 0.1rem solid ${(props) => props.theme.BORDER};
  width: 100%;
`;

const Label = styled.div`
  font-size: 1.55rem;
  font-weight: ${(props) => (props.bold ? 500 : 300)};
  color: ${(props) =>
    props.grey ? props.theme.TEXT_INFORMATION : props.theme.TEXT_MAIN};

  ${(props) =>
    props.highlight &&
    css`
      color: ${props.theme.SIGNITURE_MAIN};
    `}
`;

const ProductItemContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const ProductItemImgContainer = styled.div`
  width: 60px;
  height: 70px;
  background: black;
  margin-right: 2rem;
`;

const Img = styled.img`
  width: 100%;
  object-fit: cover;
`;

const ProductItemTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60%;

  > div:nth-child(2) {
    margin: 1rem 0;
  }
`;

const CountContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CountButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border: 0.1rem solid ${(props) => props.theme.TEXT_DISABLE};
`;

const CountDiv = styled(CountButton)`
  font-size: 1.4rem;
  border-left: 0;
  border-right: 0;
`;

const Price = styled.div`
  color: ${(props) => props.theme.TEXT_MAIN};
  font-size: 2.3rem;
  min-width: 11rem;
  margin-left: 2rem;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })``;

const SubButton = styled(OriginSubButton)`
  width: 12.2rem;
  line-height: 4rem;
`;

const NoCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30rem;
  border-bottom: 0.1rem solid ${(props) => props.theme.LINE};
`;

const Cart = () => {
  const history = useHistory();

  const [cartList, setCartList] = useState([]);
  const [finalPrice, setFinalPrice] = useState(0);
  const login = useContext(UserContext);
  const [checkList, setCheckList] = useState([]);

  useEffect(() => {
    const priceList = cartList.map(({ actual_price }) => actual_price);
    const calcFinalPrice = priceList.reduce(function add(sum, currValue) {
      return sum + currValue;
    }, 0);

    setFinalPrice(calcFinalPrice);
  }, [cartList, finalPrice]);

  const setCartDetail = async (id) => {
    const result = await getUserProductDetail(id);
    return result.data.data;
  };

  const setCart = async () => {
    try {
      const result = await getCartList();
      if (result && result.status === 200) {
        setCartList(result.data.data);
      }
    } catch (e) {}
  };

  const setCookiesCart = useCallback(async () => {
    const cartList = getCartCookies();
    console.log('cartList', cartList);
    const list = [];
    if (cartList) {
      for (let i = 0; i < cartList.length; i++) {
        const result = await setCartDetail(cartList[i].product_id);
        result.count = cartList[i].count;
        list.push(result);
      }
      console.log('list', list);
      setCartList(list);
    }
  }, []);

  useEffect(() => {
    if (login.loginState === LOGGED_IN) {
      setCart();
    } else if (login.loginState === NOT_LOGGED_IN) {
      setCookiesCart();
    }
  }, [login.loginState, setCookiesCart]);

  const handlePlus = async (product_id, count) => {
    if (login.loginState === LOGGED_IN) {
      const newCount = count + 1;
      try {
        await updateCartItemCount(product_id, { count: newCount });
      } catch (e) {}
    } else if (login.loginState === NOT_LOGGED_IN) {
      const newCartList = cartList.map((item) => {
        if (item.id === product_id) {
          return { ...item, count: count + 1 };
        } else {
          return item;
        }
      });

      const newCookiesList = newCartList.map(({ id, count }) => {
        let cartData = {};
        cartData.product_id = id;
        cartData.count = count;
        return cartData;
      });

      setCartCookies(newCookiesList);
      setCookiesCart();
    }
  };

  const handleMinus = async (product_id, count) => {
    if (count === 0) {
      return;
    }
    if (login.loginState === LOGGED_IN) {
      const newCount = count - 1;

      try {
        await updateCartItemCount(product_id, { count: newCount });
      } catch (e) {}
    } else if (login.loginState === NOT_LOGGED_IN) {
      const newCartList = cartList.map((item) => {
        if (item.id === product_id) {
          return { ...item, count: count - 1 };
        } else {
          return item;
        }
      });

      const newCookiesList = newCartList.map(({ id, count }) => {
        let cartData = {};
        cartData.product_id = id;
        cartData.count = count;
        return cartData;
      });

      setCartCookies(newCookiesList);
      setCookiesCart();
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    let list = checkList.slice();
    const isExist = list.find((item) => item === value);

    if (isExist) {
      const result = list.filter((item) => item !== value);
      setCheckList(result);
    } else {
      const result = list.concat([value]);

      setCheckList(result);
    }
  };

  const handleCheckListDelete = () => {
    if (login.loginState === LOGGED_IN) {
      for (let i = 0; i < checkList.length; i++) {
        try {
          deleteCartItem(checkList[i]);
          setCart();
        } catch (e) {
          notification.error('새로고침 후 시도해주세요.');
        }
      }
    } else if (login.loginState === NOT_LOGGED_IN) {
      try {
        removeCartCookie(checkList);
        setCookiesCart();
      } catch (e) {
        notification.error('새로고침 후 시도해주세요.');
      }
    }
  };

  const handleClickPurchaseButton = () => {
    if (cartList?.length === 0) {
      return;
    } else {
      history.push({
        pathname: ROUTE_PATH.order,
        state: cartList,
      });
    }
  };

  const renderCartList = () => {
    console.log('cartList', cartList);
    if (cartList?.length === 0) {
      return <NoCart>장바구니에 담긴 상품이 없습니다.</NoCart>;
    } else {
      return cartList?.map(
        ({
          id,
          product_id,
          count,
          name,
          price,
          discount_amount,
          actual_price,
          main_image_url,
          min_quantity,
          max_quantity,
          created_at,
        }) => {
          const isChecked = checkList.find(
            (item) => item === `${product_id ? product_id : id}`,
          );

          return (
            <ProductItemLine key={id}>
              <ProductItemContainer>
                <Checkbox
                  checked={isChecked}
                  value={product_id ? product_id : id}
                  onChange={handleChange}
                />
                <ProductItemImgContainer>
                  <Img src={main_image_url} />
                </ProductItemImgContainer>

                <ProductItemTextContainer>
                  <Label bold>{name}</Label>
                  <Label grey>옵션: 리코타 치즈 샐러드/1개</Label>
                  <Label bold>{price}원</Label>
                </ProductItemTextContainer>

                <CountContainer>
                  <CountButton
                    onClick={() =>
                      handleMinus(product_id ? product_id : id, count)
                    }
                  >
                    -
                  </CountButton>
                  <CountDiv>{count}</CountDiv>
                  <CountButton
                    onClick={() =>
                      handlePlus(product_id ? product_id : id, count)
                    }
                  >
                    +
                  </CountButton>
                </CountContainer>
                <Price>{actual_price}원</Price>
              </ProductItemContainer>
            </ProductItemLine>
          );
        },
      );
    }
  };

  return (
    <PaddingContainer>
      {/* 장바구니 */}
      <PageTitle>장바구니</PageTitle>
      <CartContainer>
        <Contents>
          <BorderTitleContainer title="상품 목록">
            {renderCartList()}
          </BorderTitleContainer>
        </Contents>
        <Receipt
          isCart
          finalPrice={finalPrice}
          discountPrice={0}
          productPrice={0}
          deliveryPrice={0}
          onClickPurchaseButton={handleClickPurchaseButton}
        />
      </CartContainer>
      <SubButton onClick={handleCheckListDelete}>선택 삭제</SubButton>
    </PaddingContainer>
  );
};

export default Cart;
