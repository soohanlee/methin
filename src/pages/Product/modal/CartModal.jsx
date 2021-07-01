import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
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
  const [count, setCount] = useState(0);

  const handleMinus = () => {
    if (count === 0 || count < 1) {
      return;
    } else {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <Modalbase isOpen={isOpen} onCancel={onCancel}>
      <Container>
        <Name>[양포어장] 당일손질 생물 오징어</Name>
        <PriceContainer>
          <Price>{price}</Price>
          <CountContainer>
            <Box onClick={handleMinus}>-</Box>
            <Box>{count}</Box>
            <Box onClick={() => setCount((prev) => prev + 1)}>+</Box>
          </CountContainer>
        </PriceContainer>
        <SumContainer>
          <Sum>{price * count}</Sum>
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
};

export default CartModal;
