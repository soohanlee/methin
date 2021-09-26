import React, { useState } from 'react';
import styled from 'styled-components';

import { SelectableLabel } from 'components/styled/Form';
import { ListContainer } from 'components/styled/Container';

import { Select } from 'antd';

const { Option } = Select;

const Container = styled.div`
  position: relative;
`;

const Selectbox = ({ list, onChange }) => {
  return (
    <Container>
      <Select
        defaultValue={list[0].value}
        style={{ width: 120 }}
        onChange={onChange}
      >
        {list.map((item) => {
          return (
            <Option key={item.key} value={item.key}>
              {item.value}
            </Option>
          );
        })}
      </Select>
    </Container>
  );
};

export default Selectbox;
