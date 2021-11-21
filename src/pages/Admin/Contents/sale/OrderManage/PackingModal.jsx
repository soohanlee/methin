import { useRef, useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import BasicSelectBox from 'pages/Admin/components/Form/BasicSelectBox';
import BasicButton from 'pages/Admin/components/Form/BasicButton';
import BasicTextInputBox from 'pages/Admin/components/Form/BasicTextInputBox';
import BasicModal from 'pages/Admin/components/Modal/BasicModal';
import BasicTable from 'pages/Admin/components/Table/Table';
import { patchShipConfirm } from 'apis/payment';

const SelectBoxContainer = styled.div`
  display: flex;
`;

const BasicTextInputBoxStyled = styled(BasicTextInputBox)`
  width: 20rem;
`;
const PackingModal = (property) => {
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
          list={property.deliveryTypeList}
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
          list={property.deliveryCompanyList}
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
  ];
  const handleChange = (selectedRowKeys, selectedRows) => {
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
      return 0;
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

    console.log(property.selectedTableRowsState);

    setSelectedTableKeysState([]);
    setSelectedTableRowsState([]);
  };

  const handleShipTypeSelectOnChange = (value) => {
    setShipTypeState(value);
    if (value !== 1) {
      setShipCompanyState(0);
      setInvoiceNumberState('');
    }
  };

  const handleShipCompanySelectOnChange = (value) => {
    setShipCompanyState(value);
  };

  const handleInvoiceNumChange = (value) => {
    setInvoiceNumberState(value.target.value);
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
            onChange={handleShipTypeSelectOnChange}
          />
          <BasicSelectBox
            list={property.deliveryCompanyList}
            value={shipCompanyState}
            onChange={handleShipCompanySelectOnChange}
            disabled={shipTypeState === 1 ? '' : 'disabled'}
          />
          <BasicTextInputBoxStyled
            value={invoiceNumberState}
            onChange={handleInvoiceNumChange}
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
