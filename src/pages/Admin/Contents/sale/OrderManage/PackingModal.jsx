import { useRef, useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import BasicSelectBox from 'pages/Admin/components/Form/BasicSelectBox';
import BasicButton from 'pages/Admin/components/Form/BasicButton';
import BasicTextInputBox from 'pages/Admin/components/Form/BasicTextInputBox';
import BasicModal from 'pages/Admin/components/Modal/BasicModal';
import BasicTable from 'pages/Admin/components/Table/Table';

const SelectBoxContainer = styled.div`
  display: flex;
`;

const BasicTextInputBoxStyled = styled(BasicTextInputBox)`
  width: 20rem;
`;
const PackingModal = (property) => {
  const [tableDataState, setTableDataState] = useState();
  const [shipTypeState, setShipTypeState] = useState();
  const [shipcompanyState, setShipcompanyState] = useState();
  const [invoiceNumberState, setInvoiceNumberState] = useState();

  const [dataShipTypeState, setDataShipTypeState] = useState([]);
  const [dataShipCompanyState, setDataShipCompanyState] = useState([]);
  const [dataInvoiceNumberState, setDataInvoiceNumberState] = useState([]);

  const inputRef = useRef();

  const [selectedTableKeysState, setSelectedTableKeysState] = useState([]);
  const [selectedTableRowsState, setSelectedTableRowsState] = useState([]);

  let limit = 3;

  useEffect(() => {
    setTableDataState(property.selectedTableRowsState);
    resetData();
  }, [property.visible === true]);

  const handleColumnsSetData = (value, index, state, setState) => {
    let _array = [...state];

    if (_array.length <= index) {
      _array = [..._array, value];
    } else {
      _array[index] = value;
    }
    setState(_array);
  };

  const handleOkClick = () => {
    property.onOk();
  };

  const handleApplyClick = () => {
    let shipType = [...dataShipTypeState];
    let shipCompany = [...dataShipCompanyState];
    let invoiceNumber = [...dataInvoiceNumberState];

    selectedTableRowsState.map((item, index) => {
      let { key } = item;
      shipType[item.key] = shipTypeState;
      shipCompany[item.key] = shipcompanyState;
      invoiceNumber[item.key] = invoiceNumberState;
    });

    setDataShipTypeState(shipType);
    setDataShipCompanyState(shipCompany);
    setDataInvoiceNumberState(invoiceNumber);
  };

  const columns = [
    {
      title: '상품번호',
      dataIndex: 'product_id',
      align: 'center',
      width: 100,
    },
    {
      title: '주문번호',
      dataIndex: 'id',
      align: 'center',
      width: 100,
    },
    {
      title: '배송방법',
      dataIndex: 'shipType',
      render: (_, record) => (
        <BasicSelectBox
          value={dataShipTypeState[record.key]}
          onChange={(value) => {
            handleColumnsSetData(
              value,
              record.key,
              dataShipTypeState,
              setDataShipTypeState,
            );
          }}
          list={property.deliveryTypeList}
        />
      ),
      align: 'center',
      width: 200,
    },

    {
      title: '배송사',
      dataIndex: 'shipCompany',
      render: (_, record) => (
        <BasicSelectBox
          value={dataShipCompanyState[record.key]}
          onChange={(value) => {
            handleColumnsSetData(
              value,
              record.key,
              dataShipCompanyState,
              setDataShipCompanyState,
            );
          }}
          disabled={dataShipTypeState[record.key] !== 'delivery'}
          list={property.deliveryCompanyList}
        />
      ),
      align: 'center',
      width: 200,
    },

    {
      title: '송장번호',
      dataIndex: 'invoiceNumber',
      render: (_, record) => (
        <BasicTextInputBox
          value={dataInvoiceNumberState[record.key]}
          onChange={(value) => {
            handleColumnsSetData(
              value.target.value,
              record.key,
              dataInvoiceNumberState,
              setDataInvoiceNumberState,
            );
          }}
          disabled={
            dataShipTypeState[record.key] !== 'delivery' ||
            dataShipCompanyState[record.key] === 'select' ||
            dataShipCompanyState[record.key] === undefined
              ? 'disabled'
              : ''
          }
        />
      ),
      align: 'center',
    },
  ];
  const handleChange = (selectedRowKeys, selectedRows) => {
    console.log('selectedRowKeys', selectedRowKeys);
    setSelectedTableKeysState(selectedRowKeys);
    setSelectedTableRowsState(selectedRows);
  };

  const resetData = () => {
    setShipTypeState('select');
    setShipcompanyState('select');
    setInvoiceNumberState('');

    var dataTypes = dataShipTypeState.map((element) => {
      return (element = 'select');
    });

    var dataCompanys = dataShipCompanyState.map((element) => {
      return (element = 'select');
    });

    var invoices = dataInvoiceNumberState.map((element) => {
      return (element = '');
    });

    setDataShipTypeState(dataTypes);
    setDataShipCompanyState(dataCompanys);
    setDataInvoiceNumberState(invoices);

    setSelectedTableKeysState([]);
    setSelectedTableRowsState([]);
  };

  return (
    <>
      <BasicModal
        title={property.title}
        centered
        visible={property.visible}
        onOk={handleOkClick}
        onCancel={property.onCancel}
        width={1200}
        okText="일괄 발송처리"
        cancelText="취소"
      >
        <SelectBoxContainer>
          <BasicSelectBox
            list={property.deliveryTypeList}
            value={shipTypeState}
            onChange={(value) => {
              setShipTypeState(value);
            }}
          />
          <BasicSelectBox
            list={property.deliveryCompanyList}
            value={shipcompanyState}
            onChange={(value) => {
              setShipcompanyState(value);
            }}
            disabled={shipTypeState === 'delivery' ? '' : 'disabled'}
          />
          <BasicTextInputBoxStyled
            value={invoiceNumberState}
            onChange={(value) => {
              setInvoiceNumberState(value.target.value);
            }}
            ref={inputRef}
            disabled={
              shipTypeState !== 'delivery' ||
              shipcompanyState === 'select' ||
              shipcompanyState === undefined
                ? 'disabled'
                : ''
            }
          />
          <BasicButton
            selectionType="checkbox"
            onClick={handleApplyClick}
            label="선택건적용"
          />
        </SelectBoxContainer>
        <BasicTable
          scroll={{ x: 'max-content', y: '11vw' }}
          data={tableDataState}
          columns={columns}
          selectionType="checkbox"
          onChange={handleChange}
          pageSize={limit}
          selectedRowKeys={selectedTableKeysState}
        />
      </BasicModal>
    </>
  );
};
export default PackingModal;
