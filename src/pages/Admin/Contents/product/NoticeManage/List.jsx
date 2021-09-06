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

const List = ({
  tableData,
  count,
  limit,
  handleTableChange,
  loading,
  getApiNoticeData,
}) => {
  const [tableState, setTableState] = useState([]);
  const [selectedTableKeysState, setSelectedTableKeysState] = useState([]);
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
        console.log(tableData[i].id);
        fetchAndSetUser(tableData[i].id);
      } else {
        console.log(tableData[i].id);
        deleteNotice(tableData[i].id);
      }
    }
  };

  const handleModifyNotice = (record) => {
    console.log(record);
    history.push({
      pathname: `${ROUTE_PATH.admin.main}${ROUTE_PATH.admin.registerNotice}`,
      id: record.id,
    });
  };

  const columns = [
    {
      title: '수정',
      dataIndex: 'modify',
      render: (_, record) => (
        <ButtonStyled
          onClick={() => {
            handleModifyNotice(record);
          }}
        >
          수정
        </ButtonStyled>
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
  const handleChange = (selectedRowKeys, selectedRows) => {
    console.log('selectedRowKeys', selectedRowKeys);
    setSelectedTableKeysState(selectedRowKeys);
  };
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
          scroll={{ x: '25vw', y: 800 }}
          data={tableData}
          columns={columns}
          selectionType="checkbox"
          onChange={handleChange}
          onTableChange={handleTableChange}
          loading={loading}
          total={count}
          pageSize={limit}
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
