import React, { useEffect, useContext, useState } from 'react';
import styled from 'styled-components';
import { useHistory, Route } from 'react-router-dom';
import { ROUTE_PATH } from 'configs/config';
import { UserContext, LOGGED_IN, NOT_LOGGED_IN } from 'store/user-context';

import { Label as OriginLabel } from 'components/styled/Form';
import MobilePageModal from 'components/MobilePageModal/MobilePageModal';

import { MobilePaddingContainer } from 'components/styled/Container';

const Container = styled.div`
  padding-bottom: 6rem;
`;

const Header = styled(MobilePaddingContainer)`
  border-bottom: 0.1rem solid ${(props) => props.theme.LINE};
`;

const Label = styled(OriginLabel)`
  font-size: 1.6rem;
`;

const PageNameLabel = styled.div`
  font-size: 1.6rem;
  margin-bottom: 2rem;
`;

const MenuIconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
`;

const IconWithLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  width: 30px;
  margin-bottom: 1rem;
`;

const PaddingContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;

const MobileMenu = () => {
  const history = useHistory();
  const userState = useContext(UserContext);
  const [selectedPageName, setSelectedPageName] = useState('');

  const handleMovePage = (path) => {
    history.push(`${path}`);
  };

  useEffect(() => {
    if (userState.loginState !== LOGGED_IN) {
      history.push(ROUTE_PATH.login);
    }
  }, [userState.loginState, history]);

  const handleModalOpen = (name) => {
    history.push(`/menu/${name}`);
    setSelectedPageName(name);
  };

  return (
    <Container>
      <Header>
        <Label hightlight>이수한</Label> 님 반갑습니다.
      </Header>
      <MenuIconContainer>
        <IconWithLabelContainer>
          <Img src="/assets/images/mobile/black-home-icon.svg" />
          <Label>주문조회</Label>
        </IconWithLabelContainer>

        <IconWithLabelContainer
          onClick={() => handleMovePage(ROUTE_PATH.mobile.mypage)}
        >
          <Img src="/assets/images/mobile/mypage-icon.svg" />
          <Label>마이페이지</Label>
        </IconWithLabelContainer>
        <IconWithLabelContainer
          onClick={() => handleMovePage(ROUTE_PATH.serviceCenter.main)}
        >
          <Img src="/assets/images/mobile/service-center-icon.svg" />
          <Label>고객센터</Label>
        </IconWithLabelContainer>
      </MenuIconContainer>
      <PaddingContainer>
        {pageList.map(({ name, pageName }) => {
          return (
            <PageNameLabel onClick={() => handleModalOpen(pageName)}>
              {name}
            </PageNameLabel>
          );
        })}
      </PaddingContainer>

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

export default MobileMenu;

const pageList = [
  { name: '자주하는 질문', pageName: 'j' },
  { name: '이용안내', pageName: 'k' },
];
