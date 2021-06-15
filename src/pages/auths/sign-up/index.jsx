import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { signup, checkExistEmail, checkPhoneNumber } from 'apis/auth';
import { notification } from 'utils/notification';

import { AuthContainer } from 'pages/auths/styled';

import {
  MainButton as OriginMainButton,
  SubButton as OriginSubButton,
} from 'components/styled/Button';

import {
  Input as OriginInput,
  Form as OriginForm,
  Label as OriginLabel,
} from 'components/styled/Form';
import { ROUTE_PATH } from 'configs/config';
import { useHistory } from 'react-router';

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

const InputInnerContainer = styled.div`
  display: flex;
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

const SubMain = styled(OriginSubButton)`
  line-height: 5rem;
  margin-bottom: 1rem;
  width: 100px;
  margin-left: 1rem;
`;

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [isExistEmail, setIsExistEmail] = useState(false);
  const [isVerifyPhoneNumber, setIsVerifyPhoneNumber] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  const history = useHistory();

  const onSubmit = async (data) => {
    try {
      const result = await signup(data);
      console.log(result);
      setIsFirstVisit(true);
      history.push(ROUTE_PATH.login);
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

  const handleCheckExistEmail = async (e) => {
    e.preventDefault();
    try {
      const result = await checkExistEmail({ email: watch('email') });
      setIsFirstVisit(false);
      setIsExistEmail(result.data.data.isExists);
    } catch (e) {
      if (e.response && e.response.status === 400) {
        notification.error('이메일을 입력해주세요.');
      }
    }
  };

  const handleCheckPhoneNumber = async (e) => {
    e.preventDefault();
    const phoneNumber = watch('phone');

    if (phoneNumber.length < 1) {
      return notification.error(`핸드폰 번호를 입력해주세요.`);
    }
    try {
      await checkPhoneNumber({ phone: watch('phone') });
      setIsVerifyPhoneNumber(true);
    } catch (e) {
      if (e.response && e.response.status === 400) {
        notification.error(`핸드폰 인증 실패`);
        setIsVerifyPhoneNumber(false);
      }
    }
  };

  return (
    <Container>
      <Label>회원가입</Label>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <InputInnerContainer>
            <Input
              placeholder="이메일을 입력해주세요"
              {...register('email', { required: true })}
              type="email"
            />
            <SubMain onClick={handleCheckExistEmail}>중복검사 </SubMain>
          </InputInnerContainer>
          {errors.email && <span>필수 입력란입니다.</span>}
          {!isFirstVisit ? (
            isExistEmail ? (
              <span>이미 가입된 이메일입니다.</span>
            ) : (
              <span>인증되었습니다.</span>
            )
          ) : null}
        </InputContainer>

        <InputContainer>
          <Input
            placeholder="비밀번호를 입력해주세요"
            {...register('password', { required: true })}
            type="password"
          />
          {errors.password && <span>필수 입력란입니다.</span>}
        </InputContainer>

        <InputContainer>
          <Input
            placeholder="닉네임을 입력해주세요"
            {...register('nickname', { required: true })}
          />
          {errors.nickname && <span>필수 입력란입니다.</span>}
        </InputContainer>

        <InputContainer>
          <InputInnerContainer>
            <Input
              placeholder="휴대폰 번호를 입력해주세요"
              {...register('phone', { required: true })}
            />
            <SubMain onClick={handleCheckPhoneNumber}>인증</SubMain>
          </InputInnerContainer>

          {errors.phone && <span>필수 입력란입니다.</span>}
          {!isFirstVisit ? (
            isVerifyPhoneNumber ? (
              <span>인증되었습니다</span>
            ) : (
              <span>인증되지 않았습니다.</span>
            )
          ) : null}
        </InputContainer>

        <MainButton type="submit">회원가입</MainButton>
      </Form>
    </Container>
  );
};

export default SignUp;
