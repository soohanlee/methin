import { ROUTE_PATH } from 'configs/config';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';

const Container = styled.div`
  width: 20rem;
`;

const PageContainer = styled.div`
  margin-bottom: 5rem;
`;

const Title = styled.div`
  font-size: 3.8rem;
  margin-bottom: 7.5rem;
`;

const Border = styled.div`
  border: 0.1rem solid ${(props) => props.theme.TEXT_MAIN};
  margin: 2rem 0;
`;

const Label = styled.div`
  color: ${(props) =>
    props.select ? props.theme.TEXT_MAIN : props.theme.TEXT_INFORMATION};
  font-size: 1.5rem;
  margin-bottom: 2rem;
  cursor: ${(props) => (props.title ? 'unset' : 'pointer')};
`;

const LeftNavigation = () => {
  const [select, setSelect] = useState('destination');

  const history = useHistory();
  const handleMovePage = (pathName) => {
    setSelect(pathName);
    history.push(`${ROUTE_PATH.mypage.main}${pathName}`);
  };

  return (
    <Container>
      <Title>마이페이지</Title>
      <PageContainer>
        <Label title select>
          쇼핑 정보
        </Label>
        <Border />
        <Label
          select={select === `${ROUTE_PATH.mypage.destination}`}
          onClick={() => handleMovePage(`${ROUTE_PATH.mypage.destination}`)}
        >
          주문 배송 조회
        </Label>
        <Label
          select={select === `${ROUTE_PATH.mypage.cancel}`}
          onClick={() => handleMovePage(`${ROUTE_PATH.mypage.cancel}`)}
        >
          취소 교환 반품 조회
        </Label>
        <Label
          select={select === `${ROUTE_PATH.mypage.destinationManage}`}
          onClick={() =>
            handleMovePage(`${ROUTE_PATH.mypage.destinationManage}`)
          }
        >
          배송지 관리
        </Label>
        <Label
          select={select === `${ROUTE_PATH.mypage.review}`}
          onClick={() => handleMovePage(`${ROUTE_PATH.mypage.review}`)}
        >
          상품 리뷰
        </Label>
      </PageContainer>

      <PageContainer>
        <Label title select>
          계정 설정
        </Label>
        <Border />
        <Label
          select={select === `${ROUTE_PATH.mypage.myInformation}`}
          onClick={() => handleMovePage(ROUTE_PATH.mypage.myInformation)}
        >
          내 정보 수정
        </Label>
      </PageContainer>

      <PageContainer>
        <Label title select>
          고객센터
        </Label>
        <Border />

        <Label
          select={select === `${ROUTE_PATH.mypage.qna}`}
          onClick={() => handleMovePage(ROUTE_PATH.mypage.qna)}
        >
          상품 QNA현황
        </Label>
      </PageContainer>
    </Container>
  );
};

export default LeftNavigation;
