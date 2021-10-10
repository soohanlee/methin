import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { getClientPageNoticeDetail } from 'apis/notice';
import { MainButton } from 'components/styled/Button';

const Container = styled.div`
  max-width: 1050px;
  margin: 3rem auto;
`;

const Button = styled(MainButton)`
  width: 200px;
  margin-left: auto;
  line-height: 40px;
  margin-top: 4rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 4rem;
`;

const Table = styled.table`
  table-layout: fixed;
  border-top: 2px solid #333;
  border-bottom: 1px solid #f4f4f4;
  color: #333;
  line-height: 180%;
  margin-top: 20px;
  width: 100%;
`;

const BodyContainer = styled.div`
  padding: 3rem;
`;

const Tr = styled.tr`
  > th,
  td {
    text-align: center;
    word-break: break-word;
  }
  > th {
    width: 130px;
    padding: 13px 0 13px 20px;
    background-color: #f7f5f8;
    border-top: 1px solid #f4f4f4;
    text-align: left;
  }
  > td {
    padding: 2rem;
    border-bottom: 1px solid #f4f4f4;
    text-align: left;
  }
`;
const TitleLabel = styled.th`
  font-size: 1.4rem;
`;

const TableBody = styled.tbody``;
const Td = styled.td``;

const NoticeDetail = () => {
  const history = useHistory();
  const [title, setTitle] = React.useState('');
  const [category, setCategory] = React.useState(0);
  const [body, setBody] = React.useState('');
  const [created_at, setCreated_at] = React.useState('');

  const handleClickBackIndex = () => {
    history.go(-1);
  };

  const getNoticeDetail = async () => {
    if (history.location.state) {
      const response = await getClientPageNoticeDetail(history.location.state);
      if (response) {
        console.log(response.data.data);
        const { title, category, created_at, id } = response.data.data;
        setTitle(title);
        setCategory(category);
        setBody(body);
        setCreated_at(created_at);
      }
    }
  };

  React.useEffect(() => {
    getNoticeDetail();
  }, []);

  return (
    <Container>
      <Title>공지사항</Title>
      <Table>
        <TableBody>
          <Tr>
            <TitleLabel>제목</TitleLabel>
            <Td>{title}</Td>
          </Tr>
          <Tr>
            <TitleLabel>작성일</TitleLabel>
            <Td>{created_at}</Td>
          </Tr>
          <Tr>
            <TitleLabel>카테고리</TitleLabel>
            <Td>{category}</Td>
          </Tr>
        </TableBody>
      </Table>
      <BodyContainer>{body}df</BodyContainer>

      <Button onClick={handleClickBackIndex}>목록</Button>
    </Container>
  );
};

export default NoticeDetail;
