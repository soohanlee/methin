import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Row as OriginRow, Col } from 'antd';
import ResponsiveTemplate from 'template/ResponsiveTemplate';
import MobileFooter from 'components/Footer/mobile';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.BACKGROUND};
`;

const PageListContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 2.5rem 0;
  width: 100%;
  border-top: 0.1rem solid ${(props) => props.theme.LINE};
  border-bottom: 0.1rem solid ${(props) => props.theme.LINE};
`;

const PageInnerListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100rem;
  width: 100%;
`;

const CorpContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 2.5rem 0;
  width: 100%;
  border-bottom: 0.1rem solid ${(props) => props.theme.LINE};
`;

const CorpInnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150rem;
`;

const Row = styled(OriginRow)`
  width: 100%;
`;

const GutterCol = styled(Col).attrs({ className: 'gutter-row' })`
  width: 100%;
`;

const Label = styled.div`
  color: ${(props) => props.theme.TEXT_MAIN};
  font-size: 1.2rem;
  padding-left: 10rem;
`;

const Footer = () => {
  return (
    <ResponsiveTemplate NonPCContents={<MobileFooter />}>
      <Container>
        <PageListContainer>
          <PageInnerListContainer>
            <NavLink to={`/`}>METHINE 소개</NavLink>
            <NavLink to={`/`}>채용정보</NavLink>
            <NavLink to={`/`}>이용약관</NavLink>
            <NavLink to={`/`}>개인정보처리방침</NavLink>
            <NavLink to={`/`}>이용안내</NavLink>
            <NavLink to={`/`}>전자금융거래약관</NavLink>
          </PageInnerListContainer>
        </PageListContainer>
        <CorpContainer>
          <CorpInnerContainer>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <GutterCol span={6}>
                <Label>상호명</Label>
                <Label>대표: 문상현</Label>
                <Label>COPYRIGHT @Methin.All rights reserved.</Label>
              </GutterCol>
              <GutterCol span={6}>
                <Label>고객센터</Label>
                <Label>운영시간</Label>
                <Label>미띤 메일</Label>
              </GutterCol>
              <GutterCol span={6}>
                <Label>전자 금융분쟁처리안내</Label>
                <Label>TEL</Label>
                <Label>Fax</Label>
              </GutterCol>
              <GutterCol span={6}>
                <Label>인스타</Label>
                <Label>페북</Label>
                <Label>유튜브</Label>
              </GutterCol>
            </Row>
          </CorpInnerContainer>
        </CorpContainer>
      </Container>
    </ResponsiveTemplate>
  );
};

export default Footer;
