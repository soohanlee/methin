import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import Table from 'pages/Admin/components/Table/Table';

const Container = styled.div`
  background: #fff;
`;

const TitleContainer = styled.div`
  color: 2rem;
  padding: 2rem;
  border-bottom: 1px solid #f0f0f0;
  margin-bottom: 1rem;
`;

const Title = styled.div`
  font-size: inherit;
`;

const ButtonContainer = styled.div`
  margin-bottom: 1rem;
`;

const BodyContainer = styled.div`
  padding: 2rem;
`;

const ButtonStyled = styled(Button)``;

const List = ({ data }) => {
  return (
    <Container>
      <TitleContainer>
        <Title>상품 공지사항 목록 (총 {0}개)</Title>
      </TitleContainer>
      <BodyContainer>
        <ButtonContainer>
          <Button>선택삭제</Button>
        </ButtonContainer>
        <Table columns={columns} data={data} selectionType={'checkbox'} />
      </BodyContainer>
    </Container>
  );
};

export default List;

const columns = [
  {
    title: '수정',
    dataIndex: 'modify',
    render: () => <ButtonStyled>수정</ButtonStyled>,
  },
  {
    title: '번호',
    dataIndex: 'number',
  },
  {
    title: '분류',
    dataIndex: 'classification',
  },
  {
    title: '상태',
    dataIndex: 'status',
  },
  {
    title: '제목',
    dataIndex: 'title',
  },
  {
    title: '등록일',
    dataIndex: 'registerDate',
  },
  {
    title: '삭제일',
    dataIndex: 'deleteDate',
  },
];
