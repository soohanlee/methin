import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 0;
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
