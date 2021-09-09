import React, { useContext } from 'react';
import styled from 'styled-components';
import MobileNavigation from 'components/Navigation/mobile';
import { MainButton as OriginMainButton } from 'components/styled/Button';
import { UserContext, LOGGED_IN, NOT_LOGGED_IN } from 'store/user-context';
import { ROUTE_PATH } from 'configs/config';
import { cleanToken } from 'utils/tokenManager';
import { notification } from 'utils/notification';
import { useHistory } from 'react-router-dom';

import MobilePageModal from 'components/MobilePageModal/MobilePageModal';
import Notice from 'pages/my-page/MobileMyPageMain/MobileModalPages/Notice/Notice';
import ProductQna from 'pages/my-page/MobileMyPageMain/MobileModalPages/ProductQna/ProductQna';
import FAQ from 'pages/my-page/MobileMyPageMain/MobileModalPages/FAQ/FAQ';

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

  const [selectedPageName, setSelectedPageName] = React.useState('');

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

  const handleModalOpen = (name) => {
    setSelectedPageName(name);
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
                `${ROUTE_PATH.mypage.main}${ROUTE_PATH.mypage.myInformation}`,
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
          <Label onClick={() => handleModalOpen('qna')}>상품 QnA 내역</Label>
          <Label onClick={() => handleModalOpen('faq')}>FAQ</Label>
          <Label onClick={() => handleModalOpen('extra')}>기타 문의</Label>
        </MenuContainer>
        <MenuContainer>
          <Title>ABOUT</Title>
          <Label onClick={() => handleModalOpen('notice')}>공지사항</Label>
          <Label onClick={() => handleMovePage('')}>회사 소개</Label>
          <Label onClick={() => handleMovePage('')}>브랜드 스토리</Label>
        </MenuContainer>
        <MainButton onClick={logout} reverse>
          로그아웃
        </MainButton>
      </InnerContainer>
      {pageList.map(({ name, pageName, component }) => {
        return (
          <MobilePageModal
            setIsOpen={setSelectedPageName}
            title={name}
            isOpen={selectedPageName === pageName}
          >
            {component}
          </MobilePageModal>
        );
      })}
    </Container>
  );
};

export default MobileMyPageMain;

const pageList = [
  { name: '공지사항', pageName: 'notice', component: <Notice /> },
  { name: '이용안내', pageName: 'k' },
  { name: '상품 QnA 내역', pageName: 'qna', component: <ProductQna /> },
  { name: 'FAQ', pageName: 'faq', component: <FAQ /> },
];
