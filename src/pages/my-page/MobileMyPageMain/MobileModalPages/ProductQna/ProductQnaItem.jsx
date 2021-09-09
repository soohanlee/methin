import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  padding: 1rem;
  font-size: 1.4rem;
  border-bottom: 0.1rem solid ${(props) => props.theme.LINE};
`;

const FirstLine = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: inherit;
  padding-bottom: 1rem;
`;

const Left = styled.div`
  display: flex;
  font-size: inherit;
`;
const Right = styled.div`
  font-size: inherit;
`;

const SecondLine = styled.div`
  font-size: inherit;
`;

const IsAnswer = styled.div`
  font-size: inherit;
  color: ${(props) => (props.isAnswer ? props.theme.MAIN : props.theme.LINE)};
  font-weight: bold;
`;
const UserId = styled.div`
  font-size: inherit;
  padding-left: 1rem;
`;
const CreatedAt = styled.div`
  font-size: inherit;
`;
const Title = styled.div`
  font-size: inherit;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 70%;
  padding-bottom: 1rem;

  ${(props) =>
    props.isSelected &&
    css`
      white-space: normal;
      width: 100%;
      overflow: unset;
    `}
`;
const Answer = styled.div`
  font-size: inherit;
`;

const ProductQnaItem = ({
  id,
  isAnswer,
  userId,
  title,
  createdAt,
  answer,
  setSelectedQna,
  selectedQna,
}) => {
  const isSelected = selectedQna === id;
  return (
    <Container onClick={() => setSelectedQna(id)}>
      <FirstLine>
        <Left>
          <IsAnswer isAnswer={isAnswer}>
            {isAnswer ? '답변 완료' : '답변 대기'}
          </IsAnswer>
          <UserId>{userId}</UserId>
        </Left>
        <Right>
          <CreatedAt>{createdAt}</CreatedAt>
        </Right>
      </FirstLine>
      <SecondLine>
        <Title isSelected={isSelected}>{title}</Title>
        {isSelected ? <Answer>{answer}</Answer> : null}
      </SecondLine>
    </Container>
  );
};

export default ProductQnaItem;
