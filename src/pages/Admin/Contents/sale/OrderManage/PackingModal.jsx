import { useRef, useState } from 'react';
import { Modal, Table } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import BasicSelectBox from 'pages/Admin/components/Form/BasicSelectBox';
import BasicButton from 'pages/Admin/components/Form/BasicButton';
import BasicTextInputBox from 'pages/Admin/components/Form/BasicTextInputBox';
const SelectBoxContainer = styled.div`
  display: flex;
`;

const BasicTextInputBoxStyled = styled(BasicTextInputBox)`
  width: 20rem;
`;
const PackingModal = (property) => {
  const [packingType, setPackingType] = useState();
  const [deliveryType, setDeliveryType] = useState();
  const inputRef = useRef();

  const handlePackingType = (value) => {
    setPackingType(value);
  };

  const handleDeliveryType = (value) => {
    setDeliveryType(value);
  };

  const handleOkClick = () => {
    property.onOk();
  };

  const handleApplyClick = () => {
    console.log(packingType);
    console.log(deliveryType);
    console.log(inputRef.current.state.value);
  };

  const columns = [
    {
      title: '상품번호',
      dataIndex: 'ProductNum',
    },
    {
      title: '상품주문번호',
      dataIndex: 'delete',
    },
    {
      title: '배송방법',
      dataIndex: 'id',
      render: (_, record) => <BasicSelectBox lsit={deliveryWayCategory} />,
    },
    {
      title: '택배사',
      dataIndex: 'id',
      render: (_, record) => <BasicSelectBox lsit={deliveryWayCategory} />,
    },
    {
      title: '송장번호',
      dataIndex: 'id',
      render: (_, record) => <BasicTextInputBox />,
    },
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
        okText="일괄 발송처리"
        cancelText="취소"
      >
        <SelectBoxContainer>
          <BasicSelectBox
            list={Category}
            onChange={(value) => {
              handlePackingType(value);
            }}
          />
          <BasicSelectBox
            list={deliveryCategory}
            onChange={(value) => {
              handleDeliveryType(value);
            }}
          />
          <BasicTextInputBoxStyled disabled ref={inputRef} />
          <BasicButton onClick={handleApplyClick} label="선택건적용" />
        </SelectBoxContainer>
        <Table columns={columns} />
      </Modal>
    </>
  );
};
export default PackingModal;

const Category = [
  { value: '0', label: '선택' },
  { value: '1', label: '뭐들어가지' },
  { value: '2', label: '뭐들어가지2' },
  { value: '3', label: '뭐들어가지3' },
];

const deliveryCategory = [
  { value: '0', label: '택배명' },
  { value: '1', label: '뭐들어가지' },
  { value: '2', label: '뭐들어가지2' },
  { value: '3', label: '뭐들어가지3' },
];

const deliveryWayCategory = [
  { value: '0', label: '택배방법' },
  { value: '1', label: '뭐들어가지' },
  { value: '2', label: '뭐들어가지2' },
  { value: '3', label: '뭐들어가지3' },
];
