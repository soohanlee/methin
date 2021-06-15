import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.BACKGROUND};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;

  main {
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
`;

const ResponsiveTemplateForRoot = ({ children, className, viewType }) => {
  if (viewType === 'MOBILE' || viewType === 'TABLET') {
    return <Container className={className}>{children}</Container>;
  } else if (viewType === 'PC') {
    return children;
  } else {
    return null;
  }
};

export default ResponsiveTemplateForRoot;
