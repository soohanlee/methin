import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 2rem;
  border-bottom: 0.1rem solid ${(props) => props.theme.LINE};
`;

const Index = styled.div`
  width: 10%;
`;

const Title = styled.div`
  width: 70%;
  overflow: hidden;
`;

const Date = styled.div`
  width: 20%;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
`;

const FAQItem = ({ id, index, title, createdAt, setSelectedId }) => {
  const handleClickItem = () => {
    setSelectedId(id);
  };
  return (
    <Container onClick={() => handleClickItem(id)}>
      <Index>{index}</Index>
      <Title>{title}</Title>
      <Date>{createdAt}</Date>
    </Container>
  );
};

export default FAQItem;
