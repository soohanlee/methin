import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import styled from 'styled-components';

import { logInWithCreds } from 'apis/auth';
import {
  setAccessToken,
  setRefreshToken,
  cleanToken,
} from 'utils/tokenManager';
import { ROUTE_PATH } from 'configs/config';
import { notification } from 'utils/notification';
import {
  UserContext,
  LOGGED_IN,
  LOGGING_IN,
  NOT_LOGGED_IN,
} from 'store/user-context';

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

const Container = styled(AuthContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 44rem;
  margin: auto;
`;

const Form = styled(OriginForm)`
  width: 100%;
`;

const Label = styled(OriginLabel)`
  font-size: 4rem;
  margin-bottom: 7rem;
  line-height: 1.5;
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
      history.push(`/main`);
    }
  });

  const onSubmit = async () => {
    const id = watch('id');
    const password = watch('password');
    login.changeUserState(LOGGING_IN);
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

  return (
    <Container>
      <Label>로그인</Label>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <Input
            {...register('id', { required: true })}
            type="text"
            placeholder="아이디를 입력해주세요"
          />
          {errors.id && <span>This field is required</span>}
        </InputContainer>

        <InputContainer>
          <Input
            {...register('password', { required: true })}
            type="password"
            placeholder="비밀번호를 입력해주세요"
          />
          {errors.password && <span>This field is required</span>}
        </InputContainer>

        <MainButton type="submit">로그인</MainButton>
        <SubButton onClick={handleMoveSignupPage}>회원가입</SubButton>

        {login.loginState === LOGGING_IN && <div>로그인중</div>}
      </Form>
    </Container>
  );
};

export default Login;
