import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  max-height: 150px;
  min-height: 80px;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.OBJECT_MAIN};
`;

const index = () => {
  return <Container>Navigation</Container>;
};

export default index;
