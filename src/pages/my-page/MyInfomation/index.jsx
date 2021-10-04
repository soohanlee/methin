import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getUserInformation, updateUserInfomation } from 'apis/user';
import BorderTitleContainer from 'components/container/BorderTitleContainer';
import LabelWithChildren from 'components/Form/LabelWithChildren';
import { Input as OriginInput } from 'components/styled/Form';
import { MainButton as OriginMainButton } from 'components/styled/Button';
import { BreakPoint } from 'configs/config';
import { message } from 'antd';

const Container = styled.div`
  padding: 4rem 2rem;
  width: 44rem;
  @media screen and (max-width: ${BreakPoint.s}px) {
    padding: 2rem 1rem;
    width: 100%;
  }
`;

const Label = styled.div`
  font-size: 1.55rem;
`;

const ActionContainer = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 2rem;
`;

const WrapContainer = styled.div`
  margin-bottom: 2rem;
`;

const MainButton = styled(OriginMainButton)`
  min-width: 8rem;
  max-width: 8rem;
  margin-left: 2rem;
  line-height: 4rem;
`;

const Input = styled(OriginInput)`
  width: 100%;
  padding: 1rem;
`;

const SaveButton = styled(OriginMainButton)`
  width: 100%;
  line-height: 4rem;
`;

const Myinfo = () => {
  const [phoneOld, setPhoneOld] = useState('');
  const [phone, setPhone] = useState('');

  const [nickNameOld, setNickNameOld] = useState('');
  const [nickName, setNickName] = useState('');

  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [checkNewPassword, setCheckNewPassword] = useState('');
  const [email, setEmail] = useState('');

  const userInfo = async () => {
    try {
      const user = await getUserInformation();
      if (user && user.data && user.data.data) {
        const {
          created_at,
          default_address_main,
          default_address_sub,
          default_zip_code,
          email,
          id,
          nickname,
          phone,
          type,
        } = user.data.data;
        setNickNameOld(nickname);
        setPhoneOld(phone);
        setEmail(email);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    userInfo();
  }, []);

  const initData = () => {
    setNewPassword('');
    setPassword('');
    setCheckNewPassword('');
    setPhone('');
    setNickName('');
  };

  const updateUserInfo = async () => {
    if (nickName.length === 0 && phone.length === 0 && password.length === 0) {
      message.error('변경 사항이 없습니다.');
      return;
    }

    if (
      nickName === nickNameOld &&
      phone === phoneOld &&
      password.length === 0
    ) {
      message.error('변경 사항이 없습니다.');
      return;
    }

    if (
      password.length === 0 ||
      checkNewPassword.length === 0 ||
      newPassword.length === 0
    ) {
      message.error('비밀번호를 입력해주세요.');
      return;
    }

    if (nickName !== nickNameOld || phone !== phoneOld) {
      const userdata = {
        old_password: password,
        password: newPassword,
        nickName: nickName,
        phone: phone,
      };
      try {
        const response = await updateUserInfomation(userdata);
        console.log('response', response.data.message);
        if (response.data && response.data.message === 'success') {
          message.info('정보가 변경되었습니다.');
          initData();
          return;
        }
      } catch (e) {
        console.log(e.response);
        if (e.response) {
          message.error(e.response.data.description);
          initData();
        }
      }
    }
  };

  const renderPasswordCheck = () => {
    if (newPassword.length > 4 && checkNewPassword.length > 4) {
      if (newPassword === checkNewPassword) {
        return <div>패스워드가 일치합니다.</div>;
      } else {
        return <div>패스워드가 일치하지 않습니다.</div>;
      }
    } else {
      <div></div>;
    }
  };

  return (
    <div>
      {/* 개인 정보 수정 */}
      <BorderTitleContainer>
        <Container>
          <LabelWithChildren label="연락처">
            <ActionContainer>
              <Input
                placeholder={phoneOld}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </ActionContainer>
          </LabelWithChildren>
          <LabelWithChildren label="닉네임">
            <ActionContainer>
              <Input
                placeholder={nickNameOld}
                value={nickName}
                onChange={(e) => setNickName(e.target.value)}
              />
            </ActionContainer>
          </LabelWithChildren>
          <LabelWithChildren label="이메일">
            <ActionContainer>
              <Input placeholder="이메일 " value={email} />
            </ActionContainer>
          </LabelWithChildren>
          <LabelWithChildren label="기존 비밀번호">
            <Input
              placeholder="기존 비밀번호 입력"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </LabelWithChildren>
          <LabelWithChildren label="새 비밀번호">
            <WrapContainer>
              <Input
                placeholder="새 비밀번호 입력"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </WrapContainer>

            <ActionContainer>
              <Input
                placeholder="새 비밀번호 입력"
                value={checkNewPassword}
                onChange={(e) => setCheckNewPassword(e.target.value)}
              />
            </ActionContainer>
            {renderPasswordCheck()}
          </LabelWithChildren>
          {/* 
          <LabelWithChildren label="주소정보">
            <ActionContainer>
              <Input
                value={nickName}
                onChange={(e) => setNickName(e.target.value)}
              />
              <MainButton reverse>우편번호</MainButton>
            </ActionContainer>
            <WrapContainer>
              <Input
                placeholder="주소 입력"
                value={mainAddress}
                onChange={(e) => setNickName(e.target.value)}
              />
            </WrapContainer>

            <WrapContainer>
              <Input
                placeholder="상세주소입력"
                value={subAddress}
                onChange={(e) => setNickName(e.target.value)}
              />
            </WrapContainer>
          </LabelWithChildren> */}
          <SaveButton onClick={updateUserInfo}>저장하기</SaveButton>
        </Container>
      </BorderTitleContainer>
    </div>
  );
};

export default Myinfo;
