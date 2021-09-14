import React from 'react';
import styled from 'styled-components';
import { MainButton as OriginMainButton } from 'components/styled/Button';

const Container = styled.div`
  padding: 2rem;
  margin-bottom: 3rem;
`;

const Date = styled.div``;

const OrderNumber = styled.div``;

const Img = styled.div``;

const Title = styled.div`
  font-weight: bold;
`;

const SubTitle = styled.div`
  font-size: 1.2rem;
  color: ${(props) => props.theme.TEXT_GUIDELINE};
`;

const Price = styled.div`
  font-weight: bold;
`;

const ItemInfoContainer = styled.div`
  display: flex;
  border-top: 0.1rem solid ${(props) => props.theme.LINE};
  border-bottom: 0.1rem solid ${(props) => props.theme.LINE};
  padding: 1rem 0;
  margin: 1rem 0;
  > div {
    padding-bottom: 0.5rem;
  }
`;

const ImgContainer = styled.div``;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div``;
const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 0.2rem solid black;
  padding-bottom: 1rem;
`;

const FooterLeft = styled.div``;
const FooterRight = styled.div``;

const DeliveryState = styled.div`
  padding-bottom: 0.5rem;
  color: ${(props) => (props.isDelivery ? props.theme.MAIN : props.TEXT_MAIN)};
`;
const DeliveryCompany = styled.div``;

const MainButton = styled(OriginMainButton)`
  height: 100%;
`;

const DeliveryItem = ({
  id,
  date,

  orderNumber,
  img,
  title,
  option,
  price,
  deliveryState,
  company,
  buttonTitle,
}) => {
  const handleClickReview = (id) => {
    alert(id);
  };
  return (
    <Container>
      <Date>{date}</Date>
      <OrderNumber>{orderNumber}</OrderNumber>
      <ItemInfoContainer>
        <ImgContainer>
          <Img alt={img} src={'/assets/images/mobile/service-off-icon.svg'} />
        </ImgContainer>
        <InfoContainer>
          <Title>{title}</Title>
          <SubTitle>{option}</SubTitle>
          <Price>{price}</Price>
        </InfoContainer>
      </ItemInfoContainer>
      <Footer>
        <FooterLeft>
          <DeliveryState isDelivery={deliveryState}>
            {deliveryState ? '배송완료' : '준비중'}
          </DeliveryState>
          <DeliveryCompany>{company}</DeliveryCompany>
        </FooterLeft>
        <FooterRight>
          <MainButton onClick={() => handleClickReview(id)}>
            {buttonTitle}
          </MainButton>
        </FooterRight>
      </Footer>
    </Container>
  );
};

export default DeliveryItem;
