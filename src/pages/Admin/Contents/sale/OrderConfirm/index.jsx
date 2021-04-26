import React from 'react';
import Board from './Board';
import Filter from './Filter';
import Table from './Table';

// 발주 확인/발송관리
const OrderConfirm = () => {
  const exampleTableData = [{ title: 'dfdfdf' }];
  return (
    <div>
      <Board tableData={exampleTableData} />
      <Filter />
      <Table />
    </div>
  );
};

export default OrderConfirm;
