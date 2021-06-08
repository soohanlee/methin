import React from 'react';
import styled, { css } from 'styled-components';
import OriginBorderTitleContainer from 'components/container/BorderTitleContainer';
import { PaddingContainer } from 'components/styled/Container';
import { PageTitle as OriginPageTitle } from 'components/styled/Form';
import Receipt from 'pages/Order/Receipt';
import LabelWithComponents from 'components/Form/LabelWithComponents';
import {
  MainButton as OriginMainButton,
  SubButton as OriginSubButton,
} from 'components/styled/Button';

const PageTitle = styled(OriginPageTitle)`
  text-align: center;
  margin-bottom: 10rem;
`;

const OrderContainer = styled.div`
  display: flex;
`;

const Contents = styled.div`
  width: 100%;
`;

const ProductItemLine = styled.div`
  display: flex;
  padding: 2rem 1.5rem;
  justify-content: space-between;
  border-bottom: 0.1rem solid ${(props) => props.theme.BORDER};
  width: 100%;
`;

const ProductItemContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
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

const ProductItemImgContainer = styled.div`
  width: 60px;
  height: 70px;
  background: black;
  margin-right: 2rem;
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

const CountContainer = styled.div`
  display: flex;
  justify-content: flex-end;
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

const Price = styled.div`
  color: ${(props) => props.theme.TEXT_MAIN};
  font-size: 2.3rem;
  min-width: 11rem;
  margin-left: 2rem;
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

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${ProductSubInfoContainer}:nth-child(2) {
    margin: 0;
  }
  ${Label}:nth-child(2) {
    margin: 1rem 0;
  }
`;

const BorderTitleContainer = styled(OriginBorderTitleContainer)`
  margin-bottom: 10rem;
`;

const DeliveryWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;
const DeliveryContainer = styled.div``;

const SubButton = styled(OriginSubButton)`
  width: 12rem;
  line-height: 4rem;
`;

const PayButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const MainButton = styled(OriginMainButton)`
  width: 22rem;
  line-height: 5rem;
  margin-left: 1rem;
  margin-bottom: 1rem;
`;

const Order = () => {
  return (
    <PaddingContainer>
      {/* 결제화면 */}
      <PageTitle>주문 및 결제</PageTitle>
      <OrderContainer>
        <Contents>
          <BorderTitleContainer title="주문 상품 정보">
            <ProductItemLine>
              <ProductItemContainer>
                <ProductItemImgContainer></ProductItemImgContainer>

                <ProductItemTextContainer>
                  <Label bold>인기 샐러드 도시락</Label>
                  <Label grey>옵션: 리코타 치즈 샐러드/1개</Label>
                  <Label bold>39,800원</Label>
                </ProductItemTextContainer>

                <CountContainer>
                  <CountButton>-</CountButton>
                  <CountDiv>1</CountDiv>
                  <CountButton>+</CountButton>
                </CountContainer>
                <Price>39,800원</Price>
              </ProductItemContainer>
            </ProductItemLine>
          </BorderTitleContainer>

          <BorderTitleContainer title="주문자 정보">
            <ProductItemLine>
              <InfoContainer>
                <ProductSubInfoContainer>
                  <ProductSubTitle info>아이디</ProductSubTitle>
                  <ProductSubTitle>김애용</ProductSubTitle>
                </ProductSubInfoContainer>
                <ProductSubInfoContainer>
                  <ProductSubTitle info>연락처</ProductSubTitle>
                  <ProductSubTitle>010.1234.7854</ProductSubTitle>
                </ProductSubInfoContainer>
              </InfoContainer>
            </ProductItemLine>
          </BorderTitleContainer>

          <BorderTitleContainer title="배송 정보">
            <ProductItemLine>
              <InfoContainer>
                <LabelWithComponents
                  title="배송지"
                  components={
                    <DeliveryWrap>
                      <DeliveryContainer>
                        <Label bold highlight>
                          기본배송지
                        </Label>
                        <Label bold>김애용 010 1234 7854</Label>
                        <Label bold>
                          [12345] 경기도 광주시 퇴촌면 도수길 11-2 (레츠빌)
                          101동 11호
                        </Label>
                      </DeliveryContainer>
                      <SubButton>수정</SubButton>
                    </DeliveryWrap>
                  }
                />
              </InfoContainer>
            </ProductItemLine>
          </BorderTitleContainer>

          <BorderTitleContainer title="결제 수단">
            <ProductItemLine>
              <PayButtonContainer>
                <MainButton reverse>신용 체크카드</MainButton>
                <MainButton>토스</MainButton>
                <MainButton>페이코</MainButton>
                <MainButton>삼성 페이</MainButton>
                <MainButton>카카오 페이</MainButton>
                <MainButton>네이버 페이</MainButton>
                <MainButton>실시간계좌이체</MainButton>
                <MainButton>무통장 입금[가상계좌]</MainButton>
                <MainButton>휴대폰 결제</MainButton>
              </PayButtonContainer>
            </ProductItemLine>
          </BorderTitleContainer>
        </Contents>
        <Receipt />
      </OrderContainer>
    </PaddingContainer>
  );
};

export default Order;
