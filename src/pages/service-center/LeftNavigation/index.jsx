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
`;

const LeftNavigation = () => {
  const [select, setSelect] = useState('destination');

  const history = useHistory();
  const handleMovePage = (pathName) => {
    setSelect(pathName);
    history.push(`${ROUTE_PATH.serviceCenter.main}${pathName}`);
  };

  return (
    <Container>
      <Title>고객센터</Title>
      <PageContainer>
        <Label select>고객센터</Label>
        <Border />
        <Label
          select={select === `${ROUTE_PATH.serviceCenter.notice}`}
          onClick={() => handleMovePage(ROUTE_PATH.serviceCenter.notice)}
        >
          공지사항
        </Label>

        <Label
          select={select === `${ROUTE_PATH.serviceCenter.faq}`}
          onClick={() => handleMovePage(ROUTE_PATH.serviceCenter.faq)}
        >
          FAQ
        </Label>
      </PageContainer>
    </Container>
  );
};

export default LeftNavigation;
