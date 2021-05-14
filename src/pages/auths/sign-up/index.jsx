import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { signup } from 'apis/auth';
import { notification } from 'utils/notification';

import { Input, Form } from 'components/styled/Form';

const InputContainer = styled.div`
  display: flex;
`;

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const result = await signup(data);
      console.log('result', result);
    } catch (e) {
      if (e.response.status === 400) {
        notification.error('핸드폰 인증을 먼저 진행해주세요.');
      }
    }
  };

  console.log(watch('email')); // watch input value by passing the name of it

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register('email', { required: true })} type="email" />
      {errors.email && <span>This field is required</span>}

      <Input {...register('password', { required: true })} type="password" />
      {errors.password && <span>This field is required</span>}

      <Input {...register('nickname', { required: true })} />
      {errors.nickname && <span>This field is required</span>}

      <InputContainer>
        <Input {...register('phone', { required: true })} />
        <button>인증</button>
      </InputContainer>

      {errors.phone && <span>This field is required</span>}

      <Input type="submit" />
    </Form>
  );
};

export default SignUp;
