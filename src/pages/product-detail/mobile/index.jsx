import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { ROUTE_PATH } from 'configs/config';

import {
  FrontContainer,
  MobileHeaderContainer,
  FrontInnerContainer,
  MobileFooterContainer,
  ContentsContainer,
} from 'components/styled/Container';
import {
  Label as OriginLabel,
  SelectableLabel as OriginSelectableLabel,
} from 'components/styled/Form';

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

const PaddingContainer = styled.div`
  overflow: hidden;
  padding: 18px 20px 19px;
`;

const MainImgContainer = styled.div`
  width: 100%;
`;

const MainImg = styled.img`
  width: 100%;
`;

const ProductNameLabel = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
`;

const Label = styled(OriginLabel)`
  display: flex;
  width: 100%;
`;

const MainLabel = styled(OriginLabel)`
  display: flex;
  color: ${(props) => props.theme.SIGNITURE_MAIN};
  font-size: 2.4rem;
`;

const SaledPrice = styled.div`
  display: flex;
  font-size: 2.4rem;
`;

const OriginPrice = styled.div`
  font-size: 1.8rem;
  text-decoration: line-through;
`;

const PriceContainer = styled.div`
  display: flex;
`;

const BoldText = styled.div`
  font-size: 1.7rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const ProductSubInfoContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
  > :first-child {
    min-width: 8.5rem;
    width: 8.5rem;
  }
`;

const WhiteHeartIcon = styled.img.attrs({
  src: '/assets/images/mobile/red-like-icon.svg',
})`
  width: 2rem;
  height: 2rem;
`;

const CartContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const CartLabel = styled.div`
  padding: 0 3rem 0 5rem;
  border-left: 0.1rem solid ${(props) => props.theme.BACKGROUND};
  text-align: center;
  color: ${(props) => props.theme.BACKGROUND};
`;

const MobileProductDetail = () => {
  const history = useHistory();
  const [isOpenPurchaseModal, setIsOpenPruchaseModal] = useState(false);

  const handleBackHistoryClick = () => {
    history.go(-1);
  };

  const handleCartClick = () => {
    history.push(ROUTE_PATH.cart);
  };

  const handleOpenOptionModal = () => {};

  return (
    <FrontContainer>
      <FrontInnerContainer>
        <MobileHeaderContainer>
          <BackIcon onClick={handleBackHistoryClick} />
          <CartIcon onClick={handleCartClick} />
        </MobileHeaderContainer>
        <ContentsContainer>
          <MainImgContainer>
            <MainImg
              src={process.env.PUBLIC_URL + '/assets/images/detailspage.jpg'}
            />
          </MainImgContainer>
          <PaddingContainer>
            <ProductNameLabel>샐러드 간편식</ProductNameLabel>
            <Label>인기 샐러드 간편식 도시락 모음전[닭가슴살]</Label>
            <PriceContainer>
              <MainLabel>15%</MainLabel>
              <SaledPrice>19800</SaledPrice>
              <OriginPrice>12000</OriginPrice>
            </PriceContainer>
          </PaddingContainer>

          <PaddingContainer>
            <BoldText>상품 정보</BoldText>

            <ProductSubInfoContainer>
              <Label grey>중량-용량</Label>
              <Label>1개</Label>
            </ProductSubInfoContainer>
            <ProductSubInfoContainer>
              <Label grey>알레르기 정보</Label>
              <Label>1개</Label>
            </ProductSubInfoContainer>
            <ProductSubInfoContainer>
              <Label grey>유통기한</Label>
              <Label>1개</Label>
            </ProductSubInfoContainer>

            <ProductSubInfoContainer>
              <Label grey>포장타입</Label>
              <Label>1개</Label>
            </ProductSubInfoContainer>
          </PaddingContainer>
          <PaddingContainer>
            <BoldText>배송 정보</BoldText>
            <ProductSubInfoContainer>
              <Label grey>배송구분</Label>
              <Label>1개</Label>
            </ProductSubInfoContainer>
            <ProductSubInfoContainer>
              <Label grey>포장 타입</Label>
              <Label>1개</Label>
            </ProductSubInfoContainer>
            <ProductSubInfoContainer>
              <Label grey>상품선택</Label>
              <Label>1개</Label>
            </ProductSubInfoContainer>
          </PaddingContainer>
        </ContentsContainer>
        <MobileFooterContainer>
          <WhiteHeartIcon />
          <CartContainer onClick={handleOpenOptionModal}>
            <CartLabel>장바구니</CartLabel>
          </CartContainer>
        </MobileFooterContainer>
      </FrontInnerContainer>
    </FrontContainer>
  );
};

export default MobileProductDetail;
