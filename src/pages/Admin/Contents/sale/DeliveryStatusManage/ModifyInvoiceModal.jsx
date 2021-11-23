import { useRef, useState, useEffect } from 'react';
import { Modal } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import BasicSelectBox from 'pages/Admin/components/Form/BasicSelectBox';
import BasicTextInputBox from 'pages/Admin/components/Form/BasicTextInputBox';
import BasicTable from 'pages/Admin/components/Table/Table';
import BasicButton from 'pages/Admin/components/Form/BasicButton';
import { patchShipConfirm } from 'apis/payment';

const SelectBoxLabelContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: ${(props) => props.left};
  margin-bottom: 1rem;
`;

const ModifyInvoiceModal = (property) => {
  const [tableDataState, setTableDataState] = useState();
  const [shipTypeState, setShipTypeState] = useState(0);
  const [shipCompanyState, setShipCompanyState] = useState(0);
  const [invoiceNumberState, setInvoiceNumberState] = useState();

  const [dataShipTypeState, setDataShipTypeState] = useState([]);
  const [dataShipCompanyState, setDataShipCompanyState] = useState([]);
  const [dataInvoiceNumberState, setDataInvoiceNumberState] = useState([]);

  const inputRef = useRef();

  const [selectedTableKeysState, setSelectedTableKeysState] = useState([]);
  const [selectedTableRowsState, setSelectedTableRowsState] = useState([]);

  let limit = 3;

  useEffect(() => {
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

  const handleOkClick = async () => {
    if (selectedTableRowsState.length != 0) {
      const tempPromise = [];

      selectedTableRowsState.forEach((item) => {
        const data = {
          ship_company_id: 0,
          ship_number: item.ship_zip_code,
        };
        const promise = patchShipConfirm(item.id, data);
        tempPromise.push(promise);
      });

      await Promise.all(tempPromise);
    }
    property.onOk();
  };

  const handleApplyClick = () => {
    let shipType = [...dataShipTypeState];
    let shipCompany = [...dataShipCompanyState];
    let invoiceNumber = [...dataInvoiceNumberState];

    selectedTableRowsState.map((item, index) => {
      let { key } = item;
      shipType[item.key] = shipTypeState;

      shipCompany[item.key] = shipTypeState !== 1 ? 0 : shipCompanyState;

      invoiceNumber[item.key] =
        shipCompany[item.key] === 0 ? '' : invoiceNumberState;
    });

    setDataShipTypeState(shipType);
    setDataShipCompanyState(shipCompany);
    setDataInvoiceNumberState(invoiceNumber);
  };

  const columns = [
    {
      title: '배송방법',
      dataIndex: 'ship_type',
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
          list={deliveryTypeList}
        />
      ),
      align: 'center',
      width: 200,
    },

    {
      title: '배송사',
      dataIndex: 'ship_company_name',
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
          disabled={dataShipTypeState[record.key] !== 1}
          list={deliveryCompanyList}
        />
      ),
      align: 'center',
      width: 200,
    },

    {
      title: '송장번호',
      dataIndex: 'ship_zip_code',
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
            dataShipTypeState[record.key] !== 1 ||
            dataShipCompanyState[record.key] === 0 ||
            dataShipCompanyState[record.key] === undefined
              ? 'disabled'
              : ''
          }
        />
      ),
      align: 'center',
    },
    {
      title: '상품번호',
      dataIndex: 'product_id',
      align: 'center',
      width: 100,
    },
    {
      title: '상품명',
      dataIndex: 'product_name',
      align: 'center',
    },
    {
      title: '판매가',
      dataIndex: 'final_paid_amount',
      align: 'center',
      width: 100,
    },
  ];

  const handleChange = (selectedRowKeys, selectedRows) => {
    console.log('selectedRowKeys', selectedRowKeys);
    setSelectedTableKeysState(selectedRowKeys);
    setSelectedTableRowsState(selectedRows);
  };

  const resetData = () => {
    let datas = [...property.selectedTableRowsState];
    let resultTpyeDatas = datas.map((item) => {
      switch (item.ship_type) {
        case '택배,등기,소포':
          return 1;
        case '퀵서비스':
          return 2;
        case '방문수령':
          return 3;
        case '직접전달':
          return 4;
      }
    });
    let resultCompanyDatas = datas.map((item) => {
      return item.ship_company_name;
    });
    let resultCodeDatas = datas.map((item) => {
      return item.ship_zip_code;
    });

    setDataShipTypeState(resultTpyeDatas);
    setDataShipCompanyState(resultCompanyDatas);
    setDataInvoiceNumberState(resultCodeDatas);

    setTableDataState(datas);

    setShipTypeState(0);
    setShipCompanyState(0);
    setInvoiceNumberState('');

    setSelectedTableKeysState([]);
    setSelectedTableRowsState([]);
  };

  const handleDeliveryTypeSelect = (value) => {
    setShipTypeState(value);
    if (value !== 1) {
      setShipCompanyState(0);
      setInvoiceNumberState('');
    }
  };

  const handleDeliveryCompanySelect = (value) => {
    setShipCompanyState(value);
  };

  const handleInvoiceNumberInput = (value) => {
    setInvoiceNumberState(value.target.value);
  };

  const deliveryCompanyList =
    property.shipCompanyDataState.length > 0
      ? property.shipCompanyDataState.map((item) => {
          return { label: item.name, value: item.id };
        })
      : [
          { label: '선택', value: 0 },
          { label: 'CJ 대한통운', value: 1 },
        ];

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
            disabled={shipTypeState === 1 ? '' : 'disabled'}
          />
          <BasicTextInputBox
            value={invoiceNumberState}
            onChange={handleInvoiceNumberInput}
            ref={inputRef}
            disabled={
              shipTypeState !== 1 ||
              shipCompanyState === 0 ||
              shipCompanyState === undefined
                ? 'disabled'
                : ''
            }
          />
          <BasicButton
            selectionType="checkbox"
            onClick={handleApplyClick}
            label="적용"
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
  { label: '선택', value: 0 },
  { label: '택배,등기,소포', value: 1 },
  { label: '퀵서비스', value: 2 },
  { label: '방문수령', value: 3 },
  { label: '직접전달', value: 4 },
];
