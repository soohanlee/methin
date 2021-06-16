import styled, { css } from 'styled-components';
export const Input = styled.input`
  display: flex;
  border: 0;
  border-bottom: 0.1rem solid ${(props) => props.theme.TEXT_DISABLE};
  ::placeholder {
    color: ${(props) => props.theme.TEXT_INFORMATION};
  }
`;

export const Form = styled.form``;

export const Label = styled.div`
  font-size: 1.55rem;
  font-weight: ${(props) => (props.bold ? 500 : 300)};
  color: ${(props) =>
    props.grey ? props.theme.TEXT_INFORMATION : props.theme.TEXT_MAIN};

  ${(props) =>
    props.highlight &&
    css`
      color: ${props.theme.SIGNITURE_MAIN};
    `}
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

export const PageTitle = styled.div`
  font-size: 3.8rem;
  font-weight: 400;
  margin-bottom: 5rem;
`;
