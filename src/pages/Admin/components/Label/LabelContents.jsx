import React from 'react';

import styled from 'styled-components';

const Conatiner = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const Title = styled.div`
  width: 180px;
  font-size: 1.5rem;
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

const LabelContents = ({ title, children }) => {
  return (
    <Conatiner>
      <Title>{title}</Title>
      <Contents>{children}</Contents>
    </Conatiner>
  );
};

export default LabelContents;
