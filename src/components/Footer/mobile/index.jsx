import React from 'react';
import styled, { css } from 'styled-components';
import { Label } from 'components/styled/Form';
import { useHistory, useLocation } from 'react-router';
import { ROUTE_PATH } from 'configs/config';

const Container = styled.div`
  display: flex;
  width: 100%;
  border-top: 0.1rem solid ${(props) => props.theme.LINE};
  position: fixed;
  bottom: 0;
  background: ${(props) => props.theme.BACKGROUND};
`;

const Img = styled.img`
  width: 2rem;
  height: 2rem;
  margin-bottom: 0.2rem;
`;

const IconConatiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem 0;

  Label {
    color: ${(props) => props.theme.TEXT_INFORMATION};
    ${(props) =>
      props.selected &&
      css`
        color: ${(props) => props.theme.TEXT_MAIN};
      `}
  }
`;

const MobileFooter = () => {
  const history = useHistory();
  const { pathname } = useLocation();

  const handleMovePage = (path) => {
    history.push(`${path}`);
  };

  const main = ROUTE_PATH.main;
  const category = ROUTE_PATH.category;
  const subscribe = ROUTE_PATH.subscribe;

  return (
    <Container>
      <IconConatiner
        selected={pathname === main || pathname === '/'}
        onClick={() => handleMovePage(main)}
      >
        <Img src={'/assets/images/mobile/main-on-icon.svg'} />
        <Label>메인으로</Label>
      </IconConatiner>
      <IconConatiner
        selected={pathname === category}
        onClick={() => handleMovePage(category)}
      >
        <Img src={'/assets/images/mobile/product-off-icon.svg'} />
        <Label>카테고리</Label>
      </IconConatiner>
      <IconConatiner
        selected={pathname === subscribe}
        onClick={() => handleMovePage(subscribe)}
      >
        <Img src={'/assets/images/mobile/history-off-icon.svg'} />
        <Label>정기결제</Label>
      </IconConatiner>
      <IconConatiner
        selected={pathname === ROUTE_PATH.mypage.main}
        onClick={() => handleMovePage(ROUTE_PATH.mypage.main)}
      >
        <Img src={'/assets/images/mobile/service-off-icon.svg'} />
        <Label>마이페이지</Label>
      </IconConatiner>
    </Container>
  );
};

export default MobileFooter;
