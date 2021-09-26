import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Row as OriginRow, Col } from 'antd';
import ResponsiveTemplate from 'template/ResponsiveTemplate';
import MobileFooter from 'components/Footer/mobile';
import { ROUTE_PATH } from 'configs/config';

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
  padding: 4.5rem 0;
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
            {/* <NavLink to={`/`}>채용정보</NavLink> */}
            <NavLink to={ROUTE_PATH.agreement}>이용약관</NavLink>
            <NavLink to={ROUTE_PATH.private}>개인정보처리방침</NavLink>
            <NavLink to={ROUTE_PATH.informationGuide}>이용안내</NavLink>
            {/* <NavLink to={`/`}>전자금융거래약관</NavLink> */}
          </PageInnerListContainer>
        </PageListContainer>
        <CorpContainer>
          <CorpInnerContainer>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <GutterCol span={6}>
                <Label>상호명: 미띤</Label>
                <Label>대표: 문상현</Label>
                <Label>COPYRIGHT @Methin.All rights reserved.</Label>
              </GutterCol>
              <GutterCol span={6}>
                <Label>고객센터: 010-4146-5799</Label>
                <Label>운영시간</Label>
                <Label>미띤 메일: moonssang95@naver.com</Label>
              </GutterCol>
              <GutterCol span={6}>
                <Label>사업자등록번호: 4994500744</Label>
                <Label>
                  사업장 소재지: 인천광역시 계양구 주부토로 573-1 B동 1층(우:
                  21040)
                </Label>
                <Label>통신판매업번호: 2020-인천계양-1237</Label>
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
