import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  margin-bottom: 7rem;
  display: flex;
  padding: 6rem 5rem;
  background: ${(props) => props.theme.PANEL};
`;

const HeaderItem = styled.div`
  width: 25%;
  border-right: 0.1rem solid ${(props) => props.theme.BORDER};
  margin-left: 7rem;
  &:first-child {
    margin-left: 0;
    width: 50%;
  }
  &:last-child {
    border: 0;
  }
`;

const Name = styled.div`
  font-size: 2.3rem;
  margin-bottom: 2rem;
`;

const MyLevelText = styled.div`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const NoMarginMyLevelText = styled(MyLevelText)`
  margin-bottom: 0;
`;

const HightlightText = styled.span`
  color: ${(props) => props.theme.SIGNITURE_MAIN};
`;

const MyLevelHightlightText = styled(HightlightText)`
  font-size: 1.5rem;
`;

const NumberText = styled(HightlightText)`
  font-size: 3.15rem;
`;

const UserInfomation = () => {
  return (
    <Header>
      <HeaderItem>
        <Name>윤승철 님</Name>
        <NoMarginMyLevelText>
          현재 등급은 <MyLevelHightlightText>떡잎단계</MyLevelHightlightText>
          입니다.
        </NoMarginMyLevelText>
      </HeaderItem>
      <HeaderItem>
        <MyLevelText>좋아요 한 상품</MyLevelText>
        <NumberText>2</NumberText>
      </HeaderItem>
      <HeaderItem>
        <MyLevelText>보유중인 포인트</MyLevelText>
        <NumberText>800P</NumberText>
      </HeaderItem>
    </Header>
  );
};

export default UserInfomation;
