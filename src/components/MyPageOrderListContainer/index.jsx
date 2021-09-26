import { SubButton } from 'components/styled/Button';
import React from 'react';
import styled, { css } from 'styled-components';
import { Empty as OriginEmpty } from 'antd';

const Container = styled.div``;

const Title = styled.div`
  font-size: 2.3rem;
  margin-bottom: 3rem;
`;

const IdLine = styled.div`
  padding: 3rem 0;
  border-top: 0.1rem solid ${(props) => props.theme.TEXT_MAIN};
  border-bottom: 0.1rem solid ${(props) => props.theme.BORDER};
  display: flex;
  div:first-child {
    margin-right: 2rem;
  }
`;

const ListContainer = styled.div``;

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

const ProductItemLine = styled.div`
  display: flex;
  padding: 2rem 1.5rem;
  justify-content: space-between;
  border-bottom: 0.1rem solid ${(props) => props.theme.BORDER};
`;

const ProductItemContainer = styled.div`
  display: flex;
`;

const ProductItemTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProductItemImgContainer = styled.div`
  width: 60px;
  height: 70px;
  background: black;
  margin-right: 2rem;
`;

const ProductItemButtonContainer = styled.div`
  width: 25rem;
  display: flex;
  align-items: center;
  line-height: 3rem;
  button:first-child {
    margin-right: 0.5rem;
  }
`;

const OrderMessageContainer = styled.div`
  padding: 2rem 1.5rem;
  display: flex;
  border-bottom: 0.1rem solid ${(props) => props.theme.BORDER};
  div:first-child {
    margin-right: 2rem;
  }
`;

const Empty = styled(OriginEmpty)`
  margin: 2rem;
`;

const MyPageOrderListContainer = ({ list, title }) => {
  const renderList = () => {
    return list.length === 0 ? (
      <Empty />
    ) : (
      list.map(
        ({
          title,
          date,
          orderNumber,
          option,
          price,
          deliveryState,
          deliveryNumber,
        }) => {
          return (
            <ListContainer>
              <IdLine>
                <Label bold>{date}</Label>
                <Label>{orderNumber}</Label>
              </IdLine>
              <ProductItemLine>
                <ProductItemContainer>
                  <ProductItemImgContainer></ProductItemImgContainer>

                  <ProductItemTextContainer>
                    <Label bold>{title}</Label>
                    <Label grey>{option}</Label>
                    <Label bold>{price}원</Label>
                  </ProductItemTextContainer>
                </ProductItemContainer>
                <ProductItemButtonContainer>
                  <SubButton>리뷰쓰기</SubButton>
                </ProductItemButtonContainer>
              </ProductItemLine>
              <OrderMessageContainer>
                <Label bold highlight>
                  {deliveryState ? '배송완료' : '미배송'}
                </Label>
                <Label>{deliveryNumber}</Label>
              </OrderMessageContainer>
            </ListContainer>
          );
        },
      )
    );
  };
  return (
    <Container>
      <Title>{title || '주문 배송 조회'}</Title>
      {renderList()}
    </Container>
  );
};

export default MyPageOrderListContainer;
