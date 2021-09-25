import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { Button as OriginButton } from 'antd';
import { deleteProduct } from 'apis/product';
import { notification } from 'utils/notification';
import { ROUTE_PATH } from 'configs/config';
import BasicTable from 'pages/Admin/components/Table/Table';
import BasicButton from 'pages/Admin/components/Form/BasicButton';
import BasicSelectBox from 'pages/Admin/components/Form/BasicSelectBox';
import BasicModal from 'pages/Admin/components/Modal/BasicModal';
import { CSVLink } from 'react-csv';

const ContainerStyled = styled.div`
  background: #fff;
  padding: 3rem;
`;

const HeaderContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${(props) => props.width};
  padding-bottom: 2rem;
`;

const ButtonContainerStyled = styled.div`
  display: flex;
`;

const BasicButtonStyled = styled(BasicButton)`
  margin-right: 0.5rem;
`;

const BasicSelectBoxStyled = styled(BasicSelectBox)`
  width: 15rem;
  margin-right: 0.5rem;
`;

const Table = ({
  setTableDataState,
  tableList,
  count,
  limit,
  handleTableChange,
  loading,
  getApiProductData,
}) => {
  // const [productSortSelectState, setProductSortSelectState] = React.useState(
  //   [],
  // );
  const [productCountSelectState, setProductCountSelectState] = React.useState(
    [],
  );
  const [selectedTableKeysState, setSelectedTableKeysState] = React.useState(
    [],
  );
  const [isDeleteModalOpenState, setisDeleteModalOpenState] = React.useState(
    false,
  );
  const [selectedProductState, setSelectedProductState] = React.useState('');

  const history = useHistory();

  const columns = [
    {
      label: '수정',
      key: 'modify',
      title: '수정',
      dataIndex: 'modify',
      render: (_, record) => (
        <BasicButton
          onClick={() => handleModifyEditPage(record.id)}
          label="수정"
        ></BasicButton>
      ),
      align: 'center',
      width: 130,
    },
    {
      label: '삭제',
      key: 'delete',
      title: '삭제',
      dataIndex: 'delete',
      render: (_, record) => (
        <BasicButton
          onClick={() => handleDeleteModalOpen(record.id)}
          label="삭제"
        ></BasicButton>
      ),
      align: 'center',
      width: 130,
    },
    {
      label: '상품번호',
      key: 'id',
      title: '상품번호',
      dataIndex: 'id',
      key: 'id',
      align: 'center',
      width: 100,
    },
    {
      label: '상품명',
      key: 'name',
      title: '상품명',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => (a.name > b.name ? a.name > b.name : a.name < b.name),
      align: 'center',
    },
    {
      label: '판매상태',
      key: 'status',
      title: '판매상태',
      dataIndex: 'status',
      align: 'center',
      width: 130,
    },
    {
      label: '전시상태',
      key: 'preview_status',
      title: '전시상태',
      dataIndex: 'preview_status',
      align: 'center',
      width: 100,
    },
    {
      label: '재고수량',
      key: 'count',
      title: '재고수량',
      dataIndex: 'count',
      align: 'center',
      width: 100,
    },
    {
      label: '판매가',
      key: 'price',
      title: '판매가',
      dataIndex: 'price',
      align: 'center',
      width: 100,
    },
    {
      label: '할인가',
      key: 'discount_amount',
      title: '할인가',
      dataIndex: 'discount_amount',
      align: 'center',
      width: 100,
    },
    {
      label: '최소구매수량',
      key: 'min_quantity',
      title: '최소구매수량',
      dataIndex: 'min_quantity',
      align: 'center',
      width: 130,
    },
    {
      label: '최대구매수량',
      key: 'max_quantity',
      title: '최대구매수량',
      dataIndex: 'max_quantity',
      align: 'center',
      width: 130,
    },
    {
      label: '배송비유형',
      key: 'ship_category',
      title: '배송비유형',
      dataIndex: 'ship_category',
      align: 'center',
      width: 130,
    },
    {
      label: '배송비결제방식',
      key: 'ship_pay_type',
      title: '배송비결제방식',
      dataIndex: 'ship_pay_type',
      align: 'center',
      width: 140,
    },
    {
      label: '기본배송비',
      key: 'ship_amount',
      title: '기본배송비',
      dataIndex: 'ship_amount',
      align: 'center',
      width: 110,
    },
    {
      label: '반품배송비',
      key: 'refund_ship_amount',
      title: '반품배송비',
      dataIndex: 'refund_ship_amount',
      align: 'center',
      width: 110,
    },
    {
      label: '교환배송비',
      key: 'exchange_ship_amount',
      title: '교환배송비',
      dataIndex: 'exchange_ship_amount',
      align: 'center',
      width: 110,
    },
    {
      label: '판매시작일',
      key: 'sales_start_date',
      title: '판매시작일',
      dataIndex: 'sales_start_date',
      align: 'center',
      width: 150,
    },
    {
      label: '판매종료일',
      key: 'sales_end_date',
      title: '판매종료일',
      dataIndex: 'sales_end_date',
      align: 'center',
      width: 150,
    },
    {
      label: '상품등록일',
      key: 'created_at',
      title: '상품등록일',
      dataIndex: 'created_at',
      key: 'created_at',
      sorter: (a, b) =>
        a.created_at > b.created_at
          ? a.created_at > b.created_at
          : a.created_at < b.created_at,
      align: 'center',
      width: 150,
    },
    {
      label: '최종수정일',
      key: 'updated_at',
      title: '최종수정일',
      dataIndex: 'updated_at',
      key: 'updated_at',
      sorter: (a, b) =>
        a.updated_at > b.updated_at
          ? a.updated_at > b.updated_at
          : a.updated_at < b.updated_at,
      align: 'center',
      width: 150,
    },
  ];
  const handleModifyEditPage = (id) => {
    history.push({
      pathname: `${ROUTE_PATH.admin.main}${ROUTE_PATH.admin.registerProduct}`,
      state: id,
    });
  };

  const handleChange = (selectedRowKeys, selectedRows) => {
    console.log('selectedRowKeys', selectedRowKeys);
    setSelectedTableKeysState(selectedRowKeys);
  };

  const handleDeleteModalOpen = (id) => {
    setSelectedProductState(id);
    setisDeleteModalOpenState(true);
  };

  const handleSelectDelete = () => {
    alert('선택삭제 준비중');
  };

  const handleDeleteProduct = async () => {
    try {
      const result = await deleteProduct(selectedProductState);
      if (result.status === 200) {
        const newTable = tableList.filter((item) => {
          return item.id !== selectedProductState;
        });

        setTableDataState(newTable);
        getApiProductData();
      } else if (result.status === 404) {
        notification.error('이미 삭제되었습니다.');
      }
      setisDeleteModalOpenState(false);
    } catch (e) {
      if (e.response && e.response.status === 404) {
        notification.error('이미 삭제되었습니다.');
      }
      setisDeleteModalOpenState(false);
    }
  };

  const handleDeleteModalClose = () => {
    setisDeleteModalOpenState(false);
    setSelectedProductState('');
  };

  return (
    <ContainerStyled>
      <HeaderContainerStyled>
        <div>상품목록(총 {count}개)</div>
        <ButtonContainerStyled>
          <BasicSelectBoxStyled
            onChange={(value) => {
              setProductCountSelectState(value);
            }}
            list={CountList}
          ></BasicSelectBoxStyled>
          <CSVLink
            data={tableList}
            headers={columns}
            filename={'상품 목록.csv'}
          >
            <BasicButtonStyled label="엑셀다운" />
          </CSVLink>
        </ButtonContainerStyled>
      </HeaderContainerStyled>
      <HeaderContainerStyled>
        <ButtonContainerStyled>
          <BasicButtonStyled label="선택삭제" onClick={handleSelectDelete} />
        </ButtonContainerStyled>
      </HeaderContainerStyled>

      <BasicTable
        scroll={{ x: 'max-content', y: '20vw' }}
        data={tableList}
        columns={columns}
        selectionType="checkbox"
        onChange={handleChange}
        onTableChange={handleTableChange}
        loading={loading}
        total={count}
        pageSize={limit}
      />
      <BasicModal
        visible={isDeleteModalOpenState}
        onOk={handleDeleteProduct}
        onCancel={handleDeleteModalClose}
      >
        정말 삭제하시겠습니까?
      </BasicModal>
    </ContainerStyled>
  );
};

export default Table;
// const SortViewList = [
//   { label: '연관상품 ID순', value: 'associatedProductID' },
//   { label: '대표 상품명순', value: 'representativeProduct' },
//   { label: '등록일순', value: 'registrationDate' },
//   { label: '최종수정일순', value: 'lastModifiedDate' },
// ];

const CountList = [
  { label: '50개씩', value: 'fiftyCount' },
  { label: '100개씩', value: 'hundredCount' },
  { label: '300개씩', value: 'threeHundredCount' },
  { label: '500개씩', value: 'fiveHundredCount' },
];
