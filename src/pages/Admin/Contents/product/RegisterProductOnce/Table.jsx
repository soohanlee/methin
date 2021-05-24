import React from 'react';

import OriginTable from 'pages/Admin/components/Table/Table';
import styled from 'styled-components';

const CustomTable = styled(OriginTable)`
  margin-bottom: 1rem;
`;

const Table = ({ data }) => {
  return (
    <>
      <CustomTable columns={columns} data={data} />
    </>
  );
};

export default Table;

const columns = [
  {
    title: '처리상태',
    dataIndex: 'status',
    render: (text) => <a href={'www.naver.com'}>{text}</a>,
  },
  {
    title: '실패사유',
    dataIndex: 'fail',
  },
  {
    title: '상품번호',
    dataIndex: 'id',
  },
  {
    title: '판매상태',
    dataIndex: 'status',
  },
  {
    title: '카테고리',
    dataIndex: 'category',
  },
  {
    title: '상품명',
    dataIndex: 'name',
  },
  {
    title: '판매가',
    dataIndex: 'actual_price',
  },
  {
    title: '재고수량',
    dataIndex: 'count',
  },
];
