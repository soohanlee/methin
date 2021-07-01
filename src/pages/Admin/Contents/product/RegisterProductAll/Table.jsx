import React from 'react';

import OriginTable from 'pages/Admin/components/Table/Table';
import styled from 'styled-components';

const CustomTable = styled(OriginTable)`
  margin-bottom: 1rem;
`;

const Table = ({ data }) => {
  const wordData = ['핀매준비', '판매중', '판매종료'];

  const NumDataToWord = () => {
    //판매상태
    for (var i = 0; i < data.length; i++) {
      data[i].status = wordData[i];
    }
  };
  NumDataToWord();

  return (
    <>
      <CustomTable
        scroll={{ x: '50vw', y: 500 }}
        columns={columns}
        data={data}
        onChange={() => {}}
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
