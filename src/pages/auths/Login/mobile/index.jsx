import React from 'react';
import {
  FrontContainer,
  MobileHeaderContainer,
  FrontInnerContainer,
  MobileFooterContainer,
  ContentsContainer,
} from 'components/styled/Container';
const MobileLogin = () => {
  return (
    <FrontContainer>
      <FrontInnerContainer>
        <MobileHeaderContainer>헤더</MobileHeaderContainer>
        <ContentsContainer>컨텐츠</ContentsContainer>
        <MobileFooterContainer>푸터</MobileFooterContainer>
      </FrontInnerContainer>
    </FrontContainer>
  );
};

export default MobileLogin;
