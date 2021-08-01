import React, { useContext } from 'react';
import styled from 'styled-components';
import MobileNavigation from 'components/Navigation/mobile';
import { MainButton as OriginMainButton } from 'components/styled/Button';
import { UserContext, LOGGED_IN, NOT_LOGGED_IN } from 'store/user-context';
import { ROUTE_PATH } from 'configs/config';
import { cleanToken } from 'utils/tokenManager';
import { notification } from 'utils/notification';
import { useHistory } from 'react-router-dom';

const Container = styled.div``;

const InnerContainer = styled.div`
  padding: 0 2rem;
`;

const MainButton = styled(OriginMainButton)`
  line-height: 4rem;
`;

const UserInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${(props) => props.theme.MAIN};
  padding: 3rem 2rem;
  color: white;
  margin-bottom: 3rem;
`;

const Name = styled.div``;
const Point = styled.div``;

const Title = styled.div`
  width: 100%;
  padding-bottom: 2rem;
  border-bottom: 0.2rem solid black;
  margin-bottom: 2rem;
  font-weight: bold;
`;

const Label = styled.div`
  padding-bottom: 2rem;
`;

const MenuContainer = styled.div`
  margin-bottom: 4rem;
`;

const MobileMyPageMain = (props) => {
  const userState = useContext(UserContext);
  const history = useHistory();

  const logout = () => {
    try {
      cleanToken();
      userState.changeUserState(NOT_LOGGED_IN);
    } catch (e) {
      notification.error('로그아웃 실패입니다.');
    }
  };

  const handleMovePage = (path) => {
    history.push({
      pathname: `${path}`,
    });
  };

  return (
    <Container>
      <UserInfoContainer>
        <Name>김애용 님</Name>
        <Point>375 P</Point>
      </UserInfoContainer>
      <InnerContainer>
        <MenuContainer>
          <Title>쇼핑 정보</Title>
          <Label onClick={() => handleMovePage('')}>주문배송조회</Label>
          <Label onClick={() => handleMovePage('')}>취소 교환 반품 조회</Label>
          <Label onClick={() => handleMovePage('')}>상품리뷰</Label>
        </MenuContainer>
        <MenuContainer>
          <Title>계정설정</Title>
          <Label
            onClick={() =>
              handleMovePage(
                `${ROUTE_PATH.mypage.main}/${ROUTE_PATH.mypage.myInformation}`,
              )
            }
          >
            내 정보 수정
          </Label>
          <Label onClick={() => handleMovePage('')}>회원등급</Label>
          <Label onClick={() => handleMovePage('')}>설정</Label>
        </MenuContainer>
        <MenuContainer>
          <Title>고객센터</Title>
          <Label onClick={() => handleMovePage('')}>1:1 문의내역</Label>
          <Label onClick={() => handleMovePage('')}>상품 QnA 현황</Label>
          <Label onClick={() => handleMovePage('')}>FAQ</Label>
          <Label onClick={() => handleMovePage('')}>기타 문의</Label>
        </MenuContainer>
        <MenuContainer>
          <Title>ABOUT</Title>
          <Label
            onClick={() => handleMovePage(ROUTE_PATH.serviceCenter.notice)}
          >
            공지사항
          </Label>
          <Label onClick={() => handleMovePage('')}>회사 소개</Label>
          <Label onClick={() => handleMovePage('')}>브랜드 스토리</Label>
        </MenuContainer>
        <MainButton onClick={logout} reverse>
          로그아웃
        </MainButton>
      </InnerContainer>
    </Container>
  );
};

export default MobileMyPageMain;
