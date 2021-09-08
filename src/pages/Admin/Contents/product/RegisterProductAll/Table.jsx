import React from 'react';
import BasicTable from 'pages/Admin/components/Table/Table';

import OriginTable from 'pages/Admin/components/Table/Table';
import styled from 'styled-components';

const CustomTable = styled(BasicTable)`
  margin-bottom: 1rem;
`;

const Table = ({ count, tableList, limit, handleTableChange, loading }) => {
  // const wordData = ['판매준비', '판매중', '판매종료'];

  // const NumDataToWord = () => {
  //   //판매상태
  //   for (var i = 0; i < tableList.length; i++) {
  //     tableList[i].status = wordData[i];
  //   }
  // };

  // NumDataToWord();

  return (
    <>
      <CustomTable
        scroll={{ x: 'max-content', y: '20vw' }}
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
  },
  {
    title: '실패사유',
    dataIndex: 'fail',
    align: 'center',
  },
  {
    title: '상품번호',
    dataIndex: 'id',
    align: 'center',
  },
  {
    title: '판매상태',
    dataIndex: 'status',
    align: 'center',
  },
  {
    title: '카테고리',
    dataIndex: 'category',
    align: 'center',
  },
  {
    title: '상품명',
    dataIndex: 'name',
    align: 'center',
  },
  {
    title: '판매가',
    dataIndex: 'actual_price',
    align: 'center',
  },
  {
    title: '재고수량',
    dataIndex: 'count',
    align: 'center',
  },
];
