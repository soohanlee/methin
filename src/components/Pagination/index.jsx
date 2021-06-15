import React from 'react';
import styled from 'styled-components';

import { Pagination as OriginPagination } from 'antd';
const CustomPagination = styled(OriginPagination)`
  .ant-pagination-item {
    border: 0;
  }
  .ant-pagination-prev,
  .ant-pagination-next {
    button {
      border: 0;
    }
  }
  .ant-pagination-item-active a {
    color: ${(props) => props.theme.SIGNITURE_MAIN};
    font-weight: 500;
    text-decoration: underline;
  }
`;
const Pagination = () => {
  const onChange = (e) => {
    console.log(e);
  };

  return (
    <CustomPagination
      onChange={onChange}
      total={100}
      showTotal={false}
      showSizeChanger={false}
      showQuickJumper={false}
      defaultPageSize={5}
      showLessItems={false}
      showTitle={false}
    />
  );
};

export default Pagination;
