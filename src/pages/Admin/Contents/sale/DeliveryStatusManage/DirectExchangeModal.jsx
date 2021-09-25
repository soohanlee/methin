import { useRef, useState, useEffect } from 'react';
import { Modal } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import BasicSelectBox from 'pages/Admin/components/Form/BasicSelectBox';
import BasicTextInputBox from 'pages/Admin/components/Form/BasicTextInputBox';
import BasicTextAreaBox from 'pages/Admin/components/Form/BasicTextArea';
import BasicTable from 'pages/Admin/components/Table/Table';

const BasicTextInputBoxStyled = styled(BasicTextInputBox)`
  margin-left: ${(props) => props.left};

  width: 90rem;
`;

const BasicTextAreaBoxStyled = styled(BasicTextAreaBox)`
  margin-left: 5rem;
  width: 90rem;
`;
const BasicSelectBoxStyled = styled(BasicSelectBox)`
  margin-left: ${(props) => props.left};
  width: 90rem;
`;

const SelectBoxLabelContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: ${(props) => props.left};
  margin-top: 1rem;
`;

const DirectExchangeModal = (property) => {
  const limit = 3;

  const [tradeReasonTypeState, setTradeReasonTypeState] = useState(); //교환 요청사유
  const [tradeReasonInputState, setTradeReasonInputState] = useState(); //교환 요청상세사유
  const tradeReasonInputRef = useRef();
  const [tradecollectionTypeState, setTradecollectionTypeState] = useState(); //교환 수거방법
  const [tradePostTypeState, setTradePostTypeState] = useState(); //교환 택배사
  const [tradePostcodeInputState, setTradePostcodeInputState] = useState(); //교환송장번호
  const tradePostcodeInputRef = useRef();

  const [selectedTableKeysState, setSelectedTableKeysState] = useState([]);
  const [selectedTableRowsState, setSelectedTableRowsState] = useState([]);

  useEffect(() => {
    resetData();
  }, [property.visible === true]);

  const handleTradeReasonType = (value) => {
    setTradeReasonTypeState(value);
  };

  const handleTradecollectionType = (value) => {
    setTradecollectionTypeState(value);
  };

  const handleTradePostType = (value) => {
    setTradePostTypeState(value);
  };

  const handleTradeReasonInput = (value) => {
    console.log(value.target.value);
    setTradeReasonInputState(value.target.value);
  };

  const handleTradePostcodeInput = (value) => {
    setTradePostcodeInputState(value.target.value);
  };

  const handleOkClick = () => {
    console.log(tradeReasonTypeState);
    console.log(tradeReasonInputRef.current.resizableTextArea.props.value);
    console.log(tradecollectionTypeState);
    console.log(tradePostTypeState);
    console.log(tradePostcodeInputRef.current.state.value);
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
    setTradeReasonTypeState('선택');
    setTradecollectionTypeState('선택');
    setTradePostTypeState('선택');
    setTradeReasonInputState('');
    setTradePostcodeInputState('');

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
        okText="교환접수"
        cancelText="취소"
      >
        <BasicTable
          scroll={{ x: 'max-content', y: '20vw' }}
          data={property.selectedTableRowsState}
          columns={columns}
          selectionType="checkbox"
          onChange={handleChange}
          pageSize={limit}
          selectedRowKeys={selectedTableKeysState}
        />
        <SelectBoxLabelContainer>
          <div>교환 요청사유</div>
          <BasicSelectBoxStyled
            value={tradeReasonTypeState}
            onChange={(value) => {
              handleTradeReasonType(value);
            }}
            left="8rem"
            list={ReasonSelect}
          />
        </SelectBoxLabelContainer>

        <SelectBoxLabelContainer>
          <div>교환 요청상세사유</div>
          <BasicTextAreaBoxStyled
            value={tradeReasonInputState}
            onChange={handleTradeReasonInput}
            ref={tradeReasonInputRef}
          />
        </SelectBoxLabelContainer>

        <SelectBoxLabelContainer>
          <div>교환 수거방법</div>
          <BasicSelectBoxStyled
            value={tradecollectionTypeState}
            onChange={(value) => {
              handleTradecollectionType(value);
            }}
            left="8rem"
            list={companySelect}
          />
        </SelectBoxLabelContainer>

        <SelectBoxLabelContainer>
          <div>교환 택배사</div>
          <BasicSelectBoxStyled
            value={tradePostTypeState}
            onChange={handleTradePostType}
            left="9.4rem"
            list={pickupWaySelect}
          />
        </SelectBoxLabelContainer>
        <SelectBoxLabelContainer>
          <div>교환 송장번호</div>
          <BasicTextInputBoxStyled
            value={tradePostcodeInputState}
            onChange={handleTradePostcodeInput}
            ref={tradePostcodeInputRef}
            left="7rem"
          />
        </SelectBoxLabelContainer>
      </Modal>
    </>
  );
};
export default DirectExchangeModal;

const ReasonSelect = [
  { value: '0', label: '선택' },
  { value: '1', label: '뭐들어가지' },
  { value: '2', label: '뭐들어가지2' },
  { value: '3', label: '뭐들어가지3' },
];

const companySelect = [
  { value: '0', label: '수거요청안함' },
  { value: '1', label: '뭐들어가지' },
  { value: '2', label: '뭐들어가지2' },
  { value: '3', label: '뭐들어가지3' },
];

const pickupWaySelect = [
  { value: '0', label: '택배사명 선택' },
  { value: '1', label: '뭐들어가지' },
  { value: '2', label: '뭐들어가지2' },
  { value: '3', label: '뭐들어가지3' },
];
