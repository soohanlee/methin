import React from 'react';
import styled from 'styled-components';
import { Pagination as OriginPagination } from 'antd';
import { BreakPoint } from 'configs/config';
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
    color: ${(props) => props.theme.MAIN};
    font-weight: 500;
    text-decoration: underline;
  }
  @media screen and (max-width: ${BreakPoint.s}px) {
    margin-bottom: 3rem;
  }
`;
const Pagination = ({ total, onChange }) => {
  if (total === 0) {
    return null;
  } else {
    return (
      <CustomPagination
        onChange={onChange}
        total={total}
        showTotal={false}
        showSizeChanger={false}
        showQuickJumper={false}
        defaultPageSize={5}
        showLessItems={false}
        showTitle={false}
      />
    );
  }
};

export default Pagination;
