import styled from 'styled-components';

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  position: absolute;
  top: 2rem;
  border: 0.1rem solid ${(props) => props.theme.TEXT_MAIN};
  background: ${(props) => props.theme.BACKGROUND};
  z-index: 100;
  min-width: 15rem;
`;

export const PaddingContainer = styled.div`
  padding: 5% 10%;
`;
