import React from 'react';
import { Table as OriginTable } from 'antd';

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

const Table = ({
  selectionType,
  className,
  columns,
  onChange,
  data,
  ...props
}) => {
  // selectionType = 'checkbox' | 'radio' 타입은 둘중 하나로 들어와야합니다.
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        'selectedRows: ',
        selectedRows,
      );
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User',
      // Column configuration not to be checked
      name: record.name,
    }),
  };

  const renderTable = () => {
    if (selectionType) {
      return (
        <OriginTable
          className={className}
          rowSelection={{
            type: selectionType,
            ...rowSelection,
          }}
          columns={columns}
          dataSource={data}
          bordered
          onChange={onChange}
          {...props}
        />
      );
    } else {
      return (
        <OriginTable
          className={className}
          columns={columns}
          dataSource={data}
          bordered
          {...props}
        />
      );
    }
  };

  return renderTable();
};

export default Table;
