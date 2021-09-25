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
  const [deliveryTypeState, setDeliveryTypeState] = useState();
  const [deliveryType2State, setDeliveryType2State] = useState();
  const [deliveryTypeInputState, setDeliveryTypeInputState] = useState();
  const deliveryTypeInputRef = useRef();

  const [selectedTableKeysState, setSelectedTableKeysState] = useState([]);
  const [selectedTableRowsState, setSelectedTableRowsState] = useState([]);

  let limit = 3;

  useEffect(() => {
    resetData();
  }, [property.visible === true]);

  const handleDeliveryType = (value) => {
    setDeliveryTypeState(value);
  };
  const handleDeliveryType2 = (value) => {
    setDeliveryType2State(value);
  };
  const handleDeliveryTypeInput = (value) => {
    setDeliveryTypeInputState(value.target.value);
  };

  const handleOkClick = () => {
    console.log(deliveryTypeState);
    console.log(deliveryType2State);
    console.log(deliveryTypeInputRef.current.state.value);
    property.onOk();
  };

  const columns = [
    {
      title: '상품주문번호',
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
    setDeliveryTypeState('선택');
    setDeliveryType2State('선택');
    setDeliveryTypeInputState('');

    setSelectedTableKeysState([]);
    setSelectedTableRowsState([]);
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
            value={deliveryTypeState}
            onChange={handleDeliveryType}
            list={waySelect}
          />
          <BasicSelectBox
            value={deliveryType2State}
            onChange={handleDeliveryType2}
            list={companySelect}
          />
          <BasicTextInputBox
            value={deliveryTypeInputState}
            onChange={handleDeliveryTypeInput}
            ref={deliveryTypeInputRef}
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

const waySelect = [
  { value: '0', label: '택배,등기,소포' },
  { value: '1', label: '뭐들어가지' },
  { value: '2', label: '뭐들어가지2' },
  { value: '3', label: '뭐들어가지3' },
];

const companySelect = [
  { value: '0', label: '뭐들어가지' },
  { value: '1', label: '뭐들어가지' },
  { value: '2', label: '뭐들어가지2' },
  { value: '3', label: '뭐들어가지3' },
];
