import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import Table from 'pages/Admin/components/Table/Table';
import { useHistory } from 'react-router';
import { ROUTE_PATH } from 'configs/config';
import { deleteNotice } from 'apis/notice';
import { notification } from 'utils/notification';
import BasicModal from 'pages/Admin/components/Modal/BasicModal';

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
  const [selectedTableRowsState, setSelectedTableRowsState] = useState([]);
  const [selectTableKeyState, setSelectTableKeyState] = useState([]);
  const [selectedNoticeState, setSelectedNoticeState] = useState('');
  const [isDeleteModalOpenState, setisDeleteModalOpenState] = useState(false);

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

  const handleSelectDelete = () => {
    let ids = selectedTableRowsState.map((item) => {
      return item.id;
    });
    handleDeleteModalOpen(ids);
  };

  const handleDeleteModalOpen = (id) => {
    setSelectedNoticeState(id);
    setisDeleteModalOpenState(true);
  };

  //여러개 선택삭제
  const handleDeleteNotice = async () => {
    try {
      let result = selectedNoticeState.map((item) => {
        try {
          console.log(item);
          const result = deleteNotice(item);
          if (result.status === 404) {
            notification.error('이미 삭제되었습니다.');
          }
        } catch (e) {
          if (e.response && e.response.status === 404) {
            notification.error('이미 삭제되었습니다.');
          }
        }
      });
      await Promise.all(result);
      notification.success('데이터를 삭제했습니다.');
      handleChange([], []);
      getApiNoticeData();
      setisDeleteModalOpenState(false);
    } catch (e) {
      notification.error('상품을 삭제하지 못했습니다.');
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
      align: 'center',
      width: 130,
    },
    {
      title: '번호',
      dataIndex: 'id',
      align: 'center',
      width: 130,
    },
    {
      title: '공지사항',
      dataIndex: 'title',
      align: 'center',
    },
    {
      title: '카테고리',
      dataIndex: 'category',
      align: 'center',
      width: 130,
    },
    {
      title: '전시상태',
      dataIndex: 'preview_status',
      align: 'center',
      width: 130,
    },
    {
      title: '등록일',
      dataIndex: 'created_at',
      align: 'center',
    },
  ];
  const handleChange = (selectedRowKeys, selectedRows) => {
    console.log('selectedRowKeys', selectedRowKeys);
    setSelectedTableKeysState(selectedRowKeys);
    setSelectedTableRowsState(selectedRows);
  };
  const handleDeleteModalClose = () => {
    setisDeleteModalOpenState(false);
    setSelectedNoticeState('');
  };
  return (
    <Container>
      <TitleContainer>
        <Title>상품 공지사항 목록 (총 {tableData.length}개)</Title>
      </TitleContainer>
      <BodyContainer>
        <ButtonContainer>
          <Button onClick={handleSelectDelete}>선택삭제</Button>
        </ButtonContainer>
        <Table
          scroll={{ x: 'max-content', y: '20vw' }}
          data={tableData}
          columns={columns}
          selectionType="checkbox"
          onChange={handleChange}
          onTableChange={handleTableChange}
          loading={loading}
          total={count}
          pageSize={limit}
          selectedRowKeys={selectedTableKeysState}
          // rowSelection={{
          //   type: selectionTypeState,
          //   ...rowSelection,
          // }}
        />
      </BodyContainer>
      <BasicModal
        visible={isDeleteModalOpenState}
        onOk={handleDeleteNotice}
        onCancel={handleDeleteModalClose}
      >
        정말 삭제하시겠습니까?
      </BasicModal>
    </Container>
  );
};

export default List;
