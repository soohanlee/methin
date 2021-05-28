import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Selectbox from 'components/Form/Selectbox';
import CheckboxLabel from 'components/Form/CheckboxLabel';

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
      main
      <br />
      <img src={process.env.PUBLIC_URL + '/assets/images/치카 로고.png'} />
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
