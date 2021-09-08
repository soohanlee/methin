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
import { ROUTE_PATH, BreakPoint } from 'configs/config';
import { useHistory } from 'react-router';
import Postcode from 'components/PostcodeModal';

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

const Title = styled(OriginLabel)`
  font-size: 4rem;
  margin-bottom: 7rem;
  line-height: 1.5;
  @media screen and (max-width: ${BreakPoint.s}px) {
    font-size: 2.6rem;
  }
`;

const Label = styled(OriginLabel)`
  font-size: 1.55rem;
  line-height: 1.5;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
`;

const RowInputContainer = styled(InputContainer)`
  flex-direction: row;
`;

const InputInnerContainer = styled.div`
  display: flex;
`;

const Input = styled(OriginInput)`
  width: 100%;
  line-height: 4rem;
  margin-bottom: 1rem;
  border-bottom: 0.1rem solid ${(props) => props.theme.TEXT_DISABLE};
  &[type='radio'] {
    line-height: 1rem;
    margin-bottom: 0rem;
    width: 1rem;
    margin-right: 1rem;
  }
  &[type='checkbox'] {
    line-height: 1rem;
    margin-bottom: 0rem;
    width: 1rem;
    margin-right: 1rem;
  }
`;

const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 3rem;
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

const BirthContainer = styled.div`
  border: 0.1rem solid ${(props) => props.theme.LINE};
  border-radius: 0.2rem;
  padding: 1rem;
  display: flex;
`;

const BirthBox = styled.input`
  width: 100%;
  height: 40px;
  border: 0;
  text-align: center;
`;

const BirthBar = styled.span`
  &:after {
    content: '/';
    float: left;
    width: 22px;
    height: 100%;
    font-size: 14px;
    color: #ccc;
    line-height: 42px;
    text-align: center;
  }
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
  const [isOpenPostCode, setIsOpenPostCode] = useState(false);

  const [address, setAddress] = useState(''); // 주소
  const history = useHistory();

  const onSubmit = async (data) => {
    try {
      const result = await signup(data);

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

  const handleClickPostCode = (e) => {
    e.preventDefault();
    setIsOpenPostCode(true);
  };

  return (
    <Container>
      <Title>회원가입</Title>
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

        <InputContainer>
          <MainButton onClick={handleClickPostCode} type="submit">
            주소검색
          </MainButton>
          <Postcode
            setIsOpen={setIsOpenPostCode}
            setAddress={setAddress}
            isOpen={isOpenPostCode}
          />
          {address.length > 1 && <Input value={address} />}
          {address.length > 1 && (
            <Input
              placeholder={'상세주소를 입력해주세요'}
              {...register('addressDetail', { required: true })}
            />
          )}
        </InputContainer>
        <RowInputContainer>
          <RadioContainer>
            <Input type="radio" id="male" name="sex" />
            <Label htmlFor={'male'}>남자</Label>
          </RadioContainer>
          <RadioContainer>
            <Input type="radio" id="female" name="sex" />
            <Label htmlFor={'female'}>여자</Label>
          </RadioContainer>
          <RadioContainer>
            <Input type="radio" id="no" name="sex" />
            <Label htmlFor={'no'}>선택안함</Label>
          </RadioContainer>
        </RowInputContainer>
        <InputContainer>
          <BirthContainer>
            <BirthBox maxLength="4" placeholder={'YYYY'} />
            <BirthBar />
            <BirthBox maxLength="2" placeholder={'MM'} />
            <BirthBar />
            <BirthBox maxLength="2" placeholder={'DD'} />
          </BirthContainer>
        </InputContainer>

        <InputContainer>
          <Input
            placeholder="추천인 아이디들 입력해주세요."
            {...register('recomender', { required: false })}
          />
        </InputContainer>

        <InputContainer>
          <RadioContainer>
            <Input type="checkbox" id={'all'} />
            <Label htmlFor="all">전체 동의합니다</Label>
          </RadioContainer>
          <RadioContainer>
            <Input type="checkbox" required id="a" />
            <Label htmlFor="a">이용약관 동의</Label>
          </RadioContainer>
          <RadioContainer>
            <Input type="checkbox" required id="b" />
            <Label htmlFor="b">개인정보 수집·이용 동의</Label>
          </RadioContainer>
          <RadioContainer>
            <Input type="checkbox" id="c" />
            <Label htmlFor="c">개인정보 수집·이용 동의</Label>
          </RadioContainer>
          <RadioContainer>
            <Input type="checkbox" id="d" />
            <Label htmlFor="d">
              무료배송, 할인쿠폰 등 혜택/정보 수신 동의{' '}
            </Label>
          </RadioContainer>
          <RadioContainer>
            <Input type="checkbox" required id="e" />
            <Label htmlFor="e">본인은 만 14세 이상입니다.</Label>
          </RadioContainer>
        </InputContainer>
        <MainButton type="submit">회원가입</MainButton>
      </Form>
    </Container>
  );
};

export default SignUp;
