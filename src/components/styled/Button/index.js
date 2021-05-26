import styled, { css } from 'styled-components';

const Button = styled.button`
  border: 0.1rem solid transparent;
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainButton = styled(Button)`
  background: ${(props) => props.theme.SIGNITURE_MAIN};
  color: ${(props) => props.theme.TEXT_HYPERLINK};
`;

export const SubButton = styled(Button)`
  background: ${(props) => props.theme.BACKGROUND};
  color: ${(props) => props.theme.TEXT_MAIN};
  border: 0.1rem solid ${(props) => props.theme.TEXT_DISABLE};
`;
