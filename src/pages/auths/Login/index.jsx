import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import styled from 'styled-components';

import { logInWithCreds } from 'apis/auth';
import {
  setAccessToken,
  setRefreshToken,
  cleanToken,
  getAccessToken,
} from 'utils/tokenManager';
import { ROUTE_PATH } from 'configs/config';
import { notification } from 'utils/notification';
import {
  UserContext,
  LOGGED_IN,
  LOGGING_IN,
  NOT_LOGGED_IN,
} from 'store/user-context';
import ResponsiveTemplate from 'template/ResponsiveTemplate';

import {
  Input as OriginInput,
  Form as OriginForm,
  Label as OriginLabel,
} from 'components/styled/Form';
import {
  MainButton as OriginMainButton,
  SubButton as OriginSubButton,
} from 'components/styled/Button';
import { AuthContainer } from 'pages/auths/styled';

import { BreakPoint } from 'configs/config';

import { user, registerGaEvent, action } from 'google/ga';
// import MobileLogin from './mobile';

const Container = styled(AuthContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 44rem;
  margin: auto;
  @media screen and (max-width: ${BreakPoint.s}px) {
    padding: 2rem;
    padding-bottom: 6rem;
  }
`;

const Form = styled(OriginForm)`
  width: 100%;
`;

const Label = styled(OriginLabel)`
  font-size: 4rem;
  margin-bottom: 7rem;
  line-height: 1.5;
  @media screen and (max-width: ${BreakPoint.s}px) {
    font-size: 2.6rem;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
`;

const Input = styled(OriginInput)`
  width: 100%;
  line-height: 4rem;
  margin-bottom: 1rem;
  border-bottom: 0.1rem solid ${(props) => props.theme.TEXT_DISABLE};
`;

const MainButton = styled(OriginMainButton)`
  line-height: 5rem;
  margin-bottom: 1rem;
`;

const SubButton = styled(OriginSubButton)`
  line-height: 5rem;
`;

const NoticeJoinContainer = styled.div`
  display: flex;
  margin-top: 2rem;
  justify-content: space-between;

  @media screen and (max-width: ${BreakPoint.s}px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const NoticeJoin = styled.span`
  border-bottom: 0.1rem solid ${(props) => props.theme.BORDER};
  text-align: center;
  cursor: pointer;

  @media screen and (max-width: ${BreakPoint.s}px) {
    text-align: left;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    font-size: 1.2rem;
  }
`;

const FindButtonContainer = styled.div`
  display: flex;
  > span {
    border-bottom: 0;
    &:first-child {
      margin-right: 1rem;
    }
  }
`;

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const history = useHistory();

  const login = useContext(UserContext);

  useEffect(() => {
    if (login.loginState === LOGGED_IN) {
      if (
        history.location.state &&
        history.location.state.purchase &&
        history.location.state.productId
      ) {
        history.push({
          pathname: history.location.state.to,
          state: {
            productId: history.location.state.productId,
          },
        });
        return;
      }
      if (history.location.state?.from) {
        history.push(`${history.location.state.from}`);
      } else {
        history.push(ROUTE_PATH.main);
      }
    }
  });

  useEffect(() => {
    if (getAccessToken()) {
      login.changeUserState(LOGGED_IN);
    }
  });

  const onSubmit = async () => {
    const id = watch('id');
    const password = watch('password');
    login.changeUserState(LOGGING_IN);
    registerGaEvent(user, action.buy, '로그인');
    console.log('클릭');
    try {
      const result = await logInWithCreds(id, password);
      const token = result.data.data.token;
      const refresh_token = result.data.data.refresh_token;
      setAccessToken(token);
      setRefreshToken(refresh_token);
      login.changeUserState(LOGGED_IN);
    } catch (e) {
      const { status } = e.response;

      if (status === 401) {
        notification.error('로그인을 실패하였습니다.');
      } else if (status === 400) {
        notification.error('아이디 혹은 비밀번호를 확인해주세요.');
      }
      login.changeUserState(NOT_LOGGED_IN);
      cleanToken();
    }
  };

  const handleMoveSignupPage = () => {
    history.push(ROUTE_PATH.signup);
  };

  const handleClickNoMember = () => {
    history.push({
      pathname: ROUTE_PATH.order,
      state: {
        productId: history.location.state.productId,
      },
    });
  };

  const handleSearchProduct = () => {
    history.push({
      pathname: ROUTE_PATH.deliveryTracking,
    });
  };

  return (
    // <ResponsiveTemplate NonPCContents={<MobileLogin />}>
    <Container>
      <Label>로그인</Label>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <Input
            {...register('id', { required: true })}
            type="text"
            placeholder="아이디를 입력해주세요"
          />
          {errors.id && <span>아이디를 입력해주세요.</span>}
        </InputContainer>

        <InputContainer>
          <Input
            {...register('password', { required: true })}
            type="password"
            placeholder="비밀번호를 입력해주세요"
          />
          {errors.password && <span>비밀번호를 입력해주세요</span>}
        </InputContainer>

        <MainButton type="submit">로그인</MainButton>
        <SubButton onClick={handleMoveSignupPage}>회원가입</SubButton>
        <NoticeJoinContainer>
          {history.location.state?.purchase ? (
            <NoticeJoin onClick={handleClickNoMember}>비회원 구매</NoticeJoin>
          ) : (
            <NoticeJoin onClick={handleSearchProduct}>비회원 조회</NoticeJoin>
          )}
          <FindButtonContainer>
            <NoticeJoin onClick={handleClickNoMember}>아이디 찾기</NoticeJoin>
            <NoticeJoin onClick={handleClickNoMember}>비밀번호 찾기</NoticeJoin>
          </FindButtonContainer>
        </NoticeJoinContainer>

        {login.loginState === LOGGING_IN && <div>로그인중</div>}
      </Form>
    </Container>
    // </ResponsiveTemplate>
  );
};

export default Login;
