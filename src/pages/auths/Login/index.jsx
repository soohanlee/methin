import React from 'react';
import { useForm } from 'react-hook-form';

import { logInWithCreds } from 'apis/auth';
import { setAccessToken, setRefreshToken } from 'utils/tokenManager';
import { notification } from 'utils/notification';

import { Input, Form } from 'components/styled/Form';

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    const id = watch('id');
    const password = watch('password');

    try {
      const result = logInWithCreds(id, password);
      const token = result.data.token;
      const refresh_token = result.data.refresh_token;
      setAccessToken(token);
      setRefreshToken(refresh_token);
    } catch (e) {
      const { status } = e.response;
      if (status === 401) {
        notification.error('로그인을 실패하였습니다.');
      } else if (status === 400) {
        notification.error('아이디 혹은 비밀번호를 확인해주세요.');
      }
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
    </Form>
  );
};

export default Login;
