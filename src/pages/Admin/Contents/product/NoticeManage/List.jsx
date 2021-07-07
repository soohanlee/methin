import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import Table from 'pages/Admin/components/Table/Table';
import { useHistory } from 'react-router';
import { ROUTE_PATH } from 'configs/config';
import { deleteNotice } from 'apis/notice';
import { notification } from 'utils/notification';

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

const List = ({ tableData, getApiNoticeData }) => {
  const [tableState, setTableState] = useState([]);
  const [selectTableKeyState, setSelectTableKeyState] = useState([]);
  const [selectionTypeState, setSelectionTypeState] = useState('checkbox');
  const history = useHistory();

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setTableState(selectedRows);
      setSelectTableKeyState(selectedRowKeys);
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };

  //여러개 선택삭제
  const handleSelectDeleteBtn = () => {

    async function fetchAndSetUser(num) {
      try {
        await deleteNotice(num);
        notification.success('상품삭제');
        getApiNoticeData();
      } catch (e) {
        notification.error('상품을 삭제하지 못했습니다.');
      }
    }

    for (var i = 0; i < selectTableKeyState.length; i++) {
      if (i === selectTableKeyState.length - 1) {
        console.log(tableData[i].id)
        fetchAndSetUser(tableData[i].id);
      } else {
        console.log(tableData[i].id)
        deleteNotice(tableData[i].id);
      }
    }
  };

  const handleModifyNotice = () => {
    history.push({
      pathname: `${ROUTE_PATH.admin.main}${ROUTE_PATH.admin.registerNotice}`,
      state: { tableState: tableState },
    });
  };

  const columns = [
    {
      title: '수정',
      dataIndex: 'modify',
      render: () => (
        <ButtonStyled onClick={handleModifyNotice}>수정</ButtonStyled>
      ),
    },
    {
      title: '번호',
      dataIndex: 'id',
    },
    {
      title: '공지사항',
      dataIndex: 'title',
    },
    {
      title: '카테고리',
      dataIndex: 'category',
    },
    {
      title: '전시상태',
      dataIndex: 'preview_status',
    },
    {
      title: '등록일',
      dataIndex: 'created_at',
    },
  ];

  const wordData = ['NO', 'YES'];

  const NumDataToWord = () => {
    for (var i = 0; i < tableData.length; i++) {
      tableData[i].preview_status = wordData[i];
    }
  };
  NumDataToWord();

  return (
    <Container>
      <TitleContainer>
        <Title>상품 공지사항 목록 (총 {tableData.length}개)</Title>
      </TitleContainer>
      <BodyContainer>
        <ButtonContainer>
          <Button
            onClick={() => {
              handleSelectDeleteBtn();
            }}
          >
            선택삭제
          </Button>
        </ButtonContainer>
        <Table
          scroll={{ x: '50vw', y: 500 }}
          columns={columns}
          data={tableData}
          onChange={() => {}}
          rowSelection={{
            type: selectionTypeState,
            ...rowSelection,
          }}
        />
      </BodyContainer>
    </Container>
  );
};

export default List;
