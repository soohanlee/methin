import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Container = styled.div``;

const Main = () => {
  const history = useHistory();

  const handleMoveAdminPage = () => {
    history.push('/admin');
  };

  return (
    <Container>
      main
      <br />
      <img src={process.env.PUBLIC_URL + '/assets/images/치카 로고.png'} />
      <button onClick={handleMoveAdminPage}>어드민페이지</button>
    </Container>
  );
};

export default Main;
