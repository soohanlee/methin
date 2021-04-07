import React from 'react';
import styled from 'styled-components';

import sizes from 'configs/size';

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 0;

  @media screen and (min-width: ${sizes.huge}px) {
    /* width: 117rem; */
  }

  @media screen and (max-width: ${sizes.huge}px) {
    /* width: 97rem; */
  }

  @media screen and (max-width: ${sizes.large}px) {
    /* width: 75rem; */
  }
`;

const ContainerComponent = ({ children, ...props }) => {
  const handleDragOver = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };

  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  return (
    <Container
      onContextMenu={handleContextMenu}
      onDragOver={handleDragOver}
      {...props}
    >
      {children}
    </Container>
  );
};

export default ContainerComponent;
