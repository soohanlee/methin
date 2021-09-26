import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Button, Badge } from 'antd';
import BasicTextArea from 'pages/Admin/components/Form/BasicTextArea';
import BasicTextInputBox from 'pages/Admin/components/Form/BasicTextInputBox';
import { getProductQNA, answerQNA } from 'apis/product';
import { notification } from 'utils/notification';
import moment from 'moment';
import { DateFormat } from 'configs/config';
import { LockOutlined, UnlockOutlined } from '@ant-design/icons';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 3rem;
  border-bottom: 1px solid #e7e7e7;
`;

const ItemInnerContainer = styled.div`
  display: flex;
`;

const InfoContainer = styled.div``;

const InfoTitle = styled.div`
  margin-bottom: 0.8rem;
  display: flex;
  justify-content: space-between;
`;

const InfoAttribute = styled.div`
  margin-right: 1rem;
  font-size: ${(props) => props.fontSize}; ;
`;

const InfoClientContainer = styled.div`
  margin-bottom: 0.8rem;
  display: flex;
`;

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
  margin-left: -0.3rem;
`;

const MyAnswerContainer = styled.div`
  margin-top: 1rem;
`;

const QNAManager = () => {
  const [tableListState, setTableListState] = useState([]);
  const [productOffset, setProductOffset] = useState(0);

  const limit = 16;
  const [isClickAnswer, setIsAnswer] = useState(false);
  const textTitleAreaRef = useRef('');
  const textAreaRef = useRef('');

  useEffect(() => {
    GetData(productOffset);
  }, [productOffset]);

  useEffect(() => {
    async function fetchAndSetUser() {
      await GetData();
    }
    fetchAndSetUser();
  }, []);

  const GetData = async (offset = 0) => {
    try {
      const result = await getProductQNA(offset);
      const list = result.data.data.list;
      const count = result.data.data.count;

      let newData = list.map((item, index) => {
        let { isLock, isAnswer, created_at } = item;
        return {
          ...item,
          isLock: isLock ? '잠김' : '공개',
          isAnswer: isAnswer ? '답변완료' : '답변 미완료',
          created_at: moment(created_at).format(DateFormat.Default),
          key: index,
        };
      });

      newData = [
        {
          product_id: 'product_id',
          id: 'id',
          question_title: 'question_title',
          isLock: '미공개',
          isAnswer: '답변완료',
          name: 'name',
          created_at: '2019-05-05',
          question_body: 'question_body',
          answer_title: 'answer_title',
          answer_body: 'answer_body',
        },
      ];

      notification.success('검색성공');
      setTableListState(newData);
    } catch (e) {
      notification.error('리뷰 정보를 가져오지 못했습니다.');
    }
  };

  const handleAnswerButtonClick = () => {
    setIsAnswer(!isClickAnswer);
  };

  const handleAnswerRegitser = (product_id, qna_id) => {
    let data = {
      answer_title: textTitleAreaRef.current.state.value,
      answer_body: textAreaRef.current.resizableTextArea.props.value,
    };
    answerQNA(product_id, qna_id, data);
    GetData();
    // setAnswer(textAreaRef.current.resizableTextArea.props.value);
  };

  const lockIcon = (isLock) => {
    if (isLock === '공개') {
      return <UnlockOutlined />;
    } else {
      return <LockOutlined />;
    }
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
              <InfoAttribute fontSize="25px">{question_title}</InfoAttribute>
              <InfoAttribute>{lockIcon(isLock)}</InfoAttribute>
              <InfoAttribute>
                <Badge
                  count={isAnswer}
                  style={{ backgroundColor: '#52c41a' }}
                />
              </InfoAttribute>
            </InfoTitle>
            <InfoClientContainer>
              <InfoAttribute>{name}</InfoAttribute>
              <InfoAttribute>{created_at}</InfoAttribute>
            </InfoClientContainer>
            <Description>{question_body}</Description>
            <Button onClick={handleAnswerButtonClick}>답글</Button>
          </InfoContainer>
        </ItemInnerContainer>
        {isClickAnswer && (
          <AnswerContainer>
            <TextInnerContainer>
              <div>
                제목 <TitleTextAreaBox ref={textTitleAreaRef} />
                내용 <TextAreaBox ref={textAreaRef} />
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
    if (tableListState.length > 0) {
      return tableListState.map((item, index) => {
        return renderItem(item, index);
      });
    } else {
      return <ItemContainer>문의내역 0건</ItemContainer>;
    }
  };

  return <Container>{renderList()}</Container>;
};

export default QNAManager;
