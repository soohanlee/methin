import React, { useState } from 'react';
import styled from 'styled-components';

import { SelectableLabel } from 'components/styled/Form';
import { ListContainer } from 'components/styled/Container';

const Container = styled.div`
  position: relative;
`;

const NameSelect = styled.div`
  font-size: 1.5rem;
  border-bottom: 0.1rem solid ${(props) => props.theme.TEXT_MAIN};
`;

const Selectbox = ({ list, selectedItem, onSelectedItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickItem = (key, value) => {
    onSelectedItem({ key: key, value: value });
    setIsOpen(false);
  };

  const renderList = () => {
    return list.map(({ value, key }) => {
      return (
        <SelectableLabel
          seleted={key === selectedItem.key}
          onClick={() => handleClickItem(key, value)}
          key={key}
        >
          {value}
        </SelectableLabel>
      );
    });
  };

  const handleOpenClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Container>
      <NameSelect onClick={handleOpenClick}>
        {selectedItem.value} {`>`}
      </NameSelect>
      {isOpen && <ListContainer>{renderList()}</ListContainer>}
    </Container>
  );
};

export default Selectbox;
