import React from 'react';
import styled from 'styled-components';
import { BreakPoint } from 'configs/config';

const Container = styled.div``;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: 2.3rem;
  margin-bottom: 3rem;
  @media screen and (max-width: ${BreakPoint.s}px) {
    font-size: 1.6rem;
  }
`;

const OptionLabel = styled.div`
  margin-left: 2rem;
  font-size: 1rem;
  color: ${(props) => props.theme.TEXT_INFORMATION};
`;

const Border = styled.div`
  width: 100%;
  border-bottom: 0.1rem solid ${(props) => props.theme.TEXT_MAIN};
`;

const BorderTitleContainer = ({
  children,
  title,
  titleDesc,
  className,
  titleComponent,
}) => {
  return (
    <Container className={className}>
      <TitleContainer>
        <Title>
          {title}
          {titleDesc && <OptionLabel>{titleDesc}</OptionLabel>}
        </Title>
        {titleComponent && titleComponent}
      </TitleContainer>

      <Border />
      {children}
    </Container>
  );
};

export default BorderTitleContainer;
