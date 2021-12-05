import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Button, Badge } from 'antd';
import BasicTextArea from 'pages/Admin/components/Form/BasicTextArea';
import { getProductQNA, answerQNA } from 'apis/product';
import { notification } from 'utils/notification';
import moment from 'moment';
import { DateFormat } from 'configs/config';
import {
  LockOutlined,
  UnlockOutlined,
  EditOutlined,
  CloseOutlined,
} from '@ant-design/icons';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #e7e7e7;
  padding-top: 3rem;
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

const ImgStyled = styled.img`
  width: 110px;
  min-width: 110px;
  height: 110px;
  margin-right: 2rem;
`;

const AnswerContainer = styled.div`
  margin-top: 2rem;
  background-color: #f3f3f3;
`;

const TextInnerContainer = styled.div`
  display: flex;
`;
const ButtonStyled = styled(Button)`
  height: 9.8rem;
  width: 8rem;
`;

const TextAreaBox = styled(BasicTextArea)`
  margin-bottom: 1rem;
  border-right: 0px;
  width: 100%;
`;

const MyAnswerContainer = styled.div`
  display: flex;
  background-color: #f3f3f3;
  padding-bottom: 1rem;
`;

const MyAnswerText = styled.div`
  font-size: ${(props) => props.fontSize};
  padding-bottom: 1rem;
`;
const MyAnswerMark = styled.div`
  width: 1rem;
  height: 1rem;
  border: 1px solid #acafb9;
  border-width: 0 0 1px 1px;
  margin-right: 1rem;
  margin-left: 1rem;
`;

const Icon = styled.div`
  margin-top: 1rem;
  margin-right: 1rem;
  cursor: pointer;
`;

const QNAManager = () => {
  const [answerListState, setAnswerListState] = useState([]);

  const [modifyTextValue, setModifyTextValue] = useState(0);

  const [isClickAnswer, setIsAnswer] = useState(-1);
  const [isModifyAnswer, setIsModifyAnswer] = useState(-1);
  const textAreaRef = useRef('');

  useEffect(() => {
    GetData();
  }, []);

  useEffect(() => {
    async function fetchAndSetUser() {
      await GetData();
    }
    fetchAndSetUser();
  }, []);

  const GetData = async () => {
    try {
      const result = await getProductQNA();
      const list = result.data.data.list;

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
      notification.success('검색성공');
      setAnswerListState(newData);
    } catch (e) {
      notification.error('리뷰 정보를 가져오지 못했습니다.');
    }
  };

  const handleAnswerButtonClick = (key) => {
    if (isClickAnswer == key) setIsAnswer(-1);
    else setIsAnswer(key);
    setIsModifyAnswer(-1);
  };

  const handleModifyAnswerButtonClick = (key) => {
    if (isModifyAnswer == key) setIsModifyAnswer(-1);
    else {
      setIsModifyAnswer(key);
      setModifyTextValue(answerListState[key].answer_body);
    }
  };

  const handleAnswerRegitser = (product_id, qna_id, answer_body) => {
    let data = {
      answer_title: '',
      answer_body: answer_body,
    };
    answerQNA(product_id, qna_id, data);
    GetData();
    setIsModifyAnswer(-1);
  };

  const lockIcon = (isLock) => {
    if (isLock === '공개') {
      return <UnlockOutlined />;
    } else {
      return <LockOutlined />;
    }
  };

  const handleModfiyTextAreaOnChange = (e) => {
    setModifyTextValue(e.target.value);
  };

  const handleDeleteAnswer = () => {
    alert('삭제되었습니다.');
    GetData();
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
      answer_body,
      answer_registed,
      main_image_url,
      key,
    },
    index,
  ) => {
    return (
      <ItemContainer key={name + index}>
        <ItemInnerContainer>
          <ImgStyled src={main_image_url} alt="상품명" />
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
            <Button
              onClick={() => {
                handleAnswerButtonClick(key);
              }}
            >
              답글
            </Button>
          </InfoContainer>
        </ItemInnerContainer>
        {isClickAnswer == key && (
          <AnswerContainer>
            <TextInnerContainer>
              <TextAreaBox label="답글을 입력해주세요" ref={textAreaRef} />
              <ButtonStyled
                onClick={() => {
                  handleAnswerRegitser(
                    product_id,
                    id,
                    textAreaRef.current.resizableTextArea.props.value,
                  );
                }}
              >
                등록
              </ButtonStyled>
            </TextInnerContainer>
          </AnswerContainer>
        )}
        {isClickAnswer == key && (
          <MyAnswerContainer>
            <MyAnswerMark></MyAnswerMark>
            <div>
              <MyAnswerText fontSize="13px">{answer_registed}</MyAnswerText>
              <MyAnswerText fontSize="18px">
                {answer_body}
                <Icon>
                  <EditOutlined
                    onClick={() => {
                      handleModifyAnswerButtonClick(key);
                    }}
                  ></EditOutlined>
                  <CloseOutlined onClick={handleDeleteAnswer}></CloseOutlined>
                </Icon>
              </MyAnswerText>
            </div>
          </MyAnswerContainer>
        )}
        {renderModify(product_id, id, key)}
      </ItemContainer>
    );
  };

  const renderModify = (product_id, id, key) => {
    if (isModifyAnswer == key) {
      return (
        <AnswerContainer>
          <TextInnerContainer>
            <TextAreaBox
              label="답글을 입력해주세요"
              value={modifyTextValue}
              onChange={handleModfiyTextAreaOnChange}
            />
            <ButtonStyled
              onClick={() => {
                handleAnswerRegitser(product_id, id, modifyTextValue);
              }}
            >
              수정
            </ButtonStyled>
          </TextInnerContainer>
        </AnswerContainer>
      );
    }
  };

  const renderList = () => {
    if (answerListState.length > 0) {
      return answerListState.map((item, index) => {
        return renderItem(item, index);
      });
    } else {
      return <ItemContainer>문의내역 0건</ItemContainer>;
    }
  };

  return <Container>{renderList()}</Container>;
};

export default QNAManager;
