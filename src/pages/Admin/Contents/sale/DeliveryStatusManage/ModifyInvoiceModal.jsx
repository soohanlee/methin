import { Modal, Table } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import BasicSelectBox from 'pages/Admin/components/Form/BasicSelectBox';
import BasicTextInputBox from 'pages/Admin/components/Form/BasicTextInputBox';

const SelectBoxLabelContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: ${(props) => props.left};
  margin-bottom: 1rem;
`;

const ModifyInvoiceModal = (property) => {
  const okClick = () => {
    property.onOk();
  };

  const columns = [
    {
      title: '주문번호',
      dataIndex: 'Number',
    },
    {
      title: '상품주문번호',
      dataIndex: 'orderNumber',
    },
    {
      title: '상품명',
      dataIndex: 'name',
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
        okText="송장수정"
        cancelText="닫기"
      >
        <SelectBoxLabelContainer>
          <BasicSelectBox list={waySelect} />
          <BasicSelectBox list={companySelect} />
          <BasicTextInputBox />
        </SelectBoxLabelContainer>
        <Table columns={columns} />
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
