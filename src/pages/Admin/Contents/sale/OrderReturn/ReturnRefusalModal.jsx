import { Modal, Table } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import TextAreaBox from 'pages/Admin/components/Form/BasicTextArea';

const LabelBoxContainer = styled.div`
  margin-top: 2rem;

  display: flex;
`;

const TextAreaBoxContainer = styled(TextAreaBox)`
  width: 80rem;
  margin-left: 2rem;
`;

const ReturnRefusalModal = (property) => {
  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  const okClick = () => {
    property.onOk();
  };

  const columns = [
    {
      title: '상품 주문번호',
      dataIndex: 'ProductOrderNumber',
    },
    {
      title: '상품명',
      dataIndex: 'name',
    },
    {
      title: '판매가',
      dataIndex: 'price',
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
        width={1000}
        okText="반품 거부처리"
        cancelText="닫기"
      >
        <Table columns={columns} />
        <LabelBoxContainer>
          <div>반품거부 상세사유</div>
          <TextAreaBoxContainer />
        </LabelBoxContainer>
      </Modal>
    </>
  );
};
export default ReturnRefusalModal;
