import React, { useContext } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';

import { UserContext, LOGGED_IN, NOT_LOGGED_IN } from 'store/user-context';
import { ROUTE_PATH } from 'configs/config';
import { cleanToken } from 'utils/tokenManager';

import SearchInput from 'components/Form/SearchInput';
import { notification } from 'utils/notification';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.SIGNITURE_MAIN};
  padding: 0 6rem;
`;

const Logo = styled.div`
  color: ${(props) => props.theme.TEXT_HYPERLINK};
`;

const UserContainer = styled.div``;

const Navigation = () => {
  const history = useHistory();
  const userState = useContext(UserContext);

  const handleSearchClick = () => {
    console.log('클릭');
  };

  const handleMoveLoginPage = () => {
    history.push(`${ROUTE_PATH.login}`);
  };

  const handleLogout = async () => {
    try {
      cleanToken();
      userState.changeUserState(NOT_LOGGED_IN);
    } catch (e) {
      notification.error('로그아웃 실패입니다.');
    }
  };

  return (
    <Container>
      <Logo>methin</Logo>
      <SearchInput
        onClick={handleSearchClick}
        placeholder={'이 달의 베스트! 프로 다이어터를 위한 식품 대전'}
      />
      <UserContainer>
        {userState.loginState === LOGGED_IN ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <button onClick={handleMoveLoginPage}>Login</button>
        )}
      </UserContainer>
    </Container>
  );
};

export default Navigation;
