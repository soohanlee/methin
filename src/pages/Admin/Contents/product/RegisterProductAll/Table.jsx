import React from 'react';
import BasicTable from 'pages/Admin/components/Table/Table';
import styled from 'styled-components';

const CustomTable = styled(BasicTable)`
  margin-bottom: 1rem;
  width: 98%;
`;

const Table = ({ count, tableList, limit, handleTableChange, loading }) => {
  return (
    <>
      <CustomTable
        scroll={{ x: 'max-content', y: '28vw' }}
        data={tableList}
        columns={columns}
        selectionType="checkbox"
        onChange={() => {}}
        onTableChange={handleTableChange}
        loading={loading}
        total={count}
        pageSize={limit}
      />
    </>
  );
};

export default Table;

const columns = [
  {
    title: '처리상태',
    dataIndex: 'status',
    render: (text) => <a href={'www.naver.com'}>{text}</a>,
    align: 'center',
    width: 130,
  },
  {
    title: '상품번호',
    dataIndex: 'id',
    align: 'center',
    width: 100,
  },
  {
    title: '판매상태',
    dataIndex: 'status',
    align: 'center',
    width: 130,
  },
  {
    title: '카테고리',
    dataIndex: 'menu',
    align: 'center',
    width: 130,
  },
  {
    title: '상품명',
    dataIndex: 'name',
    align: 'center',
    width: 150,
  },
  {
    title: '판매가',
    dataIndex: 'actual_price',
    align: 'center',
    width: 130,
  },
  {
    title: '재고수량',
    dataIndex: 'count',
    align: 'center',
    width: 100,
  },
];
