import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
`;

const Label = styled.div`
  color: ${(props) => props.theme.TEXT_INFORMATION};
  min-width: 10rem;
`;

const LabelWithComponents = ({ title, components }) => {
  return (
    <Container>
      <Label>{title}</Label>
      {components}
    </Container>
  );
};

export default LabelWithComponents;
