import React from 'react';
import styled, { css } from 'styled-components';
import { Collapse } from 'antd';
import moment from 'moment';
import { DateFormat } from 'configs/config';

const { Panel } = Collapse;

const CustomCollapse = styled(Collapse)`
  background: #fff;
  border-left: 0;
  border-right: 0;
  border-top: 0;
  &&& .ant-collapse-header {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }
  &&& .ant-collapse-arrow {
    top: calc(50% - 6px);
    padding: 0;
  }
`;

const CollapseHeader = styled.div`
  display: flex;
  align-items: center;
`;

const CommonLabel = styled.div`
  font-size: 1.4rem;
`;

const ProductName = styled(CommonLabel)`
  width: 70%;
`;

const Date = styled(CommonLabel)`
  width: 10rem;
  text-align: center;
`;

const P = styled.p`
  width: 100%;
  font-size: 1.4rem;
`;

const IsAnswer = styled(CommonLabel)`
  text-align: center;
  width: 10rem;
  font-weight: 500;
  ${(props) =>
    props.isActive &&
    css`
      color: ${props.theme.SIGNITURE_MAIN};
    `};
`;

const BodyContainer = styled.div`
  display: flex;
  &div:first-child {
    margin-right: 1rem;
  }
`;

const UserBodyContainer = styled(BodyContainer)`
  margin-bottom: 2rem;
`;

const QnaCollapse = ({
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
    <CustomCollapse
      expandIcon={() => {
        return null;
      }}
    >
      <Panel
        header={
          <CollapseHeader>
            <ProductName>{question_title}</ProductName>
            <IsAnswer isActive={answer_title}>
              {answer_title ? '답변완료' : '-'}
            </IsAnswer>
            <Date>{nickname}</Date>
            <Date>{moment(created_at).format(DateFormat.Default)}</Date>
          </CollapseHeader>
        }
        key={id}
      >
        <UserBodyContainer>
          <Date>질문:</Date>
          <P>{question_body}</P>
        </UserBodyContainer>
        <BodyContainer>
          <Date>답변:</Date>
          <P>
            {answer_title}
            <br /> <br /> {answer_body} <br />
            {answer_registed &&
              moment(answer_registed).format(DateFormat.Default)}
          </P>
        </BodyContainer>
      </Panel>
    </CustomCollapse>
  );
};

export default QnaCollapse;
