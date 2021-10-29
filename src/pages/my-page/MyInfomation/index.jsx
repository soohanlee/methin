import React, { useState } from 'react';
import styled from 'styled-components';
import BorderTitleContainer from 'components/container/BorderTitleContainer';
import LabelWithChildren from 'components/Form/LabelWithChildren';
import { Input as OriginInput } from 'components/styled/Form';
import { MainButton as OriginMainButton } from 'components/styled/Button';
import { BreakPoint } from 'configs/config';

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
  const [phone, setPhone] = useState();
  const [nickName, setNickName] = useState();
  const [password, setPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [checkNewPassword, setCheckNewPassword] = useState();

  return (
    <div>
      {/* 개인 정보 수정 */}
      <BorderTitleContainer>
        <Container>
          <LabelWithChildren label="이름">
            <Label>김애용</Label>
          </LabelWithChildren>
          <LabelWithChildren label="생년월일">
            <Label>1996.19.22</Label>
          </LabelWithChildren>
          <LabelWithChildren label="연락처">
            <ActionContainer>
              <Input
                placeholder="연락처 "
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <MainButton reverse>수정</MainButton>
            </ActionContainer>
          </LabelWithChildren>
          <LabelWithChildren label="아이디">
            <ActionContainer>
              <Input
                placeholder="닉네임 "
                value={nickName}
                onChange={(e) => setNickName(e.target.value)}
              />
              <MainButton reverse>수정</MainButton>
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
              <MainButton disabled reverse>
                수정
              </MainButton>
            </ActionContainer>
          </LabelWithChildren>

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
                value={nickName}
                onChange={(e) => setNickName(e.target.value)}
              />
            </WrapContainer>

            <WrapContainer>
              <Input
                placeholder="상세주소입력"
                value={nickName}
                onChange={(e) => setNickName(e.target.value)}
              />
            </WrapContainer>
          </LabelWithChildren>
          <SaveButton>저장하기</SaveButton>
        </Container>
      </BorderTitleContainer>
    </div>
  );
};

export default Myinfo;
