import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Container = styled.div``;

const Main = () => {
  const history = useHistory();
  const handleClick = () => {
    try {
      const result = axios.get(`/api/admin/product`);
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  };

  const register = () => {
    try {
      const result = axios.get(`api/admin/product/1`);

      console.log(result);
    } catch (e) {
      console.log(e);
    }
  };

  const handleMoveAdminPage = () => {
    history.push('/admin');
  };

  return (
    <Container>
      main
      <br />
      <button onClick={handleClick}>클릭 상품 리스트</button>
      <button onClick={register}>register</button>
      <img src={process.env.PUBLIC_URL + '/assets/images/치카 로고.png'} />
      <button onClick={handleMoveAdminPage}>어드민페이지</button>
    </Container>
  );
};

export default Main;
