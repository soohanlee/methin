import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const Title = styled.div`
  font-size: 2.3rem;
  margin-bottom: 3rem;
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

const BorderTitleContainer = ({ children, title, titleDesc, className }) => {
  return (
    <Container className={className}>
      <Title>
        {title}
        {titleDesc && <OptionLabel>{titleDesc}</OptionLabel>}
      </Title>
      <Border />
      {children}
    </Container>
  );
};

export default BorderTitleContainer;
