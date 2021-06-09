import React, { useState } from 'react';
import styled from 'styled-components';

import { useHistory } from 'react-router-dom';
import Selectbox from 'components/Form/Selectbox';
import MainCarousel from 'pages/Main/Carousel';

const Container = styled.div``;

const Main = () => {
  const [selectedItem, setSelectedItem] = useState({
    key: 1,
    value: '신상품순',
  });
  const history = useHistory();

  const handleMoveAdminPage = () => {
    history.push('/admin');
  };

  return (
    <Container>
      <MainCarousel />
      <br />

      <button onClick={handleMoveAdminPage}>어드민페이지</button>
      <Selectbox
        list={selectedBoxList}
        onSelectedItem={setSelectedItem}
        selectedItem={selectedItem}
      />
    </Container>
  );
};

export default Main;

const selectedBoxList = [
  { key: 1, value: '신상품순' },
  { key: 2, value: '판매순' },
  { key: 3, value: '할인율순' },
  { key: 4, value: '낮은가격순' },
];
