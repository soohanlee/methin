import { useRef, useState, useEffect } from 'react';
import { Modal } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import BasicSelectBox from 'pages/Admin/components/Form/BasicSelectBox';
import BasicTextInputBox from 'pages/Admin/components/Form/BasicTextInputBox';
import BasicTable from 'pages/Admin/components/Table/Table';
const SelectBoxLabelContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: ${(props) => props.left};
  margin-bottom: 1rem;
`;

const ModifyInvoiceModal = (property) => {
  const [tableDataState, setTableDataState] = useState();
  const [shipTypeState, setShipTypeState] = useState();
  const [shipCompanyState, setShipCompanyState] = useState();
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
      shipCompany[item.key] = shipCompanyState;
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
    },
    {
      title: '상품명',
      dataIndex: 'product_name',
      align: 'center',
    },
    {
      title: '판매가',
      dataIndex: 'price',
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
    setShipCompanyState('select');
    setInvoiceNumberState('');

    setSelectedTableKeysState([]);
    setSelectedTableRowsState([]);
  };

  const handleDeliveryTypeSelect = (value) => {
    setShipTypeState(value);
  };

  const handleDeliveryCompanySelect = (value) => {
    setShipCompanyState(value);
  };

  const handleInvoiceNumberInput = (value) => {
    setInvoiceNumberState(value.target.value);
  };

  return (
    <>
      <Modal
        title={property.title}
        centered
        visible={property.visible}
        onOk={handleOkClick}
        onCancel={property.onCancel}
        width={1200}
        okText="송장수정"
        cancelText="닫기"
      >
        <SelectBoxLabelContainer>
          <BasicSelectBox
            value={shipTypeState}
            onChange={handleDeliveryTypeSelect}
            list={deliveryTypeList}
          />
          <BasicSelectBox
            value={shipCompanyState}
            onChange={handleDeliveryCompanySelect}
            list={deliveryCompanyList}
            disabled={shipTypeState === 'delivery' ? '' : 'disabled'}
          />
          <BasicTextInputBox
            value={invoiceNumberState}
            onChange={handleInvoiceNumberInput}
            ref={inputRef}
            disabled={
              shipTypeState !== 'delivery' ||
              shipCompanyState === 'select' ||
              shipCompanyState === undefined
                ? 'disabled'
                : ''
            }
          />
        </SelectBoxLabelContainer>
        <BasicTable
          scroll={{ x: 'max-content', y: '20vw' }}
          data={property.selectedTableRowsState}
          columns={columns}
          selectionType="checkbox"
          onChange={handleChange}
          pageSize={limit}
          selectedRowKeys={selectedTableKeysState}
        />
      </Modal>
    </>
  );
};
export default ModifyInvoiceModal;

const deliveryTypeList = [
  { label: '선택', value: 'select' },
  { label: '택배,등기,소포', value: 'delivery' },
  { label: '퀵서비스', value: 'quick' },
  { label: '방문수령', value: 'visit' },
  { label: '직접전달', value: 'direct' },
];

const deliveryCompanyList = [
  { label: '선택', value: 'select' },
  { label: 'CJ 대한통운', value: 'cj' },
];
