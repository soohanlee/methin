import styled from 'styled-components';
export const Input = styled.input`
  display: flex;
  border: 0;
  border-bottom: 0.1rem solid ${(props) => props.theme.LINE};
`;

export const Form = styled.form``;

export const Label = styled.div`
  color: ${(props) => props.theme.TEXT_MAIN};
`;
