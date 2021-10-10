import * as React from 'react';
import styled from 'styled-components';
import { Collapse, Empty as OriginEmpty } from 'antd';
import moment from 'moment';
import { DateFormat, ROUTE_PATH } from 'configs/config';
import { useHistory } from 'react-router-dom';

const Empty = styled(OriginEmpty)`
  margin: 2rem;
`;

const TableHeader = styled.thead``;

const Table = styled.table`
  width: 100%;
  border-bottom: 1px solid #f4f4f4;
`;

const Tr = styled.tr`
  > th,
  td {
    text-align: center;
    word-break: break-word;
  }
  > th {
    padding: 2rem 0;
    border-bottom: 1px solid #f4f4f4;
  }
  > td {
    padding: 2rem 0;
    border-bottom: 1px solid #f4f4f4;
  }
  > th:nth-child(1) {
    min-width: 60px;
  }
  > th:nth-child(2) {
    min-width: 380px;
  }
  > th:nth-child(3) {
    min-width: 120px;
  }
`;
const TitleLabel = styled.th`
  font-size: 1.4rem;
`;

const TableBody = styled.tbody``;
const Td = styled.td``;

const CollapseList = ({ list }) => {
  const history = useHistory();

  const handleClickNoticeItem = (id) => {
    history.push({
      pathname: `${ROUTE_PATH.serviceCenter.notice}/id`,
      state: id,
    });
  };

  const renderTbodyList = () => {
    if (list && list.length === 0) {
      return <Empty />;
    } else {
      return (
        list &&
        list.map((item) => {
          const { title, created_at, category, id } = item;
          return (
            <Tr key={id} onClick={() => handleClickNoticeItem(id)}>
              <Td>{category}</Td>
              <Td>{title}</Td>
              <Td>{created_at}</Td>
            </Tr>
          );
        })
      );
    }
  };

  return (
    <Table>
      <TableHeader>
        <Tr>
          <TitleLabel>카테고리</TitleLabel>
          <TitleLabel>제목</TitleLabel>
          <TitleLabel>날짜</TitleLabel>
        </Tr>
      </TableHeader>
      <TableBody>{renderTbodyList()}</TableBody>
    </Table>
  );
};

export default CollapseList;
