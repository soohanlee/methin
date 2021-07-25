import styled from 'styled-components';
import { BreakPoint } from 'configs/config';
import { SEPCIAL_CONTAINER_ID_LIST } from 'configs/config';

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
  @media screen and (max-width: ${BreakPoint.xl}px) {
    padding: 4rem 5%;
  }
`;

export const FrontContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${(props) => props.theme.BACKGROUND};
  z-index: 999;
`;

export const FrontInnerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding-bottom: 5rem;
  padding-top: 5rem;
`;

export const MobileHeaderContainer = styled.div`
  width: 100vw;
  background: ${(props) => props.theme.BACKGROUND};
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`;

export const MobileFooterContainer = styled.div`
  width: 100vw;
  background: ${(props) => props.theme.SIGNITURE_MAIN};
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  color: ${(props) => props.theme.BACKGROUND};
`;

export const ContentsContainer = styled.div`
  overflow-y: scroll;
  width: 100%;
  height: 100%;
`;

export const ModalContainer = styled.div.attrs({
  id: SEPCIAL_CONTAINER_ID_LIST.MODAL,
})``;
