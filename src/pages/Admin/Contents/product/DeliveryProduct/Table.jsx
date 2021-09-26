import { useEffect, useState, useRef } from 'react';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import BasicTable from 'pages/Admin/components/Table/Table';
import BasicSelectBox from 'pages/Admin/components/Form/BasicSelectBox';
import BasicButton from 'pages/Admin/components/Form/BasicButton';
import { css } from 'styled-components';
import DeliveryUpdateModal from './DeliveryUpdateModal';
import { ROUTE_PATH } from 'configs/config';
import BasicModal from 'pages/Admin/components/Modal/BasicModal';

const TitlesCss = css`
  width: 100%;
  height: 7rem;
  background-color: #ffffff;
  border: 1px solid #f0f0f0;
  padding-left: 4rem;
  border-bottom: 0px;
`;

const Titles = styled.div`
  ${TitlesCss};
`;

const MenuBtn = styled.div`
  ${TitlesCss};
  display: flex;
  align-items: center;
`;

const TitleTexts = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const TitleText = styled.div`
  padding-right: 1rem;
  font-size: 15px;
`;

const TableStyled = styled(BasicTable)``;

const BasicSelectBoxStyled = styled(BasicSelectBox)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding-left: ${(props) => props.paddingleft};
  margin-left: ${(props) => props.marginleft};
  margin-right: 5rem;
`;

const Table = ({
  updateDeliveryData,
  count,
  tableList,
  limit,
  loading,
  handleTableChange,
  updateDeliveryDetailData,
  deleteDeliveryData,
}) => {
  const [tableState, setTableState] = useState([]);
  const [selectTableKeyState, setSelectTableKeyState] = useState([]);

  const [modifyVisibleState, setModifyVisibleState] = useState(false);
  const [addVisibleState, setAddVisibleState] = useState(false);
  const [indexState, setIndexState] = useState([]);
  const [maxSearchCoutState, setMaxSearchCoutState] = useState([]);
  const [recordState, setRecordState] = useState([]);

  const [isDeleteModalOpenState, setDeleteModalOpenState] = useState(false);
  const [selectProductState, setSlectProductState] = useState(-1);
  const [selectedTableKeysState, setSelectedTableKeysState] = useState([]);

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setTableState(selectedRows);
      setSelectTableKeyState(selectedRowKeys);
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };

  const handleRegistConnectProductBtn = () => {
    handleShowAddModalBtn();
  };

  const handleShowModifyModalBtn = (_index) => {
    setIndexState(_index);
    setModifyVisibleState(true);
  };

  const handelShowDeleteModalBtn = (index) => {
    setSlectProductState(index);
    setDeleteModalOpenState(true);
  };

  const handleShowAddModalBtn = () => {
    setAddVisibleState(true);
  };

  const handleModifyDataBtn = (data) => {
    updateDeliveryDetailData(indexState, data);
  };

  const handleAddDataBtn = (data) => {
    updateDeliveryData(data);
  };

  const handleChangeMaxSearchCount = (e) => {
    setMaxSearchCoutState(e);
  };

  const handleChange = (selectedRowKeys, selectedRows) => {
    console.log('selectedRowKeys', selectedRowKeys);
    setSelectedTableKeysState(selectedRowKeys);
  };

  const handleDeleteProduct = () => {
    console.log(selectProductState);
    deleteDeliveryData(selectProductState);
    setDeleteModalOpenState(false);
  };

  const handleDeleteModalClose = () => {
    setDeleteModalOpenState(false);
  };

  const columns = [
    {
      title: '수정',
      dataIndex: 'id',
      render: (id, record) => (
        <BasicButton
          onClick={() => {
            handleShowModifyModalBtn(id);
            setRecordState(record);
          }}
          label="수정"
        ></BasicButton>
      ),
      align: 'center',
      width: 130,
    },
    {
      title: '삭제',
      dataIndex: 'id',
      render: (id) => (
        <BasicButton
          onClick={() => handelShowDeleteModalBtn(id)}
          label="삭제"
        ></BasicButton>
      ),
      align: 'center',
      width: 130,
    },
    {
      title: '그룹번호',
      dataIndex: 'id',
      align: 'center',
      width: 100,
    },
    {
      title: '그룹명',
      dataIndex: 'body',
      align: 'center',
      width: 200,
    },

    {
      title: '기본배송비',
      dataIndex: 'amount1',
      align: 'center',
      width: 130,
    },
    {
      title: '제주,산간 배송비',
      dataIndex: 'amount2',
      align: 'center',
      width: 150,
    },
    {
      title: '사용여부',
      dataIndex: 'status',
      align: 'center',
      width: 130,
    },
    {
      title: '등록일',
      dataIndex: 'created_at',
      align: 'center',
      width: 200,
    },
    {
      title: '수정일',
      dataIndex: 'updated_at',
      align: 'center',
      width: 200,
    },
  ];

  return (
    <>
      <DeliveryUpdateModal
        visible={modifyVisibleState}
        setVisible={setModifyVisibleState}
        onClick={handleModifyDataBtn}
        title="배송비묶음그룹수정"
        type="modify"
        record={recordState}
      />
      <DeliveryUpdateModal
        visible={addVisibleState}
        setVisible={setAddVisibleState}
        onClick={handleAddDataBtn}
        title="배송비묶음그룹추가"
        type="add"
      />

      <Titles>
        <TitleTexts>
          <TitleText>조회 건수 (총 {count} 건) </TitleText>
          <BasicSelectBoxStyled
            width="12rem"
            list={list}
            onChange={(e) => {
              handleChangeMaxSearchCount(e);
            }}
          />
        </TitleTexts>
      </Titles>
      <MenuBtn>
        <BasicButton
          onClick={handleRegistConnectProductBtn}
          label={'+ 묶음그룹 추가'}
        ></BasicButton>
      </MenuBtn>

      <TableStyled
        scroll={{ x: 'max-content', y: '20vw' }}
        data={tableList}
        columns={columns}
        selectionType={'checkbox'}
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
    </>
  );
};

export default Table;
const list = [
  { value: 'ten', label: '10개씩' },
  { value: 'fifty', label: '50개씩' },
  { value: 'hundred', label: '100개씩' },
  { value: 'fiveHundred', label: '500개씩' },
];
