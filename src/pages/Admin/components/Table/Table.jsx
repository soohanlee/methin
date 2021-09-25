import React from 'react';
import { Table as OriginTable } from 'antd';
import styled from 'styled-components';

// 컬럼 예시 테이블 헤드
// const columns = [
//   {
//     title: 'Name',
//     dataIndex: 'name',
//     render: (text) => <a>{text}</a>,
//   },
//   {
//     title: 'Age',
//     dataIndex: 'age',
//   },
//   {
//     title: 'Address',
//     dataIndex: 'address',
//   },
// ];

// 데이터 예시 테이블 바디
// const data= [
//   {
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sidney No. 1 Lake Park',
//   },
//   {
//     key: '4',
//     name: 'Disabled User',
//     age: 99,
//     address: 'Sidney No. 1 Lake Park',
//   },
// ];

// https://ant.design/components/table/#components-table-demo-grouping-columns table antd doc

const CustomTable = styled(OriginTable)`
  overflow: auto;
`;

const Table = ({
  selectionType,
  className,
  columns,
  onChange,
  data,
  scroll,
  x,
  total,
  pageSize,
  onTableChange,
  loading,
  fixedCount,
  selectedRowKeys,
  ...props
}) => {
  // selectionType = 'checkbox' | 'radio' 타입은 둘중 하나로 들어와야합니다.

  const customColumns =
    columns &&
    columns.map((item, index) => {
      let fixedType = index < fixedCount ? 'left' : '';

      return { fixed: fixedType, ...item };
    });

  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedRowKeys, selectedRows) => {
      onChange(selectedRowKeys, selectedRows);
    },
    // selectedRowKeys 는 key값만 들어있는 배열
    // selectedRows 는 data전체가 들어있는 배열
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User',
      // Column configuration not to be checked
      name: record.name,
    }),
  };

  return (
    <CustomTable
      className={className}
      rowSelection={
        selectionType && {
          type: selectionType,
          ...rowSelection,
        }
      }
      columns={customColumns}
      dataSource={data}
      loading={loading}
      bordered
      onChange={onTableChange}
      pagination={{ total, pageSize }}
      scroll={scroll}
      {...props}
    />
  );
};

export default Table;
