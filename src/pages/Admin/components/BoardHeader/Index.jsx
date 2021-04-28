import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: #fff;
  padding: 0 3rem;
  margin-bottom: 2rem;
`;

const ListContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: auto;
  padding: 2rem 0;
  :first-child {
    border-bottom: 1px solid #f0f0f0;
  }
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  width: 180px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 1.3rem;
`;

const Length = styled.div``;

const IconContainer = styled.div``;

const BoardTitle = styled.div`
  min-width: 160px;
  max-width: 160px;
  font-size: 1.3rem;
`;

const ItemWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const BoardHeader = ({ list, onClick }) => {
  const renderItemList = (list) => {
    return (
      list &&
      list.map(({ title, itemList }) => {
        return (
          <ListContainer>
            <BoardTitle>{title}</BoardTitle>
            <ItemWrap>
              {itemList.map(({ label, value, img }, index) => {
                return (
                  <ItemContainer onClick={() => onClick(value)}>
                    <IconContainer>{img}</IconContainer>
                    <TextContainer>
                      <Title>{label}</Title>
                      <Length>건</Length>
                    </TextContainer>
                  </ItemContainer>
                );
              })}
            </ItemWrap>
          </ListContainer>
        );
      })
    );
  };

  return <Container>{renderItemList(list)}</Container>;
};

export default BoardHeader;
