import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { getUserProductDetail } from 'apis/product';

import Modalbase from 'components/ModalBase';
import { MainButton, SubButton } from 'components/styled/Button';

const Container = styled.div`
  padding: 3rem;
`;

const Name = styled.div`
  font-size: 1.55rem;
  margin-bottom: 1rem;
`;

const Price = styled.div`
  font-size: 1.55rem;
  font-weight: bold;
`;

const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 6rem;
`;

const Box = styled.div`
  width: 3rem;
  line-height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CountContainer = styled.div`
  display: flex;
  border: 0.1rem solid ${(props) => props.theme.LINE};
  border-radius: 0.2rem;
`;

const SumContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Sum = styled.span`
  font-size: 2.4rem;
  font-weight: bold;
`;
const Won = styled.span`
  font-size: 1.6rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  line-height: 4.5rem;
  > button {
    &:first-child {
      margin-right: 1rem;
    }
  }
`;

const CartModal = ({
  isOpen,
  onCancel,
  price,
  onClickCartButton,
  productId,
}) => {
  const [product, setProduct] = useState();
  const [count, setCount] = useState(1);

  const getProduct = useCallback(async () => {
    const result = await getUserProductDetail(productId);
    if (result.status === 200) {
      setProduct(result.data.data);
    }
  }, [productId]);

  useEffect(() => {
    if (productId) {
      getProduct();
    }
  }, [productId, getProduct]);

  const handleMinus = () => {
    if (count === 0 || count < 1) {
      return;
    } else {
      setCount((prev) => prev - 1);
    }
  };

  const handleCancel = () => {
    setProduct();
    onCancel();
    setCount(1);
  };

  if (!product) {
    return '로딩중';
  } else {
    return (
      <Modalbase isOpen={isOpen} onCancel={handleCancel}>
        <Container>
          <Name>{product.name}</Name>
          <PriceContainer>
            <Price>{product.actual_price}</Price>
            <CountContainer>
              <Box onClick={handleMinus}>-</Box>
              <Box>{count}</Box>
              <Box onClick={() => setCount((prev) => prev + 1)}>+</Box>
            </CountContainer>
          </PriceContainer>
          <SumContainer>
            <Sum>{parseInt(product.actual_price) * count}</Sum>
            <Won>원</Won>
          </SumContainer>
        </Container>
        <ButtonContainer>
          <SubButton onClick={onCancel}>취소</SubButton>
          <MainButton onClick={() => onClickCartButton(productId, count)}>
            장바구니 담기
          </MainButton>
        </ButtonContainer>
      </Modalbase>
    );
  }
};

export default CartModal;
