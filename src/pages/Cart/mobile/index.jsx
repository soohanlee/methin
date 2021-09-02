import MobilePageTemplate from 'components/MobilePageTemplate';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { ROUTE_PATH } from 'configs/config';
import { Checkbox } from 'antd';
import CartItemContainer from 'components/CartContainer/CartItemContainer';

const BackIcon = styled.img.attrs({
  src: '/assets/images/mobile/black-back-icon.svg',
})`
  width: 2.5rem;
  height: 2.5rem;
`;

const CartIcon = styled.img.attrs({
  src: '/assets/images/mobile/black-cart-icon.svg',
})`
  width: 2.5rem;
  height: 2.5rem;
`;

const CartContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NoCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30rem;
  border-bottom: 0.1rem solid ${(props) => props.theme.LINE};
`;

const MobileCart = ({
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
  checkList,
  onChange,
  onClickMinus,
  onClickPlus,
  cartList,
}) => {
  const [isOpenPurchaseModal, setIsOpenPruchaseModal] = useState(false);
  const [isAllCheck, setIsAllCheck] = useState(false);

  const history = useHistory();

  const handleBackHistoryClick = () => {
    history.go(-1);
  };

  const handleOpenOptionModal = () => {
    setIsOpenPruchaseModal(true);
    console.log('클릭');
  };

  const handleCartClick = () => {
    history.push(ROUTE_PATH.cart);
  };

  const handleAllCheckboxChange = (e) => {
    setIsAllCheck(e.target.checked);
  };

  console.log('cartList', cartList);
  const renderCartList = () => {
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
          const isChecked = checkList.find((item) => item === `${id}`);

          return (
            <CartItemContainer
              id={id}
              product_id={product_id}
              count={count}
              name={name}
              price={price}
              discount_amount={discount_amount}
              actual_price={actual_price}
              main_image_url={main_image_url}
              min_quantity={min_quantity}
              max_quantity={max_quantity}
              created_at={created_at}
              checkList={checkList}
              onChange={onChange}
              onClickMinus={onClickMinus}
              onClickPlus={onClickPlus}
            />
          );
        },
      );
    }
  };

  return (
    <MobilePageTemplate
      header={
        <>
          <BackIcon onClick={handleBackHistoryClick} />
          <CartIcon onClick={handleCartClick} />
        </>
      }
      footer={
        <CartContainer onClick={handleOpenOptionModal}>주문하기</CartContainer>
      }
    >
      <Checkbox checked={isAllCheck} onChange={handleAllCheckboxChange}>
        전체 선택
      </Checkbox>
      <div>선택 삭제</div>
      {renderCartList()}
    </MobilePageTemplate>
  );
};

export default MobileCart;
