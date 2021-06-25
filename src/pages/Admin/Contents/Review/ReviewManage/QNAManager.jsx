import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import BasicTextArea from 'pages/Admin/components/Form/BasicTextArea';
import BasicTextInputBox from 'pages/Admin/components/Form/BasicTextInputBox';
import { getProductQNA } from 'apis/product';
import { answerQNA } from 'apis/product';
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

const TitleTextAreaBox = styled(BasicTextInputBox)`
  width: 110rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
  margin-left: -1rem;
`;
const ButtonStyled = styled(Button)`
  margin-bottom: 1rem;
`;

const TextAreaBox = styled(BasicTextArea)`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const MyAnswerContainer = styled.div`
  margin-top: 1rem;
`;

const QNAManager = () => {
  const [tableList, setTableList] = useState([]);

  useEffect(() => {
    GetData();
  }, []);
  const limite = 16;
  const [isClickAnswer, setIsAnswer] = useState(false);
  const textTitleAreaRef = useRef('');
  const textAreaRef = useRef('');

  const GetData = () => {
    async function fetchAndSetUser() {
      try {
        const result = await getProductQNA(0);
        const count = result.data.data.count;
        const maxOffset = Math.floor(result.data.data.count / limite) + 1;
        let customList = [];
        for (let i = 0; i < maxOffset; i++) {
          const _result = await getProductQNA(i);
          customList = customList.concat(_result.data.data.list);
        }
        setTableList(customList);
      } catch (e) {
        notification.error('리뷰 정보를 가져오지 못했습니다.');
      }
    }
    fetchAndSetUser();
  };

  const handleAnswerButtonClick = () => {
    setIsAnswer(!isClickAnswer);
  };

  const handleAnswerRegitser = (product_id, qna_id) => {
    let data = {
      answer_title: textTitleAreaRef.current.resizableTextArea.props.value,
      answer_body: textAreaRef.current.resizableTextArea.props.value,
    };
    answerQNA(product_id, qna_id, data);
    GetData();
    // setAnswer(textAreaRef.current.resizableTextArea.props.value);
  };

  const renderItem = (
    {
      product_id,
      id,
      question_title,
      isLock,
      isAnswer,
      name,
      created_at,
      question_body,
      answer_title,
      answer_body,
    },
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
              <div>
                제목 <TitleTextAreaBox ref={textTitleAreaRef} /> 내용{' '}
                <TextAreaBox ref={textAreaRef} />{' '}
                <ButtonStyled
                  onClick={() => {
                    handleAnswerRegitser(product_id, id);
                  }}
                >
                  등록
                </ButtonStyled>
              </div>
            </TextInnerContainer>
          </AnswerContainer>
        )}
        {isClickAnswer && (
          <>
            <MyAnswerContainer>{'제목 : ' + answer_title}</MyAnswerContainer>
            <MyAnswerContainer>{'내용 : ' + answer_body}</MyAnswerContainer>
          </>
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

export default QNAManager;
