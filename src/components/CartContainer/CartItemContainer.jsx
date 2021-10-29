import React from 'react';
import styled, { css } from 'styled-components';
import { SubButton as OriginSubButton } from 'components/styled/Button';

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
      color: ${props.theme.MAIN};
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

const CartItemContainer = (
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
) => {
  const isChecked = checkList.find((item) => item === `${id}`);
  return (
    <ProductItemLine key={id}>
      <ProductItemContainer>
        <Checkbox checked={isChecked} value={id} onChange={onChange} />
        <ProductItemImgContainer>
          <Img src={main_image_url} />
        </ProductItemImgContainer>

        <ProductItemTextContainer>
          <Label bold>{name}</Label>
          <Label grey>옵션: 리코타 치즈 샐러드/1개</Label>
        </ProductItemTextContainer>

        <CountContainer>
          <CountButton onClick={() => onClickMinus(id, count)}>-</CountButton>
          <CountDiv>{count}</CountDiv>
          <CountButton onClick={() => onClickPlus(id, count)}>+</CountButton>
        </CountContainer>
        <Price>{actual_price * count}원</Price>
      </ProductItemContainer>
    </ProductItemLine>
  );
};

export default CartItemContainer;
