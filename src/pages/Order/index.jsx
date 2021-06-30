import React, { useState, useEffect, useRef, useContext } from 'react';
import styled, { css } from 'styled-components';
import { useHistory } from 'react-router';

import { ROUTE_PATH } from 'configs/config';
import { notification } from 'utils/notification';
import { getUserAddressList } from 'apis/delivery';
import { NOT_LOGGED_IN, UserContext } from 'store/user-context';

import OriginBorderTitleContainer from 'components/container/BorderTitleContainer';
import { PaddingContainer } from 'components/styled/Container';
import { PageTitle as OriginPageTitle } from 'components/styled/Form';
import Receipt from 'pages/Order/Receipt';
import LabelWithComponents from 'components/Form/LabelWithComponents';
import {
  MainButton as OriginMainButton,
  SubButton as OriginSubButton,
} from 'components/styled/Button';
import SelectDelivery from 'components/SelectDelivery';
import { cleanToken } from 'utils/tokenManager';

const PageTitle = styled(OriginPageTitle)`
  text-align: center;
  margin-bottom: 10rem;
`;

const OrderContainer = styled.div`
  display: flex;
  align-items: flex-start;
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
  const login = useContext(UserContext);
  const history = useHistory();
  const [isOpenChangeDevliveryModal, setIsOpenChangeDevliveryModal] = useState(
    false,
  );

  const [userAddressList, setUserAddressList] = useState([]);
  const [selectedAddressItem, setSelectedAddressItem] = useState([]);
  const [showSelectedAddressItem, setShowSelectedAddressItem] = useState({
    address_main: '',
    address_sub: '',
    created_at: '',
    is_default: '',
    id: '',
    name: '',
    user_id: '',
    zip_code: '',
  });

  const handleOpenDeliveryChangeModal = () => {
    setIsOpenChangeDevliveryModal(true);
  };

  const getAddressList = async () => {
    try {
      const result = await getUserAddressList();
      if (result && result.data && result.data.message === 'success') {
        setUserAddressList(result.data.data.list);
      }
    } catch (e) {
      if (e.response && e.response.status === 401) {
        cleanToken();
        login.changeUserState(NOT_LOGGED_IN);
        history.push(ROUTE_PATH.login);
      } else if (e.response && e.response.status === 400) {
        notification.error('새로고침 후 다시 이용해주세요.');
      }
    }
  };

  useEffect(() => {
    if (showSelectedAddressItem.id === '' && userAddressList.length > 0) {
      setShowSelectedAddressItem(userAddressList[0]);
    }
  }, [showSelectedAddressItem, userAddressList]);

  useEffect(() => {
    if (userAddressList.length === 0) {
      getAddressList();
    }
  }, [userAddressList]);

  const userAddress = useRef('');
  const {
    address_main,
    address_sub,
    created_at,
    is_default,
    id,
    name,
    user_id,
    zip_code,
  } = showSelectedAddressItem;
  if (userAddress.current && selectedAddressItem) {
    userAddress.current = selectedAddressItem;
    console.log(userAddress.current);
  }
  return (
    <>
      <SelectDelivery
        isOpen={isOpenChangeDevliveryModal}
        list={userAddressList}
        selectedItem={selectedAddressItem}
        setSelectedItem={setSelectedAddressItem}
        setUserAddressList={setUserAddressList}
        onCancel={() => setIsOpenChangeDevliveryModal(false)}
        setIsOpenChangeDevliveryModal={setIsOpenChangeDevliveryModal}
        getAddressList={getAddressList}
        setShowSelectedAddressItem={setShowSelectedAddressItem}
      />
      <PaddingContainer>
        {/* 결제화면 */} <PageTitle> 주문 및 결제 </PageTitle>
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

                  <Price> 39, 800 원 </Price>
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
                          {is_default ? (
                            <Label bold highlight>
                              기본배송지
                            </Label>
                          ) : null}

                          <Label bold>
                            {name} {user_id}
                          </Label>
                          <Label bold>
                            [{zip_code}] {address_main}
                            <br />
                            <br />
                            {address_sub}
                          </Label>
                        </DeliveryContainer>
                        <SubButton onClick={handleOpenDeliveryChangeModal}>
                          수정
                        </SubButton>
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
    </>
  );
};

export default Order;
