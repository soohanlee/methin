import React from 'react';
import styled from 'styled-components';
import Pagination from 'components/Pagination';
import QnaCollapse from './QnaCollapse';

import { Label as OriginLabel } from 'components/styled/Form';
import { SubButton as OriginSubButton } from 'components/styled/Button';
import BorderTitleContainer from 'components/container/BorderTitleContainer';

const Container = styled.div`
  width: 100%;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
`;

const Count = styled.div`
  color: ${(props) => props.theme.SIGNITURE_MAIN};
`;

const Header = styled.div`
  padding-top: 2rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 1rem;
  padding-bottom: 3rem;
  border-bottom: 0.1rem solid ${(props) => props.theme.BOLDLINE};
`;

const Label = styled(OriginLabel)`
  font-size: 1.5rem;
  color: ${(props) => props.theme.TEXT_INFORMATION};
`;

const SubButton = styled(OriginSubButton)`
  width: 15rem;
  line-height: 3.5rem;
  margin-left: 2rem;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const mockUpList = [
  {
    id: 7, // 문의ID
    user_id: 19, // 유저ID
    question_title: '상품질문', // 질문 제목
    question_body: '123123', // 질문 내용
    created_at: '2021-06-19T14:00:16.000Z', // 질문 생성일
    answer_title: null, // 답변 제목
    answer_body: null, // 답변 내용
    answer_registed: null, // 답변 등록일
    nickname: '이우섭', // 유저 닉네임
  },
  {
    id: 8,
    user_id: 19,
    question_title: '상품질문',
    question_body: '123123',
    created_at: '2021-06-19T14:01:16.000Z',
    answer_title: '123123',
    answer_body: '2435345',
    answer_registed: '2021-06-19T14:02:43.000Z',
    nickname: '이우섭',
  },
];

const QNAContainer = ({ count, list, onClickQnaButtonClick, onQnaChange }) => {
  const renderQnaList = () => {
    if (!list && list.length === 0) {
      return '질문이 없습니다.';
    } else {
      return list.map(
        ({
          id,
          question_title,
          question_body,
          created_at,
          answer_title,
          answer_body,
          answer_registed,
          nickname,
        }) => {
          return (
            <ItemContainer key={id}>
              <QnaCollapse
                question_title={question_title}
                question_body={question_body}
                created_at={created_at}
                answer_title={answer_title}
                answer_body={answer_body}
                answer_registed={answer_registed}
                nickname={nickname}
              />
            </ItemContainer>
          );
        },
      );
    }
  };

  return (
    <Container>
      <BorderTitleContainer
        title={'상품 Q&A'}
        titleDesc={<Count>{count}</Count>}
      >
        <Header>
          <Label>궁금한게 있으면 언제든지 물어보세요.</Label>
          <SubButton onClick={onClickQnaButtonClick}>문의하기</SubButton>
        </Header>
        {renderQnaList()}
        <PaginationContainer>
          <Pagination total={count} onChange={onQnaChange} />
        </PaginationContainer>
      </BorderTitleContainer>
    </Container>
  );
};

export default QNAContainer;
