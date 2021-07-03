import React from 'react';
import styled from 'styled-components';

import { Label } from 'components/styled/Form';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Checkbox = styled.input.attrs((props) => ({
  type: props.checkboxType ? props.checkboxType : 'checkbox',
}))`
  margin-right: 1rem;
`;

const CheckboxLabel = ({
  children,
  checkboxName,
  label,
  checked,
  onChange,
  className,
  checkboxType,
}) => {
  return (
    <Container className={className}>
      <Checkbox
        id={checkboxName}
        name={checkboxName}
        checked={checked}
        onChange={onChange}
        checkboxType={checkboxType}
      />
      {children ? children : <Label htmlFor={checkboxName}>{label}</Label>}
    </Container>
  );
};

export default CheckboxLabel;
