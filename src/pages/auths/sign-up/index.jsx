import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { signup, checkExistEmail } from 'apis/auth';
import { notification } from 'utils/notification';

import { Input, Form } from 'components/styled/Form';
import { Button } from 'antd';

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

  const [isExistEmail, setIsExistEmail] = useState(false);

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

  const handleCheckExistEmail = async () => {
    try {
      const result = await checkExistEmail(watch('email'));
      console.log('result', result);
      setIsExistEmail(result.data.isExists);
    } catch (e) {
      if (e.response && e.response.status === 400) {
        notification.error('이메일을 입력해주세요.');
      }
    }
  };

  const handleCheckPhoneNumber = () => {
    notification.error('핸드폰 인증 api 연결 x');
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <Input {...register('email', { required: true })} type="email" />
        <Button onClick={handleCheckExistEmail}>중복검사 </Button>
      </InputContainer>

      {errors.email && <span>This field is required</span>}
      {isExistEmail && <span>This field is required</span>}

      <Input {...register('password', { required: true })} type="password" />
      {errors.password && <span>This field is required</span>}

      <Input {...register('nickname', { required: true })} />
      {errors.nickname && <span>This field is required</span>}

      <InputContainer>
        <Input {...register('phone', { required: true })} />
        <button onClick={handleCheckPhoneNumber}>인증</button>
      </InputContainer>

      {errors.phone && <span>This field is required</span>}

      <Input type="submit" />
    </Form>
  );
};

export default SignUp;
