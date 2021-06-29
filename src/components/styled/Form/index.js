import styled, { css } from 'styled-components';
import { BreakPoint } from 'configs/config';

export const Input = styled.input`
  display: flex;
  border: 0;
  border-bottom: 0.1rem solid ${(props) => props.theme.TEXT_DISABLE};
  ::placeholder {
    color: ${(props) => props.theme.TEXT_INFORMATION};
  }
`;

export const Form = styled.form``;

export const Label = styled.label`
  color: ${(props) =>
    props.grey ? props.theme.TEXT_INFORMATION : props.theme.TEXT_MAIN};
  font-size: 1.55rem;

  ${(props) =>
    props.hightlight &&
    css`
      color: ${props.theme.SIGNITURE_MAIN};
    `}
  @media screen and (max-width: ${BreakPoint.xl}px) {
    font-size: 1.4rem;
  }
`;

export const SubLabel = styled.label`
  font-size: 1.4rem;
  color: ${(props) =>
    props.grey ? props.theme.TEXT_INFORMATION : props.theme.TEXT_MAIN};
`;

export const SelectableLabel = styled.div`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  border-bottom: 0.1rem solid transparent;
  color: ${(props) =>
    props.selected ? props.theme.SIGNITURE_MAIN : props.theme.TEXT_MAIN};

  ${(props) =>
    props.selected &&
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
