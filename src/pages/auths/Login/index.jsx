import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';

import { logInWithCreds } from 'apis/auth';
import {
  setAccessToken,
  setRefreshToken,
  cleanToken,
} from 'utils/tokenManager';
import { notification } from 'utils/notification';
import {
  UserContext,
  LOGGED_IN,
  LOGGING_IN,
  NOT_LOGGED_IN,
} from 'store/user-context';

import { Input, Form } from 'components/styled/Form';

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

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register('id', { required: true })} type="text" />
      {errors.id && <span>This field is required</span>}

      <Input {...register('password', { required: true })} type="password" />
      {errors.password && <span>This field is required</span>}

      {errors.phone && <span>This field is required</span>}

      <Input type="submit" />
      {login.loginState === LOGGING_IN && <div>로그인중</div>}
    </Form>
  );
};

export default Login;
