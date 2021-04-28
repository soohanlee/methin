import React from 'react';
import styled from 'styled-components';

import Menu from 'pages/Admin/LeftNavigation';
import Contents from 'pages/Admin/Contents';

const Container = styled.div`
  display: flex;
  height: 100%;
`;

const Admin = () => {
  return (
    <Container>
      <Menu />
      <Contents />
    </Container>
  );
};

export default Admin;
