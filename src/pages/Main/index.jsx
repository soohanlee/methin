import React from 'react';
import styled from 'styled-components';

const { REACT_APP_BASE_URL: baseUrl } = process.env

const Container = styled.div`

`

const Main = () => {
  return <Container>
    main
    <br />
    BASE_URL : {baseUrl}
  </Container>;
};

export default Main;
