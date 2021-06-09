import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import BasicTextArea from 'pages/Admin/components/Form/BasicTextArea';
import { getProductQNA } from 'apis/product';
import { notification } from 'utils/notification';

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

const TextAreaBox = styled(BasicTextArea)`
  margin-bottom: 2rem;
`;

const MyAnswerContainer = styled.div``;

const ReviewManage = () => {
  const [tableList, setTableList] = useState([]);

  useEffect(() => {
    async function fetchAndSetUser() {
      try {
        const result = await getProductQNA();
        const customList = result.data.data.list.map((item) => {
          return { ...item, key: item.id };
        });
        // antd 에서 선택을 하려면 key라는 이름의 key값이 있어야하여 key를 주입

        setTableList(customList);
        console.log(result);
      } catch (e) {
        notification.error('리뷰 정보를 가져오지 못했습니다.');
      }
    }
    fetchAndSetUser();
  }, []);

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
    { question_title, isLock, isAnswer, name, created_at, question_body },
    index,
  ) => {
    return (
      <ItemContainer key={name + index}>
        <ItemInnerContainer>
          <Img />
          <InfoContainer>
            <InfoTitle>
              {question_title} {isLock ? '잠김' : '공개'}{' '}
              {isAnswer ? '답변완료' : '답변 미완료'}
            </InfoTitle>
            <InfoClientContainer>
              {name} {created_at}
            </InfoClientContainer>
            <Description>{question_body}</Description>
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
    return tableList.map((item, index) => {
      return renderItem(item, index);
    });
  };

  return <Container>{renderList()}</Container>;
};

export default ReviewManage;
