import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { ROUTE_PATH } from 'configs/config';

import {
  MobileHeaderContainer,
  MobileFooterContainer,
} from 'components/styled/Container';
import { Label as OriginLabel, Select } from 'components/styled/Form';
import MobilePageTemplate from 'components/MobilePageTemplate';
import ReviewContainer from 'components/review/ReviewContainer';
import QNAContainer from 'components/QNA/QNAContainer';
import MobileModal from 'components/MobileModal';

import QnaModal from '../Modal/QnaModal';
import ReviewPage from 'pages/product-detail/mobile/ReviewPage';
import QnaPage from 'pages/product-detail/mobile/QnaPage';

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
  color: ${(props) => props.theme.MAIN};
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

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MenuLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) =>
    props.clicked ? props.theme.MAIN : props.theme.TEXT_INFORMATION};
`;

const MobileProductDetail = ({
  productReview,
  productQna,
  productDetail,
  onClickQnaButtonClick,
  onClickReviewButtonClick,
  isOpenQnaModal,
  isOpenReviewModal,
  onCancelQnaButton,
  onCancelReviewButton,
}) => {
  console.log('productDetail', productDetail);
  const history = useHistory();
  const [isOpenPurchaseModal, setIsOpenPruchaseModal] = useState(false);

  const [menu, setMenu] = useState('1');

  const handleBackHistoryClick = () => {
    history.go(-1);
  };

  const handleCartClick = () => {
    history.push(ROUTE_PATH.cart);
  };

  const handleOpenOptionModal = () => {
    setIsOpenPruchaseModal(true);
    console.log('클릭');
  };

  const handleClickReviewButtonClick = () => {
    console.log('Asdf');
  };

  const handleClickMenu = (id) => {
    setMenu(id);
  };

  const renderMenuContents = () => {
    if (menu === '1') {
      return <div>상품 설명</div>;
    } else if (menu === '2') {
      return <div>상세 정보</div>;
    } else if (menu === '3') {
      return <ReviewPage reviewList={productReview.list} />;
    } else if (menu === '4') {
      return <QnaPage qnaList={productQna.list} />;
    }
  };

  const handleSelectChange = (value) => {
    console.log(value);
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
        <>
          <WhiteHeartIcon />
          <CartContainer onClick={handleOpenOptionModal}>
            <CartLabel>장바구니</CartLabel>
          </CartContainer>
        </>
      }
    >
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
      <PaddingContainer>
        <MenuContainer>
          <MenuLabel
            onClick={() => handleClickMenu('1')}
            clicked={menu === '1'}
          >
            상품설명
          </MenuLabel>
          <MenuLabel
            onClick={() => handleClickMenu('2')}
            clicked={menu === '2'}
          >
            상세정보
          </MenuLabel>
          <MenuLabel
            onClick={() => handleClickMenu('3')}
            clicked={menu === '3'}
          >
            후기
          </MenuLabel>
          <MenuLabel
            onClick={() => handleClickMenu('4')}
            clicked={menu === '4'}
          >
            문의
          </MenuLabel>
        </MenuContainer>
        {renderMenuContents()}
      </PaddingContainer>
      <MobileModal
        isOpen={isOpenPurchaseModal}
        setIsOpen={setIsOpenPruchaseModal}
      >
        df
        {/* <Select onChange={handleSelectChange} options={options} /> */}
      </MobileModal>
    </MobilePageTemplate>
  );
};

export default MobileProductDetail;
