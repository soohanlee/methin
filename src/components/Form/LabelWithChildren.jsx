import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 5rem;
`;

const Label = styled.div`
  font-size: 1.55rem;
  margin-bottom: 1.7rem;
`;

const LabelWithChildren = ({ label, children, className }) => {
  return (
    <Container className={className}>
      <Label>{label}</Label>
      {children}
    </Container>
  );
};

export default LabelWithChildren;
