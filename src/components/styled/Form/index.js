import styled, { css } from 'styled-components';
export const Input = styled.input`
  display: flex;
  border: 0;
  border-bottom: 0.1rem solid ${(props) => props.theme.LINE};
`;

export const Form = styled.form``;

export const Label = styled.label`
  color: ${(props) => props.theme.TEXT_MAIN};
`;

export const SelectableLabel = styled.div`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  border-bottom: 0.1rem solid transparent;
  color: ${(props) =>
    props.seleted ? props.theme.SIGNITURE_MAIN : props.theme.TEXT_MAIN};

  ${(props) =>
    props.seleted &&
    css`
      border-bottom: 0.1rem solid ${props.theme.SIGNITURE_MAIN};
    `}

  &:last-child {
    margin-bottom: 0;
  }
`;
