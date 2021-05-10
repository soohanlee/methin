import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import OriginTextAreaBox from 'pages/Admin/components/Form/TextAreaBox';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemInnerContainer = styled.div`
  display: flex;
`;

const InfoContainer = styled.div``;

const InfoTitle = styled.div`
  margin-bottom: 0.7rem;
`;

const InfoClientContainer = styled.div``;

const Description = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 1rem;
`;

const Img = styled.div`
  width: 110px;
  min-width: 110px;
  height: 110px;
  background: black;
  margin-right: 2rem;
`;

const AnswerContainer = styled.div`
  margin-top: 1rem;
`;

const TextInnerContainer = styled.div`
  display: flex;
`;

const TextAreaBox = styled(OriginTextAreaBox)`
  margin-bottom: 2rem;
`;

const MyAnswerContainer = styled.div``;

const ReviewManage = () => {
  const [isClickAnswer, setIsAnswer] = useState(false);
  const [answer, setAnswer] = useState('');
  const textAreaRef = useRef('');

  const handleAnswerButtonClick = () => {
    setIsAnswer(!isClickAnswer);
  };

  const handleAnswerRegitser = () => {
    console.log(textAreaRef);
    setAnswer(textAreaRef.current.resizableTextArea.props.value);
  };

  const renderItem = (
    { title, isLock, isAnswer, clientId, date, description },
    index,
  ) => {
    return (
      <ItemContainer key={clientId + index}>
        <ItemInnerContainer>
          <Img />
          <InfoContainer>
            <InfoTitle>
              {title} {isLock ? '잠김' : '공개'}{' '}
              {isAnswer ? '답변완료' : '답변 미완료'}
            </InfoTitle>
            <InfoClientContainer>
              {clientId} {date}
            </InfoClientContainer>
            <Description>{description}</Description>
            <Button onClick={handleAnswerButtonClick}>답글</Button>
          </InfoContainer>
        </ItemInnerContainer>

        {isClickAnswer && (
          <AnswerContainer>
            <TextInnerContainer>
              <TextAreaBox ref={textAreaRef} />{' '}
              <Button onClick={handleAnswerRegitser}>등록</Button>
            </TextInnerContainer>
            <MyAnswerContainer>{answer}</MyAnswerContainer>
          </AnswerContainer>
        )}
      </ItemContainer>
    );
  };

  const renderList = () => {
    return data.map((item, index) => {
      return renderItem(item, index);
    });
  };

  return <Container>{renderList()}</Container>;
};

export default ReviewManage;

const data = [
  {
    title: '국내산 한동1+ 돼지안심 수비드 미띤',
    isLock: true,
    isAnswer: true,
    clientId: 'asdfasdf',
    date: '시간',
    description:
      '저도 밑에 분처럼 어제 받았는데 제조일자가 21일 이었어요.ㅠ재구매이고 지난번 구매후 제조일이랑 비린내 부분 말씀드렸고 긍정적으로 답을 주셔서 의심없이 재주문했는데 제조일은 더 늣은걸로 보내주시고 냄새부분도 전혀ㅠ판매자분에 대한 신뢰가 깨지는 느낌.다시 구매할지 여부는 고민해 봐야 했어요ㅠ',
  },
];
