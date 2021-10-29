import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { ROUTE_PATH } from 'configs/config';
import { UserContext, LOGGED_IN, NOT_LOGGED_IN } from 'store/user-context';

import { Label as OriginLabel } from 'components/styled/Form';
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
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const MobileMenu = () => {
  const history = useHistory();
  const userState = useContext(UserContext);

  const handleMovePage = (path) => {
    history.push(`${path}`);
  };

  useEffect(() => {
    if (userState.loginState !== LOGGED_IN) {
      history.push(ROUTE_PATH.login);
    }
  }, [userState.loginState, history]);

  return (
    <div>
      <Label>
        <Label hightlight>이수한</Label> 님 반갑습니다.
      </Label>
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
        <PageNameLabel
          onClick={() => handleMovePage(ROUTE_PATH.serviceCenter.notice)}
        >
          공지사항
        </PageNameLabel>
        <PageNameLabel
          onClick={() => handleMovePage(ROUTE_PATH.serviceCenter.main)}
        >
          고객센터
        </PageNameLabel>
      </PaddingContainer>
    </div>
  );
};

export default MobileMenu;
