import { Modal, Table } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import BasicBasicSelectBox from 'pages/Admin/components/Form/BasicSelectBox';
import BasicButton from 'pages/Admin/components/Form/BasicButton';
import BasicTextInputBox from 'pages/Admin/components/Form/BasicTextInputBox';

const packingModal = (property) => {
  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  const SelectBoxContainer = styled.div`
    display: flex;
  `;

  const BasicTextInputBoxStyled = styled(BasicTextInputBox)`
    width: 20rem;
  `;

  const okClick = () => {
    property.onOk();
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
      render: (_, record) => <BasicBasicSelectBox lsit={deliveryWayCategory} />,
    },
    {
      title: '택배사',
      dataIndex: 'id',
      render: (_, record) => <BasicBasicSelectBox lsit={deliveryWayCategory} />,
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
        onOk={okClick}
        onCancel={property.onCancel}
        width={1200}
        okText="일괄 발송처리"
        cancelText="취소"
      >
        <SelectBoxContainer>
          <BasicBasicSelectBox list={Category} />
          <BasicBasicSelectBox list={deliveryCategory} />
          <BasicTextInputBoxStyled disabled />
          <BasicButton label="선택건적용" />
        </SelectBoxContainer>
        <Table columns={columns} />
      </Modal>
    </>
  );
};
export default packingModal;

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
