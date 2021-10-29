import styled, { css } from 'styled-components';

const Button = styled.button`
  border: 0.1rem solid transparent;
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Disabled = css`
  border: 0.1rem solid ${(props) => props.theme.TEXT_DISABLE};
  color: ${(props) => props.theme.TEXT_DISABLE};
  pointer-events: none;
`;

export const MainButton = styled(Button)`
  background: ${(props) => props.theme.MAIN};
  color: ${(props) => props.theme.TEXT_HYPERLINK};

  ${(props) =>
    props.reverse &&
    css`
      background: ${(props) => props.theme.BACKGROUND};
      color: ${(props) => props.theme.MAIN};
      border: 0.1rem solid ${(props) => props.theme.MAIN};
    `}

  ${(props) => props.disabled && Disabled}
`;

export const SubButton = styled(Button)`
  background: ${(props) => props.theme.BACKGROUND};
  color: ${(props) => props.theme.TEXT_MAIN};
  border: 0.1rem solid ${(props) => props.theme.TEXT_DISABLE};
`;
