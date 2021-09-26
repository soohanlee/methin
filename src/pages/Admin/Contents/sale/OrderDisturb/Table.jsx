import React, { useState } from 'react';
import styled from 'styled-components';
import { Button as OriginButton } from 'antd';
import BasicTable from 'pages/Admin/components/Table/Table';
const Container = styled.div`
  background: #fff;
  padding: 3rem;
  margin-top: 1rem;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2rem;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled(OriginButton)`
  margin-right: 0.5rem;
`;

const Table = ({ count, tableData, limit, handleTableChange, loading }) => {
  const [selectedTableKeysState, setSelectedTableKeysState] = useState([]);
  const [selectedTableRowsState, setSelectedTableRowsState] = useState([]);

  const handleSelectReleaseBtn = () => {
    alert('선택건 해제하기');
  };

  const handleChange = (selectedRowKeys, selectedRows) => {
    console.log('selectedRows', selectedRows);
    setSelectedTableKeysState(selectedRowKeys);
    setSelectedTableRowsState(selectedRows);
  };

  return (
    <Container>
      <HeaderContainer>
        <ButtonContainer>
          <Button onClick={handleSelectReleaseBtn}>선택건 해제하기</Button>
        </ButtonContainer>
      </HeaderContainer>

      <BasicTable
        scroll={{ x: 'max-content', y: '20vw' }}
        data={tableData}
        columns={columns}
        selectionType="checkbox"
        onChange={handleChange}
        onTableChange={handleTableChange}
        loading={loading}
        total={count}
        pageSize={limit}
      />
    </Container>
  );
};

export default Table;

const columns = [
  {
    title: '구매자ID',
    dataIndex: 'buyerID',
    align: 'center',
    width: 150,
  },
  {
    title: '상품주문번호',
    dataIndex: 'productOrderNumber',
    align: 'center',
    width: 150,
  },
  {
    title: '등록일자',
    dataIndex: 'registerDate',
    align: 'center',
    width: 200,
  },
  {
    title: '등록사유',
    dataIndex: 'registerWhy',
    align: 'center',
  },
];
