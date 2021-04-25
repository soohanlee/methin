import React from 'react';

import OriginTable from 'compononets/Table/Table';
import styled from 'styled-components';

const CustomTable = styled(OriginTable)`
  margin-bottom: 1rem;
`;

const columns = [
  {
    title: '처리상태',
    dataIndex: 'state',
    render: (text) => <a>{text}</a>,
  },
  {
    title: '실패사유',
    dataIndex: 'fail',
  },
  {
    title: '상품번호',
    dataIndex: 'number',
  },
  {
    title: '판매상태',
    dataIndex: 'saleState',
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
    dataIndex: 'price',
  },
  {
    title: '재고수량',
    dataIndex: 'available',
  },
];

const data = [
  {
    key: '1',
    state: '판매완료',
    fail: '',
    number: '123124125',
    saleState: '판매완료',
    category: '소고기',
    name: '소고기 안심',
    price: '8900',
    available: '40',
  },
  {
    key: '2',
    state: '판매완료',
    fail: 32,
    number: '123123154155',
    saleState: 'saleState',
    category: 'category',
    name: 'John Brown',
    price: 'price',
    available: 'available',
  },
];

const Table = () => {
  return (
    <>
      <CustomTable columns={columns} data={data} />
    </>
  );
};

export default Table;
