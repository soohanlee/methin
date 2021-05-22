import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { signup, checkExistEmail, checkPhoneNumber } from 'apis/auth';
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
    } catch (e) {
      if (e.response.status === 400) {
        if (e.response.data.error_code === 1003) {
          notification.error('핸드폰 인증을 먼저 진행해주세요.');
        } else if (e.response.data.error_code === 1002) {
          notification.error('이미 가입한 이메일 입니다.');
        } else if (e.response.data.error_code === 1000) {
          notification.error('필수 값을 입력해주세요.');
        } else {
          notification.error('죄송합니다. 다시 한번 시도해주세요.');
        }
      }
    }
  };

  const handleCheckExistEmail = async () => {
    try {
      const result = await checkExistEmail({ email: watch('email') });
      setIsExistEmail(result.data.isExists);
    } catch (e) {
      if (e.response && e.response.status === 400) {
        notification.error('이메일을 입력해주세요.');
      }
    }
  };

  const handleCheckPhoneNumber = async () => {
    const phoneNumber = watch('phone');

    if (phoneNumber.length < 1) {
      return notification.error(`핸드폰 번호를 입력해주세요.`);
    }
    try {
      await checkPhoneNumber({ phone: watch('phone') });
    } catch (e) {
      notification.error(`핸드폰 인증 실패`);
    }
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
